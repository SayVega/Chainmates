import './App.css'
import Projects from './pages/Projects'
import {Navbar} from './components/Navbar'
import AnimatedBackground from './components/AnimatedBackground';
import LoginMethodSelector from './pages/LoginMethodSelector';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WalletLogin from './pages/WalletLogin';
import CompleteProfile from './pages/CompleteProfile';
import { useWalletChanged } from './hooks/useWalletChanged';
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
        </Routes>
      </BrowserRouter>

      <AnimatedBackground />
      </>
    );
};
export default App
