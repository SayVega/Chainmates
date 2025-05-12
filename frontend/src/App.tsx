import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useWalletChanged } from './hooks/useWalletChanged';
import { Toaster } from 'react-hot-toast';
import Projects from './pages/Projects'
import Navbar from './components/Navbar'
import AnimatedBackground from './components/AnimatedBackground';
import LoginMethodSelector from './pages/LoginMethodSelector';
import WalletLogin from './pages/WalletLogin';
import CompleteProfile from './pages/CompleteProfile';
import CreateProject from './pages/CreateProject';
import ProjectDetails from './pages/ProjectById';
const App = () => {

  useWalletChanged();

  return(
      <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/login" element={<LoginMethodSelector />} />
          <Route path="/wallet-login" element={<WalletLogin/>} />
          <Route path="/complete-profile" element={<CompleteProfile/>} />
          <Route path="/create-project" element={<CreateProject/>} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-right"/>
      <AnimatedBackground />
      </>
    );
};
export default App
