import { useState } from 'react'
import './ShouldIRentOrBuy.css'

function ShouldIRentOrBuy() {
  const [location, setLocation] = useState('')
  const [stayDuration, setStayDuration] = useState(7)
  const [rentingExpanded, setRentingExpanded] = useState(false)
  const [monthlyRent, setMonthlyRent] = useState(2000)
  const [homePrice, setHomePrice] = useState(425000)
  const [buyingExpanded, setBuyingExpanded] = useState(false)
  const [downPaymentAmount, setDownPaymentAmount] = useState(85000)
  const [downPaymentPercent, setDownPaymentPercent] = useState(20)
  const [mortgageRate, setMortgageRate] = useState(6.0)
  const [advancedOptionsExpanded, setAdvancedOptionsExpanded] = useState(false)
  const [propertyTaxRate, setPropertyTaxRate] = useState(1.19)
  const [monthlyHOA, setMonthlyHOA] = useState(0)
  const [homeInsuranceRate, setHomeInsuranceRate] = useState(0.54)
  const [loanType, setLoanType] = useState('30-year fixed')
  const [homePriceGrowthRate, setHomePriceGrowthRate] = useState(3.0)
  const [rentGrowthRate, setRentGrowthRate] = useState(3.0)
  const [investmentReturnRate, setInvestmentReturnRate] = useState(4.0)
  const [inflationRate, setInflationRate] = useState(2.0)
  const [marginalTaxRate, setMarginalTaxRate] = useState(25)
  const [buyingClosingCosts, setBuyingClosingCosts] = useState(4.0)
  const [sellerClosingCosts, setSellerClosingCosts] = useState(4.5)
  const [maintenanceCosts, setMaintenanceCosts] = useState(1.0)
  const [rentersInsurance, setRentersInsurance] = useState(1.32)
  const [renterSecurityDeposit, setRenterSecurityDeposit] = useState(2000)

  return (
    <div className="rent-vs-buy-page">
      <div className="rent-vs-buy-container">
        <div className="rent-vs-buy-header">
          <h1 className="rent-vs-buy-title">Rent vs. Buy calculator</h1>
          <p className="rent-vs-buy-subtitle">
            Is it best to rent or buy in the city you are considering?
          </p>
        </div>

        <div className="rent-vs-buy-content">
          {/* Left Sidebar - Input Section */}
          <div className="input-sidebar">
            <div className="input-card">
              <div className="input-group">
                <label className="input-label">Desired location</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="City, neighborhood, or zip"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <p className="input-helper-text">To calculate local taxes and costs.</p>
              </div>

              <div className="input-group">
                <label className="input-label">How long do you plan to stay?</label>
                <input
                  type="number"
                  className="input-field"
                  value={stayDuration}
                  onChange={(e) => setStayDuration(e.target.value)}
                />
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={stayDuration}
                  onChange={(e) => setStayDuration(e.target.value)}
                  className="duration-slider"
                />
                <p className="input-helper-text">Avg. stay in a home is 13 years</p>
              </div>

              <div className="input-group">
                <button 
                  className="expandable-section-header"
                  onClick={() => setRentingExpanded(!rentingExpanded)}
                >
                  <span className="section-title">Renting</span>
                  <svg 
                    className={`chevron-icon ${rentingExpanded ? 'expanded' : ''}`}
                    viewBox="0 0 12 12" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {rentingExpanded && (
                  <div className="expandable-section-content">
                    <div className="nested-input-group">
                      <label className="input-label">Desired monthly rent</label>
                      <input
                        type="text"
                        className="input-field price-input"
                        value={`$${monthlyRent.toLocaleString()}`}
                        onChange={(e) => {
                          const value = e.target.value.replace(/[$,]/g, '')
                          if (!isNaN(value)) setMonthlyRent(Number(value))
                        }}
                      />
                      <p className="input-helper-text">
                        See <a href="/how-much-rent" className="calculator-link">Redfin's rental affordability calculator</a> to learn what you can afford.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="section-divider"></div>

              <div className="input-group">
                <button 
                  className="expandable-section-header"
                  onClick={() => setBuyingExpanded(!buyingExpanded)}
                >
                  <span className="section-title">Buying</span>
                  <svg 
                    className={`chevron-icon ${buyingExpanded ? 'expanded' : ''}`}
                    viewBox="0 0 12 12" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {buyingExpanded && (
                  <div className="expandable-section-content">
                    <div className="nested-input-group">
                      <label className="input-label">Home price</label>
                      <input
                        type="text"
                        className="input-field price-input"
                        value={`$${homePrice.toLocaleString()}`}
                        onChange={(e) => {
                          const value = e.target.value.replace(/[$,]/g, '')
                          if (!isNaN(value)) setHomePrice(Number(value))
                        }}
                      />
                      <p className="input-helper-text">
                        See <a href="#" className="calculator-link">Redfin's home affordability calculator</a> to learn what you can afford.
                      </p>
                    </div>

                    <div className="nested-input-group">
                      <label className="input-label">Down payment</label>
                      <div className="dual-input-wrapper">
                        <input
                          type="text"
                          className="input-field price-input dual-input-left"
                          value={`$${downPaymentAmount.toLocaleString()}`}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[$,]/g, '')
                            if (!isNaN(value)) {
                              setDownPaymentAmount(Number(value))
                              setDownPaymentPercent(Math.round((Number(value) / homePrice) * 100))
                            }
                          }}
                        />
                        <input
                          type="text"
                          className="input-field price-input dual-input-right"
                          value={`${downPaymentPercent}%`}
                          onChange={(e) => {
                            const value = e.target.value.replace(/%/g, '')
                            if (!isNaN(value)) {
                              setDownPaymentPercent(Number(value))
                              setDownPaymentAmount(Math.round((homePrice * Number(value)) / 100))
                            }
                          }}
                        />
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={downPaymentPercent}
                        onChange={(e) => {
                          setDownPaymentPercent(Number(e.target.value))
                          setDownPaymentAmount(Math.round((homePrice * Number(e.target.value)) / 100))
                        }}
                        className="duration-slider"
                      />
                      <p className="input-helper-text">Cash you can pay when you close</p>
                    </div>

                    <div className="nested-input-group">
                      <label className="input-label">Mortgage interest rate</label>
                      <input
                        type="text"
                        className="input-field"
                        value={`${mortgageRate}%`}
                        onChange={(e) => {
                          const value = e.target.value.replace(/%/g, '')
                          if (!isNaN(value)) setMortgageRate(Number(value))
                        }}
                      />
                      <p className="input-helper-text">
                        Varies depending on lender and credit score. <a href="#" className="calculator-link">See current rates</a>.
                      </p>
                    </div>

                    <div className="advanced-options-divider"></div>

                    <button 
                      className="show-advanced-options-btn"
                      onClick={() => setAdvancedOptionsExpanded(!advancedOptionsExpanded)}
                    >
                      <span className="advanced-options-text">Show advanced options</span>
                      <svg 
                        className={`chevron-icon ${advancedOptionsExpanded ? 'expanded' : ''}`}
                        viewBox="0 0 12 12" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>

                    {advancedOptionsExpanded && (
                      <div className="advanced-options-content">
                        <h4 className="advanced-options-title">Advanced options</h4>
                        
                        <div className="nested-input-group">
                          <label className="input-label">Property tax rate</label>
                          <input
                            type="text"
                            className="input-field"
                            value={`${propertyTaxRate}%`}
                            onChange={(e) => {
                              const value = e.target.value.replace(/%/g, '')
                              if (!isNaN(value)) setPropertyTaxRate(Number(value))
                            }}
                          />
                          <p className="input-helper-text">
                            Percentage of home's value, based on national average.
                          </p>
                        </div>

                        <div className="nested-input-group">
                          <label className="input-label">Monthly HOA fees</label>
                          <input
                            type="text"
                            className="input-field"
                            value={`$${monthlyHOA}`}
                            onChange={(e) => {
                              const value = e.target.value.replace(/[$,]/g, '')
                              if (!isNaN(value)) setMonthlyHOA(Number(value))
                            }}
                          />
                          <p className="input-helper-text">
                            Fees paid in some shared complexes for maintenance.
                          </p>
                        </div>

                        <div className="nested-input-group">
                          <label className="input-label">Homeowners insurance rate</label>
                          <input
                            type="text"
                            className="input-field"
                            value={`${homeInsuranceRate}%`}
                            onChange={(e) => {
                              const value = e.target.value.replace(/%/g, '')
                              if (!isNaN(value)) setHomeInsuranceRate(Number(value))
                            }}
                          />
                          <p className="input-helper-text">
                            Percentage of home's value, based on national average.
                          </p>
                        </div>

                        <div className="nested-input-group">
                          <label className="input-label">Loan type</label>
                          <div className="select-wrapper">
                            <select
                              className="input-field select-field"
                              value={loanType}
                              onChange={(e) => setLoanType(e.target.value)}
                            >
                              <option value="30-year fixed">30-year fixed</option>
                              <option value="15-year fixed">15-year fixed</option>
                            </select>
                            <svg className="select-chevron" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2 4L6 8L10 4" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <p className="input-helper-text">
                            Affects interest rates. 30- or 15-year loans are standard.
                          </p>
                        </div>

                        <div className="nested-input-group">
                          <label className="input-label">Home price growth rate</label>
                          <input
                            type="text"
                            className="input-field"
                            value={`${homePriceGrowthRate}%`}
                            onChange={(e) => {
                              const value = e.target.value.replace(/%/g, '')
                              if (!isNaN(value)) setHomePriceGrowthRate(Number(value))
                            }}
                          />
                          <p className="input-helper-text">
                            The annual rate you expect your home price to increase.
                          </p>
                        </div>

                        <div className="nested-input-group">
                          <label className="input-label">Rent growth rate</label>
                          <input
                            type="text"
                            className="input-field"
                            value={`${rentGrowthRate}%`}
                            onChange={(e) => {
                              const value = e.target.value.replace(/%/g, '')
                              if (!isNaN(value)) setRentGrowthRate(Number(value))
                            }}
                          />
                          <p className="input-helper-text">
                            The annual rate you expect your rent to increase.
                          </p>
                        </div>

                        <div className="nested-input-group">
                          <label className="input-label">Investment return rate</label>
                          <input
                            type="text"
                            className="input-field"
                            value={`${investmentReturnRate}%`}
                            onChange={(e) => {
                              const value = e.target.value.replace(/%/g, '')
                              if (!isNaN(value)) setInvestmentReturnRate(Number(value))
                            }}
                          />
                          <p className="input-helper-text">
                            The annual rate you expect your non-real estate assets to increase.
                          </p>
                        </div>

                        <div className="nested-input-group">
                          <label className="input-label">Inflation rate</label>
                          <input
                            type="text"
                            className="input-field"
                            value={`${inflationRate}%`}
                            onChange={(e) => {
                              const value = e.target.value.replace(/%/g, '')
                              if (!isNaN(value)) setInflationRate(Number(value))
                            }}
                          />
                          <p className="input-helper-text">
                            The annual rate you expect for future inflation.
                          </p>
                        </div>

                        <div className="nested-input-group">
                          <label className="input-label">Marginal tax rate</label>
                          <input
                            type="text"
                            className="input-field"
                            value={`${marginalTaxRate}%`}
                            onChange={(e) => {
                              const value = e.target.value.replace(/%/g, '')
                              if (!isNaN(value)) setMarginalTaxRate(Number(value))
                            }}
                          />
                          <p className="input-helper-text">
                            Total tax rate including federal, state and local income tax.
                          </p>
                        </div>

                        <div className="nested-input-group">
                          <label className="input-label">Buying closing costs</label>
                          <input
                            type="text"
                            className="input-field"
                            value={`${buyingClosingCosts}%`}
                            onChange={(e) => {
                              const value = e.target.value.replace(/%/g, '')
                              if (!isNaN(value)) setBuyingClosingCosts(Number(value))
                            }}
                          />
                          <p className="input-helper-text">
                            Costs you'll pay when you purchase a home. <a href="#" className="calculator-link">Learn more here.</a>
                          </p>
                        </div>

                        <div className="nested-input-group">
                          <label className="input-label">Seller closing costs</label>
                          <input
                            type="text"
                            className="input-field"
                            value={`${sellerClosingCosts}%`}
                            onChange={(e) => {
                              const value = e.target.value.replace(/%/g, '')
                              if (!isNaN(value)) setSellerClosingCosts(Number(value))
                            }}
                          />
                          <p className="input-helper-text">
                            Costs you'll pay when you sell your home. <a href="#" className="calculator-link">Learn how you can save with Redfin.</a>
                          </p>
                        </div>

                        <div className="nested-input-group">
                          <label className="input-label">Maintenance costs</label>
                          <input
                            type="text"
                            className="input-field"
                            value={`${maintenanceCosts}%`}
                            onChange={(e) => {
                              const value = e.target.value.replace(/%/g, '')
                              if (!isNaN(value)) setMaintenanceCosts(Number(value))
                            }}
                          />
                          <p className="input-helper-text">
                            Costs to maintain your home annually as a percentage of purchase price.
                          </p>
                        </div>

                        <div className="nested-input-group">
                          <label className="input-label">Renters insurance</label>
                          <input
                            type="text"
                            className="input-field"
                            value={`${rentersInsurance}%`}
                            onChange={(e) => {
                              const value = e.target.value.replace(/%/g, '')
                              if (!isNaN(value)) setRentersInsurance(Number(value))
                            }}
                          />
                          <p className="input-helper-text">
                            Cost of renters insurance as a percentage of monthly rent.
                          </p>
                        </div>

                        <div className="nested-input-group">
                          <label className="input-label">Renter security deposit</label>
                          <input
                            type="text"
                            className="input-field"
                            value={`$${renterSecurityDeposit.toLocaleString()}`}
                            onChange={(e) => {
                              const value = e.target.value.replace(/[$,]/g, '')
                              if (!isNaN(value)) setRenterSecurityDeposit(Number(value))
                            }}
                          />
                          <p className="input-helper-text">
                            Deposit the landlord holds during tenancy to secure against damage.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Section - Results */}
          <div className="results-section">
            <h2 className="results-conclusion">
              Buying will be <span className="highlight-amount">$53</span> cheaper per month
            </h2>

            <div className="comparison-cards">
              {/* Buying Card */}
              <div className="comparison-card">
                <h3 className="card-title">Buying</h3>
                <div className="monthly-average">
                  <span className="amount">$2,401</span>
                  <span className="period">/monthly avg</span>
                </div>
                <div className="cost-breakdown">
                  <div className="cost-row">
                    <span className="cost-label dotted-underline">Initial costs</span>
                    <span className="cost-value">$102,000</span>
                  </div>
                  <div className="cost-row">
                    <span className="cost-label dotted-underline">Recurring costs</span>
                    <span className="cost-value">$241,594</span>
                  </div>
                  <div className="cost-row">
                    <span className="cost-label dotted-underline">Opportunity costs</span>
                    <span className="cost-value">$52,532</span>
                  </div>
                  <div className="cost-row">
                    <span className="cost-label dotted-underline">Net proceeds</span>
                    <span className="cost-value negative">-$194,401</span>
                  </div>
                  <div className="cost-row total-row">
                    <span className="cost-label dotted-underline">Total cost</span>
                    <span className="cost-value">$201,726</span>
                  </div>
                </div>
              </div>

              {/* Renting Card */}
              <div className="comparison-card">
                <h3 className="card-title">Renting</h3>
                <div className="monthly-average">
                  <span className="amount">$2,454</span>
                  <span className="period">/monthly avg</span>
                </div>
                <div className="cost-breakdown">
                  <div className="cost-row">
                    <span className="cost-label dotted-underline">Initial costs</span>
                    <span className="cost-value">$2,000</span>
                  </div>
                  <div className="cost-row">
                    <span className="cost-label dotted-underline">Recurring costs</span>
                    <span className="cost-value">$186,327</span>
                  </div>
                  <div className="cost-row">
                    <span className="cost-label dotted-underline">Opportunity costs</span>
                    <span className="cost-value">$19,833</span>
                  </div>
                  <div className="cost-row">
                    <span className="cost-label dotted-underline">Net proceeds</span>
                    <span className="cost-value negative">-$2,000</span>
                  </div>
                  <div className="cost-row total-row">
                    <span className="cost-label dotted-underline">Total cost</span>
                    <span className="cost-value">$206,159</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Take the next step section */}
            <div className="next-step-card">
              <h3 className="next-step-title">Take the next step</h3>
              
              <a href="#" className="next-step-item">
                <div className="next-step-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="4" width="12" height="16" stroke="currentColor" strokeWidth="2" rx="1"/>
                    <rect x="9" y="2" width="6" height="3" fill="currentColor" rx="0.5"/>
                  </svg>
                </div>
                <span className="next-step-text">Get prequalified with Rocket Mortgage</span>
                <svg className="next-step-chevron" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2L6 6L2 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <div className="next-step-divider"></div>

              <a href="#" className="next-step-item">
                <div className="next-step-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="5" width="14" height="14" stroke="currentColor" strokeWidth="2" rx="1"/>
                    <line x1="5" y1="9" x2="19" y2="9" stroke="currentColor" strokeWidth="2"/>
                    <line x1="9" y1="9" x2="9" y2="19" stroke="currentColor" strokeWidth="2"/>
                    <line x1="13" y1="9" x2="13" y2="19" stroke="currentColor" strokeWidth="2"/>
                    <line x1="17" y1="9" x2="17" y2="19" stroke="currentColor" strokeWidth="2"/>
                    <line x1="9" y1="13" x2="19" y2="13" stroke="currentColor" strokeWidth="2"/>
                    <line x1="9" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <span className="next-step-text">See how much house you can afford</span>
                <svg className="next-step-chevron" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2L6 6L2 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <div className="next-step-divider"></div>

              <a href="#" className="next-step-item">
                <div className="next-step-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M6 20C6 16.6863 8.68629 14 12 14C15.3137 14 18 16.6863 18 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <span className="next-step-text">Get expert advice from a Redfin agent</span>
                <svg className="next-step-chevron" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2L6 6L2 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Additional resources section */}
            <div className="additional-resources-card">
              <h3 className="additional-resources-title">Additional resources</h3>
              
              <a href="#" className="resource-item">
                <div className="resource-thumbnail">
                  <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=200&h=200&fit=crop" alt="Modern house" />
                </div>
                <span className="resource-text">Should you buy a home or rent?</span>
                <svg className="resource-chevron" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2L6 6L2 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <div className="resource-divider"></div>

              <a href="#" className="resource-item">
                <div className="resource-thumbnail">
                  <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200&h=200&fit=crop" alt="Townhouses" />
                </div>
                <span className="resource-text">Buying a home without a down payment?</span>
                <svg className="resource-chevron" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2L6 6L2 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* How we calculate section */}
            <div className="calculation-info-card">
              <h3 className="calculation-info-title">How we calculate renting and buying costs</h3>
              
              <p className="calculation-intro">
                The Redfin Rent vs. Buy Calculator uses information you provide to estimate the monthly and total costs of renting or buying your next home. In order to calculate an overall cost of renting and buying, the calculator considers different factors to estimate the financial impact of renting and buying: initial costs, recurring costs, opportunity costs and net proceeds.
              </p>

              <div className="calculation-subsection">
                <h4 className="calculation-subtitle">Initial costs</h4>
                <p className="calculation-text">
                  Initial costs are the things you need to pay when you first move into a new place. When buying, these costs are going to be much higher than renting, so you should consider if you have the money to cover them before buying. For buyers, these costs include down payment and closing costs which are often around 24% of the total purchase price. When renting, this is typically just your security deposit which is usually equal to one months rent.
                </p>
              </div>

              <div className="calculation-subsection">
                <h4 className="calculation-subtitle">Recurring costs</h4>
                <p className="calculation-text">
                  Recurring costs are the ongoing costs associated with living in the home you rent or buy. For buyers, this includes mortgage payment, property taxes, insurance, maintenance and utilities. For renters, this is typically just your monthly rental payment.
                </p>
              </div>

              <div className="calculation-subsection">
                <h4 className="calculation-subtitle">Opportunity costs</h4>
                <p className="calculation-text">
                  Opportunity costs aren't direct out-of-pocket expenses, but they are important to consider when making a long term investment like buying a home. When you buy a home, you tie a sizable amount of your net worth into that home. If you didn't buy that home, you could earn interest in the stock market or a savings account. This is your opportunity cost. In advanced options, you can update your expected return on investment to update the opportunity costs.
                </p>
              </div>

              <div className="calculation-subsection">
                <h4 className="calculation-subtitle">Net proceeds</h4>
                <p className="calculation-text">
                  Net proceeds is money you get back when you sell your home or move out of your rental. For buyers, this is the principal you get back after paying off your mortgage minus any associated selling costs. For renters, this is typically just your security deposit which is returned to you after you move out.
                </p>
              </div>

              <div className="calculation-major-section">
                <h3 className="calculation-section-title">Should I rent or buy a house? 3 questions to ask yourself</h3>
                <p className="calculation-text">
                  Each of us has a unique lifestyle, financial situation, and set of long-term life goals that impacts our decision whether to rent or buy a house. To sort this all out for yourself, consider three main questions.
                </p>
              </div>

              <div className="calculation-numbered-section">
                <h4 className="calculation-numbered-title">1. Does renting or buying work with your timeline?</h4>
                <p className="calculation-text">
                  One of the most important questions to consider when deciding between renting versus buying a home is your timeline. For example, if you've just moved to a city, expect a job change soon, or don't plan to stay in the community long, it may make more sense to rent. <strong>Selling a home</strong> costs money, and if you sell too soon after buying, it may not be worth it.
                </p>
                <p className="calculation-text">
                  On the other hand, if you've found a community where you'd like to put down roots, buying may be the better option. Owning a home offers more stability and potentially more financial benefits for homebuyers who plan to live in an area for more than just a few years.
                </p>
              </div>

              <div className="calculation-numbered-section">
                <h4 className="calculation-numbered-title">2. How much can you afford?</h4>
                <p className="calculation-text">
                  Buying and renting each have their own costs to consider - and this can make the difference between becoming a renter or a homeowner. To buy, you'll need enough money in the bank to afford a <strong>down payment</strong> and <strong>closing costs</strong>. How much that will be depends on your home loan, your lender, housing market, and more. Many buyers put down as little as 3%, though a larger down payment will usually save you money on interest and <strong>mortgage insurance</strong>.
                </p>
                <p className="calculation-text">
                  Once you buy, you'll also have ongoing costs including your mortgage payment, maintenance, utilities, and insurance. Use a <strong>mortgage calculator</strong> to understand what's affordable for you. Renting, on the other hand, typically requires a <strong>rental application</strong>, application fee, <strong>security deposit</strong>, and first/last month's rent. Renting can be a good way to save money while improving your credit score before buying. Keep in mind that rent payments are likely to increase when you renew your lease, and depending on the <strong>housing market</strong>, rent could sometimes be more expensive than a mortgage payment. Use a rent vs. buy calculator for evaluation, but remember it's only a rough estimate.
                </p>
              </div>

              <div className="calculation-numbered-section">
                <h4 className="calculation-numbered-title">3. Will renting or buying a home fit your lifestyle?</h4>
                <p className="calculation-text">
                  Renting vs. buying is also a lifestyle question.
                </p>
                <p className="calculation-text">
                  <strong>Homeownership</strong> is a long-term investment for building wealth, requiring regular maintenance. It offers pride of ownership and the freedom to make decisions about style and upgrades not available to renters. In some markets, buying a home with features like a yard, garage, or a third bedroom might be more affordable than renting an equivalent property.
                </p>
                <p className="calculation-text">
                  Renting might be preferable if you want to avoid the responsibility of home maintenance and emergency repairs. It's also a good option if you're anticipating a change on the horizon - like a career transition or changes in your child's schooling - where renting makes more financial sense or aligns with your long-term goals. Renting is also ideal for those with a busy lifestyle, who move around a lot, or who simply prefer more freedom and aren't ready for a big commitment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShouldIRentOrBuy

