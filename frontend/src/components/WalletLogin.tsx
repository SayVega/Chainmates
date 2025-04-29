import { useEffect } from "react";
import { useWalletLogin } from '../hooks/useWalletLogin';

export const WalletLogin = () => {
  const { login } = useWalletLogin();

  useEffect(() => {
    login();
  }, [login]);

  return (
    <div className="flex justify-center items-center h-screen">
      <p>Conectando tu wallet...</p>
    </div>
  );
};

export default WalletLogin;
