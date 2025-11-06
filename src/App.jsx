import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ChicagoHousesForSale from './components/ChicagoHousesForSale/ChicagoHousesForSale'
import SeattleHousesForSale from './components/SeattleHousesForSale/SeattleHousesForSale'
import LosAngelesHousesForSale from './components/LosAngelesHousesForSale/LosAngelesHousesForSale'
import SanDiegoHousesForSale from './components/SanDiegoHousesForSale/SanDiegoHousesForSale'
import PortlandHousesForSale from './components/PortlandHousesForSale/PortlandHousesForSale'
import WashingtonDCHousesForSale from './components/WashingtonDCHousesForSale/WashingtonDCHousesForSale'
import SanFranciscoHousesForSale from './components/SanFranciscoHousesForSale/SanFranciscoHousesForSale'
import SanJoseHousesForSale from './components/SanJoseHousesForSale/SanJoseHousesForSale'
import AustinHousesForSale from './components/AustinHousesForSale/AustinHousesForSale'
import LasVegasHousesForSale from './components/LasVegasHousesForSale/LasVegasHousesForSale'
import PopularSearchesNearMe from './components/PopularSearchesNearMe/PopularSearchesNearMe'
import Home from './Pages/Home'
import Feed from './Pages/Feed'
import PropertyDetail from './Pages/PropertyDetail'
import HomesForSale from './Pages/HomesForSale'
import CondosForSale from './Pages/CondosForSale'
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
        <Route path="/homes-for-sale" element={<HomesForSale />} />
        <Route path="/condos-for-sale" element={<CondosForSale />} />
      </Routes>
      <ChicagoHousesForSale />
      <SeattleHousesForSale />
      <LosAngelesHousesForSale />
      <SanDiegoHousesForSale />
      <PortlandHousesForSale />
      <WashingtonDCHousesForSale />
      <SanFranciscoHousesForSale />
      <SanJoseHousesForSale />
      <AustinHousesForSale />
      <LasVegasHousesForSale />
      <PopularSearchesNearMe />
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
