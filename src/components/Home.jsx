import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './css/Home.css'
import Trade from './Image/ic_trading.2c53815a.svg';
import Interest from './Image/ic_stats.f0a18011.svg';
import User from './Image/ic_totaluser.ae09b310.svg';
import Hero from "./Hero";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="home-container">

          <div className="home-head">
          <div className="home-heading">

            Decentralized <br />Perpetual Exchange</div>
          <div className="home-heading-para">Trade BTC, ETH, AVAX and other top <br /> cryptocurrencies with up to 30x leverage <br /> directly from your wallet</div>
          <div className="home-button"><button>Launch Exchange</button></div>
          </div>

          <div className="home-card">

            <div className="home-card1">
              <div className="home-card1-container">
                <div className="home-card1-logo">
                  <img src={Trade} alt="Total Trading Volume" />
                </div>
                <div className="home-card1-text">
                  <div className="home-card1-text-first">Total Trading Volume</div>
                  <div className="home-card1-text-second">$0</div>
                </div>

              </div>
            </div>


            <div className="home-card1">
              <div className="home-card1-container">
                <div className="home-card1-logo">
                  <img src={Interest} alt="Total Trading Volume" />
                </div>
                <div className="home-card1-text">
                  <div className="home-card1-text-first">Open Interest</div>
                  <div className="home-card1-text-second">$0</div>
                </div>

              </div>
            </div>


            <div className="home-card1">
              <div className="home-card1-container">
                <div className="home-card1-logo">
                  <img src={User} alt="Total Trading Volume" />
                </div>
                <div className="home-card1-text">
                  <div className="home-card1-text-first">Total Users</div>
                  <div className="home-card1-text-second">0</div>
                </div>

              </div>
            </div>


          </div>
        </div>
      </div>
      <Hero/>
      <Footer />
    </>
  );
};

export default Home;
