import USHousingMarketOverview from '../components/USHousingMarketOverview/USHousingMarketOverview'
import BestAgent from '../components/BestAgent/BestAgent'
import USHousingSupply from '../components/USHousingSupply/USHousingSupply'
import USHousingDemand from '../components/USHousingDemand/USHousingDemand'
import USMigrationTrends from '../components/USMigrationTrends/USMigrationTrends'
import MoreRealEstate from '../components/MoreRealEstate/MoreRealEstate'
import './USHousingMarket.css'

function USHousingMarket() {
  return (
    <div className="us-housing-market-page">
      <div className="us-housing-market-hero">
        <div className="hero-content">
          <h1 className="hero-title">United States Housing Market</h1>
          <p className="hero-stats">
            Home prices nationwide were up 1.7% year-over-year in September. At the same time, the
            number of homes sold rose 7.4% and the number of homes for sale rose 9.9%.
          </p>
        </div>
        <div className="hero-graphic">
          <div className="map-container">
            <div className="house house-1"></div>
            <div className="house house-2"></div>
            <div className="house house-3"></div>
          </div>
        </div>
      </div>

      <div className="us-housing-market-nav-section">
        <nav className="secondary-nav">
          <a href="#" className="nav-link active">Overview</a>
          <a href="#" className="nav-link">Supply</a>
          <a href="#" className="nav-link">Demand</a>
          <a href="#" className="nav-link">Migration</a>
          <a href="#" className="nav-link">News</a>
        </nav>
        <div className="trends-search">
          <input type="text" placeholder="Search Trends by City, Zip..." className="trends-input" />
          <button className="trends-button" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </div>
      <USHousingMarketOverview />
      <BestAgent />
      <USHousingSupply />
      <USHousingDemand />
      <USMigrationTrends />
      <MoreRealEstate />
    </div>
  )
}

export default USHousingMarket

