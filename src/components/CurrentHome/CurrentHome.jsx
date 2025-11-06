import './CurrentHome.css'

function CurrentHome() {
  return (
    <div className="current-home-section">
      <div className="current-home-container">
        <div className="current-home-content">
          <div className="current-home-left">
            <div className="current-home-image-container">
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&q=80" 
                alt="Modern house with For Sale sign and real estate agent"
                className="current-home-image"
              />
            </div>
          </div>
          
          <div className="current-home-right">
            <h2 className="current-home-heading">Ready to sell your current home?</h2>
            <p className="current-home-description">
              Our agents have the experience to price, market, and sell your home for the best price possible. Plus, Redfin listings get seen by 70% more buyers. And you get it all for half the listing fee other brokerages often charge.*
            </p>
            <button className="current-home-button">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentHome


