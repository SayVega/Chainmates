export interface ProjectMember {
    id: number;
    name: string;
    role: 'admin' | 'moderator' | 'member';
  }
  
export async function fetchProjectMembers(projectId: number): Promise<ProjectMember[]> {
    const res = await fetch(`http://localhost:8000/projects/${projectId}/members`);
    if (!res.ok) {
      throw new Error('Error al obtener los miembros');
    }
    return await res.json();
  }
  