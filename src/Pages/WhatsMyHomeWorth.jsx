import './WhatsMyHomeWorth.css'

function WhatsMyHomeWorth() {
  return (
    <div className="worth-page">
      <header className="worth-top-nav">
        <div className="worth-tabs">
          <button className="worth-tab active">My Home</button>
          <button className="worth-tab">Redfin Selling Options</button>
          <button className="worth-tab">Selling Resources</button>
        </div>
      </header>

      <section className="worth-hero">
        <div className="worth-hero-content">
          <div className="worth-hero-text">
            <h1>How much is my house worth?</h1>
            <p>
              Use Redfin's home value estimator to get a free, instant home-value estimate, see nearby
              sales and market trends, and update your home facts and photos.
            </p>
            <div className="worth-address-entry">
              <input type="text" placeholder="Enter your address" aria-label="Enter your address" />
              <button>Next</button>
            </div>
          </div>
          <div className="worth-hero-art" aria-hidden="true">
            <div className="deck"></div>
            <div className="railing"></div>
            <div className="house"></div>
            <div className="plant"></div>
            <div className="person one"></div>
            <div className="person two"></div>
            <div className="person three"></div>
          </div>
        </div>
      </section>

      <section className="worth-accuracy">
        <div className="worth-accuracy-inner">
          <h2>The most accurate online home estimate</h2>
          <p>
            To calculate the <a href="#">Redfin Estimate</a>, we combine hundreds of data points about the market,
            the neighborhood, and the home itself—all to provide you with the most accurate home-valuation tools.
          </p>
          <div className="worth-accuracy-grid">
            <div className="worth-accuracy-card">
              <h3>Track your home's value</h3>
              <p>Instantly learn your home's value and how much you could sell for in today's market.</p>
            </div>
            <div className="worth-accuracy-card">
              <h3>See local market trends</h3>
              <p>Stay up to date on market changes and find out how much homes like yours have sold in the past year.</p>
            </div>
            <div className="worth-accuracy-card">
              <h3>Get a free monthly home report</h3>
              <p>Receive a monthly email with updates about your home value and how it's changing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="worth-resources">
        <div className="worth-resources-inner">
          <h2>More resources for homeowners</h2>
          <div className="worth-resources-grid">
            <article className="worth-resource-card">
              <div className="resource-illustration equity" aria-hidden="true"></div>
              <div className="resource-content">
                <h3>How to calculate home equity</h3>
                <button>See more</button>
              </div>
            </article>
            <article className="worth-resource-card">
              <div className="resource-illustration comps" aria-hidden="true"></div>
              <div className="resource-content">
                <h3>5 ways to find real estate comps in your area</h3>
                <button>See more</button>
              </div>
            </article>
            <article className="worth-resource-card">
              <div className="resource-illustration tips" aria-hidden="true"></div>
              <div className="resource-content">
                <h3>10 awesome real estate tips for home sellers</h3>
                <button>See more</button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="worth-consultation">
        <div className="worth-consultation-inner">
          <h2>Want a professional estimate?</h2>
          <p>Request a free, no-obligation consultation with a Redfin Agent.<br/>We'll get back to you within one hour.</p>
          <form className="worth-consultation-form">
            <input type="text" placeholder="Enter your street address" aria-label="Street address" />
            <button type="button">Schedule Selling Consultation</button>
          </form>
        </div>
      </section>

      <section className="worth-resources-links">
        <div className="worth-resources-links-inner">
          <h2>Home Estimate Resources</h2>
          <ul>
            <li><a href="#">Redfin Estimate</a></li>
            <li><a href="#">Home proceeds sale calculator</a></li>
            <li><a href="#">Home affordability calculator</a></li>
            <li><a href="#">Connect with a real estate agent</a></li>
          </ul>
        </div>
      </section>

      <section className="worth-city-links">
        <div className="worth-city-links-inner">
          <div className="city-links-block">
            <div className="city-links-header">
              <h3>Search for apartments by city</h3>
              <a href="#">View full list</a>
            </div>
            <div className="city-links-grid">
              {[
                'Albuquerque apartments for rent',
                'Alexandria apartments for rent',
                'Arlington apartments for rent',
                'Atlanta apartments for rent',
                'Augusta apartments for rent',
                'Austin apartments for rent',
                'Bakersfield apartments for rent',
                'Baltimore apartments for rent',
                'Barnegat apartments for rent',
                'Baton Rouge apartments for rent',
                'Birmingham apartments for rent',
                'Boston apartments for rent',
                'Charlotte apartments for rent',
                'Chattanooga apartments for rent',
                'Chicago apartments for rent',
                'Cincinnati apartments for rent',
                'Cleveland apartments for rent',
                'Columbia apartments for rent',
                'Columbus apartments for rent',
                'Columbus apartments for rent',
                'Dallas apartments for rent',
                'Dayton apartments for rent',
                'Denver apartments for rent',
                'Detroit apartments for rent',
                'Durham apartments for rent',
                'Fayetteville apartments for rent',
                'Fort Worth apartments for rent',
                'Fresno apartments for rent',
                'Greensboro apartments for rent',
                'Houston apartments for rent'
              ].map((city, idx) => (
                <a key={`apt-${idx}`} href="#">{city}</a>
              ))}
            </div>
            <button className="city-links-toggle" type="button">
              Show more <span aria-hidden="true">▾</span>
            </button>
          </div>
          <div className="city-links-block">
            <div className="city-links-header">
              <h3>Search for houses for rent by city</h3>
              <a href="#">View full list</a>
            </div>
            <div className="city-links-grid">
              {[
                'Abilene houses for rent',
                'Albany houses for rent',
                'Amarillo houses for rent',
                'Arlington houses for rent',
                'Atlanta houses for rent',
                'Augusta houses for rent',
                'Austin houses for rent',
                'Bakersfield houses for rent',
                'Birmingham houses for rent',
                'Charlotte houses for rent',
                'Chesapeake houses for rent',
                'Chicago houses for rent',
                'Clarksville houses for rent',
                'Columbia houses for rent',
                'Columbus houses for rent',
                'Columbus houses for rent',
                'Concord houses for rent',
                'Dallas houses for rent',
                'Dayton houses for rent',
                'Denver houses for rent',
                'Destin houses for rent',
                'Dothan houses for rent',
                'El Paso houses for rent',
                'Eugene houses for rent',
                'Fayetteville houses for rent',
                'Fort Wayne houses for rent',
                'Fresno houses for rent',
                'Greensboro houses for rent',
                'Greenville houses for rent',
                'Griffin houses for rent'
              ].map((city, idx) => (
                <a key={`house-${idx}`} href="#">{city}</a>
              ))}
            </div>
            <button className="city-links-toggle" type="button">
              Show more <span aria-hidden="true">▾</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhatsMyHomeWorth
