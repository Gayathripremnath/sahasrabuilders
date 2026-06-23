import React from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info Column */}
          <div className="footer-column brand-column">
            <h2 className="footer-logo">Sahasra</h2>
            <p className="footer-tagline">
              We use our knowledge and foresight to shape the way people live, work, and connect.
            </p>
            <div className="footer-socials">
              <a href="#linkedin" className="social-link" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#twitter" className="social-link" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#instagram" className="social-link" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#explore">Explore</a></li>
              <li><a href="#foresight">Foresight</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Latest Projects</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul className="footer-contact">
              <li>
                <MapPin size={16} className="contact-icon" />
                <span>124 Riverside Rd, Prague</span>
              </li>
              <li>
                <Phone size={16} className="contact-icon" />
                <span>+420 234 567 890</span>
              </li>
              <li>
                <Mail size={16} className="contact-icon" />
                <span>contact@sahasrabuilders.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="footer-column newsletter-column">
            <h3>Newsletter</h3>
            <p className="newsletter-desc">
              Subscribe to receive our latest project updates and sustainable building insights.
            </p>
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address" 
                required 
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Genova Technologies. All rights reserved.
          </p>
          <div className="footer-policies">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
