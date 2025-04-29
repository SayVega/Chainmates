import { useNavigate } from 'react-router-dom';
import { Button } from './ui/Button';

const LoginMethodSelector = () => {
  const navigate = useNavigate();

  const handleWalletLogin = () => {
    navigate('/wallet-login');
  };

  return (
        <div className="flex flex-col gap-2 bg-white rounded-2xl shadow-lg p-8 w-full max-w-md text-center ">
            <h1 className="text-2xl font-semibold text-gray-800 ">Selecciona un método de ingreso</h1>

            <Button onClick={handleWalletLogin} className="w-full flex items-center justify-center bg-gray-200 text-gray-500 cursor-pointer">
            <svg className="w-5 h-5" viewBox="0 0 256 417" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path fill="#343434" d="M127.6 0L124 13.3v271.4l3.6 3.7 127.6-75.4z"/><path fill="#8C8C8C" d="M127.6 0L0 213l127.6 75.4V0z"/><path fill="#3C3C3B" d="M127.6 347.2L125.7 349v66.4l1.9 5.5 127.7-180z"/><path fill="#8C8C8C" d="M127.6 421.1V347L0 267z"/><path fill="#141414" d="M127.6 288.6l127.6-75.5-127.6-59.2z"/><path fill="#393939" d="M0 213l127.6 75.5V154z"/></svg>
                Ingresar con Wallet
            </Button>
            <Button className="w-full flex items-center justify-center bg-gray-200 text-gray-500 cursor-not-allowed" disabled>
            <svg className="w-5 h-5"viewBox="0 0 533.5 544.3"xmlns="http://www.w3.org/2000/svg"><path d="M533.5 278.4c0-17.4-1.6-34.1-4.6-50.2H272v95h146.7c-6.3 33.9-25 62.7-53.3 82l85.7 66.8c50.1-46.2 79.4-114.3 79.4-193.6z"fill="#4285f4"/><path d="M272 544.3c71.8 0 132-23.7 176-64.5l-85.7-66.8c-23.7 16-54.1 25.3-90.3 25.3-69 0-127.4-46.6-148.3-109.3H35.8v68.5c43.7 86.2 133.4 146.8 236.2 146.8z"fill="#34a853"/><path d="M123.7 329c-10.6-31.6-10.6-65.9 0-97.5V163H35.8c-34.8 69.3-34.8 151.8 0 221.1l87.9-55.1z"fill="#fbbc04"/><path d="M272 107.7c37.8-.6 73.7 13.1 101.5 38.7l76.1-76.1C408.2 24.4 341.4-.3 272 0 169.2 0 79.5 60.5 35.8 146.7l87.9 67.5c20.8-62.7 79.2-109.3 148.3-109.3z"fill="#ea4335"/></svg>
                Ingresar con Google (WIP)
            </Button>
            <Button className="w-full flex items-center justify-center bg-gray-200 text-gray-500 cursor-not-allowed" disabled>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12l-4 4m0 0l-4-4m4 4V8m4-4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8l-8-4z" /></svg>
                Ingresar con Email (WIP)
            </Button>
      </div>

  );
};

export default LoginMethodSelector;
