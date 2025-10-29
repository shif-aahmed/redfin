import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './Pages/Home'
import Feed from './Pages/Feed'
import PropertyDetail from './Pages/PropertyDetail'
import './App.css'

function AppContent() {
  const location = useLocation()
  const isPropertyDetail = location.pathname.startsWith('/property/')

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
      </Routes>
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
