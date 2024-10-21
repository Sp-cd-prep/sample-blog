import React from "react";
import { NavLink } from "react-router-dom";
import './component.css';

const Navbar = () => {
  return (
    <>
     <div className="header">
            <div className="logo">
                <span className='verticalText'>The</span>
                <h1>Siren</h1>
            </div>
    <nav>
      <ul className="nav-menu">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({ color: isActive ? "black" : "brown" })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bollywood"
            style={({ isActive }) => ({ color: isActive ? "black" : "brown" })}
          >
            Bollywood
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/hollywood"
            style={({ isActive }) => ({ color: isActive ? "black" : "brown" })}
          >
            Hollywood
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tech"
            style={({ isActive }) => ({ color: isActive ? "black" : "brown" })}
          >
            Technology
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/fitness"
            style={({ isActive }) => ({ color: isActive ? "black" : "brown" })}
            >
            Fitness
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/food"
            style={({ isActive }) => ({ color: isActive ? "black" : "brown" })}
          >
            Food
          </NavLink>
        </li>
      </ul>
      </nav>
    </div>
    </>
  );
};

export default Navbar;
