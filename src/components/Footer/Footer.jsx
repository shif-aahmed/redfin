import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Left Section */}
          <div className="footer-left">
            <div className="footer-column">
              <h4 className="footer-heading">Join us</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Become an Agent</a></li>
                <li><a href="#" className="footer-link">Get referrals</a></li>
                <li><a href="#" className="footer-link">Careers</a></li>
              </ul>
              <h4 className="footer-heading">Find homes faster</h4>
              <div className="app-buttons">
                <a href="#" className="app-button">
                  <div className="app-icon">🍎</div>
                  <div className="app-button-text">
                    <span className="app-button-small">Download on the</span>
                    <span className="app-button-large">App Store</span>
                  </div>
                </a>
                <a href="#" className="app-button">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M14.54,11.15L6.05,2.66L16.81,8.88L14.54,11.15M20.16,6.09L14.54,12.85L16.81,15.12L20.16,6.09M20.16,17.91L16.81,8.88L14.54,11.15L20.16,17.91Z" fill="white"/>
                  </svg>
                  <div className="app-button-text">
                    <span className="app-button-small">GET IT ON</span>
                    <span className="app-button-large">Google Play</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">About us</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Why Redfin?</a></li>
                <li><a href="#" className="footer-link">Community Impact</a></li>
                <li><a href="#" className="footer-link">Diversity & Inclusion</a></li>
                <li><a href="#" className="footer-link">Life at Redfin</a></li>
                <li><a href="#" className="footer-link">Press</a></li>
                <li><a href="#" className="footer-link">Investors</a></li>
                <li><a href="#" className="footer-link">Blog</a></li>
                <li><a href="#" className="footer-link">Real Estate News</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Find us</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Contact Us</a></li>
                <li><a href="#" className="footer-link">Help Center</a></li>
                <li><a href="#" className="footer-link">Advertise</a></li>
              </ul>
              <div className="social-icons">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="X">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="YouTube">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>

              <h4 className="footer-heading">Subsidiaries</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Rent.</a></li>
                <li><a href="#" className="footer-link">ApartmentGuide</a></li>
              </ul>

              <h4 className="footer-heading">Affiliated Business</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Rocket Close</a></li>
                <li><a href="#" className="footer-link">Rocket Mortgage</a></li>
              </ul>

              <h4 className="footer-heading">Countries</h4>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    <span className="flag-icon">🇺🇸</span> United States
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    <span className="flag-icon">🇨🇦</span> Canada
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="footer-right">
            <p className="footer-copyright">Copyright: © 2025 Redfin. All rights reserved.</p>
            
            <p className="footer-legal">
              Updated September 2025: By searching, you agree to the <a href="#" className="footer-legal-link">Terms of Use</a>, and <a href="#" className="footer-legal-link">Privacy Policy</a>.
            </p>

            <p className="footer-legal">
              <a href="#" className="footer-legal-link bold">Do not sell or share my personal information.</a>
            </p>

            <p className="footer-legal">
              REDFIN and all REDFIN variants, WALK SCORE, and the R logos, are trademarks of Redfin Corporation, registered or pending in the USPTO.
            </p>

            <p className="footer-legal">
              California DRE #01521930
            </p>

            <p className="footer-legal">
              Redfin is licensed to do business in New York as Redfin Real Estate. <a href="#" className="footer-legal-link bold">NY Standard Operating Procedures</a>
            </p>

            <p className="footer-legal">
              <a href="#" className="footer-legal-link bold">New Mexico Real Estate Licenses</a>
            </p>

            <p className="footer-legal">
              TREC: <a href="#" className="footer-legal-link bold">Info About Brokerage Services, Consumer Protection Notice</a>
            </p>

            <p className="footer-legal">
              All mortgage lending products and information are provided by Rocket Mortgage, LLC | NMLS #3030; <a href="#" className="footer-legal-link bold">www.NMLSConsumerAccess.org</a>. Licensed in <a href="#" className="footer-legal-link bold">50 states</a>. This site is not authorized by the New York State Department of Financial Services for mortgage solicitation or loan applications activities related to properties located in the State of New York.
            </p>

            <p className="footer-legal">
              Redfin Corporation is an affiliated business of Rocket Limited Partnership. Each company, and their subsidiaries, are separate legal entities operated and managed through its own management and governance structures.
            </p>

            <p className="footer-legal">
              If you are using a screen reader, or having trouble reading this website, please call Redfin Customer Support for help at <a href="#" className="footer-legal-link bold">1-844-759-7732</a>.
            </p>

            <div className="fair-housing">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="house-icon">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
              <p className="fair-housing-text">
                REDFIN IS COMMITTED TO AND ABIDES BY THE FAIR HOUSING ACT AND EQUAL OPPORTUNITY ACT. READ <a href="#" className="footer-legal-link bold">REDFIN'S FAIR HOUSING POLICY</a> AND <a href="#" className="footer-legal-link bold">THE NEW YORK STATE FAIR HOUSING NOTICE</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

