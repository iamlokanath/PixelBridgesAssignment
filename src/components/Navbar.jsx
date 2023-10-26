import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
   <header>
    <div>LOGO</div>
    <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/nft">NFT</NavLink></li>
        <li><NavLink to="/earn">Earn</NavLink></li>
        <li><NavLink to="/buy">Buy</NavLink></li>
        <li><NavLink to="/referals">Referals</NavLink></li>
        <li><NavLink to="/ecosystem">Ecosystem</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
    </ul>
   </header>
    </>
  )
}

export default Navbar
