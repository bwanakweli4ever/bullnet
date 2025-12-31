import { Link } from 'react-router-dom'
import SEO from '../../components/SEO/SEO'
import PageTitle from '../../components/PageTitle/PageTitle'
import './About.css'

const About = () => {
  const values = [
    {
      icon: 'flaticon-services',
      title: 'Excellence',
      description: 'We deliver top-quality solutions that exceed expectations'
    },
    {
      icon: 'flaticon-globe-grid',
      title: 'Innovation',
      description: 'Staying ahead with cutting-edge technology and best practices'
    },
    {
      icon: 'flaticon-streaming',
      title: 'Reliability',
      description: 'Consistent, dependable service you can count on'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '200+', label: 'Happy Clients' },
    { number: '10+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ]

  return (
    <>
      <SEO
        title="About BullNet | Your Technology Solutions Partner"
        description="Learn about BullNet, your trusted technology solutions partner in Rwanda. We provide end-to-end digital infrastructure, connectivity, and security solutions for businesses and institutions."
        keywords="About BullNet, technology company Rwanda, IT solutions provider, network services, technology partner"
        url="https://bullnet.rw/about"
      />
      <PageTitle
        title="About Us"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About' },
        ]}
      />

      {/* Hero About Section */}
      <section className="about-hero-section">
        <div className="auto-container">
          <div className="about-hero-content">
            <div className="about-hero-text">
              <span className="sub-title">WHO WE ARE</span>
              <h1 className="main-title">Your End-to-End Technology Partner</h1>
              <p className="lead-text">
                BullNet brings together networking, security, internet and hardware expertise to build reliable digital foundations for your business. From structured cabling and LAN design to CCTV, Starlink and ISP consultancy, we deliver solutions that are secure, scalable and performance-driven.
              </p>
              <p className="description-text">
                We design, deploy and manage secure connectivity, security and IT infrastructure for homes, SMEs, enterprises and institutions. Our team combines years of experience with a passion for technology to provide solutions that work seamlessly and grow with your business.
              </p>
              <div className="about-cta">
                <Link to="/contact" className="btn-primary">Get in Touch</Link>
                <Link to="/services" className="btn-secondary">Our Services</Link>
              </div>
            </div>
            <div className="about-hero-image">
              <div className="image-wrapper">
                <img src="/images/about-us.webp" alt="BullNet Professional Team Member" className="main-image" />
                <div className="floating-card card-1">
                  <div className="card-icon">
                    <i className="flaticon-wifi-router"></i>
                  </div>
                  <div className="card-text">
                    <span className="card-number">500+</span>
                    <span className="card-label">Networks Deployed</span>
                  </div>
                </div>
                <div className="floating-card card-2">
                  <div className="card-icon">
                    <i className="flaticon-router"></i>
                  </div>
                  <div className="card-text">
                    <span className="card-number">200+</span>
                    <span className="card-label">Happy Clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats-section">
        <div className="auto-container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-section">
        <div className="auto-container">
          <div className="mission-content">
            <div className="mission-card">
              <div className="mission-icon">
                <i className="flaticon-globe-grid"></i>
              </div>
              <h3 className="mission-title">Our Mission</h3>
              <p className="mission-text">
                To empower businesses and institutions with reliable, secure, and scalable technology solutions that drive growth and innovation. We strive to be the trusted partner that transforms digital infrastructure challenges into opportunities.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">
                <i className="flaticon-streaming"></i>
              </div>
              <h3 className="mission-title">Our Vision</h3>
              <p className="mission-text">
                To become the leading technology solutions provider in the region, known for excellence, innovation, and unwavering commitment to client success. We envision a future where every business has access to world-class connectivity and security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="auto-container">
          <div className="sec-title-v4 text-center">
            <span className="sub-title">OUR CORE VALUES</span>
            <h2>What Drives Us</h2>
            <p className="section-description">
              The principles that guide everything we do
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <div className="icon-box">
                    <i className={value.icon}></i>
                  </div>
                </div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="auto-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Technology Infrastructure?</h2>
            <p className="cta-text">
              Let's discuss how BullNet can help your business thrive with reliable, secure, and scalable technology solutions.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary-large">Get Started Today</Link>
              <Link to="/services" className="btn-secondary-large">Explore Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
