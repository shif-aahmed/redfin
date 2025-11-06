import { useState } from 'react'
import './GetSaleStarted.css'

function GetSaleStarted() {
  const [address, setAddress] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="get-sale-started-section">
      <div className="get-sale-started-container">
        <h2 className="get-sale-started-heading">Let's get your sale started.</h2>
        <form className="get-sale-started-form" onSubmit={handleSubmit}>
          <div className="get-sale-started-input-group">
            <input
              type="text"
              placeholder="Enter your street address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="get-sale-started-input"
            />
            <button type="submit" className="get-sale-started-button">
              Next
            </button>
          </div>
        </form>
        <p className="get-sale-started-disclaimer">
          * Based on <span className="redfin-link">Redfin.com</span> search activity in the calendar year 2021.
        </p>
      </div>
    </div>
  )
}

export default GetSaleStarted

