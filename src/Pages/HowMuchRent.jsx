import { useState } from 'react'
import Text from '../components/Text/Text'
import FAQsRent from '../components/FAQsRent/FAQsRent'
import RentalResources from '../components/RentalResources/RentalResources'
import RentalTags from '../components/RentalTags/RentalTags'
import './HowMuchRent.css'

function HowMuchRent() {
  const [location, setLocation] = useState('')
  const [income, setIncome] = useState('')
  const [incomeFrequency, setIncomeFrequency] = useState('Annual')

  const handleCalculate = (e) => {
    e.preventDefault()
    console.log({ location, income, incomeFrequency })
  }

  return (
    <div className="how-much-rent-page">
      <div className="how-much-rent-content">
        <h1 className="how-much-rent-title">How Much Rent Can I Afford?</h1>
        <p className="how-much-rent-subtitle">
          See what you can afford and find rentals within your budget.
        </p>

        <div className="rental-calculator-card">
          <h2 className="calculator-card-title">Rental affordability calculator</h2>
          
          <form onSubmit={handleCalculate} className="calculator-form">
            <div className="form-row">
              <div className="form-group location-group">
                <label htmlFor="location" className="form-label">
                  I'm looking for rentals in ...
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder="City, neighborhood, or zip code"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="form-input"
                />
                <a href="#" className="more-options-link">+ More Options</a>
              </div>

              <div className="form-group income-group">
                <label htmlFor="income" className="form-label">
                  <select 
                    className="income-frequency-select"
                    value={incomeFrequency}
                    onChange={(e) => setIncomeFrequency(e.target.value)}
                  >
                    <option>Annual</option>
                    <option>Monthly</option>
                    <option>Weekly</option>
                  </select>
                  {' '}Gross Income
                </label>
                <div className="income-input-wrapper">
                  <span className="dollar-sign">$</span>
                  <input
                    type="text"
                    id="income"
                    placeholder="Income before taxes"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    className="form-input income-input"
                  />
                  <button type="submit" className="calculate-btn">
                    Calculate Rent
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Text />
      <FAQsRent />
      <RentalResources />
      <RentalTags />
    </div>
  )
}

export default HowMuchRent

