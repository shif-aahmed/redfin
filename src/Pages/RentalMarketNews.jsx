import './RentalMarketNews.css'

function RentalMarketNews() {
  return (
    <div className="rental-market-news-page">
      <div className="rental-news-secondary-nav">
        <div className="rental-news-nav-container">
          <a href="#" className="rental-news-nav-link">Housing Market</a>
          <a href="#" className="rental-news-nav-link">Rental Market</a>
          <a href="#" className="rental-news-nav-link">Equality & Policy</a>
          <a href="#" className="rental-news-nav-link">From Our Economists</a>
          <a href="#" className="rental-news-nav-link">Data Center</a>
          <a href="#" className="rental-news-nav-link">Company News</a>
          <a href="#" className="rental-news-nav-link">Press Center</a>
        </div>
        <div className="rental-news-search-container">
          <input 
            type="text" 
            placeholder="Search..." 
            className="rental-news-search-input"
          />
          <button className="rental-news-search-btn" aria-label="Search">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="rental-market-news-content">
        <h1 className="rental-market-news-title">Rental Market News</h1>
        
        <div className="rental-news-divider"></div>

        <div className="rental-news-sub-nav">
          <a href="#" className="rental-news-sub-link">All Reports</a>
          <a href="#" className="rental-news-sub-link">Monthly Rental Tracker</a>
        </div>

        <div className="rental-news-divider"></div>

        <div className="rental-news-articles">
          <article className="rental-news-article">
            <div className="article-image">
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Modern apartment buildings" 
                className="article-img"
              />
            </div>
            <div className="article-content">
              <h3 className="article-headline">
                New Apartments Are Increasingly Likely to Get Snapped Up Quickly As Construction Slows
              </h3>
              <p className="article-date">September 12, 2025</p>
              <p className="article-snippet">
                48% of apartments built in Q1 were rented within three months, up from 47% in Q4 2024 and 46% in Q3 2024. As the balance...
              </p>
            </div>
          </article>

          <article className="rental-news-article">
            <div className="article-image">
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="High-rise apartment building" 
                className="article-img"
              />
            </div>
            <div className="article-content">
              <h3 className="article-headline">
                U.S. Asking Rents Rise Most Since 2022 As Apartment Construction Slows
              </h3>
              <p className="article-date">September 9, 2025</p>
              <p className="article-snippet">
                Asking rents for new leases increased significantly as the pace of new apartment construction continued to slow down across major metropolitan areas...
              </p>
            </div>
          </article>

          <article className="rental-news-article">
            <div className="article-image">
              <img 
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Suburban house" 
                className="article-img"
              />
            </div>
            <div className="article-content">
              <h3 className="article-headline">
                U.S. Homeowner Population Stops Growing for First Time in Nearly a Decade
              </h3>
              <p className="article-date">September 3, 2025</p>
              <p className="article-snippet">
                The number of homeowner households fell 0.1% year over year in the second quarter—a small decline, but the first since 2016. Meanwhile, the number of...
              </p>
            </div>
          </article>

          <article className="rental-news-article">
            <div className="article-image">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Construction worker" 
                className="article-img"
              />
            </div>
            <div className="article-content">
              <h3 className="article-headline">
                Permits to Build U.S. Apartments Have Fallen 23% Since the Pandemic Construction Boom
              </h3>
              <p className="article-date">August 14, 2025</p>
              <p className="article-snippet">
                Developers obtained permits to build 12.8 multifamily housing units for every 10,000 people in the U.S. over the past year—down from an average of 16.7...
              </p>
            </div>
          </article>

          <article className="rental-news-article">
            <div className="article-image">
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Apartment building with palm trees" 
                className="article-img"
              />
            </div>
            <div className="article-content">
              <h3 className="article-headline">
                U.S. Apartment Asking Rents Post Biggest Increase in 2.5 Years
              </h3>
              <p className="article-date">August 14, 2025</p>
              <p className="article-snippet">
                The median asking rent rose 1.7% ($30) year over year to $1,790 in July. Shrinking supply may be tilting the balance of power toward landlords.
              </p>
            </div>
          </article>

          <article className="rental-news-article">
            <div className="article-image">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Red brick apartment building" 
                className="article-img"
              />
            </div>
            <div className="article-content">
              <h3 className="article-headline">
                Redfin Rental Data Methodology
              </h3>
              <p className="article-date">August 14, 2025</p>
              <p className="article-snippet">
                Asking-rent data cover newly listed units in apartment buildings with 25 or more units. The median is calculated based on rolling three-month periods, i.e., the...
              </p>
            </div>
          </article>
        </div>

        <div className="rental-news-pagination">
          <span className="pagination-prev disabled">« Previous</span>
          <a href="#" className="pagination-number active">1</a>
          <a href="#" className="pagination-number">2</a>
          <a href="#" className="pagination-number">3</a>
          <span className="pagination-ellipsis">...</span>
          <a href="#" className="pagination-number">14</a>
          <a href="#" className="pagination-next">Next »</a>
        </div>
      </div>

      <div className="rental-news-social-section">
        <div className="social-container">
          <span className="social-label">Follow Redfin</span>
          <div className="social-icons">
            <a href="#" className="social-icon twitter-icon" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="social-icon facebook-icon" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="social-icon pinterest-icon" aria-label="Pinterest">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" className="social-icon linkedin-icon" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="social-icon youtube-icon" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="#" className="social-icon instagram-icon" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="rental-news-blog-banner">
        <p className="blog-banner-text">
          Looking for tips and advice about buying, selling, and home improvement? Visit our blog!
        </p>
      </div>
    </div>
  )
}

export default RentalMarketNews

