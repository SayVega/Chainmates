
import './App.css'
import Projects from './pages/Projects'
import {Navbar} from './components/Navbar'
import AnimatedBackground from './components/AnimatedBackground';
import LoginMethodSelector from './components/LoginMethodSelector';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WalletLogin from './components/WalletLogin';

const App = () => {

  return(
      <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginMethodSelector />} />
          <Route path="/wallet-login" element={<WalletLogin/>} />
          <Route path="/" element={<Projects />} />
        </Routes>
      </BrowserRouter>

      <AnimatedBackground />
      </>
    );
};
export default App
