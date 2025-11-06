import './SaveBig.css'

function SaveBig() {
  return (
    <div className="save-big-section">
      <div className="save-big-container">
        <div className="save-big-content">
          <div className="save-big-left">
            <h2 className="save-big-heading">
              Save big with a loan from<br />
              Rocket Mortgage
            </h2>
            <p className="save-big-description">
              With Rocket Preferred Pricing, you can choose to get a 1% lower interest rate for the first year or up to $6,000 in closing cost credits from Rocket Mortgage.*
            </p>
            <button className="save-big-button">Get prequalified</button>
          </div>
          
          <div className="save-big-right">
            <div className="save-big-image-container">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=800&fit=crop&q=80" 
                alt="Woman using smartphone on sofa"
                className="save-big-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SaveBig


