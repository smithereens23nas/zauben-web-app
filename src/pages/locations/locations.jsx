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
          <a href="/metricsdashboard">
            <div className="card-img location-img-1"></div>
          </a>
          <a href="/metricsdashboard">
            <div className="p-style">
              <h4 className="product-title">Park Habitat</h4>
              <p className="card-text-spacing">35 South 2nd Street, San Jose, CA</p>
            </div>
          </a>
        </div>
        <div className="card">
          <a href="/metricsdashboard">
            <div className="card-img location-img-2"></div>
          </a>
          <a href="/metricsdashboard">
            <div className="p-style">
              <h4 className="product-title">The Orchard</h4>
              <p className="card-text-spacing">280 Park Ave, San Jose, CA 95113</p>
            </div>
          </a>
        </div>
        <div className="card">
          <a href="/metricsdashboard">
            <div className="card-img location-img-3"></div>
          </a>
          <a href="/metricsdashboard">
            <div className="p-style">
              <h4 className="product-title">Energy Hub</h4>
              <p className="card-text-spacing">180 Park Ave, San Jose, CA 95113</p>
            </div>
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default locations;
