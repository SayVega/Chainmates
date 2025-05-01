export async function UpdateUser(token: string, data: { name: string; email: string; password: string }) {
    const response = await fetch(`http://localhost:8000/user`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Error al actualizar el usuario");
    }
    const result = await response.json();
    localStorage.setItem("token", result.token);
    
    return await response.json();
  }
  