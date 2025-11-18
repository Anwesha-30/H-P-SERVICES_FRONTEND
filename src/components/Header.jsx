import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import logo from "../assets/logo.jpg"; // <-- Import logo before text

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP NAVBAR */}
      <header className="hp-navbar">
        <div className="hp-left">
          <div className="hp-ham" onClick={() => setOpen(true)}>
            <div></div><div></div><div></div>
          </div>

          <img src={logo} alt="logo" className="hp-logo" />

          <span className="hp-title">H&P PROJECTS</span>
        </div>

        <div className="hp-right">
          <Link to="/careers">CAREERS</Link>
          <Link to="/contact">CONTACT US</Link>
        </div>
      </header>

      {/* SIDE MENU EXACT LIKE FIGMA */}
      <div className={`side-panel ${open ? "open" : ""}`}>
        <div className="side-close" onClick={() => setOpen(false)}>←</div>

        <ul className="side-links">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/presence">OUR PRESENCE</Link></li>
          <li><Link to="/business">OUR BUSINESS</Link></li>
          <li><Link to="/technology-innovation">TECHNOLOGY AND INNOVATION</Link></li>
          <li><Link to="/full-service-supply">FULL SERVICE CAPABILITY</Link></li>
          <li><Link to="/awards">AWARDS AND CERTIFICATES</Link></li>
          <li><Link to="/about">ABOUT US</Link></li>
        </ul>
      </div>

      {/* BLUR OVERLAY */}
      {open && <div className="side-overlay" onClick={() => setOpen(false)} />}
    </>
  );
}



