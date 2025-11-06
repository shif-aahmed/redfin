import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './SanJoseHousesForSale.css'

function SanJoseHousesForSale() {
  const location = useLocation()
  const isCondosPage = location.pathname === '/condos-for-sale'
  const isLandPage = location.pathname === '/land-for-sale'
  const isOpenHousesPage = location.pathname === '/open-houses'
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
      images: getPropertyImages(71, isCondosPage),
      badges: ["LISTED BY REDFIN", "3D & VIDEO TOUR"],
      price: "$1,798,000",
      beds: 4,
      baths: 3,
      sqft: 2504,
      address: "5330 Avenida Almendros, San Jose, CA 95123"
    },
    {
      id: 2,
      images: getPropertyImages(72, isCondosPage),
      badges: ["LISTED BY REDFIN", "3D WALKTHROUGH"],
      price: "$468,888",
      beds: 2,
      baths: 1,
      sqft: 810,
      address: "5486 Tradewinds Walkway #1, San Jose, CA 95123"
    },
    {
      id: 3,
      images: getPropertyImages(73, isCondosPage),
      badges: ["LISTED BY REDFIN", "3D WALKTHROUGH"],
      price: "$999,888",
      beds: 3,
      baths: 3,
      sqft: 1678,
      address: "610 Skyway Dr, San Jose, CA 95111"
    },
    {
      id: 4,
      images: getPropertyImages(74, isCondosPage),
      badges: ["LISTED BY REDFIN", "3D WALKTHROUGH"],
      price: "$1,300,000",
      beds: 4,
      baths: 2.5,
      sqft: 2199,
      address: "445 S 22nd St, San Jose, CA 95116"
    },
    {
      id: 5,
      images: getPropertyImages(75, isCondosPage),
      badges: ["REDFIN OPEN SAT, 12PM TO 3PM", "3D WALKTHROUGH"],
      price: "$875,000",
      beds: 3,
      baths: 2,
      sqft: 1450,
      address: "1234 Willow Glen Way, San Jose, CA 95125"
    },
    {
      id: 6,
      images: getPropertyImages(76, isCondosPage),
      badges: ["LISTED BY REDFIN", "3D & VIDEO TOUR"],
      price: "$1,125,000",
      beds: 3,
      baths: 2.5,
      sqft: 1800,
      address: "5678 Blossom Hill Rd, San Jose, CA 95123"
    },
    {
      id: 7,
      images: getPropertyImages(77, isCondosPage),
      badges: ["REDFIN OPEN SUN, 1PM TO 4PM", "3D WALKTHROUGH"],
      price: "$675,000",
      beds: 2,
      baths: 2,
      sqft: 1250,
      address: "7890 Almaden Expy, San Jose, CA 95120"
    },
    {
      id: 8,
      images: getPropertyImages(78, isCondosPage),
      badges: ["LISTED BY REDFIN", "3D WALKTHROUGH"],
      price: "$1,450,000",
      beds: 4,
      baths: 3,
      sqft: 2400,
      address: "3214 Saratoga Ave, San Jose, CA 95129"
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
    <section className="sanjose-houses-section">
      <div className="sanjose-houses-wrapper">
        <h2 className="sanjose-houses-title">San Jose {isOpenHousesPage ? 'open houses' : isLandPage ? 'land' : isCondosPage ? 'condos' : 'houses'}{isOpenHousesPage ? '' : ' for sale'}</h2>
        
        <div className="sanjose-properties-container">
          <div className="sanjose-properties-scroll-container">
            {properties.map((property) => {
              const currentImgIndex = getCurrentImageIndex(property.id)
              const currentImage = property.images[currentImgIndex]
              
              return (
              <div 
                key={property.id} 
                className="sanjose-property-card"
                onMouseEnter={() => setHoveredCard(property.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="sanjose-property-image-wrapper">
                  <img 
                    src={currentImage} 
                    alt={property.address}
                    className="sanjose-property-image"
                    loading="lazy"
                  />
                  {hoveredCard === property.id && (
                    <>
                      <button 
                        className="sanjose-image-nav-btn sanjose-image-nav-left"
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
                        className="sanjose-image-nav-btn sanjose-image-nav-right"
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
                  <div className="sanjose-property-badges">
                    {property.badges.map((badge, index) => {
                      const isRedBadge = badge.includes('LISTED') || badge.includes('OPEN') || badge.includes('COMING SOON')
                      const badgeText = badge.includes('3D') || badge.includes('VIDEO') || badge.includes('WALKTHROUGH') 
                        ? (badge.includes('VIDEO') ? '3D & VIDEO TOUR' : '3D WALKTHROUGH')
                        : badge.includes('LISTED') 
                        ? 'LISTED BY REDFIN' 
                        : badge.includes('COMING SOON')
                        ? 'REDFIN COMING SOON'
                        : badge
                      return (
                        <span 
                          key={index} 
                          className={`sanjose-badge ${isRedBadge ? 'sanjose-badge-red' : 'sanjose-badge-purple'}`}
                        >
                          {badgeText}
                        </span>
                      )
                    })}
                  </div>
                </div>
                
                <div className="sanjose-property-details">
                  <div className="sanjose-property-price-row">
                    <span className="sanjose-property-price">{property.price}</span>
                    <button 
                      className={`sanjose-favorite-btn ${favorites[property.id] ? 'sanjose-favorite-active' : ''}`}
                      onClick={() => toggleFavorite(property.id)}
                      aria-label="Add to favorites"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                      </svg>
                    </button>
                  </div>
                  <div className="sanjose-property-specs">
                    {property.beds} bed{property.beds !== 1 ? 's' : ''} {property.baths} bath{property.baths % 1 === 0 && property.baths !== 1 ? 's' : ''}
                    {property.sqft ? ` ${property.sqft.toLocaleString()} sq ft` : ' — sq ft'}
                  </div>
                  <div className="sanjose-property-address">{property.address}</div>
                </div>
              </div>
              )
            })}
          </div>
          
          <button 
            className="sanjose-scroll-button"
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
        
        <a href="#" className="sanjose-see-all-link">
          See all 1035 San Jose {isOpenHousesPage ? 'open houses' : isLandPage ? 'land' : isCondosPage ? 'condos' : 'houses'}{isOpenHousesPage ? '' : ' for sale'}
        </a>
      </div>
    </section>
  )
}

export default SanJoseHousesForSale

