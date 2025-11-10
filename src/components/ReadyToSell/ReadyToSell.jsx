import { useState } from 'react'
import './ReadyToSell.css'

function ReadyToSell() {
  const [address, setAddress] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="ready-to-sell-section">
      <div className="ready-to-sell-container">
        <div className="ready-to-sell-content">
          <div className="ready-to-sell-left">
            <h2 className="ready-to-sell-heading">
              Ready to sell? We'll help you make<br />
              the most money possible.
            </h2>
          </div>
          
          <div className="ready-to-sell-right">
            <p className="ready-to-sell-instruction">
              Schedule a consultation with a Redfin Premier agent.
            </p>
            <form className="ready-to-sell-form" onSubmit={handleSubmit}>
              <div className="ready-to-sell-input-group">
                <input
                  type="text"
                  placeholder="Enter your street address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="ready-to-sell-input"
                />
                <button type="submit" className="ready-to-sell-button">
                  Next
                </button>
              </div>
            </form>
            <p className="ready-to-sell-disclaimer">
              Redfin Premier not available in all markets or for all homes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReadyToSell





