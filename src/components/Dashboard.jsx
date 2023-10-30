import React from "react";
import Navbar from "./Navbar";
import "./css/Dashboard.css";
import Stats from "./Image/ic_avalanche_24.4f4088f4.svg";
// import Footer from './Footer'
const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard">
        <div className="dashboard-container">
          {/* stats starts here */}
          <div className="stats">
            <div className="stats-container">
              {/* stats heading starts*/}
              <div className="stats-heading">
                <div className="stats-title">
                  <h2>Stats</h2>
                  <img src={Stats} alt="Sats" />
                </div>
                <p>
                  Ethereum Total Stats start from 06 Jan 2022. <br />
                  For detailed stats:
                </p>
              </div>
              {/* stats heading ends*/}
              {/* stats card starts */}
              <div className="stats-card">
                <div className="stats-card-container">
                  {/* stats left card starts here */}
                  <div className="stats-card-left">
                    <div className="stats-card-left-container">
                     <div className="stats-left-overview">
                      <div className="overview-container">Overview</div>
                      
                     </div>
                     <div className="stats-left-overview-menu">
                        <div className="stats-left-overview-menu-container">
                      <div className="stats-left-overview-menu-items">
                        <div className="overview-menu-items-left">aum</div>
                        <div className="overview-menu-items-right">$34</div>
                      </div>

                      <div className="stats-left-overview-menu-items">
                        <div className="overview-menu-items-left">$ZLP Pool</div>
                        <div className="overview-menu-items-right">$34</div>
                      </div>

                      <div className="stats-left-overview-menu-items">
                        <div className="overview-menu-items-left">24h Volume</div>
                        <div className="overview-menu-items-right">$0</div>
                      </div>

                      <div className="stats-left-overview-menu-items">
                        <div className="overview-menu-items-left">Long Positions</div>
                        <div className="overview-menu-items-right">$0</div>
                      </div>

                      <div className="stats-left-overview-menu-items">
                        <div className="overview-menu-items-left">Short Positions</div>
                        <div className="overview-menu-items-right">$0</div>
                      </div>

                     </div>
                     </div>
                    </div>
                  </div>
                  {/* stats left card ends here */}
                  
                  {/* stats right card starts here */}
                  <div className="stats-card-left">
                    <div className="stats-card-left-container">
                     <div className="stats-left-overview">
                      <div className="overview-container">Total Stats</div>
                      
                     </div>
                     <div className="stats-left-overview-menu">
                        <div className="stats-left-overview-menu-container">
                      <div className="stats-left-overview-menu-items">
                        <div className="overview-menu-items-left">Total Fees</div>
                        <div className="overview-menu-items-right">$0</div>
                      </div>

                      <div className="stats-left-overview-menu-items">
                        <div className="overview-menu-items-left">Total Volume</div>
                        <div className="overview-menu-items-right">$0</div>
                      </div>

                      <div className="stats-left-overview-menu-items">
                        <div className="overview-menu-items-left">Floor Price Fund</div>
                        <div className="overview-menu-items-right">$637,177</div>
                      </div>

                      <div className="stats-left-overview-menu-items">
                        <div className="overview-menu-items-left">Long Positions</div>
                        <div className="overview-menu-items-right">$0</div>
                      </div>

                      <div className="stats-left-overview-menu-items">
                        <div className="overview-menu-items-left">Short Positions</div>
                        <div className="overview-menu-items-right">$0</div>
                      </div>

                     </div>
                     </div>
                    </div>
                  </div>
                  {/* stats right card ends here */}
                </div>
              </div>
              {/* stats card ends */}
            </div>
          </div>
          {/* stats ends here */}

          {/* Tokens starts here */}
          <div className="tokens">
            <div className="tokens-container">
              {/* tokens heading starts*/}
              <div className="tokens-heading">
                <div className="tokens-title">
                  <h2>Tokens</h2>
                  <img src={Stats} alt="tokens" />
                </div>
                <p>Platform and $ZLP index tokens.</p>
              </div>
              {/* Tokens heading ends*/}
              {/* Tokens card starts */}
              <div className="stats-card">I a tokens card</div>
              {/* Tokens card ends */}

            </div>
          </div>
          {/* tokens ends here */}
        </div>
      </div>

      {/* <Footer/> */}
    </>
  );
};

export default Dashboard;
