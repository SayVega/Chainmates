import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UpdateUser } from "../services/UpdateUser";
import { Button } from "../components/ui/Button";

export default function CompleteProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if(!token) {
        alert("No se encontró el token de autenticación.");
        navigate("/");
        return;
      }
      await UpdateUser(token,{ name, email, password });
      navigate("/");
    } catch {
      alert("Error al guardar los datos.");
    }
  };

  const handleSkip = () => navigate("/");

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow space-y-4">
      <h1 className="text-xl font-semibold text-gray-800">Completar Perfil</h1>
      <p className="text-xs text-gray-600">
        Podés completar esta información más adelante desde Configuración.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4 text-gray-700  ">
        <input
          className="w-full border px-3 py-2 rounded"
          type="text"
          placeholder="Nombre"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          />
        <input
          className="w-full border px-3 py-2 rounded"
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}/>
        <input
          className="w-full border px-3 py-2 rounded"
          type="password"
          placeholder="Contraseña"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}/>
        <div className="flex justify-between items-center">
          <Button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Guardar
          </Button>
          <Button
            type="button"
            onClick={handleSkip}
            className="text-gray-600 underline">
            Saltar
          </Button>
        </div>
      </form>
    </div>
  );
}

