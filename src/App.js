import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ResponsiveNav from './components/ResponsiveNav';
import Home from './pages/Home';
import About from "./pages/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [showResponsiveNav, setShowResponsiveNav] = useState(false);

  return (
      <Router>
        <div className="AppContainer">
          <Navbar setShowResponsiveNav={setShowResponsiveNav} showResponsiveNav={showResponsiveNav} />
          <ResponsiveNav setShowResponsiveNav={setShowResponsiveNav} showResponsiveNav={showResponsiveNav} />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
