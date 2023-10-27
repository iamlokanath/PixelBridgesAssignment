import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Image/New Logo.png";

import "./css/Navbar.css"
const Navbar = () => {
  return (
    <>


      <div className="nav">
        <div className="nav-container">
          <div className="nav-left">
            <div className="logo">
              <div className="logo-image">
                <img src={Logo} alt="the logo of Romi.Finance" />
              </div>
              <div className="logo-brand">Romi.Finance</div>
            </div>
          </div>

          <div className="nav-mid">
            <ul>
              <li>
                <NavLink className="nav-items" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink className="nav-items" to="/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <NavLink className="nav-items" to="/nft">NFT</NavLink>
              </li>
              <li>
                <NavLink className="nav-items" to="/earn">Earn</NavLink>
              </li>
              <li>
                <NavLink className="nav-items" to="/buy">Buy</NavLink>
              </li>
              <li>
                <NavLink className="nav-items" to="/referals">Referals</NavLink>
              </li>
              <li>
                <NavLink className="nav-items" to="/ecosystem">Ecosystem</NavLink>
              </li>
              <li>
                <NavLink className="nav-items" to="/about">About</NavLink>
              </li>
            </ul>
          </div>

          <div className="nav-right">
            <div className="trade"><button>Trade</button></div>
            <div className="wallet"><button>Connect Wallet</button></div>
            <div className="networks"><button>N|:</button></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
