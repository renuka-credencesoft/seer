import { useState } from 'react';
import './App.css';
import MeetTheTeam from './components/MeetTheTeam';
import Navbar from './components/Navbar';
import ResponsiveNav from './components/ResponsiveNav';
import Home from './pages/Home';
import About from "./pages/About"

function App() {
  const [showResponsiveNav, setShowResponsiveNav] = useState(false);
  return (
    <div className="AppContainer">
      <Navbar setShowResponsiveNav={setShowResponsiveNav} showResponsiveNav={showResponsiveNav} />
      <ResponsiveNav setShowResponsiveNav={setShowResponsiveNav} showResponsiveNav={showResponsiveNav} />
      {/* <Home /> */}
      <About />
    </div>
  );
}

export default App;
