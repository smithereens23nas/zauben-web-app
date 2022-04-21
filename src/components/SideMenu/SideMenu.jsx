import React from "react";
import "./SideMenu.css";
import {AiOutlineHome, AiOutlineHistory} from "react-icons/ai"
import {BsPerson} from "react-icons/bs"
import {MdOutlinePayment} from "react-icons/md"
import {RiTreasureMapLine} from "react-icons/ri"

const SideMenu = () => {
  return (
    <div >
      <aside className="side-menu-position">
        <ul>
          <li> <AiOutlineHome className="icon-hover" /> <a className="menu-spacing hover-effect" href="#">Dashboard</a></li>
          <li> <BsPerson className="icon-hover" /> <a className="menu-spacing hover-effect" href="#">Profile Settings</a></li>
          <li> <MdOutlinePayment className="icon-hover" /> <a className="menu-spacing hover-effect" href="#">Payment Method</a></li>
          <li> <RiTreasureMapLine className="icon-hover" /> <a className="menu-spacing hover-effect" href="#">Loot Box</a></li>
          <li> <AiOutlineHistory className="icon-hover" /> <a className="menu-spacing hover-effect" href="#">Order History</a></li>

        </ul>
      </aside>
    </div>
  );
};

export default SideMenu;
