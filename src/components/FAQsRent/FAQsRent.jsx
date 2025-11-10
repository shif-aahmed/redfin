import { useState } from 'react'
import './FAQsRent.css'

function FAQsRent() {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const faqs = [
    {
      question: "How much rent can I afford?",
      answer: "As a general rule, your monthly rent shouldn't exceed 30% of your gross monthly income. Use our calculator above to determine your recommended rent budget."
    },
    {
      question: "What is the 50/30/20 rule?",
      answer: "The 50/30/20 rule is a budgeting guideline that suggests allocating 50% of your income to needs (like rent), 30% to wants, and 20% to savings and debt repayment."
    },
    {
      question: "How much is too much rent?",
      answer: "Generally, spending more than 30% of your gross monthly income on rent is considered too much. However, this can vary based on your personal financial situation and goals."
    },
    {
      question: "How do you calculate your rent-to-income ratio?",
      answer: "Divide your monthly rent by your gross monthly income, then multiply by 100 to get a percentage. For example, if your rent is $1,500 and your income is $5,000, your ratio is 30%."
    }
  ]

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="faqs-rent-section">
      <div className="faqs-rent-container">
        <h2 className="faqs-rent-title">Frequently Asked Questions</h2>
        
        <div className="faqs-rent-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                className="faq-question-btn"
                onClick={() => toggleFAQ(index)}
                aria-expanded={expandedIndex === index}
              >
                <svg 
                  className={`faq-chevron ${expandedIndex === index ? 'expanded' : ''}`}
                  viewBox="0 0 12 12" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="faq-question-text">{faq.question}</span>
              </button>
              {expandedIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQsRent



