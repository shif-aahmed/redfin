import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo.png'

function Navbar() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const isRentalMarketNewsPage = location.pathname === '/rental-market-news'
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [authOpen, setAuthOpen] = useState(false)
  const [expandedSidebar, setExpandedSidebar] = useState({ Buy: false, Rent: false, Sell: false, Mortgage: false, Agents: false })

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
    setExpandedSidebar({ Buy: false, Rent: false, Sell: false, Mortgage: false, Agents: false })
  }

  const toggleSidebarSection = (key) => {
    setExpandedSidebar((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="logo-container">
            <img src={logo} alt="Redfin" className="logo" />
            {isRentalMarketNewsPage && <span className="news-text">News</span>}
          </Link>
          {!isHomePage && !isRentalMarketNewsPage && (
            <div className="navbar-search">
              <div className="navbar-search-input-container">
                <input 
                  type="text" 
                  placeholder="City, Address, School, Agent, ZIP" 
                  className="navbar-search-input"
                />
                <button className="navbar-search-btn" aria-label="Search">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
        
        <div className="navbar-right">
          <div className="navbar-menu">
            <div className="menu-item dropdown">
              Buy <span className="dropdown-arrow">▼</span>
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  <div className="dropdown-column">
                    <h3>Union City Searches</h3>
                    <Link to="/homes-for-sale">Homes for sale</Link>
                    <Link to="/condos-for-sale">Condos for sale</Link>
                    <Link to="/land-for-sale">Land for sale</Link>
                    <Link to="/open-houses">Open houses</Link>
                    <a href="#">Recently sold</a>
                  </div>
                  <div className="dropdown-column">
                    <h3>Buying Options</h3>
                    <Link to="/buy-with-redfin">Buy with Redfin</Link>
                    <Link to="/redfin-premier">Redfin Premier</Link>
                  </div>
                  <div className="dropdown-column">
                    <h3>Buying Resources</h3>
                    <a href="#">Affordability calculator</a>
                    <Link to="/homebuying-guide">Home buying guide</Link>
                    <Link to="/free-home-buying-classes">Free home buying classes</Link>
                    <Link to="/us-housing-market">US housing market</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu-item dropdown">
              Rent <span className="dropdown-arrow">▼</span>
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  <div className="dropdown-column">
                    <h3>Rental Resources</h3>
                    <Link to="/renter-dashboard">Renter Dashboard</Link>
                    <Link to="/rental-market-news">Rental Market Tracker</Link>
                    <Link to="/how-much-rent">How much rent can I afford?</Link>
                    <Link to="/should-i-rent-or-buy">Should I rent or buy?</Link>
                    <Link to="/renter-guide">Renter guide</Link>
                  </div>
                  <div className="dropdown-column">
                    <h3>Redfin Rental Tools</h3>
                    <Link to="/list-my-home-for-rent">List my home for rent</Link>
                    <Link to="/rental-tool-dashboard">Rental tool dashboard</Link>
                    <Link to="/rental-market-trends">US rental market trends</Link>
                    <Link to="/should-i-sell-or-rent">Should I sell or rent my home?</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu-item dropdown">
              Sell <span className="dropdown-arrow">▼</span>
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  <div className="dropdown-column">
                    <h3>Selling Options</h3>
                    <Link to="/whats-my-home-worth">What's my home worth?</Link>
                    <Link to="/redfin-premier">Redfin Premier</Link>
                    <a href="#">RedfinNow</a>
                  </div>
                  <div className="dropdown-column">
                    <h3>Selling Resources</h3>
                    <a href="#">Home value estimator</a>
                    <a href="#">Selling guide</a>
                    <a href="#">Market insights</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu-item dropdown">
              Mortgage <span className="dropdown-arrow">▼</span>
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  <div className="dropdown-column">
                    <h3>Mortgage Options</h3>
                    <a href="#">Get pre-approved</a>
                    <a href="#">Refinance</a>
                    <a href="#">Home equity loans</a>
                  </div>
                  <div className="dropdown-column">
                    <h3>Mortgage Resources</h3>
                    <a href="#">Mortgage calculator</a>
                    <a href="#">Rate trends</a>
                    <a href="#">Mortgage guide</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu-item dropdown">
              Real Estate Agents <span className="dropdown-arrow">▼</span>
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  <div className="dropdown-column">
                    <h3>Find Agents</h3>
                    <a href="#">Top agents in your area</a>
                    <a href="#">Agent reviews</a>
                    <a href="#">Become an agent</a>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/feed" className="menu-item no-dropdown">
              Feed
            </Link>
          </div>
          
          <button className="join-signin-btn" onClick={() => setAuthOpen(true)}>Join / Sign In</button>
          
          <div className="mobile-nav">
            <button className="mobile-signin" onClick={() => setAuthOpen(true)} aria-label="Sign in">Sign in</button>
            <button className="hamburger-menu" onClick={toggleSidebar} aria-label="Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
      
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={closeSidebar}></div>
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <button className="sidebar-close-btn" onClick={closeSidebar} aria-label="Close menu">
            <span>×</span>
          </button>
          <Link to="/" className="sidebar-logo-container" onClick={closeSidebar}>
            <img src={logo} alt="Redfin" className="sidebar-logo" />
          </Link>
        </div>
        <div className="sidebar-content">
          {/* Buy */}
          <button className="sidebar-menu-item as-button" onClick={() => toggleSidebarSection('Buy')}>
            Buy <span className="dropdown-arrow">{expandedSidebar.Buy ? '▾' : '▸'}</span>
          </button>
          {expandedSidebar.Buy && (
            <div className="sidebar-accordion">
              <div className="sidebar-submenu-columns">
                <div className="sidebar-submenu-column">
                  <h3>Union City Searches</h3>
                  <Link to="/homes-for-sale" onClick={closeSidebar}>Homes for sale</Link>
                  <Link to="/condos-for-sale" onClick={closeSidebar}>Condos for sale</Link>
                  <Link to="/land-for-sale" onClick={closeSidebar}>Land for sale</Link>
                  <Link to="/open-houses" onClick={closeSidebar}>Open houses</Link>
                  <a href="#" onClick={(e)=>e.preventDefault()}>Recently sold</a>
                </div>
                <div className="sidebar-submenu-column">
                  <h3>Buying Options</h3>
                  <Link to="/buy-with-redfin" onClick={closeSidebar}>Buy with Redfin</Link>
                  <Link to="/redfin-premier" onClick={closeSidebar}>Redfin Premier</Link>
                </div>
                <div className="sidebar-submenu-column">
                  <h3>Buying Resources</h3>
                  <a href="#" onClick={(e)=>e.preventDefault()}>Affordability calculator</a>
                  <Link to="/homebuying-guide" onClick={closeSidebar}>Home buying guide</Link>
                  <Link to="/free-home-buying-classes" onClick={closeSidebar}>Free home buying classes</Link>
                  <Link to="/us-housing-market" onClick={closeSidebar}>US housing market</Link>
                </div>
              </div>
            </div>
          )}

          {/* Rent */}
          <button className="sidebar-menu-item as-button" onClick={() => toggleSidebarSection('Rent')}>
            Rent <span className="dropdown-arrow">{expandedSidebar.Rent ? '▾' : '▸'}</span>
          </button>
          {expandedSidebar.Rent && (
            <div className="sidebar-accordion">
              <div className="sidebar-submenu-columns">
                <div className="sidebar-submenu-column">
                  <h3>Rental Resources</h3>
                  <Link to="/renter-dashboard" onClick={closeSidebar}>Renter Dashboard</Link>
                  <Link to="/rental-market-news" onClick={closeSidebar}>Rental Market Tracker</Link>
                  <Link to="/how-much-rent" onClick={closeSidebar}>How much rent can I afford?</Link>
                  <Link to="/should-i-rent-or-buy" onClick={closeSidebar}>Should I rent or buy?</Link>
                  <Link to="/renter-guide" onClick={closeSidebar}>Renter guide</Link>
                </div>
                <div className="sidebar-submenu-column">
                  <h3>Rental Resources</h3>
                    <Link to="/list-my-home-for-rent" onClick={closeSidebar}>List my home for rent</Link>
                    <Link to="/rental-tool-dashboard" onClick={closeSidebar}>Rental tool dashboard</Link>
                    <Link to="/rental-market-trends" onClick={closeSidebar}>US rental market trends</Link>
                  <Link to="/should-i-sell-or-rent" onClick={closeSidebar}>Should I sell or rent my home?</Link>
                </div>
              </div>
            </div>
          )}

          {/* Sell */}
          <button className="sidebar-menu-item as-button" onClick={() => toggleSidebarSection('Sell')}>
            Sell <span className="dropdown-arrow">{expandedSidebar.Sell ? '▾' : '▸'}</span>
          </button>
          {expandedSidebar.Sell && (
            <div className="sidebar-accordion">
              <div className="sidebar-submenu-columns">
                <div className="sidebar-submenu-column">
                  <h3>Selling Options</h3>
                  <Link to="/whats-my-home-worth" onClick={closeSidebar}>What's my home worth?</Link>
                  <Link to="/redfin-premier" onClick={closeSidebar}>Redfin Premier</Link>
                  <a href="#" onClick={(e)=>e.preventDefault()}>RedfinNow</a>
                </div>
                <div className="sidebar-submenu-column">
                  <h3>Selling Resources</h3>
                  <a href="#" onClick={(e)=>e.preventDefault()}>Home value estimator</a>
                  <a href="#" onClick={(e)=>e.preventDefault()}>Selling guide</a>
                  <a href="#" onClick={(e)=>e.preventDefault()}>Market insights</a>
                </div>
              </div>
            </div>
          )}

          {/* Mortgage */}
          <button className="sidebar-menu-item as-button" onClick={() => toggleSidebarSection('Mortgage')}>
            Mortgage <span className="dropdown-arrow">{expandedSidebar.Mortgage ? '▾' : '▸'}</span>
          </button>
          {expandedSidebar.Mortgage && (
            <div className="sidebar-accordion">
              <div className="sidebar-submenu-columns">
                <div className="sidebar-submenu-column">
                  <h3>Mortgage Options</h3>
                  <a href="#" onClick={(e)=>e.preventDefault()}>Get pre-approved</a>
                  <a href="#" onClick={(e)=>e.preventDefault()}>Refinance</a>
                  <a href="#" onClick={(e)=>e.preventDefault()}>Home equity loans</a>
                </div>
                <div className="sidebar-submenu-column">
                  <h3>Mortgage Resources</h3>
                  <a href="#" onClick={(e)=>e.preventDefault()}>Mortgage calculator</a>
                  <a href="#" onClick={(e)=>e.preventDefault()}>Rate trends</a>
                  <a href="#" onClick={(e)=>e.preventDefault()}>Mortgage guide</a>
                </div>
              </div>
            </div>
          )}

          {/* Agents */}
          <button className="sidebar-menu-item as-button" onClick={() => toggleSidebarSection('Agents')}>
            Real Estate Agents <span className="dropdown-arrow">{expandedSidebar.Agents ? '▾' : '▸'}</span>
          </button>
          {expandedSidebar.Agents && (
            <div className="sidebar-accordion">
              <div className="sidebar-submenu-columns">
                <div className="sidebar-submenu-column">
                  <h3>Find Agents</h3>
                  <a href="#" onClick={(e)=>e.preventDefault()}>Top agents in your area</a>
                  <a href="#" onClick={(e)=>e.preventDefault()}>Agent reviews</a>
                  <a href="#" onClick={(e)=>e.preventDefault()}>Become an agent</a>
                </div>
              </div>
            </div>
          )}

          <Link to="/feed" className="sidebar-menu-item no-dropdown" onClick={closeSidebar}>
            Feed
          </Link>
        </div>
      </div>

      {/* Auth Modal */}
      {authOpen && (
        <>
          <div className="auth-overlay" onClick={() => setAuthOpen(false)}></div>
          <div className="auth-modal" role="dialog" aria-modal="true" aria-label="Join or sign in">
            <div className="auth-header">
              <h2>Join or sign in</h2>
              <button className="auth-close" aria-label="Close" onClick={() => setAuthOpen(false)}>×</button>
            </div>
            <div className="auth-body">
              <input type="email" className="auth-input" placeholder="Email" />
              <button className="auth-primary">Continue with email</button>
              <div className="auth-divider"><span>or</span></div>
              <button className="auth-provider">
                <span className="auth-icon google" aria-hidden="true"></span>
                <span>Continue with Google</span>
              </button>
              <button className="auth-provider">
                <span className="auth-icon apple" aria-hidden="true"></span>
                <span>Continue with Apple</span>
              </button>
              <p className="auth-legal">
                By signing in you agree to Redfin’s <a href="#">Terms of Use</a> and
                <a href="#"> Privacy Policy</a>
              </p>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}

export default Navbar

