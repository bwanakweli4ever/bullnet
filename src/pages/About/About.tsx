import { Link } from 'react-router-dom'
import PageTitle from '../../components/PageTitle/PageTitle'
import './About.css'

const About = () => {
  return (
    <>
      <PageTitle
        title="About Us"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About' },
        ]}
      />

      {/* about section */}
      <section className="about-section-four">
        <div className="auto-container">
          <div className="sec-title-v4 text-center">
            <div className="icon-box wow fadeInUp"><i className="flaticon-wifi-1"></i></div>
            <h2 className="wow fadeInUp" data-wow-delay="100ms">BullNet Website Development &amp; Technology Solutions</h2>
            <p className="wow fadeInUp" data-wow-delay="200ms">We design, deploy and manage secure connectivity, security and IT infrastructure for homes, SMEs, enterprises and institutions.</p>
          </div>
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                <span className="sub-title">WHO WE ARE</span>
                <h2 className="title">Your End-to-End <br />Technology Partner.</h2>
                <p className="text">BullNet brings together networking, security, internet and hardware expertise to build reliable digital foundations for your business. From structured cabling and LAN design to CCTV, Starlink and ISP consultancy, we deliver solutions that are secure, scalable and performance-driven.</p>
                <div className="row">
                  <div className="about-block-four col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="flaticon-services"></i>
                        <h6 className="title">LAN Setup &amp; <br />Network Solutions</h6>
                      </div>
                    </div>
                  </div>
                  <div className="about-block-four col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="flaticon-globe-grid"></i>
                        <h6 className="title">Internet Service <br />Consultancy</h6>
                      </div>
                    </div>
                  </div>
                  <div className="about-block-four col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="flaticon-streaming"></i>
                        <h6 className="title">CCTV, Starlink &amp; <br />Security Systems</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image-box">
                  <figure className="image-1 wow fadeInRight"><img src="/images/resource/about4-7.png" alt="" /></figure>
                  <figure className="image-2 wow zoomIn"><img src="/images/resource/about4-8.png" alt="" /></figure>
                  <figure className="image-3 wow zoomIn" data-wow-delay="300ms"><img src="/images/resource/about4-9.png" alt="" /></figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End about section */}

      {/* deals section */}
      <section className="deals-section-v3">
        <div className="auto-container">
          <div className="sec-title-v4 text-center wow fadeInUp">
            <img src="/images/resource/sec-img.png" alt="" />
            <span className="sub-title">WHY CLIENTS CHOOSE BULLNET</span>
            <h2>Connectivity, Security &amp; IT Under One Roof</h2>
          </div>
          <div className="row">
            <div className="deals-block-v3 col-lg-6 col-md-12 col-sm-12">
              <div className="inner-box wow fadeInLeft">
                <h6 className="title">LAN &amp; Wi‑Fi Network <br />Design and Deployment</h6>
                <div className="social-list">
                  <div className="icon-box">
                    <div className="icon"><i className="flaticon-upload"></i></div>
                    <h6 className="title">Structured Cabling</h6>
                  </div>
                  <div className="icon-box">
                    <div className="icon"><i className="flaticon-globe-grid"></i></div>
                    <h6 className="title">Secure VLAN Design</h6>
                  </div>
                  <div className="icon-box">
                    <div className="icon"><i className="flaticon-tv-monitor"></i></div>
                    <h6 className="title">Remote Monitoring</h6>
                  </div>
                </div>
                <div className="btn-box">
                  <Link to="/contact" className="read-more">Request Network Assessment</Link>
                </div>
                <div className="image-box-v2">
                  <figure className="image"><img src="/images/resource/deals3-4.png" alt="" /></figure>
                </div>
              </div>
            </div>
            <div className="deals-block-v3 col-lg-6 col-md-12 col-sm-12">
              <div className="inner-box-v2 wow fadeInUp">
                <div className="content-box">
                  <h6 className="title">CCTV &amp; Surveillance <br />for Safer Spaces</h6>
                  <p>IP and analog cameras, NVR/DVR setup, access control and AI-based analytics for homes, offices and campuses.</p>
                  <Link to="/services" className="read-more"><i className="fa-solid fa-arrow-right"></i>Learn More</Link>
                </div>
                <div className="image-box-v3">
                  <figure className="image"><img src="/images/resource/deals3-5.png" alt="" /></figure>
                </div>
              </div>
              <div className="inner-box-v2 wow fadeInUp" data-wow-delay="200ms">
                <div className="content-box">
                  <h6 className="title">Starlink &amp; Remote <br />Connectivity</h6>
                  <p>Starlink installation, aggregation and failover designs that keep remote branches and sites online.</p>
                  <Link to="/services" className="read-more"><i className="fa-solid fa-arrow-right"></i>Learn More</Link>
                </div>
                <div className="image-box-v3">
                  <figure className="image"><img src="/images/resource/deals3-6.png" alt="" /></figure>
                </div>
              </div>
            </div>
            <div className="deals-block-v3 col-lg-6 col-md-12 col-sm-12">
              <div className="inner-box-v4 wow fadeInLeft">
                <h2 className="title">Award-Winning <br />Broadband You'll Love</h2>
                <p>let you know about all the awards we've won in 2023</p>
              </div>
            </div>
            <div className="deals-block-v3 col-lg-6 col-md-12 col-sm-12">
              <div className="inner-box-v4">
                <div className="image-box">
                  <figure className="image wow fadeIn"><img src="/images/resource/deals3-8.png" alt="" /></figure>
                  <figure className="image wow fadeIn" data-wow-delay="200ms"><img src="/images/resource/deals3-9.png" alt="" /></figure>
                  <figure className="image wow fadeIn" data-wow-delay="300ms"><img src="/images/resource/deals3-10.png" alt="" /></figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End deals section */}

      {/* services-section-three */}
      <section className="services-section-three">
        <div className="auto-container">
          <div className="sec-title-v4 text-center wow fadeInUp">
            <img src="/images/resource/sec-img.png" alt="" />
            <span className="sub-title">WHAT WE DELIVER</span>
            <h2>Explore BullNet Services</h2>
          </div>
          <div className="row">
            <div className="service-block-three col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-box"><i className="flaticon-wifi-router"></i></div>
                <h4 className="title">LAN &amp; Network Setup</h4>
                <p>Structured cabling, LAN/WAN design, Wi‑Fi planning and secure routing for offices, homes and campuses.</p>
              </div>
              <div className="inner-box">
                <div className="icon-box"><i className="flaticon-router"></i></div>
                <h4 className="title">CCTV &amp; Access Control</h4>
                <p>Complete surveillance systems with remote viewing, AI analytics and preventive maintenance options.</p>
              </div>
            </div>
            <div className="service-block-three col-lg-6 col-md-6 col-sm-12">
              <div className="image-box wow zoomIn">
                <figure className="image">
                  <Link to="/services">
                    <img src="/images/resource/service4-3.png" alt="" />
                  </Link>
                </figure>
                <Link to="/services" className="read-more">View All Services</Link>
              </div>
            </div>
            <div className="service-block-three col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-box"><i className="flaticon-internet"></i></div>
                <h4 className="title">ISP Retail &amp; Consultancy</h4>
                <p>Advisory, design and provisioning of business and home internet with multi‑ISP failover and SLA-backed options.</p>
              </div>
              <div className="inner-box">
                <div className="icon-box"><i className="flaticon-speedometer"></i></div>
                <h4 className="title">Starlink &amp; Remote Links</h4>
                <p>Starlink setup, aggregation and integration with your LAN to keep even the most remote locations online.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End services-section-three */}
    </>
  )
}

export default About

