import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './SanDiegoHousesForSale.css'

function SanDiegoHousesForSale() {
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
      images: getPropertyImages(31, isCondosPage),
      badges: ["REDFIN OPEN SAT, 1PM TO 4PM", "3D WALKTHROUGH"],
      price: "$765,000",
      beds: 2,
      baths: 2.5,
      sqft: 1074,
      address: "3926 Voltaire St, San Diego, CA 92107"
    },
    {
      id: 2,
      images: getPropertyImages(32, isCondosPage),
      badges: ["LISTED BY REDFIN", "3D WALKTHROUGH"],
      price: "$499,000",
      beds: 2,
      baths: 2,
      sqft: 1009,
      address: "6780 Friars Rd #225, San Diego, CA 92108"
    },
    {
      id: 3,
      images: getPropertyImages(33, isCondosPage),
      badges: ["LISTED BY REDFIN", "3D WALKTHROUGH"],
      price: "$540,000",
      beds: 2,
      baths: 2,
      sqft: 850,
      address: "9939 Erma Rd #101, San Diego, CA 92131"
    },
    {
      id: 4,
      images: getPropertyImages(34, isCondosPage),
      badges: ["LISTED BY REDFIN", "3D WALKTHROUGH"],
      price: "$769,900",
      beds: 2,
      baths: 2,
      sqft: 1362,
      address: "2930 Cowley Way #211, San Diego, CA 92123"
    },
    {
      id: 5,
      images: getPropertyImages(35, isCondosPage),
      badges: ["REDFIN OPEN SUN, 12PM TO 3PM", "3D WALKTHROUGH"],
      price: "$625,000",
      beds: 3,
      baths: 2,
      sqft: 1450,
      address: "4567 La Jolla Blvd, La Jolla, CA 92037"
    },
    {
      id: 6,
      images: getPropertyImages(36, isCondosPage),
      badges: ["LISTED BY REDFIN", "3D & VIDEO TOUR"],
      price: "$895,000",
      beds: 3,
      baths: 2.5,
      sqft: 1800,
      address: "7890 Coronado Ave, Coronado, CA 92118"
    },
    {
      id: 7,
      images: getPropertyImages(37, isCondosPage),
      badges: ["REDFIN OPEN SAT, 2PM TO 5PM", "3D WALKTHROUGH"],
      price: "$425,000",
      beds: 1,
      baths: 1,
      sqft: 750,
      address: "3214 Pacific Beach Dr, San Diego, CA 92109"
    },
    {
      id: 8,
      images: getPropertyImages(38, isCondosPage),
      badges: ["LISTED BY REDFIN", "3D WALKTHROUGH"],
      price: "$1,150,000",
      beds: 4,
      baths: 3,
      sqft: 2450,
      address: "5432 Del Mar Heights Rd, Del Mar, CA 92014"
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
    <section className="sandiego-houses-section">
      <div className="sandiego-houses-wrapper">
        <h2 className="sandiego-houses-title">San Diego {isCondosPage ? 'condos' : 'houses'} for sale</h2>
        
        <div className="sandiego-properties-container">
          <div className="sandiego-properties-scroll-container">
            {properties.map((property) => {
              const currentImgIndex = getCurrentImageIndex(property.id)
              const currentImage = property.images[currentImgIndex]
              
              return (
              <div 
                key={property.id} 
                className="sandiego-property-card"
                onMouseEnter={() => setHoveredCard(property.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="sandiego-property-image-wrapper">
                  <img 
                    src={currentImage} 
                    alt={property.address}
                    className="sandiego-property-image"
                    loading="lazy"
                  />
                  {hoveredCard === property.id && (
                    <>
                      <button 
                        className="sandiego-image-nav-btn sandiego-image-nav-left"
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
                        className="sandiego-image-nav-btn sandiego-image-nav-right"
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
                  <div className="sandiego-property-badges">
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
                          className={`sandiego-badge ${isRedBadge ? 'sandiego-badge-red' : 'sandiego-badge-purple'}`}
                        >
                          {badgeText}
                        </span>
                      )
                    })}
                  </div>
                </div>
                
                <div className="sandiego-property-details">
                  <div className="sandiego-property-price-row">
                    <span className="sandiego-property-price">{property.price}</span>
                    <button 
                      className={`sandiego-favorite-btn ${favorites[property.id] ? 'sandiego-favorite-active' : ''}`}
                      onClick={() => toggleFavorite(property.id)}
                      aria-label="Add to favorites"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                      </svg>
                    </button>
                  </div>
                  <div className="sandiego-property-specs">
                    {property.beds} bed{property.beds !== 1 ? 's' : ''} {property.baths} bath{property.baths % 1 === 0 && property.baths !== 1 ? 's' : ''}
                    {property.sqft ? ` ${property.sqft.toLocaleString()} sq ft` : ' — sq ft'}
                  </div>
                  <div className="sandiego-property-address">{property.address}</div>
                </div>
              </div>
              )
            })}
          </div>
          
          <button 
            className="sandiego-scroll-button"
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
        
        <a href="#" className="sandiego-see-all-link">
          See all 2684 San Diego {isCondosPage ? 'condos' : 'houses'} for sale
        </a>
      </div>
    </section>
  )
}

export default SanDiegoHousesForSale

