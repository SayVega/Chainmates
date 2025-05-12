import { useEffect, useState } from 'react';
import { Project } from '../types/Project';


export const fetchProjects = () => {
  const [projectsList, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('http://localhost:8000/projects', {
          method: 'GET',
          mode: 'cors',
        });
        const data = await res.json();    
        setProjects(data.data);
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    };

    fetchProjects();
  }, []);
  return projectsList;
};
