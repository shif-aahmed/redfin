import BeforeBuying from '../components/BeforeBuying/BeforeBuying'
import ExploreWhether from '../components/ExploreWhether/ExploreWhether'
import AffordAHome from '../components/AffordAHome/AffordAHome'
import HowMuch from '../components/HowMuch/HowMuch'
import TheProcess from '../components/TheProcess/TheProcess'
import EstateAgent from '../components/EstateAgent/EstateAgent'
import TipsForNew from '../components/TipsForNew/TipsForNew'
import HomeMaintenance from '../components/HomeMaintenance/HomeMaintenance'
import SaveBig from '../components/SaveBig/SaveBig'
import './HomebuyingGuide.css'

function HomebuyingGuide() {
  return (
    <div className="homebuying-guide-page">
      <div className="homebuying-guide-header">
        <div className="homebuying-guide-header-line"></div>
        <button className="homebuying-guide-language-btn">Spanish</button>
      </div>
      
      <div className="homebuying-guide-container">
        <div className="homebuying-guide-content">
          <div className="homebuying-guide-left">
            <h1 className="homebuying-guide-heading">Welcome to Redfin's Homebuying Guide</h1>
            <p className="homebuying-guide-description">
              Thinking of buying a home? Start your journey with confidence - this guide walks you through every step so you know exactly what to expect.
            </p>
          </div>
          
          <div className="homebuying-guide-right">
            <div className="homebuying-guide-illustration">
              <svg viewBox="0 0 600 500" className="illustration-svg">
                {/* House with FOR SALE sign */}
                <g className="house-group">
                  <rect x="50" y="200" width="120" height="100" fill="none" stroke="#333" strokeWidth="2"/>
                  <polygon points="50,200 110,150 170,200" fill="none" stroke="#333" strokeWidth="2"/>
                  <rect x="80" y="230" width="30" height="40" fill="none" stroke="#333" strokeWidth="2"/>
                  <rect x="120" y="230" width="30" height="40" fill="none" stroke="#333" strokeWidth="2"/>
                  <rect x="70" y="210" width="20" height="20" fill="none" stroke="#333" strokeWidth="2"/>
                  <rect x="130" y="210" width="20" height="20" fill="none" stroke="#333" strokeWidth="2"/>
                  <rect x="85" y="150" width="50" height="30" fill="#d32f2f" stroke="#333" strokeWidth="1"/>
                  <text x="110" y="170" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">FOR SALE</text>
                  <text x="110" y="185" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">$892,500</text>
                  <path d="M110,195 L115,205 M110,195 L105,205" stroke="white" strokeWidth="1.5" fill="none"/>
                </g>
                
                {/* Calendar */}
                <g className="calendar-group">
                  <rect x="50" y="320" width="80" height="90" fill="none" stroke="#333" strokeWidth="2" rx="4"/>
                  <rect x="50" y="320" width="80" height="20" fill="#f0f0f0" stroke="#333" strokeWidth="2" rx="4"/>
                  <text x="90" y="335" textAnchor="middle" fill="#333" fontSize="10" fontWeight="bold">AVAILABLE</text>
                  <circle cx="70" cy="360" r="3" fill="#d32f2f"/>
                  <circle cx="90" cy="360" r="3" fill="#d32f2f"/>
                  <circle cx="110" cy="360" r="3" fill="#d32f2f"/>
                </g>
                
                {/* Smartphone with Redfin logo */}
                <g className="phone-group">
                  <rect x="220" y="180" width="80" height="140" fill="#d32f2f" stroke="#333" strokeWidth="2" rx="8"/>
                  <rect x="230" y="190" width="60" height="120" fill="white" rx="2"/>
                  <text x="260" y="250" textAnchor="middle" fill="#d32f2f" fontSize="14" fontWeight="bold">Redfin</text>
                </g>
                
                {/* Agent person */}
                <g className="agent-group">
                  <circle cx="450" cy="200" r="30" fill="none" stroke="#333" strokeWidth="2"/>
                  <rect x="440" y="230" width="20" height="40" fill="none" stroke="#333" strokeWidth="2"/>
                  <rect x="430" y="270" width="40" height="30" fill="#d32f2f" stroke="#333" strokeWidth="2"/>
                  <rect x="420" y="240" width="60" height="50" fill="none" stroke="#333" strokeWidth="2" rx="4"/>
                  <path d="M445,195 Q450,190 455,195" stroke="#333" strokeWidth="2" fill="none"/>
                </g>
                
                {/* Speech bubbles */}
                <g className="speech-bubbles-group">
                  <ellipse cx="480" cy="320" rx="40" ry="25" fill="none" stroke="#333" strokeWidth="2"/>
                  <ellipse cx="520" cy="360" rx="35" ry="20" fill="none" stroke="#666" strokeWidth="2"/>
                </g>
                
                {/* Red starbursts */}
                <g className="starbursts-group">
                  <path d="M150,100 L155,110 L165,110 L157,117 L160,127 L150,120 L140,127 L143,117 L135,110 L145,110 Z" fill="#d32f2f" opacity="0.7"/>
                  <path d="M400,120 L403,128 L411,128 L405,133 L408,141 L400,136 L392,141 L395,133 L389,128 L397,128 Z" fill="#d32f2f" opacity="0.7"/>
                  <path d="M300,380 L303,388 L311,388 L305,393 L308,401 L300,396 L292,401 L295,393 L289,388 L297,388 Z" fill="#d32f2f" opacity="0.7"/>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="homebuying-guide-bottom-nav">
        <div className="homebuying-guide-bottom-line"></div>
        <div className="homebuying-guide-nav-links">
          <a href="#" className="homebuying-guide-nav-link">Before Buying a Home</a>
          <a href="#" className="homebuying-guide-nav-link">How to Afford a Home</a>
          <a href="#" className="homebuying-guide-nav-link">Homebuying Process</a>
          <a href="#" className="homebuying-guide-nav-link">Homebuying Programs</a>
          <a href="#" className="homebuying-guide-nav-link">Homeowner Tips</a>
        </div>
      </div>
      
      <BeforeBuying />
      <ExploreWhether />
      <AffordAHome />
      <HowMuch />
      <TheProcess />
      <EstateAgent />
      <TipsForNew />
      <HomeMaintenance />
      <SaveBig />
    </div>
  )
}

export default HomebuyingGuide

