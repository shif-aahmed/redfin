import { useState } from 'react'
import './SearchLinks.css'

function SearchLinks() {
  const [expandedSections, setExpandedSections] = useState({
    homesByCity: false,
    homesByState: false,
    apartmentsByCity: false,
    housesForRent: false
  })

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const citiesForHomes = [
    'Albuquerque', 'Aurora', 'Bend', 'Bowie', 'Brentwood', 'Carmel', 
    'Cary', 'Cedar Rapids', 'Chandler', 'Charlotte', 'Cleveland', 
    'Colorado Springs', 'Columbus', 'Concord', 'Dallas', 'Denver',
    'Des Moines', 'Durham', 'El Paso', 'Fayetteville', 'Fort Worth',
    'Fresno', 'Gilbert', 'Greensboro', 'Henderson', 'Honolulu',
    'Houston', 'Indianapolis', 'Irvine', 'Jacksonville', 'Kansas City',
    'Las Vegas', 'Lexington', 'Lincoln', 'Los Angeles', 'Louisville'
  ]

  const states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 
    'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
    'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
    'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
    'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana'
  ]

  const citiesForApartments = [
    'Albuquerque', 'Bakersfield', 'Charlotte', 'Columbus', 'Dallas',
    'Denver', 'Detroit', 'El Paso', 'Fort Worth', 'Fresno',
    'Honolulu', 'Houston', 'Indianapolis', 'Jacksonville', 'Kansas City',
    'Las Vegas', 'Los Angeles', 'Louisville', 'Memphis', 'Miami',
    'Milwaukee', 'Minneapolis', 'Nashville', 'New Orleans', 'New York',
    'Oakland', 'Oklahoma City', 'Omaha', 'Orlando', 'Philadelphia',
    'Phoenix', 'Portland', 'Raleigh', 'Sacramento', 'San Antonio'
  ]

  const citiesForRent = [
    'Abilene', 'Austin', 'Baton Rouge', 'Birmingham', 'Boise',
    'Boston', 'Buffalo', 'Cedar Rapids', 'Charlotte', 'Chicago',
    'Cleveland', 'Clarksville', 'Colorado Springs', 'Columbus', 'Dallas',
    'Dayton', 'Denver', 'Des Moines', 'Detroit', 'Durham',
    'El Paso', 'Fort Worth', 'Fresno', 'Greensboro', 'Henderson',
    'Honolulu', 'Houston', 'Indianapolis', 'Jacksonville', 'Kansas City'
  ]

  const displayItems = (items, maxVisible = 16) => {
    return expandedSections[items.key] ? items.list : items.list.slice(0, maxVisible)
  }

  return (
    <section className="search-links-section">
      <div className="search-links-container">
        {/* Search for homes by city */}
        <div className="search-links-group">
          <h3 className="search-links-heading">Search for homes by city</h3>
          <div className="search-links-grid">
            {displayItems({ list: citiesForHomes, key: 'homesByCity' }).map((city, index) => (
              <a key={index} href="#" className="search-link">
                {city} real estate
              </a>
            ))}
          </div>
          <button 
            className="show-more-btn"
            onClick={() => toggleSection('homesByCity')}
          >
            Show more {expandedSections.homesByCity ? '↑' : '↓'}
          </button>
        </div>

        {/* Search for homes by state */}
        <div className="search-links-group">
          <h3 className="search-links-heading">Search for homes by state</h3>
          <div className="search-links-grid">
            {displayItems({ list: states, key: 'homesByState' }).map((state, index) => (
              <a key={index} href="#" className="search-link">
                {state} • Homes for sale
              </a>
            ))}
          </div>
          <button 
            className="show-more-btn"
            onClick={() => toggleSection('homesByState')}
          >
            Show more {expandedSections.homesByState ? '↑' : '↓'}
          </button>
        </div>

        {/* Search for apartments by city */}
        <div className="search-links-group">
          <h3 className="search-links-heading">Search for apartments by city</h3>
          <div className="search-links-grid">
            {displayItems({ list: citiesForApartments, key: 'apartmentsByCity' }).map((city, index) => (
              <a key={index} href="#" className="search-link">
                {city} apartments for rent
              </a>
            ))}
          </div>
          <button 
            className="show-more-btn"
            onClick={() => toggleSection('apartmentsByCity')}
          >
            Show more {expandedSections.apartmentsByCity ? '↑' : '↓'}
          </button>
        </div>

        {/* Search for houses for rent by city */}
        <div className="search-links-group">
          <h3 className="search-links-heading">Search for houses for rent by city</h3>
          <div className="search-links-grid">
            {displayItems({ list: citiesForRent, key: 'housesForRent' }).map((city, index) => (
              <a key={index} href="#" className="search-link">
                {city} houses for rent
              </a>
            ))}
          </div>
          <button 
            className="show-more-btn"
            onClick={() => toggleSection('housesForRent')}
          >
            Show more {expandedSections.housesForRent ? '↑' : '↓'}
          </button>
        </div>

        {/* Disclaimer Section */}
        <div className="disclaimer-section">
          <p className="disclaimer-text">
            *Listing fee subject to change, minimums apply. Any buyer's agent fee the seller chooses to cover not included. Listing fee increased by 1% of sale price if buyer is unrepresented. Sell for a 1% listing fee only if you also buy with Redfin within 365 days of closing on your Redfin listing. We will charge a 2% listing fee, then send you a check for the 1% difference after you buy your next home with us.{' '}
            <a href="#" className="disclaimer-link">Learn more.</a>
          </p>
        </div>
      </div>
      <div className="section-divider"></div>
    </section>
  )
}

export default SearchLinks

