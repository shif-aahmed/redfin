import './USMigrationTrends.css'

function USMigrationTrends() {
  return (
    <div className="us-migration-trends">
      <div className="migration-container">
        <h2 className="migration-title">U.S. Migration Trends</h2>
        <h3 className="migration-subtitle">Where are people moving to and from?</h3>
        
        <div className="migration-content">
          <p className="migration-text">
            Nationwide, 29% of homebuyers searched to move to a different metro area between Aug '25 - Oct '25. The top 5 states homebuyers searched to move to are Florida, Arizona, North Carolina, Tennessee, and Maine. The top 5 states homebuyers searched to move from are California, New York, Illinois, Maryland, and Washington.
          </p>
          <p className="migration-text">
            Sacramento was the most searched for destination among homebuyers looking to relocate between Aug '25 - Oct '25. Phoenix, Salisbury, Myrtle Beach, and Sarasota were the next most searched destinations. Los Angeles was the most searched for destination among homebuyers looking to leave, followed by New York, Washington, Seattle and San Francisco.
          </p>
        </div>

        <div className="migration-map-section">
          <div className="migration-legend">
            <div className="legend-item">
              <div className="legend-color-bar moving-to"></div>
              <span className="legend-label">Moving to</span>
            </div>
            <div className="legend-item">
              <div className="legend-color-bar moving-from"></div>
              <span className="legend-label">Moving from</span>
            </div>
            <div className="legend-item">
              <div className="legend-color-bar data-unavailable"></div>
              <span className="legend-label">Data Unavailable</span>
            </div>
          </div>
          <div className="migration-map-container">
            <svg className="us-map" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
              {/* Simplified US map - this is a basic representation */}
              {/* Moving to states - Orange/Yellow */}
              <path d="M 200,400 L 250,380 L 280,400 L 270,450 L 220,460 Z" fill="#ff8c42" stroke="#333" strokeWidth="1" className="state-florida" />
              <path d="M 150,350 L 200,340 L 220,380 L 200,400 L 150,390 Z" fill="#ffb366" stroke="#333" strokeWidth="1" className="state-arizona" />
              <path d="M 600,300 L 650,290 L 680,320 L 650,360 L 600,350 Z" fill="#ffb366" stroke="#333" strokeWidth="1" className="state-north-carolina" />
              <path d="M 550,320 L 600,310 L 620,350 L 590,380 L 550,370 Z" fill="#ffcc99" stroke="#333" strokeWidth="1" className="state-tennessee" />
              <path d="M 750,100 L 800,90 L 820,130 L 780,150 L 750,140 Z" fill="#ffcc99" stroke="#333" strokeWidth="1" className="state-maine" />
              
              {/* Moving from states - Blue */}
              <path d="M 50,250 L 150,240 L 180,280 L 150,350 L 50,340 Z" fill="#4a90e2" stroke="#333" strokeWidth="1" className="state-california" />
              <path d="M 700,150 L 750,140 L 780,180 L 750,220 L 700,210 Z" fill="#6ba3e8" stroke="#333" strokeWidth="1" className="state-new-york" />
              <path d="M 550,200 L 600,190 L 630,230 L 600,270 L 550,260 Z" fill="#8bb5ed" stroke="#333" strokeWidth="1" className="state-illinois" />
              <path d="M 680,250 L 730,240 L 760,280 L 730,320 L 680,310 Z" fill="#8bb5ed" stroke="#333" strokeWidth="1" className="state-maryland" />
              <path d="M 50,100 L 150,90 L 180,130 L 150,200 L 50,190 Z" fill="#8bb5ed" stroke="#333" strokeWidth="1" className="state-washington" />
              
              {/* Neutral states - Light tan/beige */}
              <path d="M 300,200 L 400,190 L 430,230 L 400,270 L 300,260 Z" fill="#e8e8e8" stroke="#ccc" strokeWidth="0.5" />
              <path d="M 400,250 L 500,240 L 530,280 L 500,320 L 400,310 Z" fill="#e8e8e8" stroke="#ccc" strokeWidth="0.5" />
              <path d="M 250,300 L 350,290 L 380,330 L 350,370 L 250,360 Z" fill="#e8e8e8" stroke="#ccc" strokeWidth="0.5" />
              <path d="M 350,350 L 450,340 L 480,380 L 450,420 L 350,410 Z" fill="#e8e8e8" stroke="#ccc" strokeWidth="0.5" />
              <path d="M 450,300 L 550,290 L 580,330 L 550,370 L 450,360 Z" fill="#e8e8e8" stroke="#ccc" strokeWidth="0.5" />
              <path d="M 500,200 L 600,190 L 630,230 L 600,270 L 500,260 Z" fill="#e8e8e8" stroke="#ccc" strokeWidth="0.5" />
              <path d="M 650,300 L 750,290 L 780,330 L 750,370 L 650,360 Z" fill="#e8e8e8" stroke="#ccc" strokeWidth="0.5" />
              <path d="M 700,350 L 800,340 L 830,380 L 800,420 L 700,410 Z" fill="#e8e8e8" stroke="#ccc" strokeWidth="0.5" />
              <path d="M 300,400 L 400,390 L 430,430 L 400,470 L 300,460 Z" fill="#e8e8e8" stroke="#ccc" strokeWidth="0.5" />
              <path d="M 500,400 L 600,390 L 630,430 L 600,470 L 500,460 Z" fill="#e8e8e8" stroke="#ccc" strokeWidth="0.5" />
              <path d="M 750,400 L 850,390 L 880,430 L 850,470 L 750,460 Z" fill="#e8e8e8" stroke="#ccc" strokeWidth="0.5" />
            </svg>
          </div>
        </div>

        <div className="migration-tables-section">
          <div className="migration-tables-container">
            <div className="migration-table-wrapper">
              <h4 className="migration-table-title">
                Top 10 areas people are moving to
                <span className="info-icon" title="Information">ℹ</span>
              </h4>
              <table className="migration-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>
                      Metro
                      <span className="info-icon" title="Information">ℹ</span>
                    </th>
                    <th>
                      Net inflow
                      <span className="info-icon" title="Information">ℹ</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td><a href="#" className="metro-link">Sacramento, CA</a></td>
                    <td>10,500</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td><a href="#" className="metro-link">Phoenix, AZ</a></td>
                    <td>5,400</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td><a href="#" className="metro-link">Salisbury, MD</a></td>
                    <td>4,200</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td><a href="#" className="metro-link">Myrtle Beach, SC</a></td>
                    <td>4,200</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td><a href="#" className="metro-link">Sarasota, FL</a></td>
                    <td>4,100</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td><a href="#" className="metro-link">Cape Coral, FL</a></td>
                    <td>4,100</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td><a href="#" className="metro-link">Nashville, TN</a></td>
                    <td>4,100</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td><a href="#" className="metro-link">Portland, ME</a></td>
                    <td>3,600</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td><a href="#" className="metro-link">Orlando, FL</a></td>
                    <td>3,500</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td><a href="#" className="metro-link">Portland, OR</a></td>
                    <td>3,200</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="migration-table-wrapper">
              <h4 className="migration-table-title">
                Top 10 areas people are moving from
                <span className="info-icon" title="Information">ℹ</span>
              </h4>
              <table className="migration-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>
                      Metro
                      <span className="info-icon" title="Information">ℹ</span>
                    </th>
                    <th>
                      Net outflow
                      <span className="info-icon" title="Information">ℹ</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td><a href="#" className="metro-link">Los Angeles, CA</a></td>
                    <td>36,400</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td><a href="#" className="metro-link">New York, NY</a></td>
                    <td>27,100</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td><a href="#" className="metro-link">Washington, DC</a></td>
                    <td>18,900</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td><a href="#" className="metro-link">Seattle, WA</a></td>
                    <td>17,800</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td><a href="#" className="metro-link">San Francisco, CA</a></td>
                    <td>17,500</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td><a href="#" className="metro-link">Chicago, IL</a></td>
                    <td>14,700</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td><a href="#" className="metro-link">Atlanta, GA</a></td>
                    <td>4,000</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td><a href="#" className="metro-link">Hartford, CT</a></td>
                    <td>4,000</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td><a href="#" className="metro-link">Houston, TX</a></td>
                    <td>4,000</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td><a href="#" className="metro-link">Dallas, TX</a></td>
                    <td>3,700</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="migration-methodology">
            <p className="methodology-text">
              This data does not reflect actual moves. The latest migration analysis is based on a sample of about two million Redfin.com users who searched for homes across more than 100 metro areas. To be included in this dataset, a Redfin.com user must have viewed at least 10 homes in a three month period. This dataset excludes all rentals data.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default USMigrationTrends

