import React, { useState } from "react";
import "./SideMenu.css";
import {AiOutlineHome} from "react-icons/ai"
import {RiHeartPulseLine} from "react-icons/ri"
import {VscTools} from "react-icons/vsc"
import {IoSettingsOutline} from "react-icons/io5"
import {GiElectric} from "react-icons/gi"

const SideMenu = () => {

const [activeNav, setActiveNav] = useState('#')
  return (
    <div>
      <aside className="side-menu-position">
        <ul>
          <li> <AiOutlineHome className="icon-hover" /> <a onClick={() => setActiveNav('#')} className="menu-spacing list-item" href="/home">Dashboard</a></li>
          <li> <RiHeartPulseLine className="icon-hover" /><a href="/wellness" className="menu-spacing list-item">Wellness</a></li>
          <li> <GiElectric className="icon-hover" /> <a href="/energy" className="menu-spacing list-item">ESG & Energy</a></li>
          <li> <IoSettingsOutline className="icon-hover" /> <a className="menu-spacing list-item" href="#">Settings</a></li>
          <li> <VscTools className="icon-hover" /> <a className="menu-spacing list-item" href="#">Support</a></li>

        </ul>
      </aside>
    </div>
  );
};

export default SideMenu;
