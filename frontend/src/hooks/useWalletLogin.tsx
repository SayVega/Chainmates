import { useNavigate } from "react-router-dom";

export const useWalletLogin = () => {
  const navigate = useNavigate();

  const login = async () => {
    if (!window.ethereum) {
      alert("No se detectó ninguna wallet.");
      return;
    }

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];

      const message = "Log in to Chainmates";
      const signature = await window.ethereum.request({
        method: 'personal_sign',
        params: [message, account],
      });

      const response = await fetch('http://localhost:8000/wallet-login', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ wallet_address:account, signature:signature ,message:message }),
      });

      if (!response.ok) throw new Error('Error en autenticación');

      const data = await response.json();
      localStorage.setItem('token', data.token);

      navigate('/');

    } catch (error) {
      console.error('Error en login con wallet:', error);
      alert('Error al conectar / firmar / autenticar.');
    }
  };

  return { login };
};
