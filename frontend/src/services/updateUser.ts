export async function updateUser(token: string, data: { name: string; email: string; password: string }) {
    const response = await fetch(`http://localhost:8000/user`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
  
    
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Error al actualizar el usuario");
    }
    localStorage.setItem("token", result.token);
    localStorage.setItem('user', JSON.stringify(result.user.name));
    
    return result;
  }
  