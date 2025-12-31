import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageTitle from '../../components/PageTitle/PageTitle'
import './Shop.css'

interface Product {
  id: string
  name: string
  price: string
  image: string
  category: 'network' | 'cctv' | 'computer' | 'cables' | 'starlink'
}

const Shop = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const products: Product[] = [
    { id: 'usb-hub-11in1', name: 'Type-C to HDTV 11-in-1 Hub', price: '25,000 RWF', image: '/images/products/usb-hub.jpg', category: 'computer' },
    { id: 'huawei-b315', name: 'Huawei B315 CPE LTE 4G Wireless Router', price: '75,000 RWF', image: '/images/products/wireless-router-black.webp', category: 'network' },
    { id: 'hp-m10-mouse', name: 'HP M10 Wired Mouse', price: '3,500 RWF', image: '/images/products/mouse.png', category: 'computer' },
    { id: 'g550-gaming-mouse', name: 'G550 Wireless Gaming Mouse', price: '15,000 RWF', image: '/images/products/mecha_cool_mouse.jpg', category: 'computer' },
    { id: 'xikkart-rgb-mouse', name: 'XIKKART RGB Gaming Mouse', price: '12,000 RWF', image: '/images/products/xikkart_mouse.webp', category: 'computer' },
    { id: 'hp-65w-adapter', name: 'HP 65W USB-C Power Adapter', price: '25,000 RWF', image: '/images/products/usb-c-power-adpter.jpg', category: 'computer' },
    { id: 'dell-65w-adapter', name: 'Dell 65W USB Type-C Adapter', price: '25,000 RWF', image: '/images/products/65w-ctype.jpg', category: 'computer' },
    { id: 'lenovo-90w-adapter', name: 'Lenovo 90W AC Adapter', price: '8,000 RWF', image: '/images/products/6-1536x1536.jpg', category: 'computer' },
    { id: 'hp-150w-charger', name: 'HP 150W Laptop Charger', price: '8,000 RWF', image: '/images/products/hp-150w-7.4.png', category: 'computer' },
  ]

  const handleWhatsAppOrder = (productName: string, productPrice: string) => {
    const message = `Hello! I'm interested in ordering: ${productName} - ${productPrice}`
    const whatsappUrl = `https://wa.me/250783611372?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const filteredProducts =
    activeFilter === 'all'
      ? products
      : products.filter((product) => product.category === activeFilter)

  return (
    <>
      <PageTitle
        title="BullNet Shop"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Products' },
        ]}
      />

      {/* Featured Products */}
      <section className="featured-products">
        <span className="bg-shape"></span>
        <div className="auto-container">
          {/*MixitUp Galery*/}
          <div className="mixitup-gallery">
            {/*Filter*/}
            <div className="filters clearfix">
              <ul className="filter-tabs filter-btns clearfix">
                <li
                  className={`filter ${activeFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('all')}
                >
                  All
                </li>
                <li
                  className={`filter ${activeFilter === 'network' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('network')}
                >
                  Network Equipment
                </li>
                <li
                  className={`filter ${activeFilter === 'cctv' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('cctv')}
                >
                  CCTV &amp; Security
                </li>
                <li
                  className={`filter ${activeFilter === 'computer' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('computer')}
                >
                  Computer Accessories
                </li>
                <li
                  className={`filter ${activeFilter === 'cables' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('cables')}
                >
                  Cables &amp; Peripherals
                </li>
                <li
                  className={`filter ${activeFilter === 'starlink' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('starlink')}
                >
                  Starlink Equipment
                </li>
              </ul>
            </div>

            <div className="filter-list row">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`product-block all mix ${product.category} col-lg-3 col-md-6 col-sm-12`}
                >
                  <div className="inner-box">
                    <div className="image">
                      <Link to={`/shop/${product.id}`}>
                        <img src={product.image} alt={product.name} />
                      </Link>
                    </div>
                    <div className="content">
                      <h4>
                        <Link to={`/shop/${product.id}`}>{product.name}</Link>
                      </h4>
                      <span className="price">{product.price}</span>
                      <span className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                    </div>
                    <div className="icon-box">
                      <Link to={`/shop/${product.id}`} className="ui-btn like-btn">
                        <i className="fa fa-heart"></i>
                      </Link>
                      <a
                        href="#"
                        className="ui-btn whatsapp-order-btn"
                        onClick={(e) => {
                          e.preventDefault()
                          handleWhatsAppOrder(product.name, product.price)
                        }}
                      >
                        <i className="fab fa-whatsapp"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* End Featured Products */}
    </>
  )
}

export default Shop

