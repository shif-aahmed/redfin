import './ContactForm.css'

function ContactForm() {
  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        <h2 className="contact-form-heading">Talk to a Redfin agent</h2>
        <p className="contact-form-description">
          You'll be connected with an expert local agent—there's no pressure or obligation.
        </p>
        <p className="contact-form-required">All fields are required.</p>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="location" className="form-label">Where are you searching for homes?</label>
            <div className="search-input-group">
              <input
                type="text"
                id="location"
                placeholder="San Francisco"
                className="form-input"
              />
              <button type="button" className="search-icon-button" aria-label="Search">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                placeholder="redfin@redfin.com"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input
                type="tel"
                id="phone"
                placeholder="(   )   -"
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">What can we help you with?</label>
            <textarea
              id="message"
              placeholder="I'm interested in buying, selling or a free consult with a Redfin agent."
              className="form-textarea"
              rows="4"
            ></textarea>
          </div>

          <div className="form-checkbox-group">
            <input
              type="checkbox"
              id="financing"
              className="form-checkbox"
            />
            <label htmlFor="financing" className="form-checkbox-label">
              I want financing information.
            </label>
          </div>

          <button type="submit" className="submit-button">Submit</button>

          <div className="legal-text">
            <p>
              By clicking Submit, you consent to receive calls and SMS messages, including by automated means, from Redfin and its real estate professionals, and from Rock Loans of America, LLC, at the number you provided. Consent is not a condition of using our services. Message frequency depends on your activity. Message and data rates may apply. Reply STOP to opt-out or HELP for help. By clicking Submit, you also consent to Redfin contacting you via phone/text about your inquiry, which may involve the use of automated means. You are not required to consent as a condition of purchase. You also agree to our Terms of Use and Privacy Policy. You may receive a Redfin account for additional features and to manage your communication preferences.
            </p>
            <p className="legal-links">
              <a href="#" className="legal-link">Privacy Policy</a> and <a href="#" className="legal-link">Terms of Use</a>
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactForm

