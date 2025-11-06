import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './LasVegasHousesForSale.css'

function LasVegasHousesForSale() {
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
      images: getPropertyImages(91, isCondosPage),
      badges: ["LISTED BY REDFIN", "3D & VIDEO TOUR", "Virtually Staged"],
      price: "$549,900",
      beds: 4,
      baths: 3.5,
      sqft: 2613,
      address: "4519 Mission Meadow Cir, Las Vegas, NV"
    },
    {
      id: 2,
      images: getPropertyImages(92, isCondosPage),
      badges: ["LISTED BY REDFIN", "3D WALKTHROUGH"],
      price: "$330,000",
      beds: 2,
      baths: 2,
      sqft: 1169,
      address: "7374 N Decatur Blvd #6, Las Vegas, NV 89"
    },
    {
      id: 3,
      images: getPropertyImages(93, isCondosPage),
      badges: ["LISTED BY REDFIN", "3D WALKTHROUGH"],
      price: "$365,000",
      beds: 3,
      baths: 3.5,
      sqft: 1589,
      address: "9050 W Tropicana Ave #1027, Las Vegas,"
    },
    {
      id: 4,
      images: getPropertyImages(94, isCondosPage),
      badges: ["LISTED BY REDFIN", "3D & VIDEO TOUR"],
      price: "$1,190,000",
      beds: 3,
      baths: 2.5,
      sqft: 2504,
      address: "9030 Chiffon Mist Ave, Las Vegas, NV 891"
    },
    {
      id: 5,
      images: getPropertyImages(95, isCondosPage),
      badges: ["REDFIN OPEN SAT, 2PM TO 5PM", "3D WALKTHROUGH"],
      price: "$425,000",
      beds: 3,
      baths: 2,
      sqft: 1450,
      address: "5678 Las Vegas Blvd S, Las Vegas, NV 89119"
    },
    {
      id: 6,
      images: getPropertyImages(96, isCondosPage),
      badges: ["LISTED BY REDFIN", "3D & VIDEO TOUR", "Virtually Staged"],
      price: "$675,000",
      beds: 4,
      baths: 3,
      sqft: 2200,
      address: "1234 Desert Springs Dr, Las Vegas, NV 89128"
    },
    {
      id: 7,
      images: getPropertyImages(97, isCondosPage),
      badges: ["LISTED BY REDFIN", "3D WALKTHROUGH"],
      price: "$295,000",
      beds: 2,
      baths: 2.5,
      sqft: 1250,
      address: "8901 W Flamingo Rd, Las Vegas, NV 89147"
    },
    {
      id: 8,
      images: getPropertyImages(98, isCondosPage),
      badges: ["LISTED BY REDFIN", "3D & VIDEO TOUR"],
      price: "$850,000",
      beds: 5,
      baths: 4,
      sqft: 3200,
      address: "4567 Mountain Vista Ct, Las Vegas, NV 89135"
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
    <section className="lasvegas-houses-section">
      <div className="lasvegas-houses-wrapper">
        <h2 className="lasvegas-houses-title">Las Vegas {isCondosPage ? 'condos' : 'houses'} for sale</h2>
        
        <div className="lasvegas-properties-container">
          <div className="lasvegas-properties-scroll-container">
            {properties.map((property) => {
              const currentImgIndex = getCurrentImageIndex(property.id)
              const currentImage = property.images[currentImgIndex]
              
              return (
              <div 
                key={property.id} 
                className="lasvegas-property-card"
                onMouseEnter={() => setHoveredCard(property.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="lasvegas-property-image-wrapper">
                  <img 
                    src={currentImage} 
                    alt={property.address}
                    className="lasvegas-property-image"
                    loading="lazy"
                  />
                  {hoveredCard === property.id && (
                    <>
                      <button 
                        className="lasvegas-image-nav-btn lasvegas-image-nav-left"
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
                        className="lasvegas-image-nav-btn lasvegas-image-nav-right"
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
                  <div className="lasvegas-property-badges">
                    {property.badges.map((badge, index) => {
                      const isRedBadge = badge.includes('LISTED') || badge.includes('OPEN') || badge.includes('COMING SOON')
                      const isWhiteBadge = badge.includes('Virtually Staged')
                      const badgeText = badge.includes('3D') || badge.includes('VIDEO') || badge.includes('WALKTHROUGH') 
                        ? (badge.includes('VIDEO') ? '3D & VIDEO TOUR' : '3D WALKTHROUGH')
                        : badge.includes('LISTED') 
                        ? (badge.includes('HRS AGO') ? badge : 'LISTED BY REDFIN')
                        : badge.includes('COMING SOON')
                        ? 'REDFIN COMING SOON'
                        : badge
                      return (
                        <span 
                          key={index} 
                          className={`lasvegas-badge ${
                            isWhiteBadge 
                              ? 'lasvegas-badge-white' 
                              : isRedBadge 
                              ? 'lasvegas-badge-red' 
                              : 'lasvegas-badge-purple'
                          }`}
                        >
                          {badgeText}
                        </span>
                      )
                    })}
                  </div>
                </div>
                
                <div className="lasvegas-property-details">
                  <div className="lasvegas-property-price-row">
                    <span className="lasvegas-property-price">{property.price}</span>
                    <button 
                      className={`lasvegas-favorite-btn ${favorites[property.id] ? 'lasvegas-favorite-active' : ''}`}
                      onClick={() => toggleFavorite(property.id)}
                      aria-label="Add to favorites"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                      </svg>
                    </button>
                  </div>
                  <div className="lasvegas-property-specs">
                    {property.beds} bed{property.beds !== 1 ? 's' : ''} {property.baths} bath{property.baths % 1 === 0 && property.baths !== 1 ? 's' : ''}
                    {property.sqft ? ` ${property.sqft.toLocaleString()} sq ft` : ' — sq ft'}
                  </div>
                  <div className="lasvegas-property-address">{property.address}</div>
                </div>
              </div>
              )
            })}
          </div>
          
          <button 
            className="lasvegas-scroll-button"
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
        
        <a href="#" className="lasvegas-see-all-link">
          See all 8365 Las Vegas {isCondosPage ? 'condos' : 'houses'} for sale
        </a>
      </div>
    </section>
  )
}

export default LasVegasHousesForSale

