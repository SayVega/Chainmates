import { useFetchProjects } from '../hooks/useFetchProjects';
import { ProjectList } from '../components/ProjectList';

const Projects = () => {
  const projects = useFetchProjects();

  return (
      <ProjectList projects={projects} />
  );
};

export default Projects;
