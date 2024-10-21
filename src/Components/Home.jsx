import React from "react";
import Navbar from "./Navbar";
import './component.css';

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="main-container">
        <div className="header-container">
          <div className="box box1">
            <p className="headerbox-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, et!
            </p>
          </div>
          <div className="box box2">
            <p className="headerbox-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, et!
            </p>
          </div>
          <div className="box box3">
            <p className="headerbox-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, et!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
