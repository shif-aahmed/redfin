import BuyingOrSelling from '../components/BuyingOrSelling/BuyingOrSelling'
import LearnHow from '../components/LearnHow/LearnHow'
import TalkLocal from '../components/TalkLocal/TalkLocal'
import './FreeHomeBuyingClasses.css'

function FreeHomeBuyingClasses() {
  return (
    <div className="free-classes-page">
      <div className="free-classes-background">
        {/* Background image with interior scene */}
        <div className="free-classes-bg-image"></div>
        
        {/* Semi-transparent white overlay box */}
        <div className="free-classes-overlay-box">
          <h1 className="free-classes-title">
            Free Real Estate Classes and
            <span className="free-classes-title-line">
              Events
              <span className="free-classes-underline"></span>
            </span>
          </h1>
        </div>
      </div>
      <BuyingOrSelling />
      <LearnHow />
      <TalkLocal />
    </div>
  )
}

export default FreeHomeBuyingClasses

