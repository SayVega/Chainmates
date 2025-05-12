
export async function getProjectById(id: string, token: string) {
    const response = await fetch(`http://localhost:8000/projects/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  
    if (!response.ok) {
      const result = await response.json();
      throw new Error(result.message || "Error al obtener el proyecto");
    }
  
    const data = await response.json();
    return data;
  }
  