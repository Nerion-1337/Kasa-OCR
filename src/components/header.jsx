import React from "react";
import logo from "../media/LOGO.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink to="/Kasa-OCR/">
        <img src={logo} alt="Logo Kasa avec en premier A une maison" />
      </NavLink>
      <nav>
        <ul>
          <NavLink to="/Kasa-OCR/" activeclassname="activeLink">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/Kasa-OCR/about" activeclassname="activeLink">
            <li>A Propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
