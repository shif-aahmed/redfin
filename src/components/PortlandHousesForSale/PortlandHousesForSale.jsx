import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './PortlandHousesForSale.css'

function PortlandHousesForSale() {
  const location = useLocation()
  const isCondosPage = location.pathname === '/condos-for-sale'
  const [favorites, setFavorites] = useState({})
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageIndices, setImageIndices] = useState({})
  const [hoveredCard, setHoveredCard] = useState(null)

  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const getPropertyImages = (baseId, isCondos = false) => {
    const houseImageIds = [
      '1560448204-e02f11c3d0e2', '1568605114967-8130f3a36994', '1512917774080-9991f1c4c750',
      '1600596542815-ffad4c1539a9', '1600607687939-ce8a6c25118c', '1600566753190-17f0baa2a6c3',
      '1545324418-cc1a3fa10c00', '1502672260266-1c1ef2d93688', '1600585154520-a3ddc5e85de9',
      '1600047509357-8f6a3b0a1e1a'
    ]
    const condoImageIds = [
      '1522771739844-3cd7fbc6b87a', '1570129477492-45c003edd2be', '1554995206-c18cde60217e',
      '1560448204-61dc47d3567a', '1564013799919-ab600027ffc6', '1560448075-8d1e0e0c9c6a',
      '1556912172-45b7abe8b7e1', '1556912173-67134e2a6c7a', '1556912174-2a1c1b2a1c2a',
      '1556912175-2a1c1b2a1c3a'
    ]
    const imageIds = isCondos ? condoImageIds : houseImageIds
    return imageIds.map((id, index) => 
      `https://images.unsplash.com/photo-${id}?w=400&h=300&fit=crop&sig=${baseId}${index}`
    )
  }

  const allProperties = [
    {
      id: 1,
      images: getPropertyImages(41, isCondosPage),
      badges: ["REDFIN OPEN SAT, 11AM TO 1PM", "3D WALKTHROUGH"],
      price: "$228,000",
      beds: 1,
      baths: 1,
      sqft: 597,
      address: "1406 NE 21st Ave, Portland, OR 97232"
    },
    {
      id: 2,
      images: getPropertyImages(42, isCondosPage),
      badges: ["LISTED BY REDFIN", "3D WALKTHROUGH"],
      price: "$225,000",
      beds: 1,
      baths: 1,
      sqft: 545,
      address: "5400 NE 30th Ave #304, Portland, OR 97211"
    },
    {
      id: 3,
      images: getPropertyImages(43, isCondosPage),
      badges: ["LISTED BY REDFIN", "3D WALKTHROUGH"],
      price: "$179,000",
      beds: 1,
      baths: 1,
      sqft: 596,
      address: "255 SW Harrison St Unit 6E, Portland, OR 97201"
    },
    {
      id: 4,
      images: getPropertyImages(44, isCondosPage),
      badges: ["LISTED BY REDFIN", "3D & VIDEO TOUR"],
      price: "$1,249,000",
      beds: 4,
      baths: 3,
      sqft: 2834,
      address: "7037 SW Canby Ln, Portland, OR 97223"
    },
    {
      id: 5,
      images: getPropertyImages(45, isCondosPage),
      badges: ["REDFIN OPEN SUN, 1PM TO 3PM", "3D WALKTHROUGH"],
      price: "$425,000",
      beds: 2,
      baths: 2,
      sqft: 1250,
      address: "2345 NW 23rd Ave, Portland, OR 97210"
    },
    {
      id: 6,
      images: getPropertyImages(46, isCondosPage),
      badges: ["LISTED BY REDFIN", "3D & VIDEO TOUR"],
      price: "$675,000",
      beds: 3,
      baths: 2,
      sqft: 1800,
      address: "4567 SE Division St, Portland, OR 97206"
    },
    {
      id: 7,
      images: getPropertyImages(47, isCondosPage),
      badges: ["REDFIN OPEN SAT, 2PM TO 4PM", "3D WALKTHROUGH"],
      price: "$325,000",
      beds: 2,
      baths: 1,
      sqft: 950,
      address: "7890 N Mississippi Ave, Portland, OR 97217"
    },
    {
      id: 8,
      images: getPropertyImages(48, isCondosPage),
      badges: ["LISTED BY REDFIN", "3D WALKTHROUGH"],
      price: "$895,000",
      beds: 4,
      baths: 3,
      sqft: 2400,
      address: "3214 SW Terwilliger Blvd, Portland, OR 97219"
    }
  ]

  const scrollRight = () => {
    const nextIndex = currentIndex + 4
    if (nextIndex < allProperties.length) {
      setCurrentIndex(nextIndex)
    } else {
      setCurrentIndex(0)
    }
  }

  const properties = allProperties.slice(currentIndex, currentIndex + 4)

  const getCurrentImageIndex = (propertyId) => {
    return imageIndices[propertyId] || 0
  }

  const changeImage = (propertyId, direction) => {
    const property = allProperties.find(p => p.id === propertyId)
    if (!property) return
    
    const currentImgIndex = getCurrentImageIndex(propertyId)
    let newIndex
    
    if (direction === 'next') {
      newIndex = (currentImgIndex + 1) % property.images.length
    } else {
      newIndex = currentImgIndex === 0 ? property.images.length - 1 : currentImgIndex - 1
    }
    
    setImageIndices(prev => ({
      ...prev,
      [propertyId]: newIndex
    }))
  }

  return (
    <section className="portland-houses-section">
      <div className="portland-houses-wrapper">
        <h2 className="portland-houses-title">Portland {isCondosPage ? 'condos' : 'houses'} for sale</h2>
        
        <div className="portland-properties-container">
          <div className="portland-properties-scroll-container">
            {properties.map((property) => {
              const currentImgIndex = getCurrentImageIndex(property.id)
              const currentImage = property.images[currentImgIndex]
              
              return (
              <div 
                key={property.id} 
                className="portland-property-card"
                onMouseEnter={() => setHoveredCard(property.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="portland-property-image-wrapper">
                  <img 
                    src={currentImage} 
                    alt={property.address}
                    className="portland-property-image"
                    loading="lazy"
                  />
                  {hoveredCard === property.id && (
                    <>
                      <button 
                        className="portland-image-nav-btn portland-image-nav-left"
                        onClick={(e) => {
                          e.stopPropagation()
                          changeImage(property.id, 'prev')
                        }}
                        aria-label="Previous image"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M15 18l-6-6 6-6"/>
                        </svg>
                      </button>
                      <button 
                        className="portland-image-nav-btn portland-image-nav-right"
                        onClick={(e) => {
                          e.stopPropagation()
                          changeImage(property.id, 'next')
                        }}
                        aria-label="Next image"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 18l6-6-6-6"/>
                        </svg>
                      </button>
                    </>
                  )}
                  <div className="portland-property-badges">
                    {property.badges.map((badge, index) => {
                      const isRedBadge = badge.includes('LISTED') || badge.includes('OPEN')
                      const badgeText = badge.includes('3D') || badge.includes('VIDEO') || badge.includes('WALKTHROUGH') 
                        ? (badge.includes('VIDEO') ? '3D & VIDEO TOUR' : '3D WALKTHROUGH')
                        : badge.includes('LISTED') 
                        ? 'LISTED BY REDFIN' 
                        : badge
                      return (
                        <span 
                          key={index} 
                          className={`portland-badge ${isRedBadge ? 'portland-badge-red' : 'portland-badge-purple'}`}
                        >
                          {badgeText}
                        </span>
                      )
                    })}
                  </div>
                </div>
                
                <div className="portland-property-details">
                  <div className="portland-property-price-row">
                    <span className="portland-property-price">{property.price}</span>
                    <button 
                      className={`portland-favorite-btn ${favorites[property.id] ? 'portland-favorite-active' : ''}`}
                      onClick={() => toggleFavorite(property.id)}
                      aria-label="Add to favorites"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                      </svg>
                    </button>
                  </div>
                  <div className="portland-property-specs">
                    {property.beds} bed{property.beds !== 1 ? 's' : ''} {property.baths} bath{property.baths % 1 === 0 && property.baths !== 1 ? 's' : ''}
                    {property.sqft ? ` ${property.sqft.toLocaleString()} sq ft` : ' — sq ft'}
                  </div>
                  <div className="portland-property-address">{property.address}</div>
                </div>
              </div>
              )
            })}
          </div>
          
          <button 
            className="portland-scroll-button"
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
        
        <a href="#" className="portland-see-all-link">
          See all 3269 Portland {isCondosPage ? 'condos' : 'houses'} for sale
        </a>
      </div>
    </section>
  )
}

export default PortlandHousesForSale

