import React, { useState } from "react";
import "../styles/App.scss";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="logo">
        <a href="#sectionS">
          <img src="images/logo-branco.png" alt="Logo" />
        </a>
      </div>

      <div className={`nav-links ${open ? "active" : ""}`}>
        <a href="#section1"><p>Workshops</p></a>
        <a href="#section2"><p>Competições</p></a>
        <a href="#section3"><p>Palestras</p></a>
        <a href="#section4"><p>Mostras Científicas</p></a>
        <a href="#section5"><p>Entretenimento</p></a>
        <a href="#"><p>Inscreva-se</p></a>
      </div>

    </nav>
  );
}

export default Navbar;