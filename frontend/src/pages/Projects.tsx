import { useFetchProjects } from '../services/FetchProjects';
import { ProjectList } from '../components/ProjectList';

const Projects = () => {
  const projects = useFetchProjects();

  return (
      <ProjectList projects={projects} />
  );
};

export default Projects;
