import { useState } from 'react'
import './USHousingMarketOverview.css'

function USHousingMarketOverview() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="us-housing-market-overview">
      <div className="overview-container">
        <h2 className="overview-title">U.S. Housing Market Overview</h2>
        <h3 className="overview-subtitle">What is the housing market like right now?</h3>
        
        <div className="overview-content">
          <p className="overview-text">
            {isExpanded ? (
              <>
                In September 2025, U.S. home prices were up 1.7% compared to last year, selling for a median price of $435,331. The number of homes sold rose 7.4% year-over-year, and the number of homes for sale rose 9.9%. The housing market continues to show resilience with steady price growth and increased inventory levels.
              </>
            ) : (
              <>
                In September 2025, U.S. home prices were up 1.7% compared to last year, selling for a median price of...
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

        <div className="overview-divider"></div>

        <div className="data-cards">
          <div className="data-card">
            <h4 className="card-title">Median Sale Price</h4>
            <div className="card-separator"></div>
            <p className="card-value">$435,331</p>
            <p className="card-change positive">+1.7% year-over-year</p>
          </div>
          <div className="data-card">
            <h4 className="card-title blue"># of Homes Sold</h4>
            <div className="card-separator"></div>
            <p className="card-value">442,578</p>
            <p className="card-change positive">+7.4% year-over-year</p>
          </div>
          <div className="data-card">
            <h4 className="card-title blue">National Avg. 30-Year Fixed Mortgage Rate</h4>
            <div className="card-separator"></div>
            <p className="card-value">6.4%</p>
            <p className="card-change negative">+0.2 pt year-over-year</p>
          </div>
        </div>

        <div className="overview-graph-section">
          <div className="graph-header">
            <h4 className="graph-title">Median Sale Price</h4>
            <div className="graph-time-tabs">
              <button className="tab">1 year</button>
              <button className="tab active">3 years</button>
              <button className="tab">5 years</button>
            </div>
          </div>
          <div className="graph-container">
            <div className="y-axis-labels">
              <span className="y-label">$500K</span>
              <span className="y-label">$450K</span>
              <span className="y-label">$400K</span>
              <span className="y-label">$350K</span>
            </div>
            <div className="graph-area">
              <svg className="graph-svg" viewBox="0 0 800 300" preserveAspectRatio="none">
                {/* Grid lines */}
                <line x1="0" y1="0" x2="800" y2="0" stroke="#e0e0e0" strokeWidth="1" />
                <line x1="0" y1="75" x2="800" y2="75" stroke="#e0e0e0" strokeWidth="1" />
                <line x1="0" y1="150" x2="800" y2="150" stroke="#e0e0e0" strokeWidth="1" />
                <line x1="0" y1="225" x2="800" y2="225" stroke="#e0e0e0" strokeWidth="1" />
                <line x1="0" y1="300" x2="800" y2="300" stroke="#e0e0e0" strokeWidth="1" />
                
                {/* Graph line */}
                <path 
                  d="M 0,130 Q 150,110 300,100 T 600,90 T 800,110" 
                  fill="none" 
                  stroke="#333333" 
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="x-axis-labels">
              <span className="x-label">2023</span>
              <span className="x-label">2024</span>
              <span className="x-label">2025</span>
            </div>
          </div>
        </div>

        <div className="overview-bottom-section">
          <p className="bottom-disclaimer">Based on Redfin calculations of home data from MLS and/or public records.</p>
          
          <div className="bottom-content">
            <div className="what-does-this-mean">
              <h4 className="what-title">What does this mean?</h4>
              <p className="what-text">
                The direction and pace at which home prices are changing are indicators of the strength of the housing market and whether homes are becoming more or less affordable. The median price of a home in the United States is currently $435,331.
              </p>
            </div>

            <div className="location-data-table">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Location</th>
                    <th>Data Sep 2025</th>
                    <th>Growth % YoY</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="location-dot">●</span> US
                    </td>
                    <td>$435,331</td>
                    <td className="growth-positive">+1.7%</td>
                  </tr>
                </tbody>
              </table>
              <div className="add-location-section">
                <input 
                  type="text" 
                  placeholder="Add Location" 
                  className="add-location-input"
                />
                <button className="add-location-button" aria-label="Search">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18" height="18">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="top-metros-section">
            <h4 className="top-metros-title">Top 10 Metros in the U.S. with the Fastest Growing Sales Price</h4>
            <div className="top-metros-list">
              <div className="metros-column">
                <div className="metro-item">
                  <span className="metro-rank">1.</span>
                  <div className="metro-info">
                    <span className="metro-name">Buffalo, NY</span>
                    <span className="metro-growth">28.6%</span>
                  </div>
                </div>
                <div className="metro-item">
                  <span className="metro-rank">2.</span>
                  <div className="metro-info">
                    <span className="metro-name">Honolulu, HI</span>
                    <span className="metro-growth">23.1%</span>
                  </div>
                </div>
                <div className="metro-item">
                  <span className="metro-rank">3.</span>
                  <div className="metro-info">
                    <span className="metro-name">Toledo, OH</span>
                    <span className="metro-growth">19.0%</span>
                  </div>
                </div>
                <div className="metro-item">
                  <span className="metro-rank">4.</span>
                  <div className="metro-info">
                    <span className="metro-name">Alexandria, VA</span>
                    <span className="metro-growth">18.4%</span>
                  </div>
                </div>
                <div className="metro-item">
                  <span className="metro-rank">5.</span>
                  <div className="metro-info">
                    <span className="metro-name">Arlington, VA</span>
                    <span className="metro-growth">18.1%</span>
                  </div>
                </div>
              </div>
              <div className="metros-column">
                <div className="metro-item">
                  <span className="metro-rank">6.</span>
                  <div className="metro-info">
                    <span className="metro-name">Columbus, GA</span>
                    <span className="metro-growth">18.0%</span>
                  </div>
                </div>
                <div className="metro-item">
                  <span className="metro-rank">7.</span>
                  <div className="metro-info">
                    <span className="metro-name">Rockford, IL</span>
                    <span className="metro-growth">12.9%</span>
                  </div>
                </div>
                <div className="metro-item">
                  <span className="metro-rank">8.</span>
                  <div className="metro-info">
                    <span className="metro-name">Boise, ID</span>
                    <span className="metro-growth">11.3%</span>
                  </div>
                </div>
                <div className="metro-item">
                  <span className="metro-rank">9.</span>
                  <div className="metro-info">
                    <span className="metro-name">Aurora, IL</span>
                    <span className="metro-growth">10.7%</span>
                  </div>
                </div>
                <div className="metro-item">
                  <span className="metro-rank">10.</span>
                  <div className="metro-info">
                    <span className="metro-name">Hampton, VA</span>
                    <span className="metro-growth">10.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default USHousingMarketOverview

