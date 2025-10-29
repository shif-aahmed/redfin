import './Recommended.css'

function Recommended({ variant = 'home' }) {
  const homeProperties = [
    {
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$950,000',
      beds: '2 beds',
      baths: '2 baths',
      sqft: '960 sq ft',
      address: '34926 Osprey Dr, Union City, CA 94587'
    },
    {
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$1,799,888',
      beds: '3 beds',
      baths: '2 baths',
      sqft: '1,522 sq ft',
      address: '3184 Waugh Pl, Fremont, CA 94538'
    }
  ]

  const propertyDetailProperties = [
    {
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$2,448,888',
      beds: '5',
      baths: '3',
      sqft: '2,754',
      address: '37811 Fernwood Ct, Fremont, CA 94538',
      openHouse: 'OPEN SUN, 1:30PM TO 4:30PM'
    },
    {
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$1,699,990',
      beds: '4',
      baths: '2.5',
      sqft: '2,100',
      address: '36590 Dawson St, Fremont, CA 94536',
      openHouse: null
    },
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$1,899,000',
      beds: '4',
      baths: '3',
      sqft: '2,350',
      address: '3100 Mackenzie Pl, Fremont, CA 94536',
      openHouse: 'OPEN SAT, 12PM TO 2PM 3D WALKTHROUGH'
    },
    {
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$2,099,000',
      beds: '5',
      baths: '4',
      sqft: '3,100',
      address: '34250 Brookvale Dr, Fremont, CA 94536',
      openHouse: null
    },
    {
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$1,599,990',
      beds: '3',
      baths: '2.5',
      sqft: '1,850',
      address: '4027 Sunset Ter, Fremont, CA 94536',
      openHouse: 'OPEN SUN, 2PM TO 5PM'
    },
    {
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$2,250,000',
      beds: '5',
      baths: '3.5',
      sqft: '2,900',
      address: '37800 Thorntree Way, Fremont, CA 94536',
      openHouse: null
    }
  ]

  const properties = variant === 'propertyDetail' ? propertyDetailProperties : homeProperties

  return (
    <section className="recommended-section">
      <div className="recommended-container">
        <div className="recommended-header">
          <h2 className="recommended-title">Recommended for you</h2>
          <p className="recommended-subtitle">based on homes you've looked at</p>
        </div>
        
        <div className={variant === 'propertyDetail' ? 'recommended-cards-grid' : 'recommended-cards'}>
          {properties.map((property, index) => (
            <div key={index} className="property-card">
              <div className="property-image-wrapper">
                <img src={property.image} alt="Property" className="property-image" />
                {variant === 'propertyDetail' && property.openHouse && (
                  <div className="open-house-label">
                    {property.openHouse}
                  </div>
                )}
                <div className="map-pin-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" fill="#333" stroke="#fff" strokeWidth="1.5"/>
                    <circle cx="12" cy="10" r="3" fill="#fff"/>
                  </svg>
                </div>
              </div>
              
              <div className="property-content">
                <div className="property-price-row">
                  <span className="property-price">{property.price}</span>
                  <div className="property-actions">
                    <button className="action-icon" aria-label="Share">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.34C15.11 18.55 15.08 18.77 15.08 19C15.08 20.61 16.39 21.91 18 21.91C19.61 21.91 20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08Z" fill="#333"/>
                      </svg>
                    </button>
                    <button className="action-icon" aria-label="Favorite">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="#333"/>
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="property-details">
                  <span>{variant === 'propertyDetail' ? `${property.beds} beds` : property.beds}</span>
                  <span>·</span>
                  <span>{variant === 'propertyDetail' ? `${property.baths} baths` : property.baths}</span>
                  <span>·</span>
                  <span>{variant === 'propertyDetail' ? `${property.sqft} sq ft` : property.sqft}</span>
                </div>
                
                <div className="property-address">{property.address}</div>
              </div>
            </div>
          ))}
          
          {variant === 'home' && (
            <div className="cta-card">
              <div className="cta-overlay"></div>
              <div className="cta-content">
                <div className="cta-text">
                  <span className="cta-bold">See 4 more</span>
                  <span className="cta-regular">recommendations</span>
                </div>
                <button className="cta-button">Join or sign in</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Recommended

