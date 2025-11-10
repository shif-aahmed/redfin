import './RenterGuide.css'

function RenterGuide() {
  return (
    <div className="renter-guide-page">
      <section className="renter-guide-hero">
        <div className="renter-guide-hero-card">
          <h1>First Time Renter’s Guide</h1>
          <span className="renter-guide-hero-divider" aria-hidden="true"></span>
          <p>
            Learn what it takes to find and rent a home, and what you can expect during the rental process.
          </p>
        </div>
      </section>
      <section className="renter-guide-resources">
        <div className="renter-guide-resources-header">
          <h2>Renting Basics: How to Rent your First Place</h2>
          <p>
            From deciding whether you should rent or buy to determining a rental budget and finding an apartment, here&apos;s how to rent your first place.
          </p>
        </div>

        <div className="renter-guide-resource-grid">
          <article className="renter-guide-resource-card">
            <div className="renter-guide-resource-image renter-guide-image-one" aria-hidden="true"></div>
            <div className="renter-guide-resource-content">
              <h3>Should I Rent or Buy a Home?</h3>
              <p>
                Budget, lifestyle, and long-term goals all help determine whether renting vs buying a home is right for you.
              </p>
              <button type="button" className="renter-guide-resource-link">Learn more</button>
            </div>
          </article>

          <article className="renter-guide-resource-card">
            <div className="renter-guide-resource-image renter-guide-image-two" aria-hidden="true"></div>
            <div className="renter-guide-resource-content">
              <h3>Budgeting for Rent: Know How Much You Can Pay</h3>
              <p>
                Find out how to budget for rent, plan for monthly expenses, and what rent you can comfortably afford.
              </p>
              <button type="button" className="renter-guide-resource-link">Learn more</button>
            </div>
          </article>

          <article className="renter-guide-resource-card">
            <div className="renter-guide-resource-image renter-guide-image-three" aria-hidden="true"></div>
            <div className="renter-guide-resource-content">
              <h3>Rent Calculator: How Much Rent Can I Afford?</h3>
              <p>
                Find out how much rent you can afford with our rent calculator.
              </p>
              <button type="button" className="renter-guide-resource-link">Learn more</button>
            </div>
          </article>
        </div>
      </section>

      <section className="renter-guide-articles">
        <div className="renter-guide-articles-header">
          <h2>First Time Renter Articles</h2>
          <h3>Finding an Apartment</h3>
        </div>

        <div className="renter-guide-articles-grid">
          <article className="renter-guide-article-card">
            <h4>How to Find a Rental Home</h4>
            <p>
              Learn tips and tricks to help make your rental home or apartment search that much easier.
            </p>
            <button type="button" className="renter-guide-article-link">Learn more</button>
          </article>

          <article className="renter-guide-article-card">
            <h4>The Difference Between a Lease and Rent Agreement</h4>
            <p>
              Determine whether signing a lease or rental agreement is the right choice for your needs.
            </p>
            <button type="button" className="renter-guide-article-link">Learn more</button>
          </article>

          <article className="renter-guide-article-card">
            <h4>How to Spot Rental Scams</h4>
            <p>
              Learn how to avoid 10 common rental scams and red flags to look out for when searching for a rental home.
            </p>
            <button type="button" className="renter-guide-article-link">Learn more</button>
          </article>

          <article className="renter-guide-article-card">
            <h4>Renting with Bad Credit: 11 Options to Consider</h4>
            <p>
              Renting with bad credit isn’t the end of your rental-hunting journey. Here are 11 options to consider when renting with bad credit.
            </p>
            <button type="button" className="renter-guide-article-link">Learn more</button>
          </article>

          <article className="renter-guide-article-card">
            <h4>Do You Need a Background Check for an Apartment?</h4>
            <p>
              When renting an apartment, expect to have a background check done. Here’s what to expect so you can set yourself up for success.
            </p>
            <button type="button" className="renter-guide-article-link">Learn more</button>
          </article>

          <article className="renter-guide-article-card">
            <h4>Can You Negotiate Rent?</h4>
            <p>
              Learn the 9 best strategies to negotiate rent and key tips and tricks to keep in mind when speaking with your landlord.
            </p>
            <button type="button" className="renter-guide-article-link">Learn more</button>
          </article>
        </div>
      </section>

      <section className="renter-guide-tips">
        <div className="renter-guide-tips-header">
          <h3>Tips for Renting an Apartment</h3>
        </div>

        <div className="renter-guide-tips-grid">
          <article className="renter-guide-tip-card">
            <h4>What is a Security Deposit?</h4>
            <p>
              Find out how a security deposit helps cover expenses when you move out of your rental and, most importantly, when you get it back.
            </p>
            <button type="button" className="renter-guide-tip-link">Learn more</button>
          </article>

          <article className="renter-guide-tip-card">
            <h4>What is Renter&apos;s Insurance?</h4>
            <p>
              Renter’s insurance helps protect you and your belongings. Learn how much coverage you need.
            </p>
            <button type="button" className="renter-guide-tip-link">Learn more</button>
          </article>

          <article className="renter-guide-tip-card">
            <h4>What Rights Do Renters Have?</h4>
            <p>
              As a renter you have rights that protect you during your rental lease. Here are 5 basic tenants rights and more tips for protecting yourself.
            </p>
            <button type="button" className="renter-guide-tip-link">Learn more</button>
          </article>

          <article className="renter-guide-tip-card">
            <h4>Breaking a Lease? 6 Things to Consider</h4>
            <p>
              Find out 6 things to consider when breaking a lease and how to make the best of any situation.
            </p>
            <button type="button" className="renter-guide-tip-link">Learn more</button>
          </article>
        </div>
      </section>

      <section className="renter-guide-search">
        <div className="renter-guide-search-header">
          <h2>Discover the perfect place to rent</h2>
          <p>Find apartments and houses for rent</p>
        </div>

        <form className="renter-guide-search-bar">
          <input type="text" placeholder="City, Address, School, Building, ZIP" aria-label="Search rentals" />
          <button type="submit" aria-label="Search rentals">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
              <line x1="16" y1="16" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </form>

        <div className="renter-guide-search-cities">
          <div className="renter-guide-search-heading">
            <h4>Search for apartments by city</h4>
            <a href="#">View full list</a>
          </div>
          <div className="renter-guide-search-list">
            <ul>
              <li><a href="#">Albuquerque apartments for rent</a></li>
              <li><a href="#">Alexandria apartments for rent</a></li>
              <li><a href="#">Arlington apartments for rent</a></li>
              <li><a href="#">Atlanta apartments for rent</a></li>
              <li><a href="#">Augusta apartments for rent</a></li>
              <li><a href="#">Austin apartments for rent</a></li>
            </ul>
            <ul>
              <li><a href="#">Bakersfield apartments for rent</a></li>
              <li><a href="#">Baltimore apartments for rent</a></li>
              <li><a href="#">Barnegat apartments for rent</a></li>
              <li><a href="#">Baton Rouge apartments for rent</a></li>
              <li><a href="#">Birmingham apartments for rent</a></li>
              <li><a href="#">Boston apartments for rent</a></li>
            </ul>
            <ul>
              <li><a href="#">Charlotte apartments for rent</a></li>
              <li><a href="#">Chattanooga apartments for rent</a></li>
              <li><a href="#">Chicago apartments for rent</a></li>
              <li><a href="#">Cincinnati apartments for rent</a></li>
              <li><a href="#">Cleveland apartments for rent</a></li>
              <li><a href="#">Columbia apartments for rent</a></li>
            </ul>
            <ul>
              <li><a href="#">Columbus apartments for rent</a></li>
              <li><a href="#">Columbus apartments for rent</a></li>
              <li><a href="#">Dallas apartments for rent</a></li>
              <li><a href="#">Dayton apartments for rent</a></li>
              <li><a href="#">Denver apartments for rent</a></li>
              <li><a href="#">Detroit apartments for rent</a></li>
            </ul>
            <ul>
              <li><a href="#">Durham apartments for rent</a></li>
              <li><a href="#">Fayetteville apartments for rent</a></li>
              <li><a href="#">Fort Worth apartments for rent</a></li>
              <li><a href="#">Fresno apartments for rent</a></li>
              <li><a href="#">Greensboro apartments for rent</a></li>
              <li><a href="#">Houston apartments for rent</a></li>
            </ul>
          </div>
          <button type="button" className="renter-guide-search-more">Show more</button>
        </div>

        <div className="renter-guide-search-cities renter-guide-search-houses">
          <div className="renter-guide-search-heading">
            <h4>Search for houses for rent by city</h4>
            <a href="#">View full list</a>
          </div>
          <div className="renter-guide-search-list">
            <ul>
              <li><a href="#">Abilene houses for rent</a></li>
              <li><a href="#">Albany houses for rent</a></li>
              <li><a href="#">Amarillo houses for rent</a></li>
              <li><a href="#">Arlington houses for rent</a></li>
              <li><a href="#">Atlanta houses for rent</a></li>
              <li><a href="#">Augusta houses for rent</a></li>
            </ul>
            <ul>
              <li><a href="#">Austin houses for rent</a></li>
              <li><a href="#">Bakersfield houses for rent</a></li>
              <li><a href="#">Birmingham houses for rent</a></li>
              <li><a href="#">Charlotte houses for rent</a></li>
              <li><a href="#">Chesapeake houses for rent</a></li>
              <li><a href="#">Chicago houses for rent</a></li>
            </ul>
            <ul>
              <li><a href="#">Clarksville houses for rent</a></li>
              <li><a href="#">Columbia houses for rent</a></li>
              <li><a href="#">Columbus houses for rent</a></li>
              <li><a href="#">Columbus houses for rent</a></li>
              <li><a href="#">Concord houses for rent</a></li>
              <li><a href="#">Dallas houses for rent</a></li>
            </ul>
            <ul>
              <li><a href="#">Dayton houses for rent</a></li>
              <li><a href="#">Denver houses for rent</a></li>
              <li><a href="#">Destin houses for rent</a></li>
              <li><a href="#">Dothan houses for rent</a></li>
              <li><a href="#">El Paso houses for rent</a></li>
              <li><a href="#">Eugene houses for rent</a></li>
            </ul>
            <ul>
              <li><a href="#">Fayetteville houses for rent</a></li>
              <li><a href="#">Fort Wayne houses for rent</a></li>
              <li><a href="#">Fresno houses for rent</a></li>
              <li><a href="#">Greensboro houses for rent</a></li>
              <li><a href="#">Greenville houses for rent</a></li>
              <li><a href="#">Griffin houses for rent</a></li>
            </ul>
          </div>
          <button type="button" className="renter-guide-search-more">Show more</button>
        </div>
      </section>
    </div>
  )
}

export default RenterGuide

