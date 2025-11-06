import React from 'react'
import './LowerFees.css'

function LowerFees() {
  return (
    <div className="lower-fees-section">
      <div className="lower-fees-container">
        <div className="lower-fees-content">
          <div className="lower-fees-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1200&h=800&fit=crop&q=80" 
              alt="Couple relaxing in a modern living room"
              className="lower-fees-image"
            />
          </div>
          <div className="lower-fees-text-content">
            <h2 className="lower-fees-heading">Lower fees. Higher proceeds.</h2>
            <p className="lower-fees-description">
              Keep more of the proceeds from your home sale by paying a 1% listing fee when you buy and sell with us, less than half of what other brokerages commonly charge.
            </p>
            <div className="lower-fees-comparison">
              <div className="lower-fees-redfin">
                <span className="lower-fees-percentage">1%</span>
                <span className="lower-fees-label">BUY AND SELL<br />WITH REDFIN®</span>
              </div>
              <div className="lower-fees-separator"></div>
              <div className="lower-fees-other">
                <span className="lower-fees-percentage">2.5%-3%</span>
                <span className="lower-fees-label">OTHER BROKERAGES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LowerFees

