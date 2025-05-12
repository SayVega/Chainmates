import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../services/updateUser";
import { toast } from 'react-hot-toast';
import { CompleteProfileForm } from "../components/UserProfileForm";

export default function CompleteProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("No se encontró el token de autenticación.");
        navigate("/");
        return;
      }
      await updateUser(token, { name, email, password });
      toast.success('Datos modificados correctamente.', {
        duration: 3000,
        icon: null,
        style: {border: '2px solid green',}});
      navigate("/");
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      toast.error(
        'Los datos no fueron modificados. Posibles razones:\n' +'• Token inválido o vencido\n' +'• Formato de email incorrecto\n' +'• Email ya registrado\n' +'• El servidor no está disponible',
        {
          duration: 6000,
          icon:null,
          style: {border: '2px solid red', textAlign: 'left'}
        }
      );
    }
  };

  const handleChange = (
    field: "name" | "email" | "password",
    value: string
  ) => {
    if (field === "name") setName(value);
    else if (field === "email") setEmail(value);
    else if (field === "password") setPassword(value);
  };

  const handleSkip = () => navigate("/");

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow space-y-4">
      <h1 className="text-xl font-semibold text-gray-800">Completar Perfil</h1>
      <p className="text-xs text-gray-600">
        Podés completar esta información más adelante desde Configuración.
      </p>
      <CompleteProfileForm
        name={name}
        email={email}
        password={password}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onSkip={handleSkip}
      />
    </div>
  );
}