import { useState } from 'react'
import './RentalTags.css'

function RentalTags() {
  const [showMoreApartments, setShowMoreApartments] = useState(false)
  const [showMoreHouses, setShowMoreHouses] = useState(false)

  const apartmentCities = [
    'Albuquerque', 'Bakersfield', 'Charlotte', 'Columbus', 'Durham',
    'Alexandria', 'Baltimore', 'Chattanooga', 'Columbus', 'Fayetteville',
    'Arlington', 'Barnegat', 'Chicago', 'Dallas', 'Fort Worth',
    'Atlanta', 'Baton Rouge', 'Cincinnati', 'Dayton', 'Fresno',
    'Augusta', 'Birmingham', 'Cleveland', 'Denver', 'Greensboro',
    'Austin', 'Boston', 'Columbia', 'Detroit', 'Houston'
  ]

  const houseCities = [
    'Abilene', 'Austin', 'Clarksville', 'Dayton', 'Fayetteville',
    'Albany', 'Bakersfield', 'Columbia', 'Denver', 'Fort Wayne',
    'Amarillo', 'Birmingham', 'Columbus', 'Destin', 'Fresno',
    'Arlington', 'Charlotte', 'Columbus', 'Dothan', 'Greensboro',
    'Atlanta', 'Chesapeake', 'Concord', 'El Paso', 'Greenville',
    'Augusta', 'Chicago', 'Dallas', 'Eugene', 'Griffin'
  ]

  const visibleApartmentCities = showMoreApartments ? apartmentCities : apartmentCities.slice(0, 18)
  const visibleHouseCities = showMoreHouses ? houseCities : houseCities.slice(0, 18)

  return (
    <div className="rental-tags-section">
      <div className="rental-tags-container">
        <h2 className="rental-tags-main-title">Rentals in Popular Cities</h2>
        
        {/* Apartments Section */}
        <div className="rental-tags-category">
          <div className="rental-tags-header">
            <h3 className="rental-tags-subtitle">Search for apartments by city</h3>
            <a href="#" className="view-full-list-link">View full list</a>
          </div>
          
          <div className="rental-tags-grid">
            {visibleApartmentCities.map((city, index) => (
              <a key={index} href="#" className="rental-tag-link">
                {city} apartments for rent
              </a>
            ))}
          </div>
          
          {!showMoreApartments && (
            <button 
              className="show-more-btn"
              onClick={() => setShowMoreApartments(true)}
            >
              Show more
              <svg className="chevron-icon" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </div>

        {/* Houses Section */}
        <div className="rental-tags-category">
          <div className="rental-tags-header">
            <h3 className="rental-tags-subtitle">Search for houses for rent by city</h3>
            <a href="#" className="view-full-list-link">View full list</a>
          </div>
          
          <div className="rental-tags-grid">
            {visibleHouseCities.map((city, index) => (
              <a key={index} href="#" className="rental-tag-link">
                {city} houses for rent
              </a>
            ))}
          </div>
          
          {!showMoreHouses && (
            <button 
              className="show-more-btn"
              onClick={() => setShowMoreHouses(true)}
            >
              Show more
              <svg className="chevron-icon" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default RentalTags



