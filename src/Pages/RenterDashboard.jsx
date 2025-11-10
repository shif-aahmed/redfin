import { useState } from 'react'
import logo from '../assets/logo.png'
import './RenterDashboard.css'

function RenterDashboard() {
  const [email, setEmail] = useState('')

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    console.log('Email submitted:', email)
  }

  return (
    <div className="renter-dashboard-page">
      <div className="renter-dashboard-header">
        <div className="renter-logo-section">
          <img src={logo} alt="Redfin" className="renter-logo" />
          <p className="powered-by-text">Powered by Rocket</p>
        </div>
      </div>

      <div className="renter-dashboard-content">
        <div className="gate-illustration">
          <svg viewBox="0 0 200 150" className="gate-svg">
            {/* Cloud shapes */}
            <ellipse cx="50" cy="30" rx="25" ry="15" fill="#e0e0e0" opacity="0.5" />
            <ellipse cx="150" cy="35" rx="30" ry="18" fill="#e0e0e0" opacity="0.5" />
            
            {/* Gate structure */}
            <g className="gate-group">
              {/* Left pillar */}
              <rect x="50" y="60" width="15" height="70" fill="none" stroke="#333" strokeWidth="2" />
              <circle cx="57.5" cy="80" r="4" fill="#d32f2f" />
              
              {/* Right pillar */}
              <rect x="135" y="60" width="15" height="70" fill="none" stroke="#333" strokeWidth="2" />
              <circle cx="142.5" cy="80" r="4" fill="#d32f2f" />
              
              {/* Top arch */}
              <path d="M 50,60 Q 100,40 150,60" fill="none" stroke="#333" strokeWidth="2" />
              
              {/* Decorative elements */}
              <line x1="50" y1="70" x2="150" y2="70" stroke="#333" strokeWidth="1" opacity="0.5" />
              <line x1="50" y1="90" x2="150" y2="90" stroke="#333" strokeWidth="1" opacity="0.5" />
              <line x1="50" y1="110" x2="150" y2="110" stroke="#333" strokeWidth="1" opacity="0.5" />
              
              {/* Vertical decorative lines */}
              <line x1="80" y1="60" x2="80" y2="130" stroke="#333" strokeWidth="1.5" />
              <line x1="120" y1="60" x2="120" y2="130" stroke="#333" strokeWidth="1.5" />
              
              {/* Base */}
              <rect x="45" y="130" width="110" height="5" fill="#333" />
            </g>
          </svg>
        </div>

        <h1 className="renter-dashboard-title">Join or sign in</h1>

        <form onSubmit={handleEmailSubmit} className="renter-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="renter-email-input"
            required
          />
          <button type="submit" className="renter-email-btn">
            Continue with email
          </button>
        </form>

        <div className="renter-divider">
          <span>or</span>
        </div>

        <button className="renter-provider-btn google-btn">
          <span className="provider-icon google-icon"></span>
          <span>Sign in with Google</span>
        </button>

        <button className="renter-provider-btn apple-btn">
          <span className="provider-icon apple-icon"></span>
          <span>Continue with Apple</span>
        </button>

        <p className="renter-legal-text">
          By signing in you agree to Redfin's <a href="#" className="legal-link">Terms of Use</a> and <a href="#" className="legal-link">Privacy Policy</a>.
        </p>
      </div>
    </div>
  )
}

export default RenterDashboard



