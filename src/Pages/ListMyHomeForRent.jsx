import './ListMyHomeForRent.css'

function ListMyHomeForRent() {
  return (
    <div className="list-home-page">
      <header className="list-home-topbar">
        <span className="list-home-topbar-title">List my home for rent</span>
        <button className="list-home-topbar-btn">Get started</button>
      </header>

      <section className="list-home-hero">
        <div className="list-home-hero-content">
          <h1>List your home for rent on Redfin</h1>
          <p>Post your home in minutes and reach millions of renters for free.</p>
          <button className="list-home-hero-btn">Get started</button>
        </div>
        <div className="list-home-hero-illustration" aria-hidden="true">
          <div className="list-spotlight spotlight-left"></div>
          <div className="list-spotlight spotlight-right"></div>
          <div className="list-hero-house">
            <div className="list-hero-base"></div>
            <div className="list-hero-roof"></div>
            <div className="list-hero-body">
              <div className="list-hero-window left"></div>
              <div className="list-hero-door">
                <div className="door-window"></div>
              </div>
              <div className="list-hero-window right"></div>
            </div>
            <div className="list-hero-steps"></div>
          </div>
          <div className="list-hero-ramp"></div>
          <div className="list-spotlight-base left"></div>
          <div className="list-spotlight-base right"></div>
        </div>
      </section>

      <section className="list-home-benefits">
        <div className="list-benefits-illustration">
          <div className="list-benefits-phone">
            <div className="phone-header">
              <span className="phone-logo">Redfin</span>
              <span className="phone-menu"></span>
            </div>
            <div className="phone-image"></div>
            <div className="phone-details">
              <h3>871 Old Forest Road</h3>
              <div className="phone-attributes">
                <div>
                  <span className="attr-label">Price</span>
                  <span className="attr-value">$850,000</span>
                </div>
                <div>
                  <span className="attr-label">Beds</span>
                  <span className="attr-value">3</span>
                </div>
                <div>
                  <span className="attr-label">Baths</span>
                  <span className="attr-value">2</span>
                </div>
                <div>
                  <span className="attr-label">Sq. Ft.</span>
                  <span className="attr-value">2,101</span>
                </div>
              </div>
              <div className="phone-calendar">
                <span>WEDNESDAY</span>
                <span>THURSDAY</span>
                <span>FRIDAY</span>
              </div>
              <div className="phone-dates">
                <span>5</span>
                <span>6</span>
                <span>7</span>
              </div>
              <button className="phone-cta">Schedule Tour</button>
            </div>
          </div>
        </div>

        <div className="list-benefits-content">
          <div className="list-benefit-item">
            <h3>Post rental listings for free</h3>
            <p>
              With us, you can list your property for rent at no cost. There are absolutely no hidden fees.
            </p>
          </div>
          <div className="list-benefit-item">
            <h3>Reach 20+ million visitors a month</h3>
            <p>
              When you list your property for rent with Redfin, you’ll get access to millions of potential tenants.
            </p>
          </div>
          <div className="list-benefit-item">
            <h3>View and screen potential tenants</h3>
            <p>
              Gain insights into a potential tenant’s financial, criminal, and eviction history.
            </p>
          </div>
        </div>
      </section>

      <section className="list-home-how-it-works">
        <div className="how-it-works-header">
          <h2>How it works</h2>
        </div>
        <div className="how-it-works-grid">
          <article className="how-card">
            <div className="how-icon pencil"></div>
            <h3>Create an account</h3>
            <p>Easily register for a Redfin Rental Tools account to start sharing your properties.</p>
          </article>
          <article className="how-card">
            <div className="how-icon house"></div>
            <h3>Tell us about your property</h3>
            <p>Upload photos and details like the number of beds and bathrooms, amenities, pet policies, and more.</p>
          </article>
          <article className="how-card">
            <div className="how-icon publish"></div>
            <h3>Publish your listing</h3>
            <p>After a review process, your listings will be shared with millions of potential renters.</p>
          </article>
        </div>
      </section>

      <section className="list-home-fast-publish">
        <div className="fast-publish-illustration" aria-hidden="true">
          <div className="fast-laptop">
            <div className="fast-laptop-base"></div>
            <div className="fast-laptop-screen">
              <div className="fast-screen-header">
                <span className="fast-logo">Redfin</span>
              </div>
              <div className="fast-screen-content">
                <div className="fast-form">
                  <div className="fast-form-title">Which property would you like to list for rent?</div>
                  <div className="fast-form-option">4550 Lincoln St<br/>Seattle, WA 98105</div>
                  <div className="fast-form-option">2044 Westlake Ave N<br/>Seattle, WA 98103</div>
                  <button className="fast-form-add">Add new property</button>
                </div>
                <div className="fast-steps">
                  <span className="step active">Address</span>
                  <span className="step">Property info</span>
                  <span className="step">Description</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fast-publish-content">
          <h2>Publish a listing in under 10 minutes</h2>
          <p>Getting your listing live is fast and easy.</p>
          <button className="fast-publish-btn">Get started</button>
        </div>
      </section>

      <section className="list-home-screening">
        <div className="screening-content">
          <div className="screening-item">
            <h3>Send applications to renters</h3>
            <p>Easily invite potential tenants to our detailed and easy-to-use applications.</p>
          </div>
          <div className="screening-item">
            <h3>Review applications</h3>
            <p>Screen tenants with confidence with 3rd party verified credit, eviction and criminal reports.</p>
          </div>
          <div className="screening-item">
            <h3>Best of all, it’s free for you</h3>
            <p>Renters pay a fee to apply to cover the cost of screening reports.</p>
          </div>
        </div>
        <div className="screening-illustration" aria-hidden="true">
          <div className="screening-card background">
            <div className="screening-header">
              <span className="screening-title">Screening Report</span>
              <span className="screening-score">724</span>
            </div>
            <div className="screening-meter"></div>
            <div className="screening-section">
              <h4>Criminal History</h4>
              <div className="screening-bar"></div>
            </div>
            <div className="screening-section">
              <h4>Tradelines</h4>
              <div className="screening-trade-row"></div>
              <div className="screening-trade-row"></div>
            </div>
          </div>
          <div className="screening-card foreground">
            <div className="summary-header">
              <span className="summary-title">Alexander Knight</span>
              <span className="summary-address">1234 Broadway St. #102</span>
            </div>
            <div className="summary-grid">
              <div>
                <span className="summary-label">Move-in</span>
                <span className="summary-value">1/22/24</span>
              </div>
              <div>
                <span className="summary-label">Income</span>
                <span className="summary-value">$3,650</span>
              </div>
              <div>
                <span className="summary-label">Pets</span>
                <span className="summary-value">Yes</span>
              </div>
              <div>
                <span className="summary-label">Smoking</span>
                <span className="summary-value">No</span>
              </div>
            </div>
            <div className="summary-footer">
              <span className="summary-label">Applying with</span>
              <span className="summary-value">Samantha Knight</span>
            </div>
          </div>
        </div>
      </section>

      <section className="list-home-resources">
        <h2>Rentals resources</h2>
        <div className="resources-grid">
          <article className="resource-card">
            <div className="resource-illustration chart"></div>
            <div className="resource-content">
              <h3>Keep up with the latest rental market trends</h3>
              <button type="button">Learn more</button>
            </div>
          </article>
          <article className="resource-card">
            <div className="resource-illustration decision"></div>
            <div className="resource-content">
              <h3>Sell or rent? We can help you decide</h3>
              <button type="button">Learn more</button>
            </div>
          </article>
          <article className="resource-card">
            <div className="resource-illustration checklist"></div>
            <div className="resource-content">
              <h3>First time renting? Check out this guide.</h3>
              <button type="button">Learn more</button>
            </div>
          </article>
        </div>
      </section>

      <section className="list-home-faq">
        <h2>FAQ</h2>
        <div className="faq-grid">
          <details>
            <summary>How do I manage and edit my listings?</summary>
            <p>You can edit your listings anytime from the Redfin Rental Tools dashboard by selecting the listing you want to update.</p>
          </details>
          <details>
            <summary>How will potential renters contact me?</summary>
            <p>Interested renters can contact you directly through Redfin messages or via the phone number you provide when creating your listing.</p>
          </details>
          <details>
            <summary>What is the best way for me to list ten or more properties?</summary>
            <p>Use bulk upload in Rental Tools to import multiple properties at once or contact our team for dedicated support.</p>
          </details>
          <details>
            <summary>Is Redfin Rental Tools available in my area?</summary>
            <p>Redfin Rental Tools is available in most major metros. Enter your address to confirm availability for your property.</p>
          </details>
        </div>
      </section>
    </div>
  )
}

export default ListMyHomeForRent

