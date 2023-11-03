import React from 'react';

import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Your e-commerce site's mission and description go here.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: ezeoguinechimelu@gmail.com</p>
          <p>Phone: +234 8184203201</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Stay connected with us on social media.</p>
           {/* Add social media icons or links here */}
        
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your E-Commerce Store</p>
      </div>
    </footer>
  );
}

export default Footer;
