import { useState } from 'react'
import './Hero.css'

function Hero() {
  const [activeTab, setActiveTab] = useState('Buy')

  const tabs = ['Buy', 'Mortgage', 'Sell', 'Rent', 'My Home Value']

  const tabData = {
    'Buy': {
      heading: 'Find the right home\nat the right price',
      placeholder: 'City, Address, School, Agent, ZIP',
      buttonType: 'icon'
    },
    'Mortgage': {
      heading: 'Lock in your rate\nwith Rocket Mortgage®',
      placeholder: 'City, County, ZIP',
      buttonType: 'text',
      buttonText: 'Next'
    },
    'Sell': {
      heading: 'Sell with the industry\'s\nmost experienced agents',
      placeholder: 'Enter your street address',
      buttonType: 'text',
      buttonText: 'Get started'
    },
    'Rent': {
      heading: 'Local rentals\nat your fingertips',
      placeholder: 'City, Address, School, Building, ZIP',
      buttonType: 'icon'
    },
    'My Home Value': {
      heading: 'Claim your home\nand get a free estimate',
      placeholder: 'Enter your street address',
      buttonType: 'icon'
    }
  }

  const currentData = tabData[activeTab]

  return (
    <section className="hero-section">
      <div className="hero-background"></div>
      <div className="hero-content">
        <h1 className="hero-heading">{currentData.heading}</h1>
        
        <div className="search-container">
          <div className="search-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`search-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="search-input-container">
            <input
              type="text"
              placeholder={currentData.placeholder}
              className="search-input"
            />
            <button className={`search-btn ${currentData.buttonType === 'text' ? 'text-btn' : ''}`}>
              {currentData.buttonType === 'icon' ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <span>{currentData.buttonText}</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

