import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo2 from '../Assets/Images/logo/logo2.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="main-header">
      <div className="container header-container">

        {/* Logo */}
        <div className="logo">
          <Link to="/"><div className="mainlogo"><img src={logo2} /></div></Link>
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu */}
        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/aboutus" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/awards" onClick={() => setMenuOpen(false)}>Awards</Link>
          <Link to="/registration" onClick={() => setMenuOpen(false)}>Registration</Link>
          <Link to="/programme" onClick={() => setMenuOpen(false)}>Programme</Link>
          <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
          <Link to="/contactus" onClick={() => setMenuOpen(false)}>Contact</Link>

          <button className="register-btn">Online Registration</button>
        </nav>

      </div>
    </header>
  );
}