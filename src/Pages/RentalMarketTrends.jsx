import './RentalMarketTrends.css'
import Footer from '../components/Footer/Footer'

function RentalMarketTrends() {
  return (
    <div className="rental-trends-wrapper">
      <div className="rental-trends-page">
        <div className="rental-trends-card">
          <h4 className="rental-trends-subtitle">Rental market trends for</h4>
          <h1 className="rental-trends-title">United States of America</h1>
          <p className="rental-trends-description">
            The average rent price in United States of America was $1,785 last month, up $0 month over month.
          </p>
          <div className="rental-trends-stats">
            <div className="rental-trends-stat">
              <span className="stat-label">
                Median rent <span className="stat-icon" aria-hidden="true">ⓘ</span>
              </span>
              <span className="stat-value">$1,785</span>
            </div>
            <div className="rental-trends-stat">
              <span className="stat-label">
                Month-over-month change <span className="stat-icon" aria-hidden="true">ⓘ</span>
              </span>
              <span className="stat-value">+$0</span>
            </div>
          </div>
        </div>

        <div className="rental-trends-chart-card">
          <div className="chart-heading">
            <h2>Average rent in United States of America</h2>
            <p>In August 2025, United States of America rental prices increased $0 compared to last month.</p>
          </div>
          <div className="chart-stat">
            <span className="chart-value">$1,785</span>
            <span className="chart-change">+0.00% month over month</span>
          </div>
          <div className="chart-visual" aria-hidden="true">
            <svg viewBox="0 0 800 220">
              <g className="chart-grid">
                <line x1="0" y1="40" x2="800" y2="40" />
                <line x1="0" y1="90" x2="800" y2="90" />
                <line x1="0" y1="140" x2="800" y2="140" />
                <line x1="0" y1="190" x2="800" y2="190" />
              </g>
              <path
                d="M0 120 C120 110, 200 105, 300 115 C380 125, 460 112, 560 118 C640 124, 720 115, 800 118"
                stroke="#008080"
                strokeWidth="4"
                fill="none"
              />
            </svg>
            <div className="chart-axis chart-axis-x">
              <span>Aug 2024</span>
              <span>Nov 2024</span>
              <span>Feb 2025</span>
              <span>May 2025</span>
              <span>Aug 2025</span>
            </div>
            <div className="chart-axis chart-axis-y">
              <span>$2,000</span>
              <span>$1,800</span>
              <span>$1,600</span>
              <span>$1,400</span>
            </div>
          </div>
          <div className="chart-actions">
            <div className="chart-search">
              <input type="text" placeholder="Add a city" />
              <button aria-label="Search">
                <span className="search-icon" aria-hidden="true"></span>
              </button>
            </div>
            <div className="chart-buttons">
              <button className="chart-button share">Share</button>
              <button className="chart-button embed">Embed</button>
            </div>
          </div>
        </div>

        <div className="rental-trends-bars-card">
          <div className="bars-heading">
            <h2>Average rent of top US cities</h2>
            <p>Here&apos;s how the national average rent of <strong>$1,785</strong> compares to the largest cities.</p>
          </div>
          <div className="bars-table">
            {[
              { city: 'San Ramon', value: '$2,940' },
              { city: 'Irvine', value: '$3,781' },
              { city: 'Bothell', value: '$2,667' },
              { city: 'Pleasanton', value: '$3,241' },
              { city: 'Washington, DC', value: '$2,600' },
              { city: 'San Jose', value: '$3,011' },
              { city: 'Fremont', value: '$3,072' },
              { city: 'Las Vegas', value: '$1,931' },
              { city: 'Chicago', value: '$2,446' },
              { city: 'San Francisco', value: '$3,417' },
              { city: 'Portland', value: '$1,802' },
              { city: 'San Diego', value: '$3,116' },
              { city: 'Los Angeles', value: '$3,285' }
            ].map((item) => (
              <div className="bar-row" key={item.city}>
                <span className="bar-city">{item.city}</span>
                <div className="bar-track">
                  <div className="bar-fill"></div>
                  <span className="bar-value">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="bars-updated">Last updated: 09/24/2025</p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default RentalMarketTrends
