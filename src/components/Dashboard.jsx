import React from "react";
import Navbar from "./Navbar";
import "./css/Dashboard.css";
import Stats from "./Image/ic_avalanche_24.4f4088f4.svg";
import Footer from './Footer'
import Romi from './Image/zomi.png'
import Zlp from './Image/zlp.png'
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
              <div className="tokens-card">
                <div className="tokens-card-container">

                  <div className="token-card-first">
                   <div className="token-card-first-container">

                    <div className="distribution">
                      <div className="distribution-container">
                        <div className="left-distribution">
                          <div className="left-distribution-container">

                          <div className="left-distribution-first">
                            <div className="left-distribution-first-container">
                              <div className="romi-distribution-logo">
                                <img src={Romi} alt="romi" />
                              </div>
                              <div className="romi-distibution">$ROMI</div>
                            </div>
                          </div>

                          <div className="left-distribution-second">
                            <div className="left-distribution-second-container">
                              <div className="distribution-menu">
                                <div className="distribution-menu-item">Price</div>
                                <div className="distribution-menu-price">$0.00</div>
                              </div>

                              <div className="distribution-menu">
                                <div className="distribution-menu-item">Supply</div>
                                <div className="distribution-menu-price">10,000 $ZOMI</div>
                              </div>

                              <div className="distribution-menu">
                                <div className="distribution-menu-item">Total Staked</div>
                                <div className="distribution-menu-price">$0</div>
                              </div>

                              <div className="distribution-menu">
                                <div className="distribution-menu-item">Market Cap</div>
                                <div className="distribution-menu-price">$10</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                        <div className="right-distribution">
                          
                          <div className="right-distribution-container">
                          Distribution
                          </div>
                          </div>
                      </div>
                    </div>


                    <div className="distribution">
                      <div className="distribution-container">
                        <div className="left-distribution">
                          <div className="left-distribution-container">

                          <div className="left-distribution-first">
                            <div className="left-distribution-first-container">
                              <div className="romi-distribution-logo">
                                <img src={Zlp} alt="romi" />
                              </div>
                              <div className="romi-distibution">$ZLP</div>
                            </div>
                          </div>

                          <div className="left-distribution-second">
                            <div className="left-distribution-second-container">
                              <div className="distribution-menu">
                                <div className="distribution-menu-item">Price</div>
                                <div className="distribution-menu-price">$1.138</div>
                              </div>

                              <div className="distribution-menu">
                                <div className="distribution-menu-item">Supply</div>
                                <div className="distribution-menu-price">29 $ZLP</div>
                              </div>

                              <div className="distribution-menu">
                                <div className="distribution-menu-item">Total Staked</div>
                                <div className="distribution-menu-price">$34</div>
                              </div>

                              <div className="distribution-menu">
                                <div className="distribution-menu-item">Market Cap</div>
                                <div className="distribution-menu-price">$34</div>
                              </div>
                              
                              <div className="distribution-menu">
                                <div className="distribution-menu-item">Stablecoin Percentage</div>
                                <div className="distribution-menu-price">49.50%</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                        <div className="right-distribution">
                          
                          <div className="right-distribution-container">
                          Distribution
                          </div>
                          </div>
                      </div>
                    </div>
                   </div>
                  </div> 



                  <div className="token-card-second">
                    <div className="token-card-second-container">
                      <div className="token-card-second-top">
                        <div className="token-card-second-top-container">
                       <div className="token-eth">
                        <div className="token-eth-container">
                          <div className="eth-first">
                            <div className="eth-first-container">
                              ETH
                            </div>
                          </div>

                          <div className="eth-second">
                            <div className="eth-second-container">
                              <div className="eth-price">
                                <div className="eth-price-left">Price</div>
                                <div className="eth-price-right">$1,829.11</div>
                              </div>
                              <div className="eth-price">
                                <div className="eth-price-left">Pool</div>
                                <div className="eth-price-right">$19</div>
                              </div>
                              <div className="eth-price">
                                <div className="eth-price-left">Weight</div>
                                <div className="eth-price-right">$1,829.11</div>
                              </div>
                              <div className="eth-price">
                                <div className="eth-price-left">Utilization</div>
                                <div className="eth-price-right">$1,829.11</div>
                              </div>
                              

                            </div>
                          </div>
                        </div>
                       </div>
                       <div className="token-eth">
                        
                       <div className="token-eth">
                        <div className="token-eth-container">
                          <div className="eth-first">
                            <div className="eth-first-container">
                              WBTC
                            </div>
                          </div>

                          <div className="eth-second">
                            <div className="eth-second-container">
                              <div className="eth-price">
                                <div className="eth-price-left">Price</div>
                                <div className="eth-price-right">$1,829.11</div>
                              </div>
                              <div className="eth-price">
                                <div className="eth-price-left">Pool</div>
                                <div className="eth-price-right">$19</div>
                              </div>
                              <div className="eth-price">
                                <div className="eth-price-left">Weight</div>
                                <div className="eth-price-right">$1,829.11</div>
                              </div>
                              <div className="eth-price">
                                <div className="eth-price-left">Utilization</div>
                                <div className="eth-price-right">$1,829.11</div>
                              </div>
                              

                            </div>
                          </div>
                        </div>
                       </div>


                       </div>
                       </div>
                      </div>
                      <div className="token-card-second-last">
                      <div className="token-card-second-last-container">
                        <div className="token-eth">
                          
                        <div className="token-eth">
                        <div className="token-eth-container">
                          <div className="eth-first">
                            <div className="eth-first-container">
                              APE
                            </div>
                          </div>

                          <div className="eth-second">
                            <div className="eth-second-container">
                              <div className="eth-price">
                                <div className="eth-price-left">Price</div>
                                <div className="eth-price-right">$1,829.11</div>
                              </div>
                              <div className="eth-price">
                                <div className="eth-price-left">Pool</div>
                                <div className="eth-price-right">$19</div>
                              </div>
                              <div className="eth-price">
                                <div className="eth-price-left">Weight</div>
                                <div className="eth-price-right">$1,829.11</div>
                              </div>
                              <div className="eth-price">
                                <div className="eth-price-left">Utilization</div>
                                <div className="eth-price-right">$1,829.11</div>
                              </div>
                              

                            </div>
                          </div>
                        </div>
                       </div>


                        </div>
                        <div className="token-eth">

                        <div className="token-eth">
                        <div className="token-eth-container">
                          <div className="eth-first">
                            <div className="eth-first-container">
                              USDC
                            </div>
                          </div>

                          <div className="eth-second">
                            <div className="eth-second-container">
                              <div className="eth-price">
                                <div className="eth-price-left">Price</div>
                                <div className="eth-price-right">$1,829.11</div>
                              </div>
                              <div className="eth-price">
                                <div className="eth-price-left">Pool</div>
                                <div className="eth-price-right">$19</div>
                              </div>
                              <div className="eth-price">
                                <div className="eth-price-left">Weight</div>
                                <div className="eth-price-right">$1,829.11</div>
                              </div>
                              <div className="eth-price">
                                <div className="eth-price-left">Utilization</div>
                                <div className="eth-price-right">$1,829.11</div>
                              </div>
                              

                            </div>
                          </div>
                        </div>
                       </div>


                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Tokens card ends */}

            </div>
          </div>
          {/* tokens ends here */}
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Dashboard;
