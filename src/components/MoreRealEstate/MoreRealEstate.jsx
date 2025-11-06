import './MoreRealEstate.css'

function MoreRealEstate() {
  return (
    <div className="more-real-estate-section">
      <div className="more-real-estate-container">
        <h2 className="more-real-estate-title">More Real Estate Resources</h2>
        <h3 className="more-real-estate-subtitle">Search by City</h3>
        
        <div className="cities-grid">
          <div className="city-column">
            <a href="#" className="city-link">Albuquerque Homes for Sale</a>
            <a href="#" className="city-link">Alexandria Homes for Sale</a>
            <a href="#" className="city-link">Anchorage Homes for Sale</a>
            <a href="#" className="city-link">Arlington Homes for Sale</a>
            <a href="#" className="city-link">Ashburn Homes for Sale</a>
            <a href="#" className="city-link">Atlanta Homes for Sale</a>
            <a href="#" className="city-link">Aurora Homes for Sale</a>
            <a href="#" className="city-link">Austin Homes for Sale</a>
            <a href="#" className="show-more-link">
              Show more
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chevron-icon">
                <path d="M6 9L1 4h10z"/>
              </svg>
            </a>
          </div>
          
          <div className="city-column">
            <a href="#" className="city-link">Bakersfield Homes for Sale</a>
            <a href="#" className="city-link">Baltimore Homes for Sale</a>
            <a href="#" className="city-link">Baton Rouge Homes for Sale</a>
            <a href="#" className="city-link">Beaverton Homes for Sale</a>
            <a href="#" className="city-link">Bend Homes for Sale</a>
            <a href="#" className="city-link">Birmingham Homes for Sale</a>
            <a href="#" className="city-link">Boca Raton Homes for Sale</a>
            <a href="#" className="city-link">Boise Homes for Sale</a>
          </div>
          
          <div className="city-column">
            <a href="#" className="city-link">Boston Homes for Sale</a>
            <a href="#" className="city-link">Boulder Homes for Sale</a>
            <a href="#" className="city-link">Bowie Homes for Sale</a>
            <a href="#" className="city-link">Brentwood Homes for Sale</a>
            <a href="#" className="city-link">Buffalo Homes for Sale</a>
            <a href="#" className="city-link">Burlington Homes for Sale</a>
            <a href="#" className="city-link">Cape Coral Homes for Sale</a>
            <a href="#" className="city-link">Chandler Homes for Sale</a>
          </div>
          
          <div className="city-column">
            <a href="#" className="city-link">Charleston Homes for Sale</a>
            <a href="#" className="city-link">Charlotte Homes for Sale</a>
            <a href="#" className="city-link">Chattanooga Homes for Sale</a>
            <a href="#" className="city-link">Chicago Homes for Sale</a>
            <a href="#" className="city-link">Cincinnati Homes for Sale</a>
            <a href="#" className="city-link">Colorado Springs Homes for Sale</a>
            <a href="#" className="city-link">Columbia Homes for Sale</a>
            <a href="#" className="city-link">Columbus Homes for Sale</a>
          </div>
        </div>

        <h3 className="more-real-estate-subtitle state-subtitle">Search by State</h3>
        
        <div className="states-grid">
          <div className="state-column">
            <a href="#" className="state-link">Alabama Real Estate</a>
            <a href="#" className="state-link">Alaska Real Estate</a>
            <a href="#" className="state-link">Arizona Real Estate</a>
            <a href="#" className="state-link">Arkansas Real Estate</a>
            <a href="#" className="state-link">California Real Estate</a>
            <a href="#" className="state-link">Colorado Real Estate</a>
            <a href="#" className="show-more-link">
              Show more
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chevron-icon">
                <path d="M6 9L1 4h10z"/>
              </svg>
            </a>
          </div>
          
          <div className="state-column">
            <a href="#" className="state-link">Connecticut Real Estate</a>
            <a href="#" className="state-link">Delaware Real Estate</a>
            <a href="#" className="state-link">Florida Real Estate</a>
            <a href="#" className="state-link">Georgia Real Estate</a>
            <a href="#" className="state-link">Hawaii Real Estate</a>
            <a href="#" className="state-link">Idaho Real Estate</a>
          </div>
          
          <div className="state-column">
            <a href="#" className="state-link">Illinois Real Estate</a>
            <a href="#" className="state-link">Indiana Real Estate</a>
            <a href="#" className="state-link">Iowa Real Estate</a>
            <a href="#" className="state-link">Kansas Real Estate</a>
            <a href="#" className="state-link">Kentucky Real Estate</a>
            <a href="#" className="state-link">Louisiana Real Estate</a>
          </div>
          
          <div className="state-column">
            <a href="#" className="state-link">Maine Real Estate</a>
            <a href="#" className="state-link">Maryland Real Estate</a>
            <a href="#" className="state-link">Massachusetts Real Estate</a>
            <a href="#" className="state-link">Michigan Real Estate</a>
            <a href="#" className="state-link">Minnesota Real Estate</a>
            <a href="#" className="state-link">Mississippi Real Estate</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreRealEstate

