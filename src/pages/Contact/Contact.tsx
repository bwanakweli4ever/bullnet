import { useState } from 'react'
import PageTitle from '../../components/PageTitle/PageTitle'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: 'LAN Setup & Network Solutions',
    location: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      service: e.target.value,
    })
  }

  return (
    <>
      <PageTitle
        title="Contact Us"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Contact' },
        ]}
      />

      {/*Contact Details Start*/}
      <section className="testimonial-section-four">
        <div className="container py-0">
          <div className="row">
            <div className="col-xl-5 col-md-6 col-sm-12 d-none d-xl-block">
              <img className="contact-img-1 wow fadeInUp" src="/images/resource/contact-img-1.png" alt="" />
            </div>
            <div className="form-column col-xl-7">
              <div className="inner-column ms-0 wow fadeInUp mt-0">
                <div className="sec-title-v4">
                  <span className="sub-title">Talk to BullNet</span>
                  <h2 className="title">Let's Build Your Next Solution</h2>
                  <p>Share a few details about your project and our team will recommend the right mix of connectivity, security and IT services for you.</p>
                </div>
                <form className="row form-column" onSubmit={handleSubmit}>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="input">
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="input">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="input">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="input">
                      <input
                        type="text"
                        name="company"
                        placeholder="Company Name (optional)"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <h4 className="title">What BullNet services are you interested in?</h4>
                    <div className="cheak-box-sec">
                      <label className="containerr">
                        LAN Setup &amp; Network Solutions
                        <input
                          type="radio"
                          checked={formData.service === 'LAN Setup & Network Solutions'}
                          name="service"
                          value="LAN Setup & Network Solutions"
                          onChange={handleRadioChange}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <label className="containerr">
                        CCTV Installation &amp; Security
                        <input
                          type="radio"
                          checked={formData.service === 'CCTV Installation & Security'}
                          name="service"
                          value="CCTV Installation & Security"
                          onChange={handleRadioChange}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <label className="containerr">
                        Internet/ISP &amp; Consultancy
                        <input
                          type="radio"
                          checked={formData.service === 'Internet/ISP & Consultancy'}
                          name="service"
                          value="Internet/ISP & Consultancy"
                          onChange={handleRadioChange}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <label className="containerr">
                        Starlink &amp; Remote Connectivity
                        <input
                          type="radio"
                          checked={formData.service === 'Starlink & Remote Connectivity'}
                          name="service"
                          value="Starlink & Remote Connectivity"
                          onChange={handleRadioChange}
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="input">
                      <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="textarea-column">
                      <textarea
                        placeholder="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                      <input type="submit" value="Submit Now" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Contact Details End*/}

      {/* Contact Information Section - Get Connection Today */}
      <section className="contact-info-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <div className="sec-title-v4">
                <h2 className="title">Get Connection Today</h2>
                <span className="sub-title">Need to Get in Touch?</span>
                <p>If you need to get in touch, you can contact our friendly and helpful teams via phone, email or live chat.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="contact-info-box text-center">
                <div className="icon-box">
                  <i className="lnr-icon-map-marker"></i>
                </div>
                <h4 className="title">Location</h4>
                <p>
                  Nyarugenge YYUSSA Plaza<br />
                  1st Floor
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="contact-info-box text-center">
                <div className="icon-box">
                  <i className="lnr-icon-phone-handset"></i>
                </div>
                <h4 className="title">Contact</h4>
                <p>
                  <a href="tel:+250783611372">
                    +250 783 611 372
                  </a>
                </p>
                <p>
                  <a href="mailto:bullnetltd@gmail.com">
                    bullnetltd@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="contact-info-box text-center">
                <div className="icon-box">
                  <i className="fab fa-instagram"></i>
                </div>
                <h4 className="title">Follow Us</h4>
                <p>bul_Inet</p>
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
      </section>

      {/* Divider: Google Map */}
      <section>
        <div className="container-fluid p-0">
          <div className="row">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.843149788316!2d144.9537131159042!3d-37.81714274201087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sbn!2sbd!4v1583760510840!5m2!1sbn!2sbd"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* client-section two */}
      <section className="client-section-two pt-100">
        <div className="auto-container">
          <div className="sec-title-v4">
            <h2>Broadband Provider</h2>
          </div>
          <div className="content-box client">
            <div className="image-box wow fadeIn">
              <figure className="image">
                <img src="/images/resource/client2-1.png" alt="" />
              </figure>
            </div>
            <div className="image-box wow fadeIn" data-wow-delay="100ms">
              <figure className="image">
                <img src="/images/resource/client2-2.png" alt="" />
              </figure>
            </div>
            <div className="image-box wow fadeIn" data-wow-delay="200ms">
              <figure className="image">
                <img src="/images/resource/client2-3.png" alt="" />
              </figure>
            </div>
            <div className="image-box wow fadeIn" data-wow-delay="300ms">
              <figure className="image">
                <img src="/images/resource/client2-4.png" alt="" />
              </figure>
            </div>
            <div className="image-box wow fadeIn" data-wow-delay="400ms">
              <figure className="image">
                <img src="/images/resource/client2-5.png" alt="" />
              </figure>
            </div>
            <div className="image-box wow fadeIn" data-wow-delay="500ms">
              <figure className="image">
                <img src="/images/resource/client2-6.png" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact

