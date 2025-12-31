import { useState } from 'react'
import PageTitle from '../../components/PageTitle/PageTitle'
import './Services.css'

const Services = () => {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <>
      <PageTitle
        title="Our Services"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Services' },
        ]}
      />

      {/* services-section-three */}
      <section className="services-section-three">
        <div className="auto-container">
          <div className="row">
            <div className="service-block-three col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-box"><i className="flaticon-wifi-router"></i></div>
                <h4 className="title">LAN Setup &amp; Network Solutions</h4>
                <p>Structured cabling (Cat6/Cat6A/Fiber), LAN/WAN design, Wi‑Fi planning, routing, switching and firewall configuration.</p>
              </div>
              <div className="inner-box">
                <div className="icon-box"><i className="flaticon-router"></i></div>
                <h4 className="title">CCTV Installation &amp; Surveillance</h4>
                <p>IP &amp; analog CCTV, NVR/DVR setup, access control, biometrics, cloud or local storage and AI-based analytics.</p>
              </div>
            </div>
            <div className="service-block-three col-lg-6 col-md-6 col-sm-12">
              <div className="image-box wow zoomIn">
                <figure className="image">
                  <a href="#"><img src="/images/resource/service4-3.png" alt="" /></a>
                </figure>
                <a href="#" className="read-more">View Service Details</a>
              </div>
            </div>
            <div className="service-block-three col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-box"><i className="flaticon-internet"></i></div>
                <h4 className="title">Internet Provider – Retailer</h4>
                <p>Home and business broadband provisioning, corporate links, last‑mile distribution and dedicated support.</p>
              </div>
              <div className="inner-box">
                <div className="icon-box"><i className="flaticon-speedometer"></i></div>
                <h4 className="title">Starlink &amp; Remote Connectivity</h4>
                <p>Starlink setup, aggregation, failover with Fiber/LTE and remote area connectivity for branches and sites.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End services-section-three */}

      {/* SERVICES SECTION */}
      <section className="services-section-v2 news-section-three">
        <div className="container">
          <div className="sec-title-v4 mb-40 text-center wow fadeInUp">
            <img src="/images/resource/sec-img.png" alt="" />
            <span className="sub-title">BULLNET CORE CAPABILITIES</span>
            <h2>Services Available</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 tabs-column">
              <div className="inner-column wow fadeInLeft">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
                      onClick={() => setActiveTab('home')}
                      type="button"
                      role="tab"
                    >
                      <i className="flaticon-wireless-internet"></i>
                      <span>LAN &amp; Network</span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                      onClick={() => setActiveTab('profile')}
                      type="button"
                      role="tab"
                    >
                      <i className="flaticon-speedometer"></i>
                      <span>CCTV &amp; Security</span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
                      onClick={() => setActiveTab('contact')}
                      type="button"
                      role="tab"
                    >
                      <i className="flaticon-speedometer"></i>
                      <span>Internet &amp; ISP Advisory</span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === 'contact2' ? 'active' : ''}`}
                      onClick={() => setActiveTab('contact2')}
                      type="button"
                      role="tab"
                    >
                      <i className="flaticon-speedometer"></i>
                      <span>Starlink &amp; Remote</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9 content-column">
              <div className="tab-content wow fadeInRight" id="myTabContent">
                <div className={`tab-pane fade ${activeTab === 'home' ? 'show active' : ''}`} role="tabpanel">
                  <div className="row align-items-center">
                    <div className="col-lg-7 image-column">
                      <div className="image-box">
                        <figure className="image">
                          <img src="/images/resource/service-img.png" alt="" />
                        </figure>
                      </div>
                    </div>
                    <div className="col-lg-5 content-column">
                      <div className="inner-column">
                        <h4 className="title">LAN Setup &amp; Network Solutions</h4>
                        <p>We design and deploy robust LAN and Wi‑Fi networks with structured cabling, secure routing, VLANs and performance monitoring – tailored for homes, SMEs and multi-branch organizations.</p>
                        <ul>
                          <li>Structured cabling (Cat6/Cat6A/Fiber)</li>
                          <li>LAN/WAN and Wi‑Fi design &amp; deployment</li>
                          <li>Routing, switching &amp; firewall configuration</li>
                          <li>Network audits, diagrams &amp; staff training</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`tab-pane fade ${activeTab === 'profile' ? 'show active' : ''}`} role="tabpanel">
                  <div className="row align-items-center">
                    <div className="col-lg-7 image-column">
                      <div className="image-box">
                        <figure className="image">
                          <img src="/images/resource/service-img.png" alt="" />
                        </figure>
                      </div>
                    </div>
                    <div className="col-lg-5 content-column">
                      <div className="inner-column">
                        <h4 className="title">CCTV Installation &amp; Surveillance</h4>
                        <p>BullNet secures your spaces with indoor/outdoor cameras, NVR/DVR systems, access control and smart analytics that give you full visibility from anywhere.</p>
                        <ul>
                          <li>IP &amp; analog CCTV installation</li>
                          <li>Camera placement &amp; risk assessment</li>
                          <li>NVR/DVR and remote/mobile access</li>
                          <li>AI analytics &amp; maintenance contracts</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`tab-pane fade ${activeTab === 'contact' ? 'show active' : ''}`} role="tabpanel">
                  <div className="row align-items-center">
                    <div className="col-lg-7 image-column">
                      <div className="image-box">
                        <figure className="image">
                          <img src="/images/resource/service-img.png" alt="" />
                        </figure>
                      </div>
                    </div>
                    <div className="col-lg-5 content-column">
                      <div className="inner-column">
                        <h4 className="title">Internet Provider – Retailer &amp; Consultancy</h4>
                        <p>We assess your connectivity needs, compare ISPs, design redundant links and help you optimize cost, performance and uptime.</p>
                        <ul>
                          <li>Home &amp; business broadband provisioning</li>
                          <li>Corporate &amp; dedicated internet links</li>
                          <li>Multi‑ISP redundancy &amp; failover</li>
                          <li>Cost optimization &amp; SLA advisory</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`tab-pane fade ${activeTab === 'contact2' ? 'show active' : ''}`} role="tabpanel">
                  <div className="row align-items-center">
                    <div className="col-lg-7 image-column">
                      <div className="image-box">
                        <figure className="image">
                          <img src="/images/resource/service-img.png" alt="" />
                        </figure>
                      </div>
                    </div>
                    <div className="col-lg-5 content-column">
                      <div className="inner-column">
                        <h4 className="title">Starlink Internet Setup &amp; Aggregator</h4>
                        <p>Starlink-powered connectivity for remote branches, integrated with your existing network and centrally monitored by BullNet.</p>
                        <ul>
                          <li>Starlink site survey &amp; installation</li>
                          <li>Dish mounting, cabling &amp; LAN integration</li>
                          <li>Starlink + Fiber/LTE failover designs</li>
                          <li>Aggregation, monitoring &amp; billing support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SERVICES SECTION END */}
    </>
  )
}

export default Services

