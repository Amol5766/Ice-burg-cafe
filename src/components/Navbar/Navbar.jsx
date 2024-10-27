import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaTimesCircle, FaShareSquare } from 'react-icons/fa';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import '../../components/Navbar/Navbar.css'; // Import CSS file
import freshLogo from '../../assets/Untitled design 1.png';

function Navbar() {
  const logoRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown menu
  const [isAdVisible, setIsAdVisible] = useState(true); // State for ad strip visibility
  const [theme, setTheme] = useState('light'); // State for theme mode
  const canvasRef = useRef(null); // Reference for the canvas
  const [explosions, setExplosions] = useState([]); // State for active explosions

  // Load the current theme from local storage or default to light
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.className = savedTheme; // Apply theme to the html for full coverage
  }, []);

  // Apply theme to the document body when theme changes
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const handleLogoClick = () => {
    if (canvasRef.current) {
      // Create a new explosion instance
      const newExplosion = createParticleExplosion(canvasRef.current);
      setExplosions((prev) => [...prev, newExplosion]); // Add to active explosions
    }
  };

  const createParticleExplosion = (canvas) => {
    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = 100; // Number of particles
    const explosionRadius = 100; // Explosion radius

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: Math.random() * 700 + 200, // Particle radius
        color: `hsl(${Math.random() * 360}, 100%, 50%)`, // Random color
        angle: Math.random() * 2 * Math.PI, // Random angle
        speed: Math.random() * 2 + 1 // Random speed
      });
    }

    // Animate particles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
      particles.forEach((particle) => {
        particle.x += Math.cos(particle.angle) * particle.speed; // Update x position
        particle.y += Math.sin(particle.angle) * particle.speed; // Update y position
        particle.radius *= 0.95; // Gradually reduce particle size

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      // Remove particles that are too small
      if (particles.some((particle) => particle.radius > 0)) {
        requestAnimationFrame(animate);
      }
    };

    animate();

    return particles; // Return the particles to track them
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  const closeAdStrip = () => {
    setIsAdVisible(false); // Hide the ad strip
  };

  // Toggle light/dark theme and save to local storage
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.className = newTheme; // Update HTML class
    localStorage.setItem('theme', newTheme); // Save the new theme in local storage
  };

  // Handle share functionality
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Fresh & More',
          text: 'Check out Fresh & More!',
          url: window.location.href,
        });
        console.log('Shared successfully');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback: Copy the URL to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } catch (error) {
        console.error('Could not copy text:', error);
      }
    }
  };

  return (
    <>
      {/* Ad Strip (only visible if isAdVisible is true) */}
      {isAdVisible && (
        <div className="ad-strip">
          <div className="ad-container">
          <div className="ad-item">Free delivery till CIMS</div>
            <div className="ad-item">Visit M&QR.com</div>
            <div className="ad-item">Static websites for stores</div>
            <div className="ad-item">B.E Final Year Projects Available</div>
          </div>
          {/* Close Button for the ad strip */}
          <div className="close-ad" onClick={closeAdStrip}>
            <FaTimesCircle />
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className={`navbar ${theme}`}>
        <div className="logo" onClick={handleLogoClick} ref={logoRef}>
          {/* Add the image next to Fresh & More */}
          <img src={freshLogo} alt="Fresh & More Logo" className="logo-icon" />
          Ice Burg Cafe
        </div>

        {/* Canvas for particle explosion */}
        <canvas
          ref={canvasRef}
          width={window.innerWidth}
          height={window.innerHeight}
          style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
        />

        {/* Menu Icon for mobile */}
        <div className="menu-icon" onClick={toggleDropdown}>
          {isDropdownOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-links ${isDropdownOpen ? 'show-dropdown' : ''}`}>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              onClick={toggleDropdown}
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              onClick={toggleDropdown}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Theme toggle and Share buttons */}
        <div className="navbar-icons">
          <div className={`theme-toggle ${theme}`} onClick={toggleTheme}>
            {theme === 'light' ? <MdDarkMode /> : <MdLightMode />}
          </div>
          <div className={`share-icon ${theme}`} onClick={handleShare}>
            <FaShareSquare /> {/* Changed icon */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
