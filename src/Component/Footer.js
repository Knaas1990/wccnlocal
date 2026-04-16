import React from "react";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container footer-container">

        {/* Column 1 */}
        <div className="footer-col">
          <h3>Venue & Contacts</h3>
          <div className="contact-cn">
            <div className="contact-in"><i className="fa fa-home"></i></div>
            <div className="contact-in"> <p>367000, SRC «Juravli», 9 Entuziastov Street, Karaman 2,Makhachkala, Dagestan, Russia</p></div>
          </div>

          <div className="contact-cn">
            <div className="contact-in"><i className="fa fa-user"></i></div>
            <div className="contact-in"> <p>Dr. Aminat Magomedova, PhD, FICN, President Elect, International College of Nutrition</p></div>
          </div>

          <div className="contact-cn">
            <div className="contact-in"><i className="fa fa-envelope"></i></div>
            <div className="contact-in"> <p>amgerma@gmail.com</p></div>
          </div>
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