import { useState } from 'react'
import './ViewCard.css'

function ViewCard() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = [
    {
      agent: {
        name: 'Felicia Barber',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&q=80',
        achievement1: '$170M+ in closed deals',
        achievement2: '2024 Top Realtors - Fort Worth Magazine'
      },
      property: {
        location: 'Fort Worth, TX',
        price: '$3,350,000',
        soldDate: 'SOLD 05/01/2024',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&q=80'
      }
    },
    {
      agent: {
        name: 'Mehrnaz "Mary" Bazargan',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&q=80',
        achievement1: '$340M+ in closed deals',
        achievement2: '2023 Elite Producer Platinum - Washingtonian Magazine'
      },
      property: {
        location: 'Washington, DC',
        price: '$2,900,000',
        soldDate: 'SOLD 04/30/2024',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop&q=80'
      }
    },
    {
      agent: {
        name: 'Sarah Johnson',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&q=80',
        achievement1: '$250M+ in closed deals',
        achievement2: '2024 Top Producer - Los Angeles Times'
      },
      property: {
        location: 'Los Angeles, CA',
        price: '$4,200,000',
        soldDate: 'SOLD 03/15/2024',
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop&q=80'
      }
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const currentSlide = slides[currentIndex]

  return (
    <div className="view-card-section">
      <div className="view-card-container">
        <button className="agent-nav-button agent-nav-left" onClick={prevSlide} aria-label="Previous agent">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="view-card-content">
          <div className="view-card-left">
            <div className="agent-card">
              <div className="agent-image-container">
                <img 
                  src={currentSlide.agent.image}
                  alt={currentSlide.agent.name}
                  className="agent-image"
                />
              </div>
              <div className="agent-name">{currentSlide.agent.name}</div>
              <div className="agent-achievements">
                <div className="achievement-box">{currentSlide.agent.achievement1}</div>
                <div className="achievement-box">{currentSlide.agent.achievement2}</div>
              </div>
              <button className="view-profile-button">View profile</button>
            </div>
          </div>
          
          <div className="view-card-right">
            <div className="property-display">
              <div className="property-image-container">
                <img 
                  src={currentSlide.property.image}
                  alt={currentSlide.property.location}
                  className="property-image"
                />
                <div className="property-overlay">
                  <div className="property-location">{currentSlide.property.location}</div>
                  <div className="property-price-row">
                    <div className="property-price">{currentSlide.property.price}</div>
                    <div className="property-sold-badge">{currentSlide.property.soldDate}</div>
                  </div>
                </div>
              </div>
              <button className="property-nav-button" onClick={nextSlide} aria-label="Next property">
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

export default ViewCard

