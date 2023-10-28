import React from "react";
import "./css/Hero.css";
import Water from "./Image/water.svg";
import Save from "./Image/Save.svg";
import Simple from "./Image/simple.svg";
import Zomi from "./Image/zomi.png";
import Zlp from "./Image/zlp.png";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-container">
          <div className="hero-first">
              {/* hero-first */}
              <div className="hero-first-desc">
                <div className="hero-first-desc-heding">
                  <div className="hero-first-desc-heding-logo">
                    <img src={Water} alt="Reduce Liquidation Risks" />
                  </div>
                  <div className="hero-first-desc-heding-name">
                    Reduce Liquidation Risks
                  </div>
                </div>
                <div className="hero-first-desc-para">
                  An aggregate of high-quality price <br /> feeds determine when
                  liquidations
                  <br /> occur. This keeps positions safe <br />
                  from temporary wicks.
                </div>
              </div>
              {/* hero-first */}

              {/* hero-first */}
              <div className="hero-first-desc">
                <div className="hero-first-desc-heding">
                  <div className="hero-first-desc-heding-logo">
                    <img src={Save} alt="Reduce Liquidation Risks" />
                  </div>
                  <div className="hero-first-desc-heding-name">
                    Reduce Liquidation Risks
                  </div>
                </div>
                <div className="hero-first-desc-para">
                  Enter and exit positions with <br /> minimal spread and zero
                  price
                  <br /> without incurring additional costs.
                </div>
              </div>

              {/* hero-first */}

              {/* hero-first */}
              <div className="hero-first-desc">
                <div className="hero-first-desc-heding">
                  <div className="hero-first-desc-heding-logo">
                    <img src={Simple} alt="Reduce Liquidation Risks" />
                  </div>
                  <div className="hero-first-desc-heding-name">
                    Reduce Liquidation Risks
                  </div>
                </div>
                <div className="hero-first-desc-para">
                  Open positions through a simple
                  <br /> swap interface. Conveniently swap
                  <br /> from any supported asset into the <br />
                  position of your choice.
                </div>
              </div>
              {/* hero-first */}
          </div>
          <div className="hero-second">
            <div className="hero-second-heading">
              Two tokens create <br /> our ecosystem
            </div>

            <div className="hero-second-card">

            {/* hero-second-card-first */}
              <div className="hero-second-card-first">
                <div className="hero-second-card-first-container">
                  <div className="zomi-head">
                    <div className="zomi-logo">
                      <img src={Zomi} alt="ZOMI" />
                    </div>
                    <div className="zomi-name">$ZOMI</div>
                  </div>

                  <div className="zomi-para">
                    $ZOMI is the utility and governance token. Accrues 30% of
                    the
                    <br /> platform's generated fees.
                  </div>

                  <div className="zomi-eth">Ethereum APR: 0.00%</div>

                  <div className="zomi-button">
                    <div className="zomi-buy">
                      <button>Buy</button>
                    </div>
                    <div className="zomi-read">
                      <button>Read more</button>
                    </div>
                  </div>
                </div>
              </div>
            {/* hero-second-card-first */}


            {/* hero-second-card-first */}
              <div className="hero-second-card-first">
                <div className="hero-second-card-first-container">
                  <div className="zomi-head">
                    <div className="zomi-logo">
                      <img src={Zlp} alt="ZOMI" />
                    </div>
                    <div className="zomi-name">$ZOMI</div>
                  </div>

                  <div className="zomi-para">
                    $ZLP is the liquidity provider token. Accrues 70% of the{" "}
                    <br />
                    platform's generated fees.
                  </div>

                  <div className="zomi-eth">
                    Ethereum APR: 1,652,103,194.99%
                  </div>

                  <div className="zomi-button">
                    <div className="zomi-buy">
                      <button>Buy</button>
                    </div>
                    <div className="zomi-read">
                      <button>Read more</button>
                    </div>
                  </div>
                </div>
              </div>
            {/* hero-second-card-first */}


            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default Hero;
