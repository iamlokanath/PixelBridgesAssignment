import React from 'react'
import Logo from './Image/New Logo.png'
const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="footer-container">
            <div className="footer-heading">
            <div className="footer-image">
                <img src={Logo} alt="the logo of Romi.Finance" />
              </div>
              <div className="footer-brand">Romi.Finance</div>
            </div>

            <div className="social">
                <div className="social-icon">
                <i className="fab fa-twitter"></i>
                </div>
                <div className="social-icon">M</div>
                <div className="social-icon">
                <i className="fab fa-github"></i>
                </div>
                <div className="social-icon">
                <i className="fab fa-telegram"></i>
                </div>
                <div className="social-icon">
                <i className="fab fa-discord"></i>
                </div>

            </div>

            <div className="footer-last">
                <div className="footer-last-desc">Terms and Conditions</div>
                <div className="footer-last-desc">Referral Terms</div>
                <div className="footer-last-desc">Media Kit</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
