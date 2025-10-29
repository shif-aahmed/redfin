import { useState } from 'react'
import './Auth.css'

function Auth({ onLogin, onSignup }) {
  const [email, setEmail] = useState('')
  const [isSignup, setIsSignup] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      // Simulate login/signup
      localStorage.setItem('isLoggedIn', 'true')
      if (isSignup) {
        onSignup()
      } else {
        onLogin()
      }
    }
  }

  return (
    <div className="auth-section">
      <div className="auth-container">
        <h2 className="auth-heading">Join to see all the homes recommended for you</h2>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="auth-input"
            required
          />
          
          <button type="submit" className="auth-email-button">
            Continue with email
          </button>
          
          <div className="auth-divider">
            <span>or</span>
          </div>
          
          <div className="auth-social-buttons">
            <button type="button" className="auth-social-button google">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>
            
            <button type="button" className="auth-social-button facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
              </svg>
              Continue with Facebook
            </button>
            
            <button type="button" className="auth-social-button apple">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.05 20.56c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.02 15.25 0 10.73 0 7.03c0-4.89 3.91-7.03 7.5-7.03 1.42 0 2.57.49 3.47.49.97 0 2.28-.6 3.89-.6C18.84.89 20 2.6 20 6.39c0 2.92-2.39 8.1-2.95 9.17zM13.3 0c-.08 2.35-1.74 4.05-3.83 3.93-1.64-.12-3.14-1.48-3.22-3.93C8.11 1.48 9.57 0 13.3 0z"/>
              </svg>
              Continue with Apple
            </button>
          </div>
        </form>
        
        <p className="auth-terms">
          By signing in you agree to Redfin's <a href="#" className="auth-link">Terms of Use</a> and <a href="#" className="auth-link">Privacy Policy</a>
        </p>
      </div>
    </div>
  )
}

export default Auth

