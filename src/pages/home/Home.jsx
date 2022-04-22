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
            <h5>Order Model Z</h5>
            <p>Designed for
healthier living</p>
            <a className="link-decoration" href="#">View Solar</a>
          </div>
        </div>
        <div className="card">
          <div className="card-img bg-img-2">
          </div>
          <div className="p-style">
            <h5>Reserve a Car</h5>
            <p>Browse our models</p>
            <a className="link-decoration" href="#">Shop Now</a>
          </div>
        </div>
        <div className="card">
          <div className="card-img bg-img-3">
          </div>
          <div className="p-style">
            <h5>Purchased a car from a third party?</h5>
            <p>This is paragraph 3.</p>
            <a className="link-decoration" href="#">Add</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
