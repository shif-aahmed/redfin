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
import RenterDashboard from './Pages/RenterDashboard'
import RentalToolDashboard from './Pages/RentalToolDashboard'
import RentalMarketNews from './Pages/RentalMarketNews'
import RentalMarketTrends from './Pages/RentalMarketTrends'
import HowMuchRent from './Pages/HowMuchRent'
import ShouldIRentOrBuy from './Pages/ShouldIRentOrBuy'
import RenterGuide from './Pages/RenterGuide'
import ListMyHomeForRent from './Pages/ListMyHomeForRent'
import ShouldISellOrRent from './Pages/ShouldISellOrRent'
import WhatsMyHomeWorth from './Pages/WhatsMyHomeWorth'
import './App.css'

function AppContent() {
  const location = useLocation()
  const isPropertyDetail = location.pathname.startsWith('/property/')
  const isBuyWithRedfinPage = location.pathname === '/buy-with-redfin'
  const isRedfinPremierPage = location.pathname === '/redfin-premier'
  const isHomebuyingGuidePage = location.pathname === '/homebuying-guide'
  const isFreeHomeBuyingClassesPage = location.pathname === '/free-home-buying-classes'
  const isUSHousingMarketPage = location.pathname === '/us-housing-market'
  const isRenterDashboardPage = location.pathname === '/renter-dashboard'
  const isRentalMarketNewsPage = location.pathname === '/rental-market-news'
  const isRentalMarketTrendsPage = location.pathname === '/rental-market-trends'
  const isHowMuchRentPage = location.pathname === '/how-much-rent'
  const isShouldIRentOrBuyPage = location.pathname === '/should-i-rent-or-buy'
  const isRenterGuidePage = location.pathname === '/renter-guide'
  const isListMyHomeForRentPage = location.pathname === '/list-my-home-for-rent'
  const isRentalToolDashboardPage = location.pathname === '/rental-tool-dashboard'
  const isShouldISellOrRentPage = location.pathname === '/should-i-sell-or-rent'
  const isWhatsMyHomeWorthPage = location.pathname === '/whats-my-home-worth'

  return (
    <>
      {!isRenterDashboardPage && !isRentalToolDashboardPage && <Navbar />}
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
        <Route path="/renter-dashboard" element={<RenterDashboard />} />
        <Route path="/rental-tool-dashboard" element={<RentalToolDashboard />} />
        <Route path="/rental-market-news" element={<RentalMarketNews />} />
        <Route path="/rental-market-trends" element={<RentalMarketTrends />} />
        <Route path="/how-much-rent" element={<HowMuchRent />} />
        <Route path="/should-i-rent-or-buy" element={<ShouldIRentOrBuy />} />
        <Route path="/renter-guide" element={<RenterGuide />} />
        <Route path="/list-my-home-for-rent" element={<ListMyHomeForRent />} />
        <Route path="/should-i-sell-or-rent" element={<ShouldISellOrRent />} />
        <Route path="/whats-my-home-worth" element={<WhatsMyHomeWorth />} />
      </Routes>
      {!isBuyWithRedfinPage && !isRedfinPremierPage && !isHomebuyingGuidePage && !isFreeHomeBuyingClassesPage && !isUSHousingMarketPage && !isRenterDashboardPage && !isRentalToolDashboardPage && !isRentalMarketNewsPage && !isRentalMarketTrendsPage && !isHowMuchRentPage && !isShouldIRentOrBuyPage && !isRenterGuidePage && !isListMyHomeForRentPage && !isShouldISellOrRentPage && !isWhatsMyHomeWorthPage && (
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
      {!isFreeHomeBuyingClassesPage && !isRenterDashboardPage && !isRentalToolDashboardPage && !isRentalMarketTrendsPage && !isShouldISellOrRentPage && <Footer />}
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
