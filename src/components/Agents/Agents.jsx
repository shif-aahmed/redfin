import { useState } from 'react'
import './Agents.css'

function Agents() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const sales = [
    {
      location: 'Dallas, TX',
      price: '$3,000,000',
      soldDate: 'SOLD 09/19/24',
      agentName: 'Jack DuVall',
      agentImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80',
      propertyImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&q=80'
    },
    {
      location: 'Seattle, WA',
      price: '$2,850,000',
      soldDate: 'SOLD 08/15/24',
      agentName: 'Sarah Johnson',
      agentImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80',
      propertyImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop&q=80'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sales.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sales.length) % sales.length)
  }

  const currentSale = sales[currentSlide]

  return (
    <div className="agents-section">
      <div className="agents-container">
        <div className="agents-content">
          <div className="agents-image-wrapper">
            <img 
              src={currentSale.propertyImage}
              alt="Redfin Premier property"
              className="agents-property-image"
            />
          </div>
          
          <div className="agents-info-panel">
            <h3 className="agents-title">More Redfin Premier sales</h3>
            <div className="agents-location">{currentSale.location}</div>
            <div className="agents-price-row">
              <div className="agents-price">{currentSale.price}</div>
              <div className="agents-sold-badge">{currentSale.soldDate}</div>
            </div>
            <div className="agents-agent-section">
              <div className="agents-agent-label">AGENT</div>
              <div className="agents-agent-info">
                <img 
                  src={currentSale.agentImage}
                  alt={currentSale.agentName}
                  className="agents-agent-photo"
                />
                <div className="agents-agent-name">{currentSale.agentName}</div>
              </div>
            </div>
            <button className="agents-view-button">View home</button>
            <div className="agents-navigation">
              <button 
                className="agents-nav-arrow agents-nav-left" 
                onClick={prevSlide}
                aria-label="Previous sale"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <span className="agents-slide-indicator">{currentSlide + 1}/{sales.length}</span>
              <button 
                className="agents-nav-arrow agents-nav-right" 
                onClick={nextSlide}
                aria-label="Next sale"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agents


