import React from "react";
import "./nav.css"

import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className="nav-spacing">
        <a className="logo">Zauben</a>
      <a href="#">Dashboard</a>
      <a href="">Locations</a>
      <a href="">Model X</a>
      <a href="">Model Y</a>
    </nav>
  );
};

export default Nav;
