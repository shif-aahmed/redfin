import './Services.css'

function Services() {
  const services = [
    {
      icon: 'https://ssl.cdn-redfin.com/cop-assets/prod/hpwidget/RedfinAgentNew.png',
      title: 'Buy',
      description: "Redfin agents are among the most experienced in the industry and can help you win in today's market.",
      buttonText: 'Find an agent'
    },
    {
      icon: 'https://ssl.cdn-redfin.com/cop-assets/prod/hpwidget/HomeFinance.png',
      title: 'Mortgage',
      description: 'Rocket Mortgage delivers award-winning service with competitive rates, fast pre-approvals, and seamless closings.',
      buttonText: 'Get prequalified'
    },
    {
      icon: 'https://ssl.cdn-redfin.com/cop-assets/prod/hpwidget/SellNew.png',
      title: 'Sell',
      description: "We know how to price, market, and sell your home for top dollar. And we do it all for half the listing fee others often charge.",
      buttonText: 'Learn more'
    },
    {
      icon: 'https://ssl.cdn-redfin.com/cop-assets/prod/hpwidget/RentNew.png',
      title: 'Rent',
      description: "Whether you're searching for apartments, condos, or rental homes, we make it easy to find a place you'll love.",
      buttonText: 'Explore rentals'
    }
  ]

  return (
    <section className="services-section">
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon-wrapper">
              <img src={service.icon} alt={service.title} className="service-icon" />
            </div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
            <button className="service-button">{service.buttonText}</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services

