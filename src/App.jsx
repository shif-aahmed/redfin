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
import LandForSale from './Pages/LandForSale'
import OpenHouses from './Pages/OpenHouses'
import BuyWithRedfin from './Pages/BuyWithRedfin'
import RedfinPremier from './Pages/RedfinPremier'
import HomebuyingGuide from './Pages/HomebuyingGuide'
import FreeHomeBuyingClasses from './Pages/FreeHomeBuyingClasses'
import USHousingMarket from './Pages/USHousingMarket'
import './App.css'

function AppContent() {
  const location = useLocation()
  const isPropertyDetail = location.pathname.startsWith('/property/')
  const isBuyWithRedfinPage = location.pathname === '/buy-with-redfin'
  const isRedfinPremierPage = location.pathname === '/redfin-premier'
  const isHomebuyingGuidePage = location.pathname === '/homebuying-guide'
  const isFreeHomeBuyingClassesPage = location.pathname === '/free-home-buying-classes'
  const isUSHousingMarketPage = location.pathname === '/us-housing-market'

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/homes-for-sale" element={<HomesForSale />} />
        <Route path="/condos-for-sale" element={<CondosForSale />} />
        <Route path="/land-for-sale" element={<LandForSale />} />
        <Route path="/open-houses" element={<OpenHouses />} />
        <Route path="/buy-with-redfin" element={<BuyWithRedfin />} />
        <Route path="/redfin-premier" element={<RedfinPremier />} />
        <Route path="/homebuying-guide" element={<HomebuyingGuide />} />
        <Route path="/free-home-buying-classes" element={<FreeHomeBuyingClasses />} />
        <Route path="/us-housing-market" element={<USHousingMarket />} />
      </Routes>
      {!isBuyWithRedfinPage && !isRedfinPremierPage && !isHomebuyingGuidePage && !isFreeHomeBuyingClassesPage && !isUSHousingMarketPage && (
        <>
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
        </>
      )}
      {!isFreeHomeBuyingClassesPage && <Footer />}
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
