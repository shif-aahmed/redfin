import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Auth from '../components/Auth/Auth'
import './Feed.css'

function Feed() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // Check if user is logged in from localStorage
    const loggedInStatus = localStorage.getItem('isLoggedIn')
    setIsLoggedIn(loggedInStatus === 'true')
  }, [])

  const handleCardClick = (propertyId) => {
    navigate(`/property/${propertyId}`)
  }

  const allProperties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$1,599,000',
      details: '3 beds, 2.5 baths, 1,689 sq ft',
      address: '4027 Sunset Ter, Fremont, CA 94536'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$1,650,000',
      details: '4 beds, 2 baths, 1,503 sq ft',
      address: '3751 Ruskin Pl, Fremont, CA 94536'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$950,000',
      details: '2 beds, 2 baths, 960 sq ft',
      address: '34926 Osprey Dr, Union City, CA 94587'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$1,799,000',
      details: '5 beds, 3 baths, 2,200 sq ft',
      address: '4215 Mission Blvd, Fremont, CA 94539'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$1,350,000',
      details: '3 beds, 2.5 baths, 1,850 sq ft',
      address: '4892 Ardenwood Blvd, Fremont, CA 94555'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$1,125,000',
      details: '4 beds, 2.5 baths, 1,920 sq ft',
      address: '3891 Stevenson Blvd, Fremont, CA 94538'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$1,425,000',
      details: '4 beds, 3 baths, 2,100 sq ft',
      address: '5234 Warm Springs Blvd, Fremont, CA 94539'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$1,675,000',
      details: '3 beds, 2.5 baths, 1,750 sq ft',
      address: '4567 Blacow Rd, Fremont, CA 94538'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$1,250,000',
      details: '5 beds, 3.5 baths, 2,350 sq ft',
      address: '3895 Paseo Padre Pkwy, Fremont, CA 94536'
    }
  ]

  // First 3 properties are always visible and clickable
  const visibleProperties = allProperties.slice(0, 3)
  // Next 3 properties are locked until login
  const lockedProperties = allProperties.slice(3, 6)
  // Additional properties shown when logged in
  const additionalProperties = allProperties.slice(6, 9)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleSignup = () => {
    setIsLoggedIn(true)
  }

  return (
    <section className="feed-section">
      <div className="feed-container">
        <h1 className="feed-heading">Feed</h1>
        
        {/* Always visible properties - always clickable */}
        <div className="feed-grid">
          {visibleProperties.map((property) => (
            <div key={property.id} className="feed-card clickable" onClick={() => handleCardClick(property.id)}>
              <div className="feed-image-container">
                <img src={property.image} alt={property.address} className="feed-image" />
                <div className="magazine-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="6" width="16" height="12" stroke="currentColor" strokeWidth="1.5" fill="white" fillOpacity="0.9"/>
                    <line x1="7" y1="9" x2="17" y2="9" stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="7" y1="12" x2="17" y2="12" stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="7" y1="15" x2="17" y2="15" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
              </div>
              
              <div className="feed-card-content">
                <div className="feed-price-row">
                  <span className="feed-price">{property.price}</span>
                  <div className="feed-icons">
                    <button className="feed-icon-btn" aria-label="Share">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>
                    <button className="feed-icon-btn" aria-label="Like">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="feed-details">{property.details}</div>
                <div className="feed-address">{property.address}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Locked properties with overlay when not logged in */}
        {!isLoggedIn && (
          <>
            <div className="feed-grid locked-grid">
              {lockedProperties.map((property) => (
                <div key={property.id} className="feed-card locked-card" style={{ cursor: 'not-allowed' }}>
                  <div className="feed-image-container">
                    <img src={property.image} alt={property.address} className="feed-image" />
                    <div className="feed-overlay"></div>
                    <div className="magazine-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4" y="6" width="16" height="12" stroke="currentColor" strokeWidth="1.5" fill="white" fillOpacity="0.9"/>
                        <line x1="7" y1="9" x2="17" y2="9" stroke="currentColor" strokeWidth="1.5"/>
                        <line x1="7" y1="12" x2="17" y2="12" stroke="currentColor" strokeWidth="1.5"/>
                        <line x1="7" y1="15" x2="17" y2="15" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="feed-card-content">
                    <div className="feed-price-row">
                      <span className="feed-price">{property.price}</span>
                      <div className="feed-icons">
                        <button className="feed-icon-btn" aria-label="Share" disabled>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </button>
                        <button className="feed-icon-btn" aria-label="Like" disabled>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    <div className="feed-details">{property.details}</div>
                    <div className="feed-address">{property.address}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Auth form below locked properties */}
            <Auth onLogin={handleLogin} onSignup={handleSignup} />
          </>
        )}

        {/* All unlocked properties when logged in */}
        {isLoggedIn && (
          <>
            <div className="feed-grid">
              {lockedProperties.map((property) => (
                <div key={property.id} className="feed-card clickable" onClick={() => handleCardClick(property.id)}>
                  <div className="feed-image-container">
                    <img src={property.image} alt={property.address} className="feed-image" />
                    <div className="magazine-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4" y="6" width="16" height="12" stroke="currentColor" strokeWidth="1.5" fill="white" fillOpacity="0.9"/>
                        <line x1="7" y1="9" x2="17" y2="9" stroke="currentColor" strokeWidth="1.5"/>
                        <line x1="7" y1="12" x2="17" y2="12" stroke="currentColor" strokeWidth="1.5"/>
                        <line x1="7" y1="15" x2="17" y2="15" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="feed-card-content">
                    <div className="feed-price-row">
                      <span className="feed-price">{property.price}</span>
                      <div className="feed-icons">
                        <button className="feed-icon-btn" aria-label="Share">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </button>
                        <button className="feed-icon-btn" aria-label="Like">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    <div className="feed-details">{property.details}</div>
                    <div className="feed-address">{property.address}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional properties when logged in */}
            <div className="feed-grid">
              {additionalProperties.map((property) => (
                <div key={property.id} className="feed-card clickable" onClick={() => handleCardClick(property.id)}>
                  <div className="feed-image-container">
                    <img src={property.image} alt={property.address} className="feed-image" />
                    <div className="magazine-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4" y="6" width="16" height="12" stroke="currentColor" strokeWidth="1.5" fill="white" fillOpacity="0.9"/>
                        <line x1="7" y1="9" x2="17" y2="9" stroke="currentColor" strokeWidth="1.5"/>
                        <line x1="7" y1="12" x2="17" y2="12" stroke="currentColor" strokeWidth="1.5"/>
                        <line x1="7" y1="15" x2="17" y2="15" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="feed-card-content">
                    <div className="feed-price-row">
                      <span className="feed-price">{property.price}</span>
                      <div className="feed-icons">
                        <button className="feed-icon-btn" aria-label="Share">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </button>
                        <button className="feed-icon-btn" aria-label="Like">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    <div className="feed-details">{property.details}</div>
                    <div className="feed-address">{property.address}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Feed


