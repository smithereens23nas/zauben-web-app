import React from 'react';
import SideMenu from "../../components/SideMenu/SideMenu";
import "./plants.css"


const plants = () => {
  return (
    <div className="bg-page">
      <SideMenu />
      <h3 className='locations-title'>Locations</h3>
      <div className="container-locations">
        <div className="card">
          <div className="card-img plant-img-1"></div>
          <div className="p-style">
            <h5 className="card-text-spacing">
              Model Z
            </h5>
            <p className='para-card-styling'>Lounge Area</p>
            <a className="link-decoration" href="/metricsDashboard
            ">
              View Performance
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-img plant-img-2"></div>
          <div className="p-style">
            <h5 className="card-text-spacing">
              Model Z
            </h5>
            <p className='para-card-styling'>Lounge Area</p>
            <a className="link-decoration" href="/metricsDashboard
            ">
              View Performance
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default plants