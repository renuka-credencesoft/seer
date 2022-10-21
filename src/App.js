import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ResponsiveNav from './components/ResponsiveNav';
import Home from './pages/Home';

function App() {
  const [showResponsiveNav, setShowResponsiveNav] = useState(false);
  return (
    <div className="AppContainer">
      <Navbar setShowResponsiveNav={setShowResponsiveNav} showResponsiveNav={showResponsiveNav} />
      <ResponsiveNav setShowResponsiveNav={setShowResponsiveNav} showResponsiveNav={showResponsiveNav} />
      <Home />
    </div>
  );
}

export default App;
