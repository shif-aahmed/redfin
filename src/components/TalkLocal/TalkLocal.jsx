import { useState } from 'react'
import './TalkLocal.css'

function TalkLocal() {
  const [location, setLocation] = useState('Chicago')
  const [email, setEmail] = useState('redfin@redfin.com')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState("I'm interested in buying, selling or a free consult with a Redfin agent.")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log({ location, email, phone, message })
  }

  return (
    <div className="talk-local-section">
      <div className="talk-local-container">
        <h2 className="talk-local-title">Talk to a local Redfin Agent</h2>
        <p className="talk-local-subtitle">We're here to help seven days a week.</p>

        <form onSubmit={handleSubmit} className="talk-local-form">
          <div className="talk-local-form-left">
            <div className="form-group">
              <label htmlFor="location">Where are you searching for homes? *</label>
              <div className="input-with-icon">
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
                <button type="button" className="search-button" aria-label="Search">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18" height="18">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone *</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="( ) -"
                required
              />
            </div>
          </div>

          <div className="talk-local-form-right">
            <div className="form-group">
              <label htmlFor="message">What can we help you with? *</label>
              <textarea
                id="message"
                rows="8"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
            <p className="disclaimer">
              You are creating a Redfin account and agree to our <a href="#" className="disclaimer-link">Terms of Use</a> and <a href="#" className="disclaimer-link">Privacy Policy</a>.
            </p>
          </div>
        </form>

        <div className="talk-local-divider"></div>

        <div className="talk-local-info-section">
          <div className="info-column">
            <h3 className="info-title">Free Classes</h3>
            <p className="info-text">
              Whether you're interested in a real estate job at Redfin or want to master the basics of buying or selling a home, free Redfin real estate classes and events are a great way to get started.
            </p>
          </div>
          <div className="info-column">
            <h3 className="info-title">Taught by Local Experts</h3>
            <p className="info-text">
              Our Redfin experts are available to answer all of your questions and share their knowledge of top real estate topics and trends, including the types of mortgage loans that are available, and how to get pre-approved.
            </p>
          </div>
          <div className="info-column">
            <h3 className="info-title">Winning Strategies</h3>
            <p className="info-text">
              Other popular classes include the best strategies for buying in a competitive housing market, and important tactics for selling your home for top dollar. Our free classes are also a great way to get acquainted with Redfin, a next-generation brokerage that's redefining real estate in the consumer's favor.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TalkLocal

