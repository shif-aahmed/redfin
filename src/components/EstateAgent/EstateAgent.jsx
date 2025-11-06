import './EstateAgent.css'

function EstateAgent() {
  const cards = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="18" r="8" fill="none" stroke="#333" strokeWidth="2"/>
          <path d="M12 36 L12 28 Q12 24 16 24 L32 24 Q36 24 36 28 L36 36" fill="none" stroke="#333" strokeWidth="2"/>
          <rect x="20" y="24" width="8" height="4" fill="none" stroke="#333" strokeWidth="2"/>
          <rect x="30" y="16" width="8" height="6" fill="#d32f2f" stroke="#333" strokeWidth="1"/>
          <text x="34" y="20" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">?</text>
        </svg>
      ),
      title: "What is a Real Estate Agent and How Do I Find One?",
      description: "Find out what a real estate agent does and how to find a great one.",
      link: "Learn more"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="18" cy="24" rx="6" ry="8" fill="none" stroke="#333" strokeWidth="2"/>
          <ellipse cx="30" cy="24" rx="6" ry="8" fill="none" stroke="#333" strokeWidth="2"/>
          <path d="M12 20 L12 28 M36 20 L36 28" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
          <path d="M20 16 L20 12 M28 16 L28 12" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="18" cy="12" r="2" fill="#d32f2f"/>
          <circle cx="24" cy="10" r="2" fill="#d32f2f"/>
          <circle cx="30" cy="12" r="2" fill="#d32f2f"/>
        </svg>
      ),
      title: "Connect with a Redfin Agent",
      description: "Find a local Redfin Agent to help guide you through the homebuying process.",
      link: "Learn more"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="14" y="16" width="20" height="24" fill="none" stroke="#333" strokeWidth="2" rx="2"/>
          <line x1="18" y1="22" x2="30" y2="22" stroke="#333" strokeWidth="2"/>
          <line x1="18" y1="28" x2="30" y2="28" stroke="#333" strokeWidth="2"/>
          <line x1="18" y1="34" x2="26" y2="34" stroke="#333" strokeWidth="2"/>
          <rect x="28" y="16" width="6" height="6" fill="#d32f2f" stroke="#333" strokeWidth="1"/>
          <text x="31" y="20" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">$</text>
        </svg>
      ),
      title: "How to Choose a Mortgage Lender",
      description: "Start looking for a mortgage lender early in the homebuying process so you can find one that meets your needs.",
      link: "Learn more"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="16" y="14" width="16" height="20" fill="none" stroke="#333" strokeWidth="2" rx="2"/>
          <line x1="20" y1="20" x2="28" y2="20" stroke="#333" strokeWidth="2"/>
          <line x1="20" y1="26" x2="28" y2="26" stroke="#333" strokeWidth="2"/>
          <circle cx="22" cy="20" r="1.5" fill="#333"/>
          <circle cx="22" cy="26" r="1.5" fill="#333"/>
          <path d="M30 18 L34 14 L34 22 L30 18 Z" fill="#d32f2f" stroke="#333" strokeWidth="1"/>
        </svg>
      ),
      title: "How to Get Pre-Approved for a Home Loan",
      description: "A mortgage pre-approval can help you understand your budget and show sellers you're serious about buying.",
      link: "Learn more"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="18" y="22" width="12" height="10" fill="none" stroke="#333" strokeWidth="2"/>
          <polygon points="18,22 24,16 30,22" fill="none" stroke="#333" strokeWidth="2"/>
          <circle cx="28" cy="20" r="6" fill="none" stroke="#333" strokeWidth="2"/>
          <circle cx="28" cy="20" r="3" fill="none" stroke="#333" strokeWidth="1"/>
          <path d="M32 20 L36 16" stroke="#d32f2f" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "What to Look for When Buying a House",
      description: "Determine what's most important to you when searching for your new home.",
      link: "Learn more"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="16" y="18" width="16" height="20" fill="none" stroke="#333" strokeWidth="2" rx="2"/>
          <line x1="20" y1="24" x2="28" y2="24" stroke="#333" strokeWidth="2"/>
          <line x1="20" y1="30" x2="28" y2="30" stroke="#333" strokeWidth="2"/>
          <text x="24" y="28" textAnchor="middle" fill="#333" fontSize="12" fontWeight="bold">$</text>
          <path d="M28 18 L32 14 L32 22 L28 18 Z" fill="#d32f2f" stroke="#333" strokeWidth="1"/>
        </svg>
      ),
      title: "How to Make an Offer on a House",
      description: "Find out how to make an offer on a house and what to include in your offer.",
      link: "Learn more"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="24" cy="24" rx="12" ry="8" fill="none" stroke="#333" strokeWidth="2"/>
          <circle cx="24" cy="24" r="4" fill="#d32f2f"/>
          <path d="M16 20 L12 16 M32 20 L36 16 M16 28 L12 32 M32 28 L36 32" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "What to Expect During a Home Inspection",
      description: "Have a professional home inspection to identify any issues with the property before closing.",
      link: "Learn more"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="16" y="20" width="16" height="12" fill="none" stroke="#333" strokeWidth="2"/>
          <polygon points="16,20 24,12 32,20" fill="#d32f2f" stroke="#333" strokeWidth="2"/>
          <rect x="18" y="24" width="12" height="8" fill="none" stroke="#333" strokeWidth="2"/>
          <line x1="20" y1="26" x2="28" y2="26" stroke="#333" strokeWidth="1"/>
          <line x1="20" y1="30" x2="28" y2="30" stroke="#333" strokeWidth="1"/>
        </svg>
      ),
      title: "What Happens During a Home Appraisal?",
      description: "A home appraisal is an important step to buying a home. Learn about the home appraisal process.",
      link: "Learn more"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="16" y="18" width="16" height="20" fill="none" stroke="#333" strokeWidth="2" rx="2"/>
          <rect x="18" y="20" width="12" height="16" fill="none" stroke="#333" strokeWidth="2" rx="1"/>
          <rect x="20" y="22" width="8" height="12" fill="none" stroke="#333" strokeWidth="2" rx="1"/>
          <text x="24" y="30" textAnchor="middle" fill="#333" fontSize="12" fontWeight="bold">$</text>
          <path d="M30 18 L32 16 L36 20 L34 22 Z" fill="#d32f2f"/>
          <path d="M32 16 L36 12 L38 14 L34 18 Z" fill="#d32f2f" opacity="0.8"/>
        </svg>
      ),
      title: "10 Steps to Closing on a Home",
      description: "From the inspection to the final paperwork, here are the steps to closing on a house.",
      link: "Learn more"
    }
  ]

  return (
    <div className="estate-agent-section">
      <div className="estate-agent-container">
        <div className="estate-agent-cards">
          {cards.map((card, index) => (
            <div key={index} className="estate-agent-card">
              <div className="estate-agent-icon">
                {card.icon}
              </div>
              <h3 className="estate-agent-title">{card.title}</h3>
              <p className="estate-agent-description">{card.description}</p>
              <a href="#" className="estate-agent-link">{card.link}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EstateAgent

