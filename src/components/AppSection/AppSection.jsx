import './AppSection.css'

function AppSection() {
  return (
    <section className="app-section">
      <div className="app-container">
        {/* Top Section */}
        <div className="app-top-section">
          <div className="app-content-left">
            <h2 className="app-heading">Get the Redfin app</h2>
            <p className="app-description">
              Download our top-rated real estate app for iOS or Android to get alerts the moment your dream home hits the market.
            </p>
          </div>
          <div className="app-content-right">
            <img 
              src="https://ssl.cdn-redfin.com/cop-assets/prod/hpwidget/DownloadApp_DesktopNew.png" 
              alt="Redfin app" 
              className="app-phone-image"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="app-bottom-section">
          <div className="app-image-left">
            <img 
              src="https://ssl.cdn-redfin.com/cop-assets/prod/hpwidget/LS_2023_Core_21_Buy_Tour_Couple_Entry_4556_RT_cropsmall.jpg" 
              alt="Redfin agents" 
              className="app-people-image"
            />
          </div>
          <div className="app-content-right-bottom">
            <h2 className="app-heading-bottom">Start touring homes, no strings attached</h2>
            <p className="app-description-bottom">
              Unlike many other agents, Redfin agents won't ask you to sign an exclusive commitment before they'll take you on a first tour.
            </p>
            <button className="app-search-button">Search for homes</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppSection

