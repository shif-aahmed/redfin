import './MeetAgent.css'

function MeetAgent() {
  return (
    <div className="meet-agent-section">
      <div className="meet-agent-container">
        <div className="meet-agent-content">
          <div className="meet-agent-left">
            <h2 className="meet-agent-heading">Meet your local luxury agent</h2>
            <p className="meet-agent-description">
              With Redfin Premier, you'll be paired with a local agent who has years of experience buying and selling luxury homes. Only our best agents qualify to become Redfin Premier agents.
            </p>
          </div>
          
          <div className="meet-agent-right">
            <div className="meet-agent-search-container">
              <input 
                type="text" 
                placeholder="Find an agent in your area"
                className="meet-agent-search-input"
              />
              <button className="meet-agent-search-button">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeetAgent





