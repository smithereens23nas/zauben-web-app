import React from "react";
import "./locations.css";
import SideMenu from "../../components/SideMenu/SideMenu";

const locations = () => {
  return (
    <div className="bg-page">
      <SideMenu />
      <h3>Locations</h3>
      <div className="container-locations">
        <div className="card">
          <div className="card-img location-img-1"></div>
          <div className="p-style">
            <h5 className="card-text-spacing">
              409 Andover Drive West Palm Beach, FL 33404
            </h5>
            <a className="link-decoration" href="#">
              View Living Walls
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-img location-img-2"></div>
          <div className="p-style">
            <h5 className="card-text-spacing">
              690 Glen Creek St. Forest Hills, NY 11375
            </h5>
            <a className="link-decoration" href="/livingwalls">
              View Living Walls
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default locations;
