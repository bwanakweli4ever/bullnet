import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const windowpos = window.scrollY || window.pageYOffset
      const shouldShowSticky = windowpos > 100
      
      // Get elements
      const stickyHeader = document.querySelector('.sticky-header') as HTMLElement
      const mainHeader = document.querySelector('.main-header') as HTMLElement
      
      if (stickyHeader && mainHeader) {
        if (shouldShowSticky) {
          // Show sticky header
          stickyHeader.classList.add('fixed-header', 'animated', 'slideInDown')
          // Hide main header
          mainHeader.classList.add('sticky-active')
        } else {
          // Hide sticky header
          stickyHeader.classList.remove('fixed-header', 'animated', 'slideInDown')
          // Show main header
          mainHeader.classList.remove('sticky-active')
        }
      }
    }

    // Use requestAnimationFrame for smoother performance
    let ticking = false
    const optimizedScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', optimizedScroll, { passive: true })
    // Call once on mount to set initial state
    handleScroll()
    return () => window.removeEventListener('scroll', optimizedScroll)
  }, [])

  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/shop', label: 'Shop' },
    { path: '/contact', label: 'Contact' },
  ]

  const isCurrentPage = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <>
      <header className="header-style-four main-header">
        <div className="header-top">
          <div className="container">
            <div className="header-top-content">
              <ul className="social-links">
                <li><span>Follow Us: bul_Inet</span></li>
                <li>
                  <a href="https://www.instagram.com/bul_Inet" target="_blank" rel="noopener noreferrer" title="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/bul_Inet" target="_blank" rel="noopener noreferrer" title="Facebook">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="header-lower">
          <div className="main-box">
            <div className="logo-box">
              <Link to="/" className="logo">
                <img src="/images/bull-logo-d.png" alt="BullNet" title="BullNet" />
              </Link>
            </div>

            <div className="nav-outer">
              <nav className="nav main-menu">
                <ul className="navigation">
                  {navigationItems.map((item) => (
                    <li key={item.path} className={isCurrentPage(item.path) ? 'current' : ''}>
                      <Link to={item.path}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="outer-box">
              <Link to="/contact" className="header-btn">
                Get Quote
              </Link>
              <div className="mobile-nav-toggler" onClick={() => setIsMobileMenuOpen(true)}>
                <i className="fas fa-bars"></i>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div className="menu-backdrop" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'menu-open' : ''}`}>
        <nav className="menu-box">
          <div className="upper-box">
            <div className="nav-logo">
              <Link to="/">
                <img src="/images/bull logo.png" alt="BullNet" title="BullNet" />
              </Link>
            </div>
            <div className="close-btn" onClick={() => setIsMobileMenuOpen(false)}>
              <i className="fas fa-times"></i>
            </div>
          </div>

          <ul className="navigation clearfix">
            {navigationItems.map((item) => (
              <li key={item.path} className={isCurrentPage(item.path) ? 'current' : ''}>
                <Link to={item.path} onClick={() => setIsMobileMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="contact-list-one">
            <li>
              <div className="contact-info-box">
                <i className="fas fa-phone"></i>
                <span className="title">Call Now</span>
                <a href="tel:+250783611372">+250 783 611 372</a>
              </div>
            </li>
            <li>
              <div className="contact-info-box">
                <i className="fas fa-envelope"></i>
                <span className="title">Send Email</span>
                <a href="mailto:bullnetltd@gmail.com">bullnetltd@gmail.com</a>
              </div>
            </li>
            <li>
              <div className="contact-info-box">
                <i className="fas fa-clock"></i>
                <span className="title">Working Hours</span>
                Mon - Sat 8:00 - 6:30, Sunday - CLOSED
              </div>
            </li>
          </ul>

          <ul className="social-links">
            <li>
              <span>Follow Us: bul_Inet</span>
            </li>
            <li>
              <a href="https://www.instagram.com/bul_Inet" target="_blank" rel="noopener noreferrer" title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/bul_Inet" target="_blank" rel="noopener noreferrer" title="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Sticky Header - Always rendered, visibility controlled by CSS */}
      <div className="sticky-header">
        <div className="auto-container">
          <div className="inner-container">
            <div className="logo">
              <Link to="/">
                <img src="/images/bull logo.png" alt="BullNet" title="BullNet" />
              </Link>
            </div>
            <div className="nav-outer">
              <nav className="main-menu">
                <ul className="navigation clearfix">
                  {navigationItems.map((item) => (
                    <li key={item.path} className={isCurrentPage(item.path) ? 'current' : ''}>
                      <Link to={item.path}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="outer-box">
              <Link to="/contact" className="header-btn">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header

