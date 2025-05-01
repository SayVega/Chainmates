import { useEffect, useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  creator: {
    name: string | null;
    wallet_address: string;
  };
}

export const useFetchProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

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

  return projects;
};
