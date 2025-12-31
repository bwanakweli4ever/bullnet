import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import ServiceDetails from './pages/ServiceDetails/ServiceDetails'
import Contact from './pages/Contact/Contact'
import Shop from './pages/Shop/Shop'
import ShopProductDetails from './pages/ShopProductDetails/ShopProductDetails'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="page-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ShopProductDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

