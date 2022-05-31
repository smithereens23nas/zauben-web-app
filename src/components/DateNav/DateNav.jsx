import React, { useState } from "react";
import "./DateNav.css";

const DateNav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <div className="btn-container">
      <div className="date-btns">
      <button onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <a href="#" >Today</a>
        </button>
        <button onClick={() => setActiveNav('#week')} className={activeNav === '#week' ? 'active' : ''}>
        <a href="#week" >Week</a>
        </button>
        <button onClick={() => setActiveNav('#month')} className={activeNav === '#month' ? 'active' : ''}>
        <a href="#month" >Month</a>
        </button>
        <button onClick={() => setActiveNav('#year')} className={activeNav === '#year' ? 'active' : ''}>
        <a href="#year" >Year</a>
        </button>
      </div>
    </div>
  );
};

export default DateNav; 
