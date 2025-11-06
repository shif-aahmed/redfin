import './ExploreWhether.css'

function ExploreWhether() {
  return (
    <div className="explore-whether-section">
      <div className="explore-whether-container">
        <div className="explore-whether-cards">
          <div className="explore-whether-card">
            <div className="explore-whether-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 20 L16 20 M20 20 L24 20 M28 20 L32 20" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
                <rect x="18" y="24" width="12" height="16" fill="none" stroke="#333" strokeWidth="2"/>
                <polygon points="18,24 24,16 30,24" fill="#d32f2f" stroke="#333" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="explore-whether-title">Should You Rent or Buy a Home?</h3>
            <p className="explore-whether-description">
              Explore whether continuing to rent or buying a home is the right next step.
            </p>
            <a href="#" className="explore-whether-link">Learn more</a>
          </div>

          <div className="explore-whether-card">
            <div className="explore-whether-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="20" r="8" fill="none" stroke="#333" strokeWidth="2"/>
                <path d="M24 28 L24 36 M20 32 L28 32" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="24" cy="20" r="4" fill="#d32f2f"/>
              </svg>
            </div>
            <h3 className="explore-whether-title">What are the Benefits of Homeownership?</h3>
            <p className="explore-whether-description">
              Learn the benefits of owning a home as you decide if you're ready to buy.
            </p>
            <a href="#" className="explore-whether-link">Learn more</a>
          </div>

          <div className="explore-whether-card">
            <div className="explore-whether-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="16" y="20" width="16" height="20" fill="none" stroke="#333" strokeWidth="2" rx="2"/>
                <rect x="18" y="22" width="12" height="16" fill="none" stroke="#333" strokeWidth="2" rx="1"/>
                <rect x="20" y="24" width="8" height="12" fill="none" stroke="#333" strokeWidth="2" rx="1"/>
                <text x="24" y="32" textAnchor="middle" fill="#333" fontSize="12" fontWeight="bold">$</text>
                <rect x="28" y="20" width="4" height="4" fill="#d32f2f"/>
              </svg>
            </div>
            <h3 className="explore-whether-title">How Much House Can I Afford?</h3>
            <p className="explore-whether-description">
              Find out how much you can afford and what homes fit into your budget before you start the homebuying process.
            </p>
            <a href="#" className="explore-whether-link">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExploreWhether


