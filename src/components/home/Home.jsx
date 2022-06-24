import React from "react";
import "./home.css";
import SideMenu from "../../components/SideMenu/SideMenu";

const Home = () => {
  return (
    <div className="bg-page">
      <SideMenu />
      <h3 className="dashboard-title">Dashboard</h3>
      <div className="container">
        <div className="card">
          <div className="card-img bg-img-1">
          </div>
          <div className="p-style">
            <h5 className="product-title">Model Z</h5>
            <p className="paragraph-styling">Designed for
healthier living</p>
            <a className="link-decoration" href="/locations">View</a>
          </div>
        </div>
        <div className="card">
          <div className="card-img bg-img-2">
          </div>
          <div className="p-style">
            <h5 className="product-title">Green Roof</h5>
            <p className="paragraph-styling">Build and design sustainably</p>
            <a className="link-decoration" href="#">Shop Now</a>
          </div>
        </div>
        <div className="card">
          <div className="card-img bg-img-3">
          </div>
          <div className="p-style title-format">
            <h5 className="product-title">Exterior Green Walls</h5>
            <p className="paragraph-styling">Reconnecting nature with the built environment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
