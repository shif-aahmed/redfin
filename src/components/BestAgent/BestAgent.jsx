import './BestAgent.css'

function BestAgent() {
  return (
    <div className="best-agent-section">
      <div className="best-agent-container">
        <div className="best-agent-left">
          <h2 className="best-agent-title">Work with the best agents in your neighborhood</h2>
          <p className="best-agent-text">
            Redfin agents are among the most experienced in the industry, so we know how to help you win in today's market.
          </p>
          <p className="best-agent-asterisk">*</p>
          <div className="best-agent-search">
            <input 
              type="text" 
              placeholder="Find an agent in your area" 
              className="best-agent-input"
            />
            <button className="best-agent-search-button" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="20" height="20">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="best-agent-right">
          <div className="best-agent-image">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Redfin real estate agent" 
              className="agent-photo"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestAgent

