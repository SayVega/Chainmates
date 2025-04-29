import { Button } from './ui/Button';
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white shadow-md fixed top-0 left-0 w-full">
      <h1 className="text-2xl font-bold">Chainmates.XYZ</h1>
        <Button onClick={() => navigate("/login")} className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition">
          Ingresar
        </Button>

    </nav>
  );
};
