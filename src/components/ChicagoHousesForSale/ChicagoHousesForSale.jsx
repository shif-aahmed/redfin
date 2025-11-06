import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './ChicagoHousesForSale.css'

function ChicagoHousesForSale() {
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
      images: getPropertyImages(1, isCondosPage),
      badges: ["REDFIN OPEN SAT, 12PM TO 2PM", "3D WALKTHROUGH"],
      price: "$534,900",
      beds: 2,
      baths: 2,
      sqft: null,
      address: "3201 N Ravenswood Ave #301, Chicago, Il"
    },
    {
      id: 2,
      images: getPropertyImages(2, isCondosPage),
      badges: ["LISTED BY REDFIN 22 HRS AGO", "3D WALKTHROUGH"],
      price: "$165,000",
      beds: 2,
      baths: 1,
      sqft: null,
      address: "4416 N Harding Ave #3, Chicago, IL 60625"
    },
    {
      id: 3,
      images: getPropertyImages(3, isCondosPage),
      badges: ["LISTED BY REDFIN", "3D WALKTHROUGH"],
      price: "$239,000",
      beds: 1,
      baths: 1,
      sqft: 860,
      address: "200 N Dearborn St #1303, Chicago, IL 606"
    },
    {
      id: 4,
      images: getPropertyImages(4, isCondosPage),
      badges: ["REDFIN OPEN SAT, 11AM TO 12:30PM"],
      price: "$640,000",
      beds: 2,
      baths: 2,
      sqft: 1350,
      address: "2735 N Kenmore Ave Unit 2S, Chicago, IL"
    },
    {
      id: 5,
      images: getPropertyImages(5, isCondosPage),
      badges: ["LISTED BY REDFIN 5 DAYS AGO", "3D WALKTHROUGH"],
      price: "$425,000",
      beds: 3,
      baths: 2,
      sqft: 1800,
      address: "1821 W North Ave #2, Chicago, IL 60622"
    },
    {
      id: 6,
      images: getPropertyImages(6, isCondosPage),
      badges: ["REDFIN OPEN SUN, 1PM TO 3PM"],
      price: "$389,500",
      beds: 2,
      baths: 2,
      sqft: 1200,
      address: "5432 S Cottage Grove Ave, Chicago, IL 60615"
    },
    {
      id: 7,
      images: getPropertyImages(7, isCondosPage),
      badges: ["LISTED BY REDFIN", "3D WALKTHROUGH"],
      price: "$275,000",
      beds: 1,
      baths: 1,
      sqft: 750,
      address: "1122 W Belmont Ave #4B, Chicago, IL 60657"
    },
    {
      id: 8,
      images: getPropertyImages(8, isCondosPage),
      badges: ["REDFIN OPEN SAT, 2PM TO 4PM", "3D WALKTHROUGH"],
      price: "$695,000",
      beds: 3,
      baths: 2,
      sqft: 2100,
      address: "3456 N Lincoln Ave, Chicago, IL 60657"
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
    <section className="chicago-houses-section">
      <div className="chicago-houses-wrapper">
        <h2 className="chicago-houses-title">Chicago {isCondosPage ? 'condos' : 'houses'} for sale</h2>
        
        <div className="chicago-properties-container">
          <div className="chicago-properties-scroll-container">
            {properties.map((property) => {
              const currentImgIndex = getCurrentImageIndex(property.id)
              const currentImage = property.images[currentImgIndex]
              
              return (
              <div 
                key={property.id} 
                className="chicago-property-card"
                onMouseEnter={() => setHoveredCard(property.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="chicago-property-image-wrapper">
                  <img 
                    src={currentImage} 
                    alt={property.address}
                    className="chicago-property-image"
                    loading="lazy"
                  />
                  {hoveredCard === property.id && (
                    <>
                      <button 
                        className="chicago-image-nav-btn chicago-image-nav-left"
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
                        className="chicago-image-nav-btn chicago-image-nav-right"
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
                  <div className="chicago-property-badges">
                    {property.badges.map((badge, index) => {
                      const isRedBadge = badge.includes('LISTED') || badge.includes('OPEN')
                      const badgeText = badge.includes('3D') || badge.includes('VIDEO') || badge.includes('WALKTHROUGH') 
                        ? '3D & VIDEO TOUR' 
                        : badge.includes('LISTED') 
                        ? 'LISTED BY REDFIN' 
                        : badge
                      return (
                        <span 
                          key={index} 
                          className={`chicago-badge ${isRedBadge ? 'chicago-badge-red' : 'chicago-badge-purple'}`}
                        >
                          {badgeText}
                        </span>
                      )
                    })}
                  </div>
                </div>
                
                <div className="chicago-property-details">
                  <div className="chicago-property-price-row">
                    <span className="chicago-property-price">{property.price}</span>
                    <button 
                      className={`chicago-favorite-btn ${favorites[property.id] ? 'chicago-favorite-active' : ''}`}
                      onClick={() => toggleFavorite(property.id)}
                      aria-label="Add to favorites"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                      </svg>
                    </button>
                  </div>
                  <div className="chicago-property-specs">
                    {property.beds} bed{property.beds !== 1 ? 's' : ''} {property.baths} bath{property.baths !== 1 ? 's' : ''}
                    {property.sqft ? ` ${property.sqft.toLocaleString()} sq ft` : ' — sq ft'}
                  </div>
                  <div className="chicago-property-address">{property.address}</div>
                </div>
              </div>
              )
            })}
          </div>
          
          <button 
            className="chicago-scroll-button"
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
        
        <a href="#" className="chicago-see-all-link">
          See all 6477 Chicago {isCondosPage ? 'condos' : 'houses'} for sale
        </a>
      </div>
    </section>
  )
}

export default ChicagoHousesForSale

