import { Link } from 'react-router-dom'
import './PopularSearchesNearMe.css'

function PopularSearchesNearMe() {
  return (
    <section className="popular-searches-section">
      <div className="popular-searches-wrapper">
        <h2 className="popular-searches-title">Popular Searches Near Me</h2>
        <div className="popular-searches-links">
          <Link to="#" className="popular-searches-link">Condos for sale near me</Link>
          <Link to="#" className="popular-searches-link">Land for sale near me</Link>
          <Link to="#" className="popular-searches-link">Open Houses near me</Link>
        </div>
      </div>
    </section>
  )
}

export default PopularSearchesNearMe


