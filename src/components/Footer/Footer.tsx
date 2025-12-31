import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription')
  }

  return (
    <section className="footer-v4">
      <div className="footer-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-column">
              <h4 className="title">
                Sign up for our <br />
                newsletter
              </h4>
            </div>
            <div className="col-lg-8 contact-info">
              <div className="inner-box">
                <p>Stay up to update with our latest news and products.</p>
                <form onSubmit={handleNewsletterSubmit}>
                  <input type="email" name="email" placeholder="Enter your email address..." required />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-0">
        <div className="widgets-sections">
          <div className="footer-title text-center wow fadeInUp">
            <img src="/images/bull logo.png" alt="BullNet" />
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="footer-widget">
                <h4 className="widget-title">
                  <i className="fas fa-map-marker-alt" style={{ marginRight: '10px', color: '#01eb00' }}></i>
                  Location
                </h4>
                <div className="text">
                  <p>
                    <i className="fas fa-building" style={{ marginRight: '8px', color: 'rgba(255, 255, 255, 0.6)' }}></i>
                    Nyarugenge YYUSSA Plaza
                    <br />
                    <span style={{ paddingLeft: '24px' }}>1st Floor</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="footer-widget">
                <h4 className="widget-title">
                  <i className="fas fa-phone-alt" style={{ marginRight: '10px', color: '#01eb00' }}></i>
                  Contact
                </h4>
                <div className="text">
                  <p>
                    <i className="fas fa-phone" style={{ marginRight: '8px', color: 'rgba(255, 255, 255, 0.6)' }}></i>
                    <a href="tel:+250783611372">+250 783 611 372</a>
                  </p>
                  <p>
                    <i className="fas fa-envelope" style={{ marginRight: '8px', color: 'rgba(255, 255, 255, 0.6)' }}></i>
                    <a href="mailto:bullnetltd@gmail.com">bullnetltd@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="footer-widget">
                <h4 className="widget-title">
                  <i className="fas fa-share-alt" style={{ marginRight: '10px', color: '#01eb00' }}></i>
                  Follow Us
                </h4>
                <div className="text">
                  <p style={{ marginBottom: '15px' }}>
                    <strong>bul_Inet</strong>
                  </p>
                  <ul className="social-links">
                    <li>
                      <a href="https://www.instagram.com/bul_Inet" target="_blank" rel="noopener noreferrer" title="Instagram">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/bul_Inet" target="_blank" rel="noopener noreferrer" title="Facebook">
                        <i className="fab fa-facebook-square"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 copyright-text text-center text-lg-start">
              <p>Copyright © 2024 BullNet. All rights reserved.</p>
            </div>
            <div className="col-md-4 social-column text-center">
              <ul className="social-links">
                <li>
                  <a href="https://www.instagram.com/bul_Inet" target="_blank" rel="noopener noreferrer" title="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/bul_Inet" target="_blank" rel="noopener noreferrer" title="Facebook">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 links-column text-center text-lg-end">
              <ul className="other-links">
                <li>
                  <Link to="/about" title="">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/services" title="">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" title="">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer

