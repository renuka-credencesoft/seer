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
import Footer from './components/Footer';
import Solution from './pages/Solution';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

function App() {
  const [showResponsiveNav, setShowResponsiveNav] = useState(false);

  return (
      // <Router>
        <div className="AppContainer">
          <Home />
          <Navbar setShowResponsiveNav={setShowResponsiveNav} showResponsiveNav={showResponsiveNav} />
          <ResponsiveNav setShowResponsiveNav={setShowResponsiveNav} showResponsiveNav={showResponsiveNav} />
          {/* <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/solutions' element={<Solution />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/blog' element={<Blog />} />
          </Routes> */}
          <Footer />
        </div>
      // </Router>
  );
}

export default App;
