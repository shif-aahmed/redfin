import { useState } from 'react'
import './USHousingDemand.css'

function USHousingDemand() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedTimePeriod, setSelectedTimePeriod] = useState('3 years')

  return (
    <div className="us-housing-demand">
      <div className="demand-container">
        <h2 className="demand-title">U.S. Housing Demand</h2>
        <h3 className="demand-subtitle">How competitive is the market?</h3>
        
        <div className="demand-content">
          <p className="demand-text">
            {isExpanded ? (
              <>
                In September 2025, 25.3% of homes in the U.S. sold above list price, down 3.2 points from last year. This indicates a slight cooling in market competitiveness. Meanwhile, 20.7% of homes had price drops, up 3.0 points year-over-year, suggesting sellers are adjusting prices to attract buyers. The sale-to-list price ratio was 98.6%, down 0.45 points from the previous year, reflecting a more balanced market between buyers and sellers.
              </>
            ) : (
              <>
                In September 2025, 25.3% of homes in the U.S. sold above list price, down 3.2 points...
              </>
            )}
          </p>
          <button 
            className="read-more-btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            Read More {isExpanded ? '▴' : '▾'}
          </button>
        </div>

        <div className="demand-divider"></div>

        <div className="demand-data-cards">
          <div className="demand-data-card">
            <h4 className="demand-card-title">Homes Sold Above List Price</h4>
            <div className="demand-card-separator"></div>
            <p className="demand-card-value">25.3%</p>
            <p className="demand-card-change negative">-3.2 pt year-over-year</p>
          </div>
          <div className="demand-data-card">
            <h4 className="demand-card-title blue">Homes with Price Drops</h4>
            <div className="demand-card-separator"></div>
            <p className="demand-card-value">20.7%</p>
            <p className="demand-card-change positive">+3.0 pt year-over-year</p>
          </div>
          <div className="demand-data-card">
            <h4 className="demand-card-title blue">Sale-to-List Price</h4>
            <div className="demand-card-separator"></div>
            <p className="demand-card-value">98.6%</p>
            <p className="demand-card-change negative">-0.45 pt year-over-year</p>
          </div>
        </div>

        <div className="demand-graph-section">
          <div className="demand-graph-header">
            <div className="home-type-filter">
              <button className="home-type-btn">
                All Home Types <span>▾</span>
              </button>
            </div>
            <div className="demand-graph-time-tabs">
              <button 
                className={`tab ${selectedTimePeriod === '1 year' ? 'active' : ''}`}
                onClick={() => setSelectedTimePeriod('1 year')}
              >
                1 year
              </button>
              <button 
                className={`tab ${selectedTimePeriod === '3 years' ? 'active' : ''}`}
                onClick={() => setSelectedTimePeriod('3 years')}
              >
                3 years
              </button>
              <button 
                className={`tab ${selectedTimePeriod === '5 years' ? 'active' : ''}`}
                onClick={() => setSelectedTimePeriod('5 years')}
              >
                5 years
              </button>
            </div>
          </div>
          <div className="demand-graph-container">
            <div className="demand-y-axis-labels">
              <span className="demand-y-label">45.0%</span>
              <span className="demand-y-label">40.0%</span>
              <span className="demand-y-label">35.0%</span>
              <span className="demand-y-label">30.0%</span>
            </div>
            <div className="demand-graph-area">
              <svg className="demand-graph-svg" viewBox="0 0 800 300" preserveAspectRatio="none">
                {/* Grid lines */}
                <line x1="0" y1="0" x2="800" y2="0" stroke="#e0e0e0" strokeWidth="1" />
                <line x1="0" y1="75" x2="800" y2="75" stroke="#e0e0e0" strokeWidth="1" />
                <line x1="0" y1="150" x2="800" y2="150" stroke="#e0e0e0" strokeWidth="1" />
                <line x1="0" y1="225" x2="800" y2="225" stroke="#e0e0e0" strokeWidth="1" />
                <line x1="0" y1="300" x2="800" y2="300" stroke="#e0e0e0" strokeWidth="1" />
                
                {/* Graph line */}
                <path 
                  d="M 0,120 Q 150,100 300,90 T 600,85 T 800,80" 
                  fill="none" 
                  stroke="#333333" 
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="demand-x-axis-labels">
              <span className="demand-x-label">2023</span>
              <span className="demand-x-label">2024</span>
              <span className="demand-x-label">2025</span>
            </div>
          </div>
        </div>

        <div className="demand-bottom-section">
          <p className="demand-bottom-disclaimer">Based on Redfin calculations of home data from MLS and/or public records.</p>
          
          <div className="demand-bottom-content">
            <div className="demand-what-does-this-mean">
              <h4 className="demand-what-title">What does this mean?</h4>
              <p className="demand-what-text">
                Homes that sold above list price likely received multiple offers. A high or growing percentage of homes selling above list price indicates that the housing market is competitive and bidding wars are becoming more common. A low or shrinking percentage of homes selling above list price suggests that the market is becoming less competitive.
              </p>
            </div>

            <div className="demand-location-data-table">
              <table className="demand-data-table">
                <thead>
                  <tr>
                    <th>Location</th>
                    <th>
                      Data
                      <div className="table-subheader">Sep 2025</div>
                    </th>
                    <th>
                      Growth
                      <div className="table-subheader">% YoY</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="demand-location-dot">●</span> US
                    </td>
                    <td>25.3%</td>
                    <td className="demand-growth-negative">-3.2 pt</td>
                  </tr>
                </tbody>
              </table>
              <div className="demand-add-location-section">
                <input 
                  type="text" 
                  placeholder="Add Location" 
                  className="demand-add-location-input"
                />
                <button className="demand-add-location-button" aria-label="Search">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18" height="18">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="demand-top-cities-section">
            <h4 className="demand-top-cities-title">Top 10 Most Competitive Cities in the U.S.</h4>
            <div className="demand-top-cities-list">
              <div className="demand-cities-column">
                <div className="demand-city-item">
                  <span className="demand-city-rank">1.</span>
                  <span className="demand-city-name">Anchorage, AK</span>
                </div>
                <div className="demand-city-item">
                  <span className="demand-city-rank">2.</span>
                  <span className="demand-city-name">Tacoma, WA</span>
                </div>
                <div className="demand-city-item">
                  <span className="demand-city-rank">3.</span>
                  <span className="demand-city-name">Fort Wayne, IN</span>
                </div>
                <div className="demand-city-item">
                  <span className="demand-city-rank">4.</span>
                  <span className="demand-city-name">Omaha, NE</span>
                </div>
                <div className="demand-city-item">
                  <span className="demand-city-rank">5.</span>
                  <span className="demand-city-name">Warren, MI</span>
                </div>
              </div>
              <div className="demand-cities-column">
                <div className="demand-city-item">
                  <span className="demand-city-rank">6.</span>
                  <span className="demand-city-name">Richmond, VA</span>
                </div>
                <div className="demand-city-item">
                  <span className="demand-city-rank">7.</span>
                  <span className="demand-city-name">Lincoln, NE</span>
                </div>
                <div className="demand-city-item">
                  <span className="demand-city-rank">8.</span>
                  <span className="demand-city-name">Seattle, WA</span>
                </div>
                <div className="demand-city-item">
                  <span className="demand-city-rank">9.</span>
                  <span className="demand-city-name">St. Paul, MN</span>
                </div>
                <div className="demand-city-item">
                  <span className="demand-city-rank">10.</span>
                  <span className="demand-city-name">Buffalo, NY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default USHousingDemand

