import { ProjectForm } from "../components/ProjectForm";
import { createProject } from "../services/createProject";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function CreateProjectPage() {
  const navigate = useNavigate();

  const handleCreate = async (data: { title: string; description: string ,documentation: string, media: string[]}) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No autenticado");

      const response = await createProject(data, token)
      toast.success('Proyecto creado correctamente.', {
        duration: 3000,
        icon: null,
        style: {border: '2px solid green',}});
      navigate(`/projects/${response.id}`);
    } catch (err: any) {
      toast.error(
        'Error al crear el proyecto',
        {
          duration: 6000,
          icon:null,
          style: {border: '2px solid red', textAlign: 'left'}
        }
      );
      alert(err.message);
    }
  };

  return (
    <div className="flex flex-col gap-2 bg-white rounded-2xl shadow-lg p-8 w-full max-w text-center mt-15">
      <h1 className="text-xl font-semibold text-gray-800">Crear nuevo proyecto</h1>
      <ProjectForm onSubmit={handleCreate} />
    </div>
  );
}
