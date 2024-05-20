import React from 'react';
import './App.css'; // Make sure to import the updated CSS file

function FooterComponent() {
  return (
    <footer className="custom-footer">
      <div className="footer-content">
        <span>© 2024 Martin Fesenko Inc. All rights reserved.</span>
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/contact-us">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
