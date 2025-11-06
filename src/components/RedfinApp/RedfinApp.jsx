import './RedfinApp.css'

function RedfinApp() {
  return (
    <div className="redfin-app-section">
      <div className="redfin-app-container">
        <div className="redfin-app-content">
          <div className="redfin-app-left">
            <h2 className="redfin-app-heading">The best home search starts with the Redfin app</h2>
            <p className="redfin-app-description">
              With 3D walkthroughs, 40+ filters to narrow down your search, and monthly payment calculators—our app makes it easy to find the right home from anywhere.*
            </p>
            
            <div className="app-download-buttons">
              <a href="#" className="app-store-button">
                <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.05 20.28C16.7 20.9 16.2 21.4 15.58 21.75C14.96 22.1 14.26 22.28 13.54 22.28C12.82 22.28 12.12 22.1 11.5 21.75C10.88 21.4 10.38 20.9 10.03 20.28L3.5 8.5C3.15 7.88 2.97 7.18 2.97 6.46C2.97 5.74 3.15 5.04 3.5 4.42C3.85 3.8 4.35 3.3 4.97 2.95C5.59 2.6 6.29 2.42 7.01 2.42C7.73 2.42 8.43 2.6 9.05 2.95C9.67 3.3 10.17 3.8 10.52 4.42L13.54 9.94L16.56 4.42C16.91 3.8 17.41 3.3 18.03 2.95C18.65 2.6 19.35 2.42 20.07 2.42C20.79 2.42 21.49 2.6 22.11 2.95C22.73 3.3 23.23 3.8 23.58 4.42C23.93 5.04 24.11 5.74 24.11 6.46C24.11 7.18 23.93 7.88 23.58 8.5L17.05 20.28Z" fill="white"/>
                  <path d="M13.54 9.5C13.54 10.22 13.36 10.92 13.01 11.54C12.66 12.16 12.16 12.66 11.54 13.01C10.92 13.36 10.22 13.54 9.5 13.54C8.78 13.54 8.08 13.36 7.46 13.01C6.84 12.66 6.34 12.16 5.99 11.54C5.64 10.92 5.46 10.22 5.46 9.5C5.46 8.78 5.64 8.08 5.99 7.46C6.34 6.84 6.84 6.34 7.46 5.99C8.08 5.64 8.78 5.46 9.5 5.46C10.22 5.46 10.92 5.64 11.54 5.99C12.16 6.34 12.66 6.84 13.01 7.46C13.36 8.08 13.54 8.78 13.54 9.5Z" fill="white"/>
                </svg>
                <div className="app-store-text">
                  <span className="app-store-label">Download on the</span>
                  <span className="app-store-name">App Store</span>
                </div>
              </a>
              
              <a href="#" className="google-play-button">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.5 2.33C3.17 2.5 2.92 2.83 2.83 3.25L2.83 24.75C2.83 25.17 3.08 25.5 3.41 25.67L14.58 14.5L3.5 2.33Z" fill="#00D9FF"/>
                  <path d="M19.25 14.5L3.5 2.33L14.58 14.5L3.5 25.67L19.25 14.5Z" fill="#00D9FF"/>
                  <path d="M19.25 14.5L3.5 25.67L14.58 14.5L19.25 14.5Z" fill="#00D9FF"/>
                  <path d="M19.25 14.5L25.17 11.67C25.5 11.5 25.75 11.17 25.75 10.75C25.75 10.33 25.5 10 25.17 9.83L19.25 7L14.58 14.5L19.25 14.5Z" fill="#FFCE00"/>
                  <path d="M19.25 14.5L25.17 17.33C25.5 17.5 25.75 17.83 25.75 18.25C25.75 18.67 25.5 19 25.17 19.17L19.25 22L14.58 14.5L19.25 14.5Z" fill="#FF3A44"/>
                  <path d="M19.25 14.5L14.58 14.5L3.5 2.33L19.25 7L25.17 9.83C25.5 10 25.75 10.33 25.75 10.75C25.75 11.17 25.5 11.5 25.17 11.67L19.25 14.5Z" fill="#00F076"/>
                </svg>
                <div className="google-play-text">
                  <span className="google-play-label">GET IT ON</span>
                  <span className="google-play-name">Google Play</span>
                </div>
              </a>
            </div>
          </div>
          
          <div className="redfin-app-right">
            <div className="phone-qr-container">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="phone-header">
                    <div className="redfin-logo-small">Redfin</div>
                    <div className="hamburger-menu">☰</div>
                  </div>
                  <div className="phone-content">
                    <div className="phone-image-placeholder"></div>
                    <div className="phone-image-placeholder"></div>
                    <div className="phone-details">
                      <span>2160</span>
                      <span>$697,000</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="qr-code-overlay">
                <div className="qr-code-placeholder"></div>
                <p className="qr-code-text">Scan to download the app</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RedfinApp

