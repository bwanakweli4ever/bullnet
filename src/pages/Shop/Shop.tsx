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
    { id: '1', name: 'Wi-Fi Router', price: '$52.00', image: '/images/resource/products/2.jpg', category: 'network' },
    { id: '2', name: 'Network Switch', price: '$85.00', image: '/images/resource/products/1.jpg', category: 'network' },
    { id: '3', name: 'IP CCTV Camera', price: '$120.00', image: '/images/resource/products/3.jpg', category: 'cctv' },
    { id: '4', name: 'NVR System', price: '$280.00', image: '/images/resource/products/4.jpg', category: 'cctv' },
    { id: '5', name: 'Cat6 Network Cable', price: '$34.00', image: '/images/resource/products/5.jpg', category: 'cables' },
    { id: '6', name: 'Access Point', price: '$95.00', image: '/images/resource/products/6.jpg', category: 'network' },
    { id: '7', name: 'UPS Power Backup', price: '$150.00', image: '/images/resource/products/7.jpg', category: 'computer' },
    { id: '8', name: 'Starlink Kit', price: '$599.00', image: '/images/resource/products/8.jpg', category: 'starlink' },
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

