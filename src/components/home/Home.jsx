import React from "react";
import "./home.css";
import SideMenu from "../../components/SideMenu/SideMenu";

const Home = () => {
  return (
    <div className="bg-page">
      <SideMenu />
      <h3>Dashboard</h3>
      <div className="container">
        <div className="card">
          <div className="card-img bg-img-1">
          </div>
          <div className="p-style">
            <h5>Model Z</h5>
            <p>Designed for
healthier living</p>
            <a className="link-decoration" href="/locations">View</a>
          </div>
        </div>
        <div className="card">
          <div className="card-img bg-img-2">
          </div>
          <div className="p-style">
            <h5>Green Roof</h5>
            <p>Browse our models</p>
            <a className="link-decoration" href="#">Shop Now</a>
          </div>
        </div>
        <div className="card">
          <div className="card-img bg-img-3">
          </div>
          <div className="p-style">
            <h5>Exterior Green Walls</h5>
            <p>This is paragraph 3.</p>
            <a className="link-decoration" href="#">View Locations</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
