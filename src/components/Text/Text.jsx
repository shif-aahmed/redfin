import './Text.css'

function Text() {
  return (
    <div className="text-section">
      <div className="text-container">
        <div className="text-column">
          <h3 className="text-column-title">How does the rent affordability calculator work?</h3>
          <p className="text-paragraph">
            Enter your desired location and annual income to see the recommended monthly rent based on the <span className="dotted-underline">"30% rule."</span> For a more precise picture of how much rent you can afford, enter variables like your monthly expenses, savings, and debts. Adjust the slider between 20%-40% to see how different rent-to-income percentages change your budget and rental options.
          </p>
          <p className="text-disclaimer">
            <strong>Disclaimer:</strong> This calculator provides only a general estimate, and is for educational purposes only. The estimates are based on information provided by you, and should not be used as your sole source of information. The output from this tool is not an offer or solicitation, nor is it financial, or legal advice.
          </p>
        </div>

        <div className="text-column">
          <h3 className="text-column-title">What percentage of my income should go to rent?</h3>
          <p className="text-paragraph">
            As a rule of thumb, your monthly rent shouldn't exceed 30% of your gross monthly income. This leaves 70% of your gross monthly income to cover other expenses.
          </p>
          <p className="text-paragraph">
            For example, if you make $50,000 per year and follow the "30% rule," you'd have $15,000 annually - up to $1,250 per month - to spend on rent. This leaves $2,900 per month for all other expenses.
          </p>
          <p className="text-paragraph">
            The 30% rule is a standard guideline, but doesn't necessarily apply to everyone. The exact percentage you should spend on rent will vary depending on your income, location, cost of living, debt payments, and financial goals.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Text



