import React from "react";
import "./home.css";
import SideMenu from "../../components/SideMenu/SideMenu";

const Home = () => {
  return (
    <div className="bg-page">
      <SideMenu />
      <h3>Dashboard</h3>
      <div className="container">
        <div>
          <div className="card bg-img-1">
          </div>
          <div className="p-style">
            <h5>Order Tesla Solar</h5>
            <p>Produce energy to power your tesla life</p>
            <a href="#">View Solar</a>
          </div>
        </div>
        <div>
          <div className="card bg-img-2">
            <img src="public/assets/Zauben Black Logo.jpg" alt="" />
          </div>
          <div className="p-style">
            <h5>Reserve a Car</h5>
            <p>Browse our models</p>
            <a href="#">Shop Now</a>
          </div>
        </div>
        <div>
          <div className="card bg-img-3">
            <img src="public/assets/Zauben Black Logo.jpg" alt="" />
          </div>
          <div className="p-style">
            <h5>Purchased a car from a third party?</h5>
            <p>This is paragraph 3.</p>
            <a href="#">Add</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
