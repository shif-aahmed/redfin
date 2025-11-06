import { Link } from 'react-router-dom'
import './BuyWithRedfin.css'

function BuyWithRedfin() {
  return (
    <>
      <div className="secondary-navbar">
        <div className="secondary-navbar-container">
          <div className="secondary-navbar-links">
            <a href="#" className="secondary-nav-link">Why Redfin?</a>
            <a href="#" className="secondary-nav-link">Our Agents</a>
            <a href="#" className="secondary-nav-link">Buy with Redfin</a>
            <a href="#" className="secondary-nav-link">Sell with Redfin</a>
          </div>
          <button className="secondary-nav-button">Meet a Redfin agent</button>
        </div>
      </div>
      <div className="buy-with-redfin-page">
        <div className="buy-with-redfin-container">
          <div className="buy-with-redfin-content">
            <div className="buy-with-redfin-left">
              <h1 className="buy-with-redfin-heading">Redfin helps you home.</h1>
              <p className="buy-with-redfin-description">
                We've combined the industry's most experienced agents with cutting-edge technology and financing from Rocket Mortgage®, to make your home buying experience seamless. With our top-rated app, you'll see updated listings every two minutes and book same-day home tours to stay ahead of other buyers.*
              </p>
              
              <div className="agent-search-section">
                <div className="agent-search-container">
                  <input 
                    type="text" 
                    placeholder="Find an agent in your area"
                    className="agent-search-input"
                  />
                  <button className="agent-search-button" aria-label="Search">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 19L13 13M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="buy-with-redfin-right">
              <div className="hero-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&q=80" 
                  alt="Redfin agents helping clients"
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BuyWithRedfin

