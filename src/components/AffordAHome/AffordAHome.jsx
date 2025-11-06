import './AffordAHome.css'

function AffordAHome() {
  return (
    <div className="afford-a-home-section">
      <div className="afford-a-home-container">
        <div className="afford-a-home-content">
          <div className="afford-a-home-left">
            <h2 className="afford-a-home-heading">How to Afford a Home</h2>
            <p className="afford-a-home-description">
              Figuring out how to afford a home doesn't have to be complicated. We'll help you at every step, from determining how much it costs to buy a home and saving for a downpayment to getting out of debt and improving your credit score.
            </p>
          </div>
          
          <div className="afford-a-home-right">
            <div className="afford-a-home-image-container">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&q=80" 
                alt="Two-story light-colored house with brown roof"
                className="afford-a-home-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AffordAHome

