// Footer.js

import React from 'react';
import './Footer.css';  // Add styles for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Food Synergism. All Rights Reserved.</p>
        <nav>
            <a href="/">Home</a>
            <a href="/disease-specific">Disease</a>
            <a href="/nutrient-specific">Nutrients</a>
            <a href="/contact">Contact</a>
          </nav><br></br>
        <p>Contact us: <a href="mailto:info@foodsynergism.com" >info@foodsynergism.com</a></p>
        
      </div>
    </footer>
  );
};

export default Footer;
