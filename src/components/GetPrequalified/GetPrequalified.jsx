import './GetPrequalified.css'

function GetPrequalified() {
  return (
    <div className="get-prequalified-section">
      <div className="get-prequalified-container">
        <div className="get-prequalified-content">
          <div className="get-prequalified-left">
            <div className="get-prequalified-image-container">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop&q=80" 
                alt="Woman using smartphone on sofa"
                className="get-prequalified-image"
              />
            </div>
          </div>
          
          <div className="get-prequalified-right">
            <h2 className="get-prequalified-heading">Save big with a loan from Rocket Mortgage</h2>
            <p className="get-prequalified-description">
              With Rocket Preferred Pricing, you can choose to get a 1% lower interest rate for the first year or up to $6,000 in closing cost credits from Rocket Mortgage.⊕
            </p>
            <button className="get-prequalified-button">Get prequalified</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetPrequalified





