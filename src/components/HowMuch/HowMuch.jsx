import './HowMuch.css'

function HowMuch() {
  const cards = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="18" width="24" height="16" fill="none" stroke="#333" strokeWidth="2" rx="2"/>
          <text x="24" y="28" textAnchor="middle" fill="#d32f2f" fontSize="16" fontWeight="bold">$</text>
        </svg>
      ),
      title: "How Much Does it Cost to Buy a House?",
      description: "Determine your budget for buying a home, from your down payment to closing costs.",
      link: "Learn more"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="24" cy="28" rx="12" ry="14" fill="none" stroke="#333" strokeWidth="2"/>
          <rect x="20" y="20" width="8" height="4" fill="none" stroke="#333" strokeWidth="2" rx="1"/>
          <circle cx="24" cy="22" r="1.5" fill="#d32f2f"/>
          <rect x="22" y="16" width="4" height="6" fill="none" stroke="#333" strokeWidth="2"/>
        </svg>
      ),
      title: "How to Get Out of Debt",
      description: "Learn how to get out of debt fast, so you can start saving money for a home and qualify for a better loan.",
      link: "Learn more"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="14" y="16" width="20" height="24" fill="none" stroke="#333" strokeWidth="2" rx="2"/>
          <line x1="18" y1="22" x2="30" y2="22" stroke="#333" strokeWidth="2"/>
          <line x1="18" y1="28" x2="30" y2="28" stroke="#333" strokeWidth="2"/>
          <line x1="18" y1="34" x2="26" y2="34" stroke="#333" strokeWidth="2"/>
          <text x="24" y="18" textAnchor="middle" fill="#d32f2f" fontSize="12" fontWeight="bold">$</text>
        </svg>
      ),
      title: "How to Save for a House",
      description: "Understand your goals, then deploy money-saving strategies like these to get you there.",
      link: "Learn more"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 14 L20 20 L24 26 L28 20 Z" fill="none" stroke="#333" strokeWidth="2"/>
          <ellipse cx="24" cy="28" rx="10" ry="12" fill="none" stroke="#333" strokeWidth="2"/>
          <text x="24" y="32" textAnchor="middle" fill="#d32f2f" fontSize="12" fontWeight="bold">$</text>
        </svg>
      ),
      title: "How to Improve Your Credit Score",
      description: "Find out how to improve your credit score and qualify for better mortgage rates.",
      link: "Learn more"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="18" y="20" width="12" height="8" fill="none" stroke="#333" strokeWidth="2" rx="1"/>
          <path d="M24 20 L24 16 M20 20 L20 16 M28 20 L28 16" stroke="#333" strokeWidth="2"/>
          <circle cx="24" cy="24" r="2" fill="#d32f2f"/>
        </svg>
      ),
      title: "Types of Home Loans for First-Time Buyers",
      description: "Learn what mortgage loans and programs are available for first-time homebuyers.",
      link: "Learn more"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="16" y="22" width="16" height="12" fill="none" stroke="#333" strokeWidth="2"/>
          <polygon points="16,22 24,14 32,22" fill="none" stroke="#333" strokeWidth="2"/>
          <path d="M24 34 L24 28 M20 30 L24 28 L28 30" stroke="#d32f2f" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "First-Time Homebuyer Programs by State",
      description: "Discover first-time homebuyer programs and assistance available in your state.",
      link: "Learn more"
    }
  ]

  return (
    <div className="how-much-section">
      <div className="how-much-container">
        <div className="how-much-cards">
          {cards.map((card, index) => (
            <div key={index} className="how-much-card">
              <div className="how-much-icon">
                {card.icon}
              </div>
              <h3 className="how-much-title">{card.title}</h3>
              <p className="how-much-description">{card.description}</p>
              <a href="#" className="how-much-link">{card.link}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowMuch


