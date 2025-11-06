import { useState } from 'react'
import './USHousingSupply.css'

function USHousingSupply() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedTimePeriod, setSelectedTimePeriod] = useState('3 years')

  return (
    <div className="us-housing-supply">
      <div className="supply-container">
        <h2 className="supply-title">U.S. Housing Supply</h2>
        <h3 className="supply-subtitle">Are there enough homes for sale to meet buyer demand?</h3>
        
        <div className="supply-content">
          <p className="supply-text">
            {isExpanded ? (
              <>
                In September 2025, there were 2,092,513 homes for sale in the United States, up 9.9% year-over-year. The number of newly listed homes increased by 0.8% compared to the previous year, indicating a gradual improvement in inventory levels. The median days on market was 51 days, up 8 days from last year, while months of supply remained at 3 months, unchanged from the previous year.
              </>
            ) : (
              <>
                In September 2025, there were 2,092,513 homes for sale in the United States, up 9.9% year...
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

        <div className="supply-divider"></div>

        <div className="supply-data-cards">
          <div className="supply-data-card">
            <h4 className="supply-card-title"># of Homes for Sale</h4>
            <div className="supply-card-separator"></div>
            <p className="supply-card-value">2,092,513</p>
            <p className="supply-card-change positive">+9.9% year-over-year</p>
          </div>
          <div className="supply-data-card">
            <h4 className="supply-card-title blue"># of Newly Listed Homes</h4>
            <div className="supply-card-separator"></div>
            <p className="supply-card-value">544,526</p>
            <p className="supply-card-change positive">+0.8% year-over-year</p>
          </div>
          <div className="supply-data-card">
            <h4 className="supply-card-title blue">Median Days on Market</h4>
            <div className="supply-card-separator"></div>
            <p className="supply-card-value">51</p>
            <p className="supply-card-change positive">+8 year-over-year</p>
          </div>
          <div className="supply-data-card">
            <h4 className="supply-card-title blue">Months of Supply</h4>
            <div className="supply-card-separator"></div>
            <p className="supply-card-value">3</p>
            <p className="supply-card-change positive">+0 year-over-year</p>
          </div>
        </div>

        <div className="supply-graph-section">
          <div className="supply-graph-header">
            <div className="home-type-filter">
              <button className="home-type-btn">
                All Home Types <span>▾</span>
              </button>
            </div>
            <div className="supply-graph-time-tabs">
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
          <div className="supply-graph-container">
            <div className="supply-y-axis-labels">
              <span className="supply-y-label">2.6M</span>
              <span className="supply-y-label">2.4M</span>
              <span className="supply-y-label">2.2M</span>
              <span className="supply-y-label">2.0M</span>
            </div>
            <div className="supply-graph-area">
              <svg className="supply-graph-svg" viewBox="0 0 800 300" preserveAspectRatio="none">
                {/* Grid lines */}
                <line x1="0" y1="0" x2="800" y2="0" stroke="#e0e0e0" strokeWidth="1" />
                <line x1="0" y1="75" x2="800" y2="75" stroke="#e0e0e0" strokeWidth="1" />
                <line x1="0" y1="150" x2="800" y2="150" stroke="#e0e0e0" strokeWidth="1" />
                <line x1="0" y1="225" x2="800" y2="225" stroke="#e0e0e0" strokeWidth="1" />
                <line x1="0" y1="300" x2="800" y2="300" stroke="#e0e0e0" strokeWidth="1" />
                
                {/* Graph line */}
                <path 
                  d="M 0,200 Q 150,180 300,170 T 600,160 T 800,150" 
                  fill="none" 
                  stroke="#333333" 
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="supply-x-axis-labels">
              <span className="supply-x-label">2023</span>
              <span className="supply-x-label">2024</span>
              <span className="supply-x-label">2025</span>
            </div>
          </div>
        </div>

        <div className="supply-bottom-section">
          <p className="supply-bottom-disclaimer">Based on Redfin calculations of home data from MLS and/or public records.</p>
          
          <div className="supply-bottom-content">
            <div className="supply-what-does-this-mean">
              <h4 className="supply-what-title">What does this mean?</h4>
              <p className="supply-what-text">
                The direction and pace at which housing supply changes indicate whether the options for buyers are increasing or decreasing. They can also indicate whether homes are lingering on the market or being sold faster than sellers are listing them. There are currently 2,092,513 residential homes for sale in the United States.
              </p>
            </div>

            <div className="supply-location-data-table">
              <table className="supply-data-table">
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
                      <span className="supply-location-dot">●</span> US
                    </td>
                    <td>2,092,513</td>
                    <td className="supply-growth-positive">+9.9%</td>
                  </tr>
                </tbody>
              </table>
              <div className="supply-add-location-section">
                <input 
                  type="text" 
                  placeholder="Add Location" 
                  className="supply-add-location-input"
                />
                <button className="supply-add-location-button" aria-label="Search">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18" height="18">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default USHousingSupply

