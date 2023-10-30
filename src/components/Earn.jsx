import React from "react";
import Navbar from "./Navbar";
import "./css/Earn.css";
import Footer from "./Footer";
const Earn = () => {
  return (
    <>
      <Navbar />
      <div className="earnpage">
        <div className="earn-container">
          {/* earn starts here */}

          <div className="earn-heading">
            <h2>Earn</h2>
            <p>Stake $ROMI and $ZLP to earn rewards.</p>
          </div>
          <div className="earn">
            <div className="earn-left">
              <div className="earn-left-first">
                {/* I am Earn component left first */}

                
                <div className="earn-left-second-container">
                  <div className="ethereum-first">$ROMI</div>
                  <div className="ethereum-second">
                    <div className="ethereum-second-container">
                      <div className="ethereum-second-container-items">
                        <div className="ethereum-price">Price</div>
                        <div className="ethereum-price-right">$0.00</div>
                      </div>
                      <div className="ethereum-second-container-items">
                        <div className="ethereum-price">Wallet</div>
                        <div className="ethereum-price-right">... $ROMI ($...)</div>
                      </div>
                      <div className="ethereum-second-container-items">
                        <div className="ethereum-price">Staked</div>
                        <div className="ethereum-price-right">... $ROMI ($...)</div>
                      </div>
                    </div>
                  </div>
                  <div className="ethereum-third">
                    <div className="etereum-third-container">
                      <div className="etereum-third-container-items">
                        <div className="ethereum-price">APR</div>
                        <div className="ethereum-price-right">...%</div>
                      </div>
                      <div className="etereum-third-container-items">
                        <div className="ethereum-price">Rewards</div>
                        <div className="ethereum-price-right">$...</div>
                      </div>
                      
                      <div className="etereum-third-container-items">
                        <div className="ethereum-price">Multiplier Points APR</div>
                        <div className="ethereum-price-right">100.00%</div>
                      </div>

                      <div className="etereum-third-container-items">
                        <div className="ethereum-price">Boost Percentage</div>
                        <div className="ethereum-price-right">...%</div>
                      </div>
                    </div>
                  </div>
                  <div className="ethereum-fourth">
                    <div className="ethereum-fourth-container">
                      <div className="etereum-fourth-container-items">
                        <div className="ethereum-price">Total Staked</div>
                        <div className="ethereum-price-right">0 $ROMI ($...)</div>
                      </div>
                      <div className="etereum-fourth-container-items">
                        <div className="ethereum-price">Total Supply</div>
                        <div className="ethereum-price-right">10,000 $ROMI ($10)</div>
                      </div>
                    </div>
                  </div>
                  <div className="vest-left-third">
                  <button>Buy $ROMI</button>
                </div>
                </div>

              </div>
              <div className="earn-left-second">
                {/* I am Earn component left second */}

                <div className="earn-left-second-container">
                  <div className="ethereum-first">$ZLP (Ethereum)</div>
                  <div className="ethereum-second">
                    <div className="ethereum-second-container">
                      <div className="ethereum-second-container-items">
                        <div className="ethereum-price">Price</div>
                        <div className="ethereum-price-right">$...</div>
                      </div>
                      <div className="ethereum-second-container-items">
                        <div className="ethereum-price">Wallet</div>
                        <div className="ethereum-price-right">... $ZLP ($...) </div>
                      </div>
                      <div className="ethereum-second-container-items">
                        <div className="ethereum-price">Staked</div>
                        <div className="ethereum-price-right">... $ZLP ($...)</div>
                      </div>
                    </div>
                  </div>
                  <div className="ethereum-third">
                    <div className="etereum-third-container">
                      <div className="etereum-third-container-items">
                        <div className="ethereum-price">APR</div>
                        <div className="ethereum-price-right">...%</div>
                      </div>
                      <div className="etereum-third-container-items">
                        <div className="ethereum-price">Rewards</div>
                        <div className="ethereum-price-right">$...</div>
                      </div>
                    </div>
                  </div>
                  <div className="ethereum-fourth">
                    <div className="ethereum-fourth-container">
                      <div className="etereum-fourth-container-items">
                        <div className="ethereum-price">Total Staked</div>
                        <div className="ethereum-price-right">... $ZLP ($...)</div>
                      </div>
                      <div className="etereum-fourth-container-items">
                        <div className="ethereum-price">Total Supply</div>
                        <div className="ethereum-price-right">... $ZLP ($...)</div>
                      </div>
                    </div>
                  </div>
                  <div className="ethereum-fifth">
                    <div className="ethereum-fifth-container">
                      <div className="ethereum-fifth-button">
                        <button>Buy $ZLP</button>
                      </div>
                      <div className="ethereum-fifth-button">
                        <button>Sell $ZLP</button>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="earn-right">
              <div className="earn-right-first">
                {/* I am earn right component first */}

                <div className="earn-left-second-container">
                  <div className="ethereum-first">Total Rewards</div>
                  <div className="ethereum-second">
                    <div className="ethereum-second-container">
                      <div className="ethereum-second-container-items">
                        <div className="ethereum-price">ETH (WETH)</div>
                        <div className="ethereum-price-right">... ($...)</div>
                      </div>
                      <div className="ethereum-second-container-items">
                        <div className="ethereum-price">$ROMI</div>
                        <div className="ethereum-price-right">... ($...) </div>
                      </div>
                      <div className="ethereum-second-container-items">
                        <div className="ethereum-price">Escrowed $ROMI</div>
                        <div className="ethereum-price-right">... ($...)</div>
                      </div>
                      <div className="ethereum-second-container-items">
                        <div className="ethereum-price">Multiplier Points</div>
                        <div className="ethereum-price-right">...</div>
                      </div>
                      <div className="ethereum-second-container-items">
                        <div className="ethereum-price">Staked Multiplier Points</div>
                        <div className="ethereum-price-right">...</div>
                      </div>
                      <div className="ethereum-second-container-items">
                        <div className="ethereum-price">Total</div>
                        <div className="ethereum-price-right">$...</div>
                      </div>

                    </div>
                  </div>
                  {/* <div className="ethereum-third">
                    <div className="etereum-third-container">
                      <div className="etereum-third-container-items">
                        <div className="ethereum-price">APR</div>
                        <div className="ethereum-price-right">...%</div>
                      </div>
                      <div className="etereum-third-container-items">
                        <div className="ethereum-price">Rewards</div>
                        <div className="ethereum-price-right">$...</div>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="ethereum-fourth">
                    <div className="ethereum-fourth-container">
                      <div className="etereum-fourth-container-items">
                        <div className="ethereum-price">Total Staked</div>
                        <div className="ethereum-price-right">... $ZLP ($...)</div>
                      </div>
                      <div className="etereum-fourth-container-items">
                        <div className="ethereum-price">Total Supply</div>
                        <div className="ethereum-price-right">... $ZLP ($...)</div>
                      </div>
                    </div>
                  </div> */}
                  <div className="vest-left-third">
                  <button>Connect Wallet</button>
                </div>
                </div>


              </div>
              <div className="earn-right-second">
                {/* I am earn right component second */}

                <div className="earn-left-second-container">
                  <div className="ethereum-first">Escrowed $ROMI</div>
                  <div className="ethereum-second">
                    <div className="ethereum-second-container">
                      <div className="ethereum-second-container-items">
                        <div className="ethereum-price">Price</div>
                        <div className="ethereum-price-right">$0.00</div>
                      </div>
                      <div className="ethereum-second-container-items">
                        <div className="ethereum-price">Wallet</div>
                        <div className="ethereum-price-right">... esROMI ($...)</div>
                      </div>
                      <div className="ethereum-second-container-items">
                        <div className="ethereum-price">Staked</div>
                        <div className="ethereum-price-right">... esROMI ($...)</div>
                      </div>
                    </div>
                  </div>
                  <div className="ethereum-third">
                    <div className="etereum-third-container">
                      <div className="etereum-third-container-items">
                        <div className="ethereum-price">APR</div>
                        <div className="ethereum-price-right">...%</div>
                      </div>
                      <div className="etereum-third-container-items">
                        <div className="ethereum-price">Multiplier Points APR</div>
                        <div className="ethereum-price-right">100.00%</div>
                      </div>
                    </div>
                  </div>
                  <div className="ethereum-fourth">
                    <div className="ethereum-fourth-container">
                      <div className="etereum-fourth-container-items">
                        <div className="ethereum-price">Total Staked</div>
                        <div className="ethereum-price-right">... esROMI ($...)</div>
                      </div>
                      <div className="etereum-fourth-container-items">
                        <div className="ethereum-price">Total Supply</div>
                        <div className="ethereum-price-right">1,023,379 esROMI ($1,053)</div>
                      </div>
                    </div>
                  </div>
                  <div className="vest-left-third">
                  <button>Connect Wallet</button>
                </div>
                </div>


              </div>
            </div>
          </div>

          {/* earn ends here */}

          {/* vest starts here */}
          <div className="vest-heading">
            <h2>Vest</h2>
            <p>
              Convert esROMI tokens to $ROMI tokens. <br />
              Please read the vesting details before using the vaults.
            </p>
          </div>
          <div className="vest">
            <div className="vest-left">
              <div className="vest-left-container">
                <div className="vest-left-first">$ROMI Vault</div>
                <div className="vest-left-second">
                  <div className="vast-left-second-menu">
                    <div className="vast-left-second-items">
                      <div className="staked-tokens-left">Staked Tokens</div>
                      <div className="staked-tokens-right">...</div>
                    </div>
                    <div className="vast-left-second-items">
                      <div className="staked-tokens-left">Staked Tokens</div>
                      <div className="staked-tokens-right">0.00 / ...</div>
                    </div>
                    <div className="vast-left-second-items">
                      <div className="staked-tokens-left">Staked Tokens</div>
                      <div className="staked-tokens-right">0.0000 / 0.0000</div>
                    </div>
                    <div className="vast-left-second-items">
                      <div className="staked-tokens-left">Staked Tokens</div>
                      <div className="staked-tokens-right">0.0000 $ROMI</div>
                    </div>
                  </div>
                </div>
                <div className="vest-left-third">
                  <button>Connect Wallet</button>
                </div>
              </div>
            </div>

            <div className="vest-left">
              <div className="vest-left-container">
                <div className="vest-left-first">$ROMI Vault</div>
                <div className="vest-left-second">
                  <div className="vast-left-second-menu">
                    <div className="vast-left-second-items">
                      <div className="staked-tokens-left">Staked Tokens</div>
                      <div className="staked-tokens-right">...</div>
                    </div>
                    <div className="vast-left-second-items">
                      <div className="staked-tokens-left">Staked Tokens</div>
                      <div className="staked-tokens-right">0.00 / ...</div>
                    </div>
                    <div className="vast-left-second-items">
                      <div className="staked-tokens-left">Staked Tokens</div>
                      <div className="staked-tokens-right">0.0000 / 0.0000</div>
                    </div>
                    <div className="vast-left-second-items">
                      <div className="staked-tokens-left">Staked Tokens</div>
                      <div className="staked-tokens-right">0.0000 $ROMI</div>
                    </div>
                  </div>
                </div>
                <div className="vest-left-third">
                  <button>Connect Wallet</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Earn;
