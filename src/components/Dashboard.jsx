import React from 'react'
import Navbar from './Navbar'
import Stats from './Image/ic_avalanche_24.4f4088f4.svg'
import "./css/Dashboard.css"
const Dashboard = () => {
  return (
    <>
    <Navbar/>

    <div className="dashboard">
      <div className="dashboard-container">

        {/* stats starts here */}
        <div className="stats">
          <div className="stats-container">
            <div className="stats-heading">
                <div className="stats-head">
                  <div className="stats-title">Stats</div>
                  <div className="stats-logo"><img src={Stats} alt="Stats" /></div>
                </div>
                <div className="stats-para">
                Ethereum Total Stats start from 06 Jan 2022. <br />
                For detailed stats:
                </div>
            </div>
            <div className="stats-card">
                <div className="stats-card-container">

                  {/* card1 starts */}
                  <div className="stats-card-1">
                    <div className="stats-card-1-container">
                      <div className="stats-card1-title">Overview</div>
                      <div className="stats-menu">

                        <div className="stats-menu-item">
                          <div className="stats-menu-item-left">AUM</div>
                          <div className="stats-menu-item-right">$34</div>
                        </div>

                        <div className="stats-menu-item">
                          <div className="stats-menu-item-left">$ZLP Pool</div>
                          <div className="stats-menu-item-right">$34</div>
                        </div>

                        <div className="stats-menu-item">
                          <div className="stats-menu-item-left">24h Volume</div>
                          <div className="stats-menu-item-right">$0</div>
                        </div>

                        <div className="stats-menu-item">
                          <div className="stats-menu-item-left">Long Positions</div>
                          <div className="stats-menu-item-right">$0</div>
                        </div>

                        <div className="stats-menu-item">
                          <div className="stats-menu-item-left">Short Positions</div>
                          <div className="stats-menu-item-right">$0</div>
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* card1 starts */}

                  {/* card1 starts */}
                  <div className="stats-card-1">
                    <div className="stats-card-1-container">
                      <div className="stats-card1-title">Overview</div>
                      <div className="stats-menu">

                        <div className="stats-menu-item">
                          <div className="stats-menu-item-left">AUM</div>
                          <div className="stats-menu-item-right">$34</div>
                        </div>

                        <div className="stats-menu-item">
                          <div className="stats-menu-item-left">$ZLP Pool</div>
                          <div className="stats-menu-item-right">$34</div>
                        </div>

                        <div className="stats-menu-item">
                          <div className="stats-menu-item-left">24h Volume</div>
                          <div className="stats-menu-item-right">$0</div>
                        </div>

                        <div className="stats-menu-item">
                          <div className="stats-menu-item-left">Long Positions</div>
                          <div className="stats-menu-item-right">$0</div>
                        </div>

                        <div className="stats-menu-item">
                          <div className="stats-menu-item-left">Short Positions</div>
                          <div className="stats-menu-item-right">$0</div>
                        </div>
                  {/* card1 starts */}

                  
                      </div>
                    </div>
                  </div>



                </div>
            </div>
          </div>
        </div>

        {/* tokens starts here */}
        <div className="tokens">
          <div className="tokens-container">

          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard
