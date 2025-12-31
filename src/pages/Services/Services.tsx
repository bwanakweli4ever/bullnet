import { Link } from 'react-router-dom'
import PageTitle from '../../components/PageTitle/PageTitle'
import './Services.css'

const Services = () => {
  const services = [
    {
      id: 1,
      icon: 'flaticon-wifi-router',
      title: 'LAN Setup & Network Solutions',
      description: 'Structured cabling (Cat6/Cat6A/Fiber), LAN/WAN design, Wi‑Fi planning, routing, switching and firewall configuration.',
      features: [
        'Structured cabling (Cat6/Cat6A/Fiber)',
        'LAN/WAN and Wi‑Fi design & deployment',
        'Routing, switching & firewall configuration',
        'Network audits, diagrams & staff training'
      ],
      image: '/images/resource/service-img.png',
      link: '/services/1'
    },
    {
      id: 2,
      icon: 'flaticon-router',
      title: 'CCTV Installation & Surveillance',
      description: 'IP & analog CCTV, NVR/DVR setup, access control, biometrics, cloud or local storage and AI-based analytics.',
      features: [
        'IP & analog CCTV installation',
        'Camera placement & risk assessment',
        'NVR/DVR and remote/mobile access',
        'AI analytics & maintenance contracts'
      ],
      image: '/images/resource/service-img.png',
      link: '/services/2'
    },
    {
      id: 3,
      icon: 'flaticon-internet',
      title: 'Internet Provider – Retailer & Consultancy',
      description: 'Home and business broadband provisioning, corporate links, last‑mile distribution and dedicated support.',
      features: [
        'Home & business broadband provisioning',
        'Corporate & dedicated internet links',
        'Multi‑ISP redundancy & failover',
        'Cost optimization & SLA advisory'
      ],
      image: '/images/resource/service-img.png',
      link: '/services/3'
    },
    {
      id: 4,
      icon: 'flaticon-speedometer',
      title: 'Starlink & Remote Connectivity',
      description: 'Starlink setup, aggregation, failover with Fiber/LTE and remote area connectivity for branches and sites.',
      features: [
        'Starlink site survey & installation',
        'Dish mounting, cabling & LAN integration',
        'Starlink + Fiber/LTE failover designs',
        'Aggregation, monitoring & billing support'
      ],
      image: '/images/resource/service-img.png',
      link: '/services/4'
    }
  ]

  return (
    <>
      <PageTitle
        title="Our Services"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Services' },
        ]}
      />

      {/* Services Cards Section */}
      <section className="services-cards-section">
        <div className="auto-container">
          <div className="sec-title-v4 text-center wow fadeInUp">
            <img src="/images/resource/sec-img.png" alt="" />
            <span className="sub-title">BULLNET CORE CAPABILITIES</span>
            <h2>Our Services</h2>
            <p className="section-description">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-card__inner">
                  <div className="service-card__icon">
                    <div className="icon-box">
                      <i className={service.icon}></i>
                    </div>
                  </div>
                  
                  <div className="service-card__content">
                    <h3 className="service-card__title">{service.title}</h3>
                    <p className="service-card__description">{service.description}</p>
                    
                    <ul className="service-card__features">
                      {service.features.map((feature, index) => (
                        <li key={index}>
                          <i className="fas fa-check-circle"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-card__footer">
                    <Link to={service.link} className="service-card__btn">
                      Learn More
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>

                  <div className="service-card__overlay"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
