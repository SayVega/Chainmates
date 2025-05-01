
export function logoutUser() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("walletAddress");
    window.location.reload();
  }
  