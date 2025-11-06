import React from 'react'
import './SophisticatedHomes.css'

function SophisticatedHomes() {
  return (
    <div className="sophisticated-homes-section">
      <div className="sophisticated-homes-container">
        <div className="sophisticated-homes-content">
          <div className="sophisticated-homes-left">
            <h2 className="sophisticated-homes-heading">
              Sophisticated marketing for<br />
              sophisticated homes
            </h2>
            <p className="sophisticated-homes-description">
              No other luxury brokerage can match Redfin Premier's marketing advantage, because no one else has our massive audience. Your listing will get in front of more qualified buyers with preferred placement on Redfin, where luxury listings get over 600 million views each year.*
            </p>
          </div>
          
          <div className="sophisticated-homes-right">
            <div className="brokerages-card">
              <div className="brokerages-header">
                <div className="brokerages-title">TOP U.S. BROKERAGES</div>
                <div className="brokerages-line"></div>
                <div className="brokerages-subtitle">Average monthly website visitors</div>
                <div className="brokerages-data-source">Based on 2023 Comscore traffic data.</div>
              </div>
              <div className="brokerages-chart">
                <div className="chart-bar-group">
                  <div className="chart-bar redfin-bar">
                    <span className="bar-value">36.8M</span>
                  </div>
                  <div className="bar-label">Redfin</div>
                </div>
                <div className="chart-bar-group">
                  <div className="chart-bar remax-bar">
                    <span className="bar-value">6.2M</span>
                  </div>
                  <div className="bar-label">RE/MAX</div>
                </div>
                <div className="chart-bar-group">
                  <div className="chart-bar coldwell-bar">
                    <span className="bar-value">4.3M</span>
                  </div>
                  <div className="bar-label">Coldwell<br />Banker</div>
                </div>
                <div className="chart-bar-group">
                  <div className="chart-bar compass-bar">
                    <span className="bar-value">1.8M</span>
                  </div>
                  <div className="bar-label">Compass</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SophisticatedHomes


