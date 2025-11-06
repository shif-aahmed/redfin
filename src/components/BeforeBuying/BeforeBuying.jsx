import './BeforeBuying.css'

function BeforeBuying() {
  return (
    <div className="before-buying-section">
      <div className="before-buying-container">
        <div className="before-buying-content">
          <div className="before-buying-left">
            <h2 className="before-buying-heading">Before Buying a Home</h2>
            <p className="before-buying-description">
              There are many benefits to buying a home, from helping you build wealth and independence, to putting down roots in a community. We'll help you decide if now is the time to buy a home and how much you can afford.
            </p>
          </div>
          
          <div className="before-buying-right">
            <div className="before-buying-image-container">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&q=80" 
                alt="Charming green house with white trim"
                className="before-buying-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeforeBuying

