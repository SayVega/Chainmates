import { Project } from "../../types/Project";

export const ProjectCard = ({ project, detailed = false }: { project: Project; detailed?: boolean; }) => (
<div key={project.id} className={`p-6 mb-4 rounded-xl shadow ${detailed ? 'bg-white text-black w-[70vw] mx-auto mt-16' : 'bg-transparent text-white border-white border'}`}>
        <h2 className="text-xl font-bold">{project.title}</h2>
        <p className="text-gray-700">{project.description}</p>
        <p className="text-sm text-gray-500 mt-2">
          Creado por: {project.creator.name}
        </p>
      </div>
);