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
          <li> <AiOutlineHome className="icon-hover" /> <a onClick={() => setActiveNav('#')} className="menu-spacing hover-effect" href="/home">Dashboard</a></li>
          <li> <RiHeartPulseLine className="icon-hover" /><a href="#" className="menu-spacing hover-effect">Wellness</a></li>
          <li> <GiElectric className="icon-hover" /> <a href="#" className="menu-spacing hover-effect">ESG & Energy</a></li>
          <li> <IoSettingsOutline className="icon-hover" /> <a className="menu-spacing hover-effect" href="#">Settings</a></li>
          <li> <VscTools className="icon-hover" /> <a className="menu-spacing hover-effect" href="#">Support</a></li>

        </ul>
      </aside>
    </div>
  );
};

export default SideMenu;
