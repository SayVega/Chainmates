import { fetchProjects } from '../services/fetchProjects';
import { ProjectList } from '../components/ProjectList';

const Projects = () => {
  const projectsList = fetchProjects();

  return (
      <ProjectList projects={projectsList} />
  );
};

export default Projects;
