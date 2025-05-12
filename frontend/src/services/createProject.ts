export async function createProject(data: { title: string; description: string, documentation:string, media: string[]}, token: string) {

  const response = await fetch('http://localhost:8000/newproject', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
   if (!response.ok) {
    const errorResult = await response.json();
    throw new Error(errorResult.message || 'Error al crear el proyecto');
  }
 const result = await response.json();

 console.log(result);
 return result;
}