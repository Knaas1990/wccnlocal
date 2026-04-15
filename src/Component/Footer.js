import React from "react";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container footer-container">

        {/* Column 1 */}
        <div className="footer-col">
          <h3>Venue & Contacts</h3>
          <p>367000, SRC Juravli, 9 Enthusiast Street</p>
          <p>Karaman 2, Russia</p>
          <p>Email: amgerman@gmail.com</p>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Registration</li>
            <li>Programme</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h3>Newsletter</h3>
          <p>Subscribe for updates</p>
          <input type="email" placeholder="Your email" />
          <button>Subscribe</button>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 All Rights Reserved</p>
      </div>
    </footer>
  );
}