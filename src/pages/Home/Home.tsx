import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO/SEO'
import IconBox from '../../components/IconBox/IconBox'
import HeroSlider from '../../components/HeroSlider/HeroSlider'
import ProductsCarousel from '../../components/ProductsCarousel/ProductsCarousel'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import './Home.css'

const Home = () => {
  const [activePlanTab, setActivePlanTab] = useState('lan')

  return (
    <>
      <SEO
        title="BullNet | Technology Solutions & Broadband Services in Rwanda"
        description="BullNet provides comprehensive technology solutions including LAN setup, network solutions, CCTV installation, ISP consultancy, and Starlink connectivity services. Your trusted technology partner in Rwanda."
        keywords="BullNet, technology solutions Rwanda, broadband services, LAN setup, network solutions, CCTV installation, ISP consultancy, Starlink Rwanda, IT services Kigali"
        url="https://bullnet.rw/"
      />
      {/* Hero Slider */}
      <HeroSlider />

      {/* Hero Section - Keep for fallback or remove if not needed */}
      <section className="main-slider-v4 hero-section" style={{ display: 'none' }}>
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="hero-content">
                <span className="sub-title">BULLNET TECHNOLOGY SOLUTIONS</span>
                <h1 className="title">
                  Your Technology Solutions <br />
                  Partner
                </h1>
                <p className="description">
                  BullNet delivers end-to-end digital infrastructure, connectivity, and security solutions for homes, SMEs, enterprises, and institutions.
                </p>
                <div className="hero-buttons">
                  <Link to="/contact" className="theme-btn">
                    Get Started
                  </Link>
                  <Link to="/services" className="theme-btn btn-style-two">
                    Our Services
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="hero-image">
                <figure className="image">
                  <img 
                    src="/images/hero-man-laptop.png" 
                    alt="Professional working with technology solutions - BullNet Technology Solutions" 
                    className="hero-img"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section-three">
        <div className="auto-container">
          <div className="sec-title-v4 text-center wow fadeInUp">
            <img src="/images/resource/sec-img.png" alt="BullNet Services Section" />
            <span className="sub-title">WHAT WE DELIVER</span>
            <h2>Present Our Services</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service_box">
                <div className="service_bg_pattern"></div>
                <div className="service_icon">
                  <i className="flaticon-wifi-router"></i>
                </div>
                <h3>LAN &amp; Network Setup</h3>
                <p>Structured cabling, LAN/WAN design, Wi‑Fi planning and secure routing for offices, homes and campuses.</p>
                <ul className="service_features">
                  <li><i className="fa fa-check"></i> Structured Cabling</li>
                  <li><i className="fa fa-check"></i> Wi‑Fi Planning</li>
                  <li><i className="fa fa-check"></i> Secure Routing</li>
                </ul>
                <div className="service_number">01</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service_box">
                <div className="service_bg_pattern"></div>
                <div className="service_icon">
                  <i className="flaticon-router"></i>
                </div>
                <h3>CCTV &amp; Access Control</h3>
                <p>Complete surveillance systems with remote viewing, AI analytics and preventive maintenance options.</p>
                <ul className="service_features">
                  <li><i className="fa fa-check"></i> Remote Viewing</li>
                  <li><i className="fa fa-check"></i> AI Analytics</li>
                  <li><i className="fa fa-check"></i> Maintenance</li>
                </ul>
                <div className="service_number">02</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service_box">
                <div className="service_bg_pattern"></div>
                <div className="service_icon">
                  <i className="flaticon-internet"></i>
                </div>
                <h3>ISP Retail &amp; Consultancy</h3>
                <p>Advisory, design and provisioning of business and home internet with multi‑ISP failover and SLA-backed options.</p>
                <ul className="service_features">
                  <li><i className="fa fa-check"></i> Multi-ISP Failover</li>
                  <li><i className="fa fa-check"></i> SLA-Backed</li>
                  <li><i className="fa fa-check"></i> Business &amp; Home</li>
                </ul>
                <div className="service_number">03</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service_box">
                <div className="service_bg_pattern"></div>
                <div className="service_icon">
                  <i className="flaticon-speedometer"></i>
                </div>
                <h3>Starlink &amp; Remote Links</h3>
                <p>Starlink setup, aggregation and integration with your LAN to keep even the most remote locations online.</p>
                <ul className="service_features">
                  <li><i className="fa fa-check"></i> Starlink Setup</li>
                  <li><i className="fa fa-check"></i> LAN Integration</li>
                  <li><i className="fa fa-check"></i> Remote Locations</li>
                </ul>
                <div className="service_number">04</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choosing a BullNet Service Package Section */}
      <section className="plan-section">
        <div className="auto-container">
          <div className="sec-title-v4 text-center wow fadeInUp">
            <span className="sub-title">BULLNET TECHNOLOGY SOLUTIONS</span>
            <h2>Choosing a BullNet Service Package</h2>
          </div>
          <div className="tabs-sec">
            <ul className="nav nav-pills justify-content-center">
              <li className="nav-item">
                <button
                  className={`nav-link ${activePlanTab === 'lan' ? 'active' : ''}`}
                  onClick={() => setActivePlanTab('lan')}
                  type="button"
                >
                  <div className="icon-box">
                    <i className="flaticon-wifi-router"></i>
                  </div>
                  <span>LAN &amp; Network</span>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activePlanTab === 'cctv' ? 'active' : ''}`}
                  onClick={() => setActivePlanTab('cctv')}
                  type="button"
                >
                  <div className="icon-box">
                    <i className="flaticon-router"></i>
                  </div>
                  <span>CCTV &amp; Security</span>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activePlanTab === 'isp' ? 'active' : ''}`}
                  onClick={() => setActivePlanTab('isp')}
                  type="button"
                >
                  <div className="icon-box">
                    <i className="flaticon-internet"></i>
                  </div>
                  <span>Internet &amp; ISP</span>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activePlanTab === 'starlink' ? 'active' : ''}`}
                  onClick={() => setActivePlanTab('starlink')}
                  type="button"
                >
                  <div className="icon-box">
                    <i className="flaticon-speedometer"></i>
                  </div>
                  <span>Starlink &amp; Remote</span>
                </button>
              </li>
            </ul>
            <div className="tab-content">
              <div className={`tab-pane fade ${activePlanTab === 'lan' ? 'show active' : ''}`}>
                <div className="row align-items-center">
                  <div className="col-lg-7 image-column">
                    <div className="image-box">
                      <figure className="image">
                        <img src="/images/resource/service-img.png" alt="LAN & Network Solutions" />
                      </figure>
                    </div>
                  </div>
                  <div className="col-lg-5 content-column">
                    <div className="inner-column">
                      <h4 className="title">LAN Setup &amp; Network Solutions</h4>
                      <ul className="social-list">
                        <li>Structured cabling (Cat6/Cat6A/Fiber)</li>
                        <li>LAN/WAN and Wi‑Fi design &amp; deployment</li>
                        <li>Routing, switching &amp; firewall configuration</li>
                        <li>Network audits, diagrams &amp; staff training</li>
                      </ul>
                      <div className="Internat-area">
                        <div className="content-box">
                          <h4 className="price">Custom</h4>
                          <span>Pricing</span>
                        </div>
                        <div className="content-box">
                          <h4>Fast</h4>
                          <span>Deployment</span>
                        </div>
                        <div className="content-box">
                          <h4>24/7</h4>
                          <span>Support</span>
                        </div>
                      </div>
                      <div className="contact-info">
                        <Link to="/contact" className="read-more">Get Started</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`tab-pane fade ${activePlanTab === 'cctv' ? 'show active' : ''}`}>
                <div className="row align-items-center">
                  <div className="col-lg-7 image-column">
                    <div className="image-box">
                      <figure className="image">
                        <img src="/images/resource/service-img.png" alt="CCTV & Security" />
                      </figure>
                    </div>
                  </div>
                  <div className="col-lg-5 content-column">
                    <div className="inner-column">
                      <h4 className="title">CCTV Installation &amp; Surveillance</h4>
                      <ul className="social-list">
                        <li>IP &amp; analog CCTV installation</li>
                        <li>Camera placement &amp; risk assessment</li>
                        <li>NVR/DVR and remote/mobile access</li>
                        <li>AI analytics &amp; maintenance contracts</li>
                      </ul>
                      <div className="Internat-area">
                        <div className="content-box">
                          <h4 className="price">Custom</h4>
                          <span>Pricing</span>
                        </div>
                        <div className="content-box">
                          <h4>Professional</h4>
                          <span>Installation</span>
                        </div>
                        <div className="content-box">
                          <h4>24/7</h4>
                          <span>Monitoring</span>
                        </div>
                      </div>
                      <div className="contact-info">
                        <Link to="/contact" className="read-more">Get Started</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`tab-pane fade ${activePlanTab === 'isp' ? 'show active' : ''}`}>
                <div className="row align-items-center">
                  <div className="col-lg-7 image-column">
                    <div className="image-box">
                      <figure className="image">
                        <img src="/images/resource/service-img.png" alt="Internet & ISP" />
                      </figure>
                    </div>
                  </div>
                  <div className="col-lg-5 content-column">
                    <div className="inner-column">
                      <h4 className="title">Internet Provider – Retailer &amp; Consultancy</h4>
                      <ul className="social-list">
                        <li>Home &amp; business broadband provisioning</li>
                        <li>Corporate &amp; dedicated internet links</li>
                        <li>Multi‑ISP redundancy &amp; failover</li>
                        <li>Cost optimization &amp; SLA advisory</li>
                      </ul>
                      <div className="Internat-area">
                        <div className="content-box">
                          <h4 className="price">Flexible</h4>
                          <span>Plans</span>
                        </div>
                        <div className="content-box">
                          <h4>SLA</h4>
                          <span>Backed</span>
                        </div>
                        <div className="content-box">
                          <h4>Multi-ISP</h4>
                          <span>Failover</span>
                        </div>
                      </div>
                      <div className="contact-info">
                        <Link to="/contact" className="read-more">Get Started</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`tab-pane fade ${activePlanTab === 'starlink' ? 'show active' : ''}`}>
                <div className="row align-items-center">
                  <div className="col-lg-7 image-column">
                    <div className="image-box">
                      <figure className="image">
                        <img src="/images/resource/service-img.png" alt="Starlink & Remote" />
                      </figure>
                    </div>
                  </div>
                  <div className="col-lg-5 content-column">
                    <div className="inner-column">
                      <h4 className="title">Starlink Internet Setup &amp; Aggregator</h4>
                      <ul className="social-list">
                        <li>Starlink site survey &amp; installation</li>
                        <li>Dish mounting, cabling &amp; LAN integration</li>
                        <li>Starlink + Fiber/LTE failover designs</li>
                        <li>Aggregation, monitoring &amp; billing support</li>
                      </ul>
                      <div className="Internat-area">
                        <div className="content-box">
                          <h4 className="price">Remote</h4>
                          <span>Ready</span>
                        </div>
                        <div className="content-box">
                          <h4>Fast</h4>
                          <span>Setup</span>
                        </div>
                        <div className="content-box">
                          <h4>Central</h4>
                          <span>Monitoring</span>
                        </div>
                      </div>
                      <div className="contact-info">
                        <Link to="/contact" className="read-more">Get Started</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Products Carousel Section */}
      <ProductsCarousel />
    </>
  )
}

export default Home


