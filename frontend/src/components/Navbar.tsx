import { Button } from './ui/Button';
import { useNavigate } from "react-router-dom";
import { logoutUser } from '../utils/logoutUser';

export const Navbar = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white shadow-md fixed top-0 left-0 w-full">
      <h1 className="text-2xl font-bold cursor-pointer" onClick={()=>navigate("/")}>Chainmates.XYZ</h1>
    
      {user ? (
        <div className="flex gap-4">
          <Button onClick={() => navigate("/create-project")} className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition cursor-pointer">
            Crear proyecto
          </Button>
          <Button onClick={()=> navigate("/complete-profile")}className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition cursor-pointer">
            Mi cuenta
          </Button>
          <Button onClick={logoutUser} className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition cursor-pointer">
            Cerrar sesión
          </Button>
        </div>
      ) : (
        <Button onClick={() => navigate("/login")} className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition cursor-pointer">
          Ingresar
        </Button>
      )}
        
    </nav>
  );
};

export default Navbar;