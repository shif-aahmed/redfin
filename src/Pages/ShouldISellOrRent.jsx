import './ShouldISellOrRent.css'
import Footer from '../components/Footer/Footer'

function ShouldISellOrRent() {
  return (
    <div className="sell-rent-wrapper">
      <header className="sell-rent-header">
        <div className="blog-nav-row">
          <nav className="blog-nav">
            <a href="#">Buying</a>
            <a href="#">Selling</a>
            <a href="#">Renting</a>
            <a href="#">Home Improvement</a>
            <a href="#">Life &amp; Style</a>
            <a href="#">Local Insights</a>
            <a href="#">Finance</a>
            <a href="#">Housing News</a>
          </nav>
          <div className="blog-search">
            <input type="text" placeholder="Search..." />
            <button aria-label="Search"></button>
          </div>
        </div>
      </header>

      <main className="sell-rent-main">
        <article className="sell-rent-article">
          <p className="sell-rent-breadcrumb">Rent &gt; Renting vs. Buying</p>
          <h1>Should I Sell or Rent My House? Here’s How to Decide</h1>
          <p className="sell-rent-meta">Published on July 22, 2025 by <a href="#">Alison Bentley</a></p>
          <p className="sell-rent-intro">
            If you’re moving to a new city, upgrading to a bigger home, or navigating a life change, you may be wondering what to do with your current house. Should you sell it and use the proceeds for your next place, or rent it out and turn it into a long-term investment?
          </p>
          <p>
            In this Redfin article, we’ll outline what to contemplate to help you decide whether you should sell or rent your house. Whether you’re buying a new home in Raleigh, NC, or a condo in Sacramento, CA, here’s what to know when deciding between renting vs selling your house.
          </p>

          <section className="sell-rent-takeaways">
            <h2>Key takeaways</h2>
            <ul>
              <li>
                <strong>Selling your house</strong> may be the right option if you need the proceeds to purchase your next home or you plan to move permanently.
              </li>
              <li>
                <strong>Renting out your house</strong> may be the right option if you’re planning to live in your home again, have a low mortgage rate, or are looking for more income.
              </li>
              <li>
                Your local housing and rental markets, and your financial situation, are major factors in your decision.
              </li>
            </ul>
            <div className="sell-rent-video">
              <iframe
                title="Should I Sell My House or Rent it Out?"
                src="https://www.youtube.com/embed/bd2e90aV-00"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>

          <section className="sell-rent-questions">
            <div className="questions-header">
              <h2>Selling made simple</h2>
              <p>Discover expert strategies for your home.</p>
              <button>Find an agent</button>
            </div>
            <div className="questions-content">
              <div className="questions-text">
                <h3>Key questions to ask when deciding to rent or sell your home</h3>
                <p>
                  If you’re considering renting vs selling your home, here are some questions that can help you get started.
                </p>
                <ol>
                  <li>
                    <strong>What are the rental prices in the area?</strong> In some locations, rental prices can easily cover your mortgage payments. Depending on how much your monthly mortgage payments are, the rental income from your old house may cover them. You’ll also need to factor in homeowners insurance and the property taxes you pay, among other costs.
                  </li>
                  <li>
                    <strong>Do you need equity from your current home?</strong> If you’re planning to buy a new home, you may need the money from the sale of your old one to place a down payment on your new house. If you’re able to afford the down payment on your new home without selling your current one, then renting out your old one makes sense.
                  </li>
                  <li>
                    <strong>How long will you be away?</strong> If you’re only renting because you’re moving temporarily, renting out your current home may make sense. If you’re moving permanently, selling might be the better option.
                  </li>
                </ol>
              </div>
              <div className="questions-card">
                <div className="questions-image"></div>
                <div className="questions-info">
                  <div className="questions-price">$525,000</div>
                  <div className="questions-details">3 beds, 2 baths, 2,490 sq ft</div>
                  <div className="questions-address">6949 Blacksmith Ct, Las Vegas, NV</div>
                </div>
              </div>
            </div>
          </section>

          <section className="sell-rent-costs">
            <h2>What is costs to rent out your home</h2>
            <p>
              Renting your home can generate income, but it comes with ongoing responsibilities and expenses:
            </p>
            <ul>
              <li>
                <strong>Maintenance and repairs:</strong> Landlords have to fix things like broken pipes, defunct HVAC systems, and structural damage, among other essential repairs. If you don’t have a few thousand dollars on hand to take care of these repairs, you could end up in a bind.
              </li>
              <li>
                <strong>Mortgage payments and HOA fees:</strong> If you have a mortgage or HOA fees, you’ll still need to pay these each month. It’s up to you to decide if your renters will pay the HOA fees.
              </li>
              <li>
                <strong>Landlord insurance:</strong> Your regular homeowners insurance doesn’t cover rental situations. You’ll need a landlord insurance policy, which typically costs more. It offers protection for rental-specific risks, like property damage. Your tenants should also carry renters insurance to protect their personal belongings.
              </li>
              <li>
                <strong>Finding tenants and potential vacancies:</strong> Finding the right tenant can take time and money, and you may experience vacancies in between renters.
              </li>
            </ul>
          </section>

          <section className="sell-rent-renttoown">
            <h2>Is rent-to-own a good alternative?</h2>
            <p>
              Another option when deciding whether to sell or rent your house is to have a <a href="#">rent-to-own agreement</a>. In these situations, the tenant will place a down payment on the house and make lease payments to you for a specified period. After the lease is up, the tenant has the option to purchase the home. During the time they’re making lease payments, a portion of those payments will go toward the final price of the house.
            </p>
            <p>
              Rent-to-own may work for you if the housing market in your area is stagnant. It allows you to cover the mortgage without turning your home into a rental property indefinitely. Rent-to-own can be beneficial for tenants, too, as it allows them to improve their financial situation to obtain a mortgage at the end of the lease.
            </p>
          </section>

          <section className="sell-rent-cta">
            <h2>Don’t leave money on the table</h2>
            <p>See what your home could sell for in today’s market.</p>
            <button>Check your home&apos;s value</button>
          </section>

          <section className="sell-rent-author">
            <div className="author-profile">
              <div className="author-photo"></div>
              <div className="author-text">
                <h3>Alison Bentley</h3>
                <p>
                  Alison is part of the Content Marketing team as a Marketing Program Manager. In her 5 years at Redfin, Alison has written a variety of articles ranging from home design tips to housing affordability, and specializes in first-time homebuyer and seller resources. A California-native, Alison currently resides in Seattle where you can find her catching a concert or exploring farmers’ markets. Her dream home is a cottage-style house with a chef’s kitchen and a cozy room to store and play vinyl records.
                </p>
                <button>Connect with Alison</button>
              </div>
            </div>
            <div className="author-socials">
              <span className="social-icon facebook" aria-label="Facebook"></span>
              <span className="social-icon twitter" aria-label="Twitter"></span>
              <span className="social-icon linkedin" aria-label="LinkedIn"></span>
              <span className="social-icon pinterest" aria-label="Pinterest"></span>
            </div>
          </section>

          <section className="sell-rent-related">
            <div className="related-main">
              <h2>Relevant Articles</h2>
              <div className="related-grid">
                {[
                  'Is It the Season or the Listing? Decoding Real Estate Slowdowns',
                  'Should I Sell My House Now?',
                  'Is Now a Good Time to Buy a House?',
                  'Marketing Tips for Realtors Who Want to Stand Out Online',
                  'Net Listing in Real Estate: How It Works, and Why It’s Controversial',
                  'How Flat Rate Real Estate Agents Work — And Why They Could Save You'
                ].map((title, idx) => (
                  <article className="related-card" key={idx}>
                    <div className="related-image"></div>
                    <p>{title}</p>
                  </article>
                ))}
              </div>
            </div>
            <aside className="related-sidebar">
              <div className="related-tabs">
                <span className="active">Popular Posts</span>
                <span>|</span>
                <span>Latest Posts</span>
              </div>
              <ul className="related-list">
                {[
                  '4 Expert-Backed Home Cleaning Tips To Help Sell Your House Faster',
                  'How to Accurately Calculate the Square Footage of Your Home',
                  'How to Stage a Bathroom to Sell',
                  'At-Home Date Night Ideas for Couples Who Want to Stay In',
                  'How to Hire a Handyman: 10 Essential Questions to Ask',
                  'How to Introduce a Dog to a New Home'
                ].map((title, idx) => (
                  <li key={idx}>
                    <div className="list-image"></div>
                    <p>{title}</p>
                  </li>
                ))}
              </ul>
            </aside>
          </section>
        </article>

        <aside className="sell-rent-sidebar">
          <div className="sidebar-card loan-card">
            <h3>Get a home loan that helps you win</h3>
            <button>Get prequalified</button>
          </div>
          <div className="sidebar-card homes-card">
            <h3>Popular homes for sale</h3>
            <div className="homes-placeholder"></div>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  )
}

export default ShouldISellOrRent
