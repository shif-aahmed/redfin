import MeetAgent from '../components/MeetAgent/MeetAgent'
import ViewCard from '../components/ViewCard/ViewCard'
import ReadyToSell from '../components/ReadyToSell/ReadyToSell'
import SophisticatedHomes from '../components/SophisticatedHomes/SophisticatedHomes'
import GlobalReach from '../components/GlobalReach/GlobalReach'
import LowerFees from '../components/LowerFees/LowerFees'
import Agents from '../components/Agents/Agents'
import GetSaleStarted from '../components/GetSaleStarted/GetSaleStarted'
import './RedfinPremier.css'

function RedfinPremier() {
  return (
    <div className="redfin-premier-page">
      <div className="redfin-premier-hero">
        <div className="redfin-premier-image-container">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=900&fit=crop&q=80" 
            alt="Luxury waterfront property"
            className="redfin-premier-hero-image"
          />
          <div className="redfin-premier-overlay">
            <div className="redfin-premier-content">
              <div className="redfin-premier-left">
                <div className="redfin-premier-badge">REDFIN PREMIER</div>
                <h1 className="redfin-premier-heading">
                  The highest level of service from<br />
                  Redfin's best agents
                </h1>
              </div>
              <div className="redfin-premier-right">
                <div className="redfin-premier-location">Seattle, WA</div>
                <div className="redfin-premier-price">$2,310,000</div>
                <div className="redfin-premier-sold-badge">SOLD WITH REDFIN</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MeetAgent />
      <ViewCard />
      <ReadyToSell />
      <SophisticatedHomes />
      <GlobalReach />
      <LowerFees />
      <Agents />
      <GetSaleStarted />
    </div>
  )
}

export default RedfinPremier

