import React from "react";
import "./locations.css";
import SideMenu from "../../components/SideMenu/SideMenu";

const locations = () => {
  return (
    <div className="bg-page">
      <SideMenu />
      <h3 className="locations-title">Locations</h3>
      <div className="container-locations">
        <div className="card">
          <div className="card-img location-img-1"></div>
          <div className="p-style">
            <h4>Park Habitat</h4>
            <h5 className="card-text-spacing">
            35 South 2nd Street, San Jose, CA
            </h5>
            <a className="link-decoration" href="/livingwalls">
              View Living Walls
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-img location-img-2"></div>
          <div className="p-style">
            <h4>The Orchard</h4>
            <h5 className="card-text-spacing">
            
280 Park Ave, San Jose, CA 95113
            </h5>
            <a className="link-decoration" href="/livingwalls">
              View Living Walls
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-img location-img-3"></div>
          <div className="p-style">
            <h4>Energy Hub</h4>
            <h5 className="card-text-spacing">
            
180 Park Ave, San Jose, CA 95113            </h5>
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
