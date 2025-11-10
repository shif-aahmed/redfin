import './TipsForNew.css'

function TipsForNew() {
  return (
    <div className="tips-for-new-section">
      <div className="tips-for-new-container">
        <div className="tips-for-new-content">
          <div className="tips-for-new-left">
            <h2 className="tips-for-new-heading">Tips for New Homeowners</h2>
            <p className="tips-for-new-description">
              The responsibilities of buying a home don't stop after getting the keys. Being a homeowner has its own responsibilities, like making a monthly budget, paying property taxes, and keeping up with home maintenance.
            </p>
          </div>
          
          <div className="tips-for-new-right">
            <div className="tips-for-new-image-container">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&q=80" 
                alt="Modern home interior with living and dining area"
                className="tips-for-new-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TipsForNew





