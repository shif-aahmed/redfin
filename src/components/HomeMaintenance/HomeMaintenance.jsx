import './HomeMaintenance.css'

function HomeMaintenance() {
  const cards = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="24" cy="28" rx="10" ry="12" fill="none" stroke="#333" strokeWidth="2"/>
          <rect x="20" y="20" width="8" height="4" fill="none" stroke="#333" strokeWidth="2" rx="1"/>
          <circle cx="24" cy="22" r="1.5" fill="#d32f2f"/>
          <rect x="22" y="16" width="4" height="6" fill="none" stroke="#333" strokeWidth="2"/>
          <rect x="22" y="24" width="4" height="8" fill="#d32f2f"/>
          <text x="24" y="30" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">$</text>
        </svg>
      ),
      title: "How to Make a Household Budget",
      description: "A monthly household budget can help you stay on top of your mortgage and other costs.",
      link: "Learn more"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="18" width="8" height="20" fill="none" stroke="#333" strokeWidth="2" rx="1"/>
          <rect x="22" y="20" width="4" height="16" fill="#d32f2f"/>
          <circle cx="24" cy="16" r="3" fill="none" stroke="#333" strokeWidth="2"/>
          <path d="M24 13 L24 10 M21 16 L18 16 M27 16 L30 16" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Home Maintenance Checklist for Homeowners",
      description: "A home maintenance checklist makes it easy to keep your home in great shape.",
      link: "Learn more"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="16" y="18" width="16" height="20" fill="none" stroke="#333" strokeWidth="2" rx="2"/>
          <rect x="18" y="20" width="12" height="16" fill="none" stroke="#333" strokeWidth="2" rx="1"/>
          <rect x="20" y="22" width="8" height="12" fill="none" stroke="#333" strokeWidth="2" rx="1"/>
          <rect x="26" y="18" width="6" height="6" fill="#d32f2f" stroke="#333" strokeWidth="1"/>
          <text x="29" y="22" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">$</text>
        </svg>
      ),
      title: "How Do Property Taxes Work?",
      description: "Find out how property taxes work and which exemptions you might qualify for to reduce your tax bill.",
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
      title: "6 Tax Benefits of Owning a Home",
      description: "There are a few tax benefits of owning a home that can help reduce your tax burden.",
      link: "Learn more"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="18" y="22" width="12" height="10" fill="none" stroke="#333" strokeWidth="2"/>
          <polygon points="18,22 24,16 30,22" fill="#d32f2f" stroke="#333" strokeWidth="2"/>
          <text x="24" y="20" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">$</text>
        </svg>
      ),
      title: "How Much Equity Do I Have in My Home?",
      description: "Learn how much equity you have in your home and how to build more equity over time.",
      link: "Learn more"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="20" r="8" fill="none" stroke="#333" strokeWidth="2"/>
          <circle cx="24" cy="20" r="4" fill="none" stroke="#333" strokeWidth="1"/>
          <path d="M24 28 L24 36 M20 32 L28 32" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
          <path d="M30 20 L36 16" stroke="#d32f2f" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "More Real Estate Tips for Homeowners",
      description: "Learn tips and tricks for owning a home and making the most of your investment.",
      link: "Learn more"
    }
  ]

  return (
    <div className="home-maintenance-section">
      <div className="home-maintenance-container">
        <div className="home-maintenance-cards">
          {cards.map((card, index) => (
            <div key={index} className="home-maintenance-card">
              <div className="home-maintenance-icon">
                {card.icon}
              </div>
              <h3 className="home-maintenance-title">{card.title}</h3>
              <p className="home-maintenance-description">{card.description}</p>
              <a href="#" className="home-maintenance-link">{card.link}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeMaintenance





