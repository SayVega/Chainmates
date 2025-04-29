interface Project {
  id: number;
  title: string;
  description: string;
  creator: {
    name: string | null;
    wallet_address: string;
  };
}

export const ProjectList = ({ projects}: { projects: Project[] }) => (
  <div>
    {projects.map((project) => (
      <div key={project.id} className="border p-4 mb-4 rounded-xl shadow">
        <h2 className="text-xl font-bold">{project.title}</h2>
        <p className="text-gray-700">{project.description}</p>
        <p className="text-sm text-gray-500 mt-2">
          Creado por: {project.creator?.name ?? project.creator?.wallet_address ?? 'Desconocido'}
        </p>
      </div>
    ))}
  </div>
);
