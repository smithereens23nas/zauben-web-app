import React, { useState } from "react";
import "../DateNav/DateNav.css";
import "./EnergyDateNav.css"
import { IoIosArrowBack } from "react-icons/io";


const EnergyDateNav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <div className="btn-container btn-container-spacing">
      <a href="/home" className="back-arrow back-arrow-spacing">< IoIosArrowBack/></a>
      <div className="date-btns button-spacing">
        <button
          onClick={() => setActiveNav("#")}
          className={`nav-btn ${activeNav === "#" ? "active" : ""}`}
        >
          <a href="#">Day</a>
        </button>
        <button
          onClick={() => setActiveNav("#week")}
          className={`nav-btn ${activeNav === "#week" ? "active" : ""}`}
        >
          <a href="#week">Week</a>
        </button>
        <button
          onClick={() => setActiveNav("#month")}
          className={`nav-btn ${activeNav === "#month" ? "active" : ""}`}
        >
          <a href="#month">Month</a>
        </button>
        <button
          onClick={() => setActiveNav("#year")}
          className={`nav-btn ${activeNav === "#year" ? "active" : ""}`}
        >
          <a href="#year">Year</a>
        </button>
      </div>
    </div>
  );
};

export default EnergyDateNav;