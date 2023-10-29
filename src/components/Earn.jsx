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
            <p>Stake $ZOMI and $ZLP to earn rewards.</p>
          </div>
          <div className="earn">
            <div className="earn-left">
              <div className="earn-left-first">
                I am Earn component left first
              </div>
              <div className="earn-left-second">
                I am Earn component left second
              </div>
            </div>
            <div className="earn-right">
              <div className="earn-right-first">
                I am earn right component first
              </div>
              <div className="earn-right-second">
                I am earn right component second
              </div>
            </div>
          </div>

          {/* earn ends here */}

          {/* vest starts here */}
          <div className="vest-heading">
            <h2>Vest</h2>
            <p>
              Convert esZOMI tokens to $ZOMI tokens. <br />
              Please read the vesting details before using the vaults.
            </p>
          </div>
          <div className="vest">
            <div className="vest-left">
              <div className="vest-left-container">
                
                <div className="vest-left-first">
                $ZOMI Vault
                </div>
                <div className="vest-left-second">
                  <div className="vast-left-second-menu">
                    <div className="vast-left-second-items">
                    <div className="staked-tokens-left">
                    Staked Tokens
                    </div>
                    <div className="staked-tokens-right">
                    ...
                    </div>
                    </div>
                    <div className="vast-left-second-items">
                    <div className="staked-tokens-left">
                    Staked Tokens
                    </div>
                    <div className="staked-tokens-right">
                    0.00 / ...
                    </div>
                    </div>
                    <div className="vast-left-second-items">
                    <div className="staked-tokens-left">
                    Staked Tokens
                    </div>
                    <div className="staked-tokens-right">
                    0.0000 / 0.0000
                    </div>
                    </div>
                    <div className="vast-left-second-items">
                    <div className="staked-tokens-left">
                    Staked Tokens
                    </div>
                    <div className="staked-tokens-right">
                    0.0000 $ZOMI
                    </div>
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
                
                <div className="vest-left-first">
                $ZOMI Vault
                </div>
                <div className="vest-left-second">
                  <div className="vast-left-second-menu">
                    <div className="vast-left-second-items">
                    <div className="staked-tokens-left">
                    Staked Tokens
                    </div>
                    <div className="staked-tokens-right">
                    ...
                    </div>
                    </div>
                    <div className="vast-left-second-items">
                    <div className="staked-tokens-left">
                    Staked Tokens
                    </div>
                    <div className="staked-tokens-right">
                    0.00 / ...
                    </div>
                    </div>
                    <div className="vast-left-second-items">
                    <div className="staked-tokens-left">
                    Staked Tokens
                    </div>
                    <div className="staked-tokens-right">
                    0.0000 / 0.0000
                    </div>
                    </div>
                    <div className="vast-left-second-items">
                    <div className="staked-tokens-left">
                    Staked Tokens
                    </div>
                    <div className="staked-tokens-right">
                    0.0000 $ZOMI
                    </div>
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
    <Footer/>
    </>
  );
};

export default Earn;
