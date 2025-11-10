import { useState } from 'react'
import './BuyingOrSelling.css'

function BuyingOrSelling() {
  const [selectedArea, setSelectedArea] = useState('Chicago Area')

  const areas = [
    'Chicago Area',
    'New York Area',
    'Los Angeles Area',
    'San Francisco Area',
    'Seattle Area'
  ]

  return (
    <div className="buying-or-selling-section">
      <div className="buying-or-selling-container">
        <p className="buying-or-selling-intro">
          Buying or selling a home can be complicated, and Redfin is here to help! Join us for a free class to learn how to navigate the process from start to finish while enjoying food and drinks on us. Or, if you prefer to learn from the comfort of your home or office, sign up for one of our webinars instead! Either way, a local Redfin Agent will make sure you're ready for your real estate journey.
        </p>

        <div className="buying-or-selling-dropdown-section">
          <span className="buying-or-selling-dropdown-label">View all classes in</span>
          <div className="buying-or-selling-dropdown-wrapper">
            <select 
              className="buying-or-selling-dropdown"
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
            >
              {areas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="buying-or-selling-divider"></div>

        <div className="buying-or-selling-no-classes">
          <div className="buying-or-selling-calendar-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
              <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <h2 className="buying-or-selling-no-classes-title">No Upcoming Classes</h2>
        </div>

        <p className="buying-or-selling-message">
          Sorry, there aren't any upcoming classes in your area. Don't worry, you can learn more about buying or selling by talking with a Redfin agent.
        </p>
      </div>
    </div>
  )
}

export default BuyingOrSelling




