import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ProductsCarousel.css'

interface Product {
  id: string
  name: string
  price: string
  image: string
  category: 'network' | 'cctv' | 'computer' | 'cables' | 'starlink'
}

const ProductsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

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

  const itemsPerSlide = 4
  const totalSlides = Math.ceil(products.length / itemsPerSlide)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= totalSlides - 1 ? 0 : prev + 1))
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? totalSlides - 1 : prev - 1))
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= totalSlides - 1 ? 0 : prev + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, totalSlides])

  const handleWhatsAppOrder = (productName: string, productPrice: string) => {
    const message = `Hello! I'm interested in ordering: ${productName} - ${productPrice}`
    const whatsappUrl = `https://wa.me/250783611372?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const getVisibleProducts = () => {
    const start = currentIndex * itemsPerSlide
    return products.slice(start, start + itemsPerSlide)
  }

  return (
    <section className="products-carousel-section">
      <div className="auto-container">
        <div className="sec-title-v4 text-center wow fadeInUp">
          <span className="sub-title">BULLNET SHOP</span>
          <h2>Featured Products</h2>
          <p>Discover our range of quality technology products</p>
        </div>

        <div className="products-carousel-wrapper">
          <button className="carousel-nav prev" onClick={prevSlide} aria-label="Previous products">
            <i className="fa fa-chevron-left"></i>
          </button>

          <div className="products-carousel-container">
            <div
              className="products-carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="carousel-slide">
                  <div className="products-grid">
                    {products
                      .slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide)
                      .map((product) => (
                        <div key={product.id} className="product-card">
                          <Link to={`/shop/${product.id}`} className="main-link">
                            <h2 className="title">{product.name}</h2>
                            <div className="image">
                              <img src={product.image} alt={product.name} />
                            </div>
                          </Link>
                          <div className="product-info">
                            <div className="price">
                              <span className="new-price">{product.price}</span>
                            </div>
                            <div className="rating">
                              <span className="sr-only">Rating: 5 out of 5 stars</span>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <button
                              className="whatsapp-order-btn"
                              onClick={(e) => {
                                e.preventDefault()
                                handleWhatsAppOrder(product.name, product.price)
                              }}
                            >
                              <i className="fab fa-whatsapp"></i> Order Now
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-nav next" onClick={nextSlide} aria-label="Next products">
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>

        <div className="carousel-indicators">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`indicator ${currentIndex === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-4">
          <Link to="/shop" className="view-all-btn">
            View All Products
            <i className="fa fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductsCarousel

