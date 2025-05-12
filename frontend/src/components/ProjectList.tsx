import { Project } from "../types/Project";
import { ProjectCard } from "./ui/ProjectCard";


export const ProjectList = ({ projects}: { projects: Project[] }) => (
  <div className="grid grid-cols-3 mt-16 justify-between gap-20">
    {projects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>
);
