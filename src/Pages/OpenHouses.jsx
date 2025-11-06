import './OpenHouses.css'

function OpenHouses() {
  return (
    <div className="open-houses-page">
      <div className="open-houses-container">
        <div className="open-houses-content">
          <div className="open-houses-left">
            <h1 className="open-houses-heading">Open Houses near me</h1>
            <p className="open-houses-description">
              Find open houses near you. View photos, prices, and property details for nearby real estate.
            </p>
          </div>
          <div className="open-houses-right">
            <div className="house-illustration">
              <svg viewBox="0 0 400 300" className="house-svg">
                {/* Trees/Bushes background */}
                <ellipse cx="80" cy="250" rx="30" ry="40" fill="#f5f5dc" opacity="0.6"/>
                <ellipse cx="120" cy="260" rx="25" ry="35" fill="#f5f5dc" opacity="0.6"/>
                <ellipse cx="320" cy="255" rx="35" ry="45" fill="#f5f5dc" opacity="0.6"/>
                <ellipse cx="360" cy="265" rx="28" ry="38" fill="#f5f5dc" opacity="0.6"/>
                
                {/* House structure */}
                <rect x="150" y="120" width="100" height="100" fill="white" stroke="#333" strokeWidth="2"/>
                
                {/* Roof */}
                <polygon points="150,120 200,70 250,120" fill="white" stroke="#333" strokeWidth="2"/>
                
                {/* Chimney */}
                <rect x="220" y="80" width="20" height="40" fill="white" stroke="#333" strokeWidth="2"/>
                <rect x="222" y="78" width="16" height="8" fill="#333"/>
                
                {/* Windows */}
                <rect x="165" y="140" width="25" height="30" fill="white" stroke="#333" strokeWidth="1.5"/>
                <line x1="177.5" y1="140" x2="177.5" y2="170" stroke="#333" strokeWidth="1.5"/>
                <line x1="165" y1="155" x2="190" y2="155" stroke="#333" strokeWidth="1.5"/>
                
                <rect x="210" y="140" width="25" height="30" fill="white" stroke="#333" strokeWidth="1.5"/>
                <line x1="222.5" y1="140" x2="222.5" y2="170" stroke="#333" strokeWidth="1.5"/>
                <line x1="210" y1="155" x2="235" y2="155" stroke="#333" strokeWidth="1.5"/>
                
                {/* Window with window box */}
                <rect x="165" y="185" width="25" height="25" fill="white" stroke="#333" strokeWidth="1.5"/>
                <line x1="177.5" y1="185" x2="177.5" y2="210" stroke="#333" strokeWidth="1.5"/>
                <line x1="165" y1="197.5" x2="190" y2="197.5" stroke="#333" strokeWidth="1.5"/>
                <rect x="160" y="210" width="35" height="5" fill="#8B4513"/>
                
                {/* Front door */}
                <rect x="210" y="185" width="25" height="35" fill="#e51937" stroke="#333" strokeWidth="1.5"/>
                <circle cx="232" cy="202.5" r="2" fill="#333"/>
                
                {/* Redfin sign */}
                <rect x="100" y="220" width="2" height="30" fill="#333"/>
                <rect x="95" y="220" width="12" height="8" fill="#e51937"/>
                <text x="101" y="226" fontSize="4" fill="white" fontWeight="bold">Redfin</text>
                
                {/* Ground line */}
                <line x1="0" y1="250" x2="400" y2="250" stroke="#333" strokeWidth="2"/>
                
                {/* Stars */}
                <path d="M180 50 L182 56 L188 56 L183 60 L185 66 L180 62 L175 66 L177 60 L172 56 L178 56 Z" fill="#e51937"/>
                <path d="M210 45 L211.5 49.5 L216 49.5 L212.5 52.5 L214 57 L210 54.5 L206 57 L207.5 52.5 L204 49.5 L208.5 49.5 Z" fill="#e51937"/>
                <path d="M240 55 L241.5 59.5 L246 59.5 L242.5 62.5 L244 67 L240 64.5 L236 67 L237.5 62.5 L234 59.5 L238.5 59.5 Z" fill="#e51937"/>
                
                {/* Clouds */}
                <path d="M60 50 Q65 45 70 50 T80 50" stroke="#333" strokeWidth="1.5" fill="none"/>
                <path d="M280 60 Q285 55 290 60 T300 60" stroke="#333" strokeWidth="1.5" fill="none"/>
                <path d="M320 45 Q325 40 330 45 T340 45" stroke="#333" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="search-form-section">
          <div className="search-form-row">
            <div className="search-form-group">
              <label htmlFor="location">Location</label>
              <input 
                type="text" 
                id="location"
                placeholder="City, Address, School, Agent, ZIP"
                className="search-input"
              />
            </div>
            
            <div className="search-form-group">
              <label htmlFor="price-range">Price range</label>
              <div className="price-range-inputs">
                <select id="price-min" className="price-select">
                  <option>No min</option>
                  <option>$50,000</option>
                  <option>$100,000</option>
                  <option>$150,000</option>
                  <option>$200,000</option>
                  <option>$250,000</option>
                  <option>$300,000</option>
                  <option>$400,000</option>
                  <option>$500,000</option>
                  <option>$750,000</option>
                  <option>$1,000,000</option>
                </select>
                <select id="price-max" className="price-select">
                  <option>No max</option>
                  <option>$200,000</option>
                  <option>$300,000</option>
                  <option>$400,000</option>
                  <option>$500,000</option>
                  <option>$750,000</option>
                  <option>$1,000,000</option>
                  <option>$1,500,000</option>
                  <option>$2,000,000</option>
                  <option>$3,000,000</option>
                  <option>$5,000,000</option>
                </select>
              </div>
            </div>
            
            <button className="search-form-button">Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpenHouses

