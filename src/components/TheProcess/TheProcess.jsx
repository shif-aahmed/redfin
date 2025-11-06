import './TheProcess.css'

function TheProcess() {
  return (
    <div className="the-process-section">
      <div className="the-process-container">
        <div className="the-process-content">
          <div className="the-process-left">
            <h2 className="the-process-heading">The Homebuying Process</h2>
            <p className="the-process-description">
              The homebuying process can seem complicated, but it doesn't have to be. We'll guide you through the process, from finding a real estate agent and getting pre-approved for a mortgage to finding a home, making an offer, and closing on a home.
            </p>
          </div>
          
          <div className="the-process-right">
            <div className="the-process-image-container">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&q=80" 
                alt="Single-story house with dark green siding"
                className="the-process-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheProcess

