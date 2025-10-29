import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import Recommended from '../components/Recommended/Recommended'
import './PropertyDetail.css'

// Fix for default marker icon in react-leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

function PropertyDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('Overview')

  // Property data - in a real app, this would come from an API based on the ID
  const propertyData = {
    1: {
      images: [
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1628595351029-2dd854c3f8a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1631889993954-4803a94e7890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      price: '$1,599,000',
      estimatedPayment: '$9,947/mo',
      beds: '3',
      baths: '2.5',
      sqft: '1,689',
      address: '4027 Sunset Ter, Fremont, CA 94536',
      status: 'PENDING',
      coordinates: [37.5483, -121.9886]
    },
    2: {
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://plus.unsplash.com/premium_photo-1673014202349-38687dd47f94?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687'
      ],
      price: '$1,650,000',
      estimatedPayment: '$10,284/mo',
      beds: '4',
      baths: '2',
      sqft: '1,503',
      address: '3751 Ruskin Pl, Fremont, CA 94536',
      status: 'PENDING',
      coordinates: [37.5485, -121.9888]
    },
    3: {
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1628595351029-2dd854c3f8a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1631889993954-4803a94e7890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      price: '$950,000',
      estimatedPayment: '$5,913/mo',
      beds: '2',
      baths: '2',
      sqft: '960',
      address: '34926 Osprey Dr, Union City, CA 94587',
      status: 'PENDING',
      coordinates: [37.5950, -122.0189]
    }
  }

  // Get property data or use default - will use property 2 as fallback, then generic
  const propertyId = parseInt(id)
  const property = propertyData[propertyId] || propertyData[2] || {
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1628595351029-2dd854c3f8a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1631889993954-4803a94e7890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    price: '$1,000,000',
    estimatedPayment: '$6,224/mo',
    beds: '3',
    baths: '2',
    sqft: '1,500',
      address: '123 Main St, City, CA 12345',
      status: 'PENDING',
      coordinates: [37.5483, -121.9886]
    }
  const [showMore, setShowMore] = useState(false)
  const [showAllPropertyDetails, setShowAllPropertyDetails] = useState(false)
  const [activeSaleTab, setActiveSaleTab] = useState('Sale History')
  const [expandedInsights, setExpandedInsights] = useState({})

  const tabs = ['Overview', 'Neighborhood', 'Property details', 'Sale & tax history', 'Climate']
  const [activeAroundTab, setActiveAroundTab] = useState('Schools')

  const toggleInsight = (agentId) => {
    setExpandedInsights(prev => ({
      ...prev,
      [agentId]: !prev[agentId]
    }))
  }

  return (
    <div className="property-detail-page">
      {/* Top Navigation */}
      <div className="property-nav">
        <div className="property-nav-left">
          <Link to="/feed" className="back-to-feed">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Feed
          </Link>
          <div className="property-nav-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="property-nav-right">
          <button className="nav-icon-btn" aria-label="Favorite">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
          <button className="nav-icon-btn" aria-label="Hide">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </button>
          <button className="nav-icon-btn" aria-label="Share">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 16.08c-.36 0-.7.08-1.02.23l-7.13-4.12c.16-.32.26-.67.26-1.04 0-.37-.1-.72-.26-1.04l7.13-4.12c.32.15.66.23 1.02.23 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .37.1.72.26 1.04L7.85 9.04c-.32-.15-.66-.23-1.02-.23-1.66 0-3 1.34-3 3s1.34 3 3 3c.36 0 .7-.08 1.02-.23l7.13 4.12c-.16.32-.26.67-.26 1.04 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="property-gallery">
        <div className="main-image">
          <img src={property.images[0]} alt="Property" />
        </div>
        <div className="gallery-grid">
          {property.images.slice(1, 6).map((img, index) => (
            <div key={index} className="gallery-item">
              <img src={img} alt={`Property view ${index + 2}`} />
              {index === 4 && (
                <div className="photo-count-overlay">
                  <button className="photo-count-btn">45 photos</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="property-actions">
        <button className="action-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2v20M2 12h20"/>
          </svg>
          3D Tour
        </button>
        <button className="action-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <path d="M3 9h18M9 3v18"/>
          </svg>
          Floor Plans
        </button>
        <button className="action-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          Street View
        </button>
        <button className="action-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          Redesign
        </button>
      </div>

      {/* Main Content */}
      <div className="property-content-wrapper">
        <div className="property-left-column">
          {/* Overview Tab Content */}
          {activeTab === 'Overview' && (
            <>
          {/* Status and Price */}
          <div className="property-header">
            <div className="status-badge">
              <span className="status-dot"></span>
              <span>{property.status}</span>
            </div>
            <h1 className="property-price">{property.price}</h1>
            <p className="estimated-payment">
              Est. {property.estimatedPayment} <a href="#" className="prequal-link">Get prequalified</a>
            </p>
            <div className="property-specs">
              <span>{property.beds} bd</span>
              <span>•</span>
              <span>{property.baths} ba</span>
              <span>•</span>
              <span>{property.sqft} sq ft</span>
            </div>
            <div className="property-address-row">
              <p className="property-address">{property.address}</p>
              <div className="map-container">
                <MapContainer
                  center={property.coordinates || [37.5483, -121.9886]}
                  zoom={14}
                  style={{ height: '200px', width: '100%' }}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={property.coordinates || [37.5483, -121.9886]}>
                    <Popup>{property.address}</Popup>
                  </Marker>
                </MapContainer>
                <div className="map-copyright">Map data ©2025 OpenStreetMap</div>
              </div>
            </div>
          </div>

          {/* About this home */}
          <div className="about-section">
            <h2 className="section-title">About this home</h2>
            <p className="about-text">
              A charming East Facing single-story home offers the perfect combination of comfort, convenience, and community, ideally situated in the highly sought-after Brookvale neighborhood with walking distance to great schools, nearby shopping, restaurants, parks and easy access to major highways. Step inside and be greeted by an open floor plan with abundant natural light and vaulted ceilings that create a spacious and inviting atmosphere.{' '}
              {showMore && (
                <>
                  The beautifully updated kitchen features modern appliances, sleek countertops, and ample cabinet space. The master bedroom offers a peaceful retreat with an ensuite bathroom. The backyard is perfect for entertaining with a well-maintained lawn and patio area. This home has been meticulously maintained and is move-in ready.
                </>
              )}
              {!showMore && (
                <button className="show-more-btn" onClick={() => setShowMore(true)}>
                  Show more <span>↓</span>
                </button>
              )}
            </p>
          </div>

          {/* Property Facts */}
          <div className="property-facts">
            <div className="fact-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>8 days On Redfin</span>
            </div>
            <div className="fact-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              <span>Single-family Property Type</span>
            </div>
            <div className="fact-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
              <span>1976 Year Built</span>
            </div>
            <div className="fact-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <path d="M3 10h18M10 3v18"/>
              </svg>
              <span>4,346 sq ft Lot Size</span>
            </div>
            <div className="fact-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              </svg>
              <span>$1,098 Price/Sq.Ft.</span>
            </div>
            <div className="fact-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/>
                <polygon points="12 15 17 21 7 21 12 15"/>
              </svg>
              <span>2 car garage Parking</span>
            </div>
          </div>

          {/* Listing Details */}
          <div className="listing-details">
            <p className="listing-info">Listed by Jia Shi • DRE #02187513 • Coldwell Banker Realty</p>
            <p className="listing-info">Listing updated: Oct 23, 2025 at 09:20pm</p>
            <p className="listing-info">Redfin checked: a minute ago • Source: bridgeMLS, Bay East AOR, or Contra Costa AOR #41112431</p>
          </div>

          {/* Redfin agents who toured */}
          <div className="agents-toured-section">
            <h2 className="section-title">Redfin agents who toured</h2>
            <div className="agent-tour-card">
              <p className="tour-quote">"Southeast-facing home in move-in-ready condition, featuring upgraded kitchen and low-maintenance backyard."</p>
              <p className="tour-date">2 weeks ago</p>
              <div className="agent-profile-info">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Agent" className="agent-profile-photo" />
                <div className="agent-profile-details">
                  <p className="agent-profile-name">Gabriel Heredia</p>
                  <p className="agent-profile-role">Redfin agent</p>
                  <p className="agent-profile-deals">77 deals</p>
                </div>
              </div>
              <button className="talk-to-agent-btn">Talk to Gabriel</button>
            </div>
          </div>

          {/* Open houses */}
          <div className="open-houses-section">
            <h2 className="section-title">Open houses</h2>
            <p className="no-open-houses">No upcoming open houses.</p>
          </div>
          </>
          )}
          
          {/* Neighborhood Tab Content */}
          {activeTab === 'Neighborhood' && (
            <>
          {/* Around this home section */}
          <div className="around-home-section">
            <h2 className="section-title">Around this home</h2>
          
          <div className="walkability-scores">
            <div className="score-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <div className="score-details">
                <span className="score-value">77/100</span>
                <span className="score-label">Very Walkable</span>
              </div>
            </div>
            <div className="score-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="4" width="16" height="16" rx="2"/>
                <path d="M9 9h6M9 15h6M12 9v6"/>
              </svg>
              <div className="score-details">
                <span className="score-value">41/100</span>
                <span className="score-label">Some transit</span>
              </div>
            </div>
            <div className="score-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="5" cy="15" r="3"/>
                <circle cx="19" cy="15" r="3"/>
                <path d="M5 15L19 15"/>
                <path d="M12 9L8 15M12 9L16 15"/>
              </svg>
              <div className="score-details">
                <span className="score-value">56/100</span>
                <span className="score-label">Bikeable</span>
              </div>
            </div>
          </div>

          <div className="around-home-map">
            <MapContainer
              center={property.coordinates || [37.5485, -121.9888]}
              zoom={15}
              style={{ height: '400px', width: '100%' }}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={property.coordinates || [37.5485, -121.9888]}>
                <Popup>{property.address}</Popup>
              </Marker>
            </MapContainer>
            <button className="add-commute-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12h14"/>
              </svg>
              Add a commute
            </button>
          </div>

          <div className="around-home-tabs">
            <button className={`around-tab ${activeAroundTab === 'Schools' ? 'active' : ''}`} onClick={() => setActiveAroundTab('Schools')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              Schools
            </button>
            <button className={`around-tab ${activeAroundTab === 'Places' ? 'active' : ''}`} onClick={() => setActiveAroundTab('Places')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <path d="M3 6h18M16 10a4 4 0 0 1-8 0"/>
              </svg>
              Places
            </button>
            <button className={`around-tab ${activeAroundTab === 'Transit' ? 'active' : ''}`} onClick={() => setActiveAroundTab('Transit')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="4" width="16" height="16" rx="2"/>
                <path d="M4 12h16M12 4v16"/>
              </svg>
              Transit
            </button>
          </div>

          {activeAroundTab === 'Schools' && (
            <div className="schools-list">
              <div className="school-item">
                <div className="school-info">
                  <div className="school-header">
                    <span className="school-rating">8/10</span>
                    <span className="school-name">Brookvale Elementary School</span>
                  </div>
                  <p className="school-details">Public, Tk-5, Assigned, 0.3mi</p>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
              <div className="school-item">
                <div className="school-info">
                  <div className="school-header">
                    <span className="school-rating">8/10</span>
                    <span className="school-name">Thornton Middle School</span>
                  </div>
                  <p className="school-details">Public, 6-8, Assigned, 0.5mi</p>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
              <div className="school-item">
                <div className="school-info">
                  <div className="school-header">
                    <span className="school-rating">10/10</span>
                    <span className="school-name">American High School</span>
                  </div>
                  <p className="school-details">Public, 9-12, Assigned, 0.1mi</p>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          )}
          </div>
          </>
          )}

          {/* Property details Tab Content */}
          {activeTab === 'Property details' && (
            <>
          {/* Property details section */}
          <div className="property-details-section">
            <h2 className="section-title">Property details</h2>
            
            {/* Parking Category */}
            <div className="property-category">
              <div className="category-header">Parking</div>
              <div className="property-subsection">
                <h3 className="subsection-title">Parking Information</h3>
                <ul className="property-details-list">
                  <li>Garage Spaces: 2</li>
                  <li>Covered Spaces: 2</li>
                  <li>Parking Features: Attached</li>
                </ul>
              </div>
            </div>

            {/* Interior Category */}
            <div className="property-category">
              <div className="category-header">Interior</div>
              
              <div className="property-subsection">
                <h3 className="subsection-title">Virtual Tour</h3>
                <a href="#" className="virtual-tour-link">Virtual Tour (External Link)</a>
              </div>

              <div className="property-subsection">
                <h3 className="subsection-title">Bathroom Information</h3>
                <ul className="property-details-list">
                  <li># of Bathrooms Total: 2</li>
                  <li># of Bathrooms Full: 2</li>
                  <li>Other Bathrooms Included Features: Stall Shower</li>
                  <li>Primary Bathroom Included Features: Shower Over Tub, Stall Shower</li>
                </ul>
              </div>

              <div className="property-subsection">
                <h3 className="subsection-title">Interior Features</h3>
                <ul className="property-details-list">
                  <li>Interior Features: No Additional Rooms, Updated Kitchen</li>
                  <li>Appliances: Dishwasher, Gas Range, Microwave, Gas Water Heater</li>
                  <li>Laundry Features: 220 Volt Outlet, Gas Dryer Hookup, In Garage</li>
                  <li>Street Level Features: 4 Bedrooms, 2 Baths, Primary Bedrm Suite - 1, Laundry Facility, No Steps to Entry, Main Entry</li>
                  {showAllPropertyDetails && (
                    <>
                      <li className="detail-item-faded">Fireplaces Total: 1</li>
                      <li className="detail-item-faded">Has Fireplace</li>
                    </>
                  )}
                </ul>
              </div>
            </div>

            {!showAllPropertyDetails && (
              <button className="show-all-details-btn" onClick={() => setShowAllPropertyDetails(true)}>
                Show all property details <span>↓</span>
              </button>
            )}
          </div>
          </>
          )}

          {/* Sale & tax history Tab Content */}
          {activeTab === 'Sale & tax history' && (
            <>
          {/* Sale and tax history section */}
          <div className="sale-history-section">
            <h2 className="section-title">Sale and tax history for {property.address}</h2>
            
            <div className="sale-history-tabs">
              <button 
                className={`sale-tab ${activeSaleTab === 'Sale History' ? 'active' : ''}`}
                onClick={() => setActiveSaleTab('Sale History')}
              >
                Sale History
              </button>
              <button 
                className={`sale-tab ${activeSaleTab === 'Tax History' ? 'active' : ''}`}
                onClick={() => setActiveSaleTab('Tax History')}
              >
                Tax History
              </button>
            </div>

            {activeSaleTab === 'Sale History' && (
              <div className="history-timeline">
                <div className="history-year-group">
                  <div className="year-icon">•</div>
                  <div className="history-group-label">Today</div>
                  <div className="history-events">
                    <div className="history-event">
                      <div className="history-date-col">
                        <span className="history-date-value">Oct 23, 2025</span>
                        <span className="history-label">Date</span>
                      </div>
                      <div className="history-status-col">
                        <span className="history-status-value">Pending</span>
                        <span className="history-status-source">bridgeMLS, Bay East AOR, or Contra Costa AOR #41112431</span>
                      </div>
                      <div className="history-price-col">
                        <span className="history-price-value">—</span>
                        <span className="history-label">Price</span>
                      </div>
                    </div>
                    <div className="history-event">
                      <div className="history-date-col">
                        <span className="history-date-value">Oct 15, 2025</span>
                        <span className="history-label">Date</span>
                      </div>
                      <div className="history-status-col">
                        <span className="history-status-value">Listed (Active)</span>
                        <span className="history-status-source">bridgeMLS, Bay East AOR, or Contra Costa AOR #41112431</span>
                      </div>
                      <div className="history-price-col">
                        <span className="history-price-value">$1,650,000</span>
                        <span className="history-label">Price</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="history-year-group">
                  <div className="year-icon">•</div>
                  <div className="history-group-label">Oct, 2020</div>
                  <div className="history-events">
                    <div className="history-event">
                      <div className="history-date-col">
                        <span className="history-date-value">Oct 27, 2020</span>
                        <span className="history-label">Date</span>
                      </div>
                      <div className="history-status-col">
                        <span className="history-status-value">Sold (MLS) (Sold)</span>
                        <span className="history-status-source">bridgeMLS, Bay East AOR, or Contra Costa AOR #40920477</span>
                      </div>
                      <div className="history-price-col">
                        <span className="history-price-value">$1,215,000</span>
                        <span className="history-label">Price</span>
                      </div>
                    </div>
                    <div className="history-event">
                      <div className="history-date-col">
                        <span className="history-date-value">Sep 24, 2020</span>
                        <span className="history-label">Date</span>
                      </div>
                      <div className="history-status-col">
                        <span className="history-status-value">Pending</span>
                        <span className="history-status-source">bridgeMLS, Bay East AOR, or Contra Costa AOR #40920477</span>
                      </div>
                      <div className="history-price-col">
                        <span className="history-price-value">—</span>
                        <span className="history-label">Price</span>
                      </div>
                    </div>
                    <div className="history-event">
                      <div className="history-date-col">
                        <span className="history-date-value">Sep 11, 2020</span>
                        <span className="history-label">Date</span>
                      </div>
                      <div className="history-status-col">
                        <span className="history-status-value">Listed (New)</span>
                        <span className="history-status-source">bridgeMLS, Bay East AOR, or Contra Costa AOR #40920477</span>
                      </div>
                      <div className="history-price-col">
                        <span className="history-price-value">$1,130,850</span>
                        <span className="history-label">Price</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSaleTab === 'Tax History' && (
              <div className="tax-history-content">
                <p className="no-tax-info">Tax history information not available.</p>
              </div>
            )}

            <div className="listing-courtesy">
              <p>Listing provided courtesy of Bridge MLS</p>
            </div>
          </div>
          </>
          )}

          {/* Climate Tab Content */}
          {activeTab === 'Climate' && (
            <>
          {/* Climate risks section */}
          <div className="climate-risks-section">
            <h2 className="section-title">Climate risks</h2>
            <p className="climate-intro">Most homes have some risk of natural disasters, and may be impacted by climate change due to rising temperatures and sea levels.</p>
            
            <div className="climate-risks-list">
              <div className="climate-risk-item">
                <div className="risk-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 21h18M3 10h18M5 21V10M19 21V10"/>
                    <path d="M9 10V6a3 3 0 0 1 6 0v4"/>
                  </svg>
                </div>
                <div className="risk-info">
                  <div className="risk-header">
                    <span className="risk-name">Flood Factor</span>
                    <span className="risk-level moderate">- Moderate</span>
                  </div>
                  <p className="risk-description">22% chance of flooding in next 30 years</p>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="risk-chevron">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>

              <div className="climate-risk-item">
                <div className="risk-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-1.12-2.5-2.5-2.5S6 10.62 6 12a2.5 2.5 0 0 0 2.5 2.5z"/>
                    <path d="M10 12h2M12 10h2M14 12h2"/>
                    <path d="M12 3v1M18.36 3.64l-.7.7M21 12h-1M18.36 20.36l-.7-.7M12 21v-1M5.64 20.36l.7-.7M3 12h1M5.64 3.64l.7.7"/>
                  </svg>
                </div>
                <div className="risk-info">
                  <div className="risk-header">
                    <span className="risk-name">Fire Factor</span>
                    <span className="risk-level minimal">- Minimal</span>
                  </div>
                  <p className="risk-description">Unlikely to be in a wildfire in next 30 years</p>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="risk-chevron">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>

              <div className="climate-risk-item">
                <div className="risk-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5"/>
                    <path d="M12 1v6M12 17v6M23 12h-6M7 12H1"/>
                  </svg>
                </div>
                <div className="risk-info">
                  <div className="risk-header">
                    <span className="risk-name">Heat Factor</span>
                    <span className="risk-level moderate">- Moderate</span>
                  </div>
                  <p className="risk-description">7 days above 90° expected this year, 14 days in 30 years</p>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="risk-chevron">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>

              <div className="climate-risk-item">
                <div className="risk-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12h2M19 12h2M5 12a7 7 0 0 1 7-7 7 7 0 0 1 7 7M5 12a7 7 0 0 0 7 7 7 7 0 0 0 7-7"/>
                  </svg>
                </div>
                <div className="risk-info">
                  <div className="risk-header">
                    <span className="risk-name">Wind Factor</span>
                    <span className="risk-level minimal">- Minimal</span>
                  </div>
                  <p className="risk-description">Minimal risk of severe winds over next 30 years</p>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="risk-chevron">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>

              <div className="climate-risk-item">
                <div className="risk-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
                    <path d="M9 12a3 3 0 0 0 6 0"/>
                  </svg>
                </div>
                <div className="risk-info">
                  <div className="risk-header">
                    <span className="risk-name">Air Factor</span>
                    <span className="risk-level severe">- Severe</span>
                  </div>
                  <p className="risk-description">13 unhealthy days expected this year, 16 days in 30 years</p>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="risk-chevron">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

            <a href="#" className="view-full-report-link">View full report</a>
            <p className="climate-attribution">
              Provided by <span className="attribution-name">First Street</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="info-icon">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4M12 8h.01"/>
              </svg>
            </p>
          </div>
          </>
          )}

          {/* Overview Tab - Additional sections that should always show in Overview */}
          {activeTab === 'Overview' && (
            <>
          {/* Local insights from Redfin agents */}
          <div className="local-insights-section">
            <h2 className="section-title">Local insights from Redfin agents</h2>
            
            <div className="insights-grid">
              <div className="insight-card">
                <div className="insight-quote">
                  <span className="quote-mark">"</span>
                  <p className="insight-text">
                    {expandedInsights.johnny ? (
                      <>
                        Home prices in Fremont are holding firm but showing early signs of softening. The median sale price across all home types was about $1,434,000 in September, down 3.1% year-over-year. Homes sold, on average, in 22 days, up from around 14 days a year ago. Inventory levels have increased, giving buyers more options in this competitive market.
                      </>
                    ) : (
                      <>
                        Home prices in Fremont are holding firm but showing early signs of softening. The median sale price across all home types was about $1,434,000 in September, down 3.1% year-over-year. Homes sold, on average, in 22 days, up from around 14 days a...
                      </>
                    )}
                    {!expandedInsights.johnny && (
                      <button className="read-more-btn" onClick={() => toggleInsight('johnny')}>
                        Read more <span>↓</span>
                      </button>
                    )}
                  </p>
                </div>
                <p className="insight-meta">6 days ago • Fremont</p>
                <div className="insight-agent-info">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Agent" className="insight-agent-photo" />
                  <div className="insight-agent-details">
                    <p className="insight-agent-name">Johnny Singh</p>
                    <p className="insight-agent-role">Redfin Principal agent</p>
                    <p className="insight-agent-deals">133 deals</p>
                  </div>
                </div>
                <button className="talk-to-agent-insight-btn">Talk to Johnny</button>
                <div className="helpful-feedback">
                  <span>Was this helpful?</span>
                  <button className="feedback-btn positive" aria-label="Yes">+</button>
                  <button className="feedback-btn negative" aria-label="No">−</button>
                </div>
              </div>

              <div className="insight-card">
                <div className="insight-quote">
                  <span className="quote-mark">"</span>
                  <p className="insight-text">
                    {expandedInsights.gagan ? (
                      <>
                        Fremont's prime Bay area location near Silicon Valley attracts tech professionals and strong demands. Traditionally marked by limited inventory and quick sales, the recent increase now provides buyers more choices in market poised for continued growth. The area's excellent schools, proximity to major tech companies, and diverse communities make it a highly sought-after destination for families and professionals alike.
                      </>
                    ) : (
                      <>
                        Fremont's prime Bay area location near Silicon Valley attracts tech professionals and strong demands. Traditionally marked by limited inventory and quick sales, the recent increase now provides buyers more choices in market poised for continued...
                      </>
                    )}
                    {!expandedInsights.gagan && (
                      <button className="read-more-btn" onClick={() => toggleInsight('gagan')}>
                        Read more <span>↓</span>
                      </button>
                    )}
                  </p>
                </div>
                <p className="insight-meta">1 month ago • Fremont</p>
                <div className="insight-agent-info">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Agent" className="insight-agent-photo" />
                  <div className="insight-agent-details">
                    <p className="insight-agent-name">Gagan Singh</p>
                    <p className="insight-agent-role">Redfin Premier agent</p>
                    <p className="insight-agent-deals">593 deals</p>
                  </div>
                </div>
                <button className="talk-to-agent-insight-btn">Talk to Gagan</button>
                <div className="helpful-feedback">
                  <span>Was this helpful?</span>
                  <button className="feedback-btn positive" aria-label="Yes">+</button>
                  <button className="feedback-btn negative" aria-label="No">−</button>
                </div>
              </div>
            </div>
          </div>

          {/* Redfin Estimate section */}
          <div className="redfin-estimate-section">
            <h2 className="section-title">Redfin Estimate for {property.address}</h2>
            <div className="estimate-price">$1,836,712</div>
            <div className="price-comparison">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="comparison-icon">
                <path d="M12 5v14M5 12l7-7 7 7"/>
              </svg>
              <span className="price-difference">$187K</span>
              <span className="price-text">over list price of $1.65M</span>
            </div>

            <div className="comparable-homes">
              <h3 className="comparable-title">Nearby comparable homes</h3>
              <p className="comparable-description">The Redfin Estimate uses 6 recent nearby sales, priced between $1.5M to $1.9M.</p>
              
              <div className="comparable-carousel">
                <div className="comparable-card">
                  <div className="comparable-image-container">
                    <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Comparable home" className="comparable-image" />
                    <div className="sold-tag">SOLD AUG 14, 2025</div>
                  </div>
                  <div className="comparable-details">
                    <div className="comparable-price-row">
                      <span className="comparable-price">$1,633,333</span>
                      <span className="comparable-status">Last sold price</span>
                    </div>
                    <p className="comparable-specs">3 beds 2 baths 1,219 sq ft</p>
                    <p className="comparable-address">36590 Dawson St, Fremont, CA 94536</p>
                    <div className="comparable-badges">
                      <span className="comparable-badge">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 5v14M5 12h14"/>
                        </svg>
                        + $242/sq ft
                      </span>
                      <span className="comparable-badge">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5v14"/>
                        </svg>
                        ↑ larger lot
                      </span>
                    </div>
                  </div>
                </div>

                <div className="comparable-card">
                  <div className="comparable-image-container">
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Comparable home" className="comparable-image" />
                    <div className="sold-tag">SOLD OCT 16, 2025</div>
                  </div>
                  <div className="comparable-details">
                    <div className="comparable-price-row">
                      <span className="comparable-price">$1,690,000</span>
                      <span className="comparable-status">Last sold price</span>
                    </div>
                    <p className="comparable-specs">3 beds 2 baths 1,688 sq ft</p>
                    <p className="comparable-address">3100 Mackenzie Pl, Fremont, CA 94536</p>
                    <div className="comparable-badges">
                      <span className="comparable-badge">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14"/>
                        </svg>
                        - $97/sq ft
                      </span>
                      <span className="comparable-badge">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5v14"/>
                        </svg>
                        ↑ larger lot
                      </span>
                      <span className="comparable-badge">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 19l-7-7 7-7"/>
                        </svg>
                        ↓ 4 years older
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <button className="view-on-map-btn">View comparables on map</button>

              <div className="more-resources">
                <h3 className="resources-title">More resources</h3>
                <div className="resource-item">
                  <div className="resource-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                  </div>
                  <div className="resource-info">
                    <span className="resource-title">Rental earnings</span>
                    <span className="resource-description">Est. $3,864 per month, based on comparable rentals</span>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="resource-chevron">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
                <div className="resource-item">
                  <div className="resource-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                      <path d="M5 12h14M12 5v14"/>
                    </svg>
                  </div>
                  <div className="resource-info">
                    <span className="resource-title">Brookvale real estate market</span>
                    <span className="resource-description">Homes go pending in 9 days</span>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="resource-chevron">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          </>
          )}
        </div>

        {/* Right Column */}
        <div className="property-right-column">
          <div className="pending-box">
            <h3 className="pending-title">This home is pending</h3>
            <p className="pending-text">The seller has accepted an offer, and this property is now pending.</p>
          </div>

          <div className="agent-section">
            <h3 className="agent-title">Ask Redfin agent Ted a question</h3>
            <div className="agent-info">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Agent" className="agent-photo" />
              <div className="agent-details">
                <p className="agent-name">Ted Chen</p>
                <p className="agent-role">Fremont Redfin Agent</p>
                <p className="response-time">Ted Chen typically replies in about <strong>9 minutes</strong></p>
              </div>
            </div>
            <textarea 
              className="message-input" 
              placeholder="Write a message..."
              rows="4"
            />
            <div className="quick-actions">
              <button className="quick-action-btn">I'd like more home details.</button>
              <button className="quick-action-btn">I'm interested in making an offer.</button>
            </div>
            <button className="ask-button">Ask a question</button>
            <p className="phone-contact">Text or call <a href="tel:408-316-5571">408-316-5571</a></p>
          </div>
        </div>
      </div>

      {/* Recommended for you section - Full width below */}
      <Recommended variant="propertyDetail" />
    </div>
  )
}

export default PropertyDetail

