import React, { useState } from "react";
import "./DateNav.css";
import { IoIosArrowBack } from "react-icons/io";


const DateNav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <div className="btn-container">
      <a href="/metricsDashboard" className="back-arrow">< IoIosArrowBack/></a>
      <div className="date-btns">
        <button
          onClick={() => setActiveNav("#")}
          className={`nav-btn ${activeNav === "#" ? "active" : ""}`}
        >
          <a href="#">Today</a>
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

export default DateNav;
