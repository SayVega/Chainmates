import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectById } from "../services/fetchProjectById";
import { ProjectCard } from "../components/ui/ProjectCard";
import { ProjectMedia } from "../components/ui/ProjectMedia";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No autenticado");

        const projectData = await getProjectById(id!, token);
        setProject(projectData);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchProject();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!project) return <p>Cargando...</p>;

  return (
    <>
      <ProjectCard project={project} detailed/>
      <div className="flex flex-row gap-2 mx-auto">
        <ProjectMedia media={project.media} documentation={project.documentation} />
      </div>
    </>
  );
};

export default ProjectDetails;