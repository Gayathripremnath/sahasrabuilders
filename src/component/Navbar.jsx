import React, { useState } from 'react';
import { Search, Globe, Mail, Menu, X } from 'lucide-react';
import './Navbar.css';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Brand Logo: Imported logo.png */}
        <div className="navbar-left">
          <a href="/" className="navbar-logo" onClick={closeMenu}>
            <img src={logoImg} alt="Sahasra Builders Logo" className="navbar-logo-img" />
          </a>
        </div>

        {/* Center menu trigger (Hamburger) */}
        <div className="navbar-center">
          <button 
            className={`navbar-menu-btn ${menuOpen ? 'active' : ''}`} 
            onClick={toggleMenu} 
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          >
            {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Right utility action links */}
        <div className="navbar-right">
          <button className="navbar-icon-btn" aria-label="Search">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="navbar-icon-btn" aria-label="Language">
            <Globe size={20} strokeWidth={1.5} />
          </button>
          <a href="#footer" className="navbar-icon-btn" aria-label="Contact">
            <Mail size={20} strokeWidth={1.5} />
          </a>
        </div>
      </div>

      {/* Nav Links Dropdown Overlay */}
      <div className={`navbar-overlay-menu ${menuOpen ? 'open' : ''}`}>
        <div className="overlay-menu-container">
          <ul className="overlay-links">
            <li>
              <a href="#root" onClick={closeMenu}>
                <span className="link-num">01</span> Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>
                <span className="link-num">02</span> About
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={closeMenu}>
                <span className="link-num">03</span> Testimonials
              </a>
            </li>
            <li>
              <a href="#services" onClick={closeMenu}>
                <span className="link-num">04</span> Services
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu}>
                <span className="link-num">05</span> Projects
              </a>
            </li>
            <li>
              <a href="#footer" onClick={closeMenu}>
                <span className="link-num">06</span> Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
