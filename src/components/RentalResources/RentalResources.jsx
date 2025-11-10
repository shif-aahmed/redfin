import './RentalResources.css'

function RentalResources() {
  const resources = [
    {
      title: "How Much Does an Apartment Cost?",
      illustration: (
        <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="resource-illustration">
          {/* Bar graphs in background */}
          <rect x="20" y="80" width="15" height="60" fill="#FFB3BA" rx="2"/>
          <rect x="40" y="60" width="15" height="80" fill="#4DB8BC" rx="2"/>
          <rect x="60" y="90" width="15" height="50" fill="#FFB3BA" rx="2"/>
          <rect x="145" y="70" width="15" height="70" fill="#4DB8BC" rx="2"/>
          <rect x="165" y="85" width="15" height="55" fill="#FFB3BA" rx="2"/>
          
          {/* Building */}
          <rect x="85" y="60" width="50" height="80" fill="#D32F2F" rx="2"/>
          
          {/* Windows - Row 1 */}
          <rect x="92" y="68" width="12" height="15" fill="#FFF" rx="1"/>
          <rect x="116" y="68" width="12" height="15" fill="#FFF" rx="1"/>
          
          {/* Windows - Row 2 */}
          <rect x="92" y="90" width="12" height="15" fill="#FFF" rx="1"/>
          <rect x="116" y="90" width="12" height="15" fill="#FFF" rx="1"/>
          
          {/* Windows - Row 3 */}
          <rect x="92" y="112" width="12" height="15" fill="#FFF" rx="1"/>
          <rect x="116" y="112" width="12" height="15" fill="#FFF" rx="1"/>
          
          {/* Door */}
          <rect x="103" y="125" width="14" height="15" fill="#8B4513" rx="1"/>
          
          {/* Stairs */}
          <rect x="95" y="145" width="30" height="3" fill="#333"/>
          <rect x="98" y="150" width="24" height="3" fill="#333"/>
          <rect x="101" y="155" width="18" height="3" fill="#333"/>
        </svg>
      )
    },
    {
      title: "Rental budgeting 101",
      illustration: (
        <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="resource-illustration">
          {/* Money stacks */}
          <g>
            <rect x="30" y="80" width="25" height="50" fill="#4DB8BC" rx="2"/>
            <rect x="30" y="78" width="25" height="4" fill="#8B7355"/>
            <rect x="60" y="70" width="25" height="60" fill="#4DB8BC" rx="2"/>
            <rect x="60" y="68" width="25" height="4" fill="#8B7355"/>
            <rect x="90" y="85" width="25" height="45" fill="#4DB8BC" rx="2"/>
            <rect x="90" y="83" width="25" height="4" fill="#8B7355"/>
          </g>
          
          {/* Calculator */}
          <rect x="125" y="75" width="35" height="50" fill="#F5F5F5" stroke="#333" strokeWidth="2" rx="2"/>
          <rect x="130" y="80" width="25" height="12" fill="#E0E0E0" rx="1"/>
          <circle cx="135" cy="100" r="2" fill="#D32F2F"/>
          <rect x="130" y="106" width="4" height="4" fill="#4DB8BC" rx="0.5"/>
          <rect x="137" y="106" width="4" height="4" fill="#4DB8BC" rx="0.5"/>
          <rect x="144" y="106" width="4" height="4" fill="#4DB8BC" rx="0.5"/>
          <rect x="151" y="106" width="4" height="4" fill="#4DB8BC" rx="0.5"/>
          <rect x="130" y="113" width="4" height="4" fill="#4DB8BC" rx="0.5"/>
          <rect x="137" y="113" width="4" height="4" fill="#4DB8BC" rx="0.5"/>
          <rect x="144" y="113" width="4" height="4" fill="#4DB8BC" rx="0.5"/>
          <rect x="151" y="113" width="4" height="4" fill="#4DB8BC" rx="0.5"/>
          
          {/* Checkboxes */}
          <rect x="168" y="80" width="12" height="12" fill="#FFF" stroke="#4DB8BC" strokeWidth="2" rx="1"/>
          <path d="M170 86 L173 89 L178 82" stroke="#4DB8BC" strokeWidth="2" fill="none"/>
          <rect x="168" y="100" width="12" height="12" fill="#FFF" stroke="#4DB8BC" strokeWidth="2" rx="1"/>
          <path d="M170 106 L173 109 L178 102" stroke="#4DB8BC" strokeWidth="2" fill="none"/>
          <rect x="168" y="120" width="12" height="12" fill="#FFF" stroke="#4DB8BC" strokeWidth="2" rx="1"/>
          <path d="M170 126 L173 129 L178 122" stroke="#4DB8BC" strokeWidth="2" fill="none"/>
        </svg>
      )
    },
    {
      title: "How much are utilities in an apartment?",
      illustration: (
        <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="resource-illustration">
          {/* Background shapes */}
          <circle cx="40" cy="100" r="30" fill="#F0F0F0" opacity="0.5"/>
          <circle cx="160" cy="80" r="25" fill="#F0F0F0" opacity="0.5"/>
          
          {/* Tree */}
          <rect x="25" y="125" width="4" height="15" fill="#8B4513"/>
          <circle cx="27" cy="120" r="8" fill="#4DB8BC"/>
          
          {/* Building in background */}
          <rect x="130" y="85" width="40" height="55" fill="#FFB3BA" rx="2"/>
          <rect x="136" y="92" width="8" height="10" fill="#FFF" rx="0.5"/>
          <rect x="147" y="92" width="8" height="10" fill="#FFF" rx="0.5"/>
          <rect x="136" y="107" width="8" height="10" fill="#FFF" rx="0.5"/>
          <rect x="147" y="107" width="8" height="10" fill="#FFF" rx="0.5"/>
          <rect x="136" y="122" width="8" height="10" fill="#FFF" rx="0.5"/>
          <rect x="147" y="122" width="8" height="10" fill="#FFF" rx="0.5"/>
          
          {/* Hand */}
          <ellipse cx="75" cy="115" rx="15" ry="20" fill="#F4C2A0"/>
          <rect x="60" y="110" width="18" height="35" fill="#F4C2A0" rx="3"/>
          
          {/* Key */}
          <circle cx="85" cy="90" r="8" fill="#FFD700" stroke="#DAA520" strokeWidth="2"/>
          <rect x="85" y="85" width="35" height="5" fill="#FFD700" stroke="#DAA520" strokeWidth="1" rx="1"/>
          <rect x="115" y="83" width="3" height="3" fill="#FFD700"/>
          <rect x="115" y="87" width="3" height="3" fill="#FFD700"/>
          <rect x="110" y="85" width="3" height="3" fill="#FFD700"/>
          
          {/* Keychain */}
          <rect x="78" cy="95" width="14" height="8" fill="#D32F2F" rx="1"/>
          <text x="80" y="101" fontSize="5" fill="#FFF" fontWeight="bold">RENT</text>
        </svg>
      )
    }
  ]

  return (
    <div className="rental-resources-section">
      <div className="rental-resources-container">
        <h2 className="rental-resources-title">Rental Resources</h2>
        
        <div className="rental-resources-cards">
          {resources.map((resource, index) => (
            <div key={index} className="rental-resource-card">
              <div className="resource-illustration-wrapper">
                {resource.illustration}
              </div>
              <h3 className="resource-card-title">{resource.title}</h3>
              <a href="#" className="resource-learn-more">Learn more</a>
            </div>
          ))}
        </div>
        
        <div className="rental-resources-footer">
          <button className="see-more-articles-btn">See more rental articles</button>
        </div>
      </div>
    </div>
  )
}

export default RentalResources



