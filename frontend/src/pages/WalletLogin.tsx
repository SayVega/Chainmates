import { useEffect } from "react";
import { authWalletLogin } from '../services/AuthWalletLogin';
import { useNavigate } from "react-router-dom";

export const WalletLogin = () => {
  const { login } = authWalletLogin();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const userName = await login();
      if (userName.startsWith("WalletUser_")) {
        navigate("/complete-profile");
      } else {
        navigate("/");
      }})();
  }, [login]);


  return (
    <div className="flex justify-center items-center h-screen">
      <p>Conectando tu wallet...</p>
    </div>
  );
};

export default WalletLogin;
