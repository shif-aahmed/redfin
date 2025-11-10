import './LuxuryProperty.css'

function LuxuryProperty() {
  return (
    <div className="luxury-property-section">
      <div className="luxury-property-container">
        <div className="luxury-property-content">
          <div className="luxury-property-left">
            <h2 className="luxury-property-heading">
              Searching for the perfect<br />luxury property?
            </h2>
            <p className="luxury-property-description">
              Redfin Premier agents are local experts with years of experience in high-end real estate, so we can help buyers like you succeed in today's market.
            </p>
            <button className="luxury-property-button">Learn more</button>
          </div>
          
          <div className="luxury-property-right">
            <div className="luxury-property-image-container">
              <img 
                src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&h=600&fit=crop&q=80" 
                alt="Redfin Premier agents helping clients"
                className="luxury-property-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LuxuryProperty





