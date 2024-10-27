import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Switched to HashRouter
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import TermsOfService from './pages/TermsOfService/TermsOfService';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate a loading time of 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router> {/* Using HashRouter instead of BrowserRouter */}
      {loading ? (
        <Loader />  
      ) : (
        <div className="app-content">
          <Navbar /> 
          <main>
            <Routes>
              <Route path="/" element={<Menu />} />
              <Route path="/home" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
            </Routes>
          </main>
          <Footer /> 
        </div>
      )}
    </Router>
  );
}

export default App;
