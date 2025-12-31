import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import PageTitle from '../../components/PageTitle/PageTitle'
import './ShopProductDetails.css'

interface ProductDetails {
  id: string
  name: string
  price: string
  image: string
  description: string
  features: string[]
  bestFor: string[]
}

const ShopProductDetails = () => {
  const { id } = useParams()

  const products: ProductDetails[] = [
    {
      id: 'usb-hub-11in1',
      name: 'Type-C to HDTV 11-in-1 Hub',
      price: '25,000 RWF',
      image: '/images/products/usb-hub.jpg',
      description: 'A multi-functional USB-C adapter that expands one Type-C port into multiple connections for data, display, and power.',
      features: [
        'LAN Port (1000Mbps): Stable wired internet connection',
        'HDTV (4K): Connects to 4K displays or TVs',
        'USB 3.0 Ports (x4): High-speed data transfer',
        'VGA Port: For projectors and older monitors',
        'SD/TF Card Reader: Supports memory cards',
        'Audio Jack: Connects earphones or speakers',
        'Type-C PD Charging: Charges your device while in use',
      ],
      bestFor: [
        'Laptops, tablets, and phones with USB-C',
        'Office, presentations, and multimedia setup',
      ],
    },
    {
      id: 'huawei-b315',
      name: 'Huawei B315 CPE LTE 4G Wireless Router',
      price: '75,000 RWF',
      image: '/images/products/wireless-router-black.webp',
      description: 'LTE/4G Huawei B315 Wireless Router. Ethernet connections are no longer a bottleneck for the Huawei B315 LTE 4G Wireless Router. The Gigabit Ethernet connector of the HUAWEI 4G Router B315 allows for the maximum LTE CAT4 150 Mbps speed delivery. The improved Wi-Fi of the HUAWEI 4G Router B315 increases coverage and gets rid of dead spots. Up to 32 devices can access it wirelessly. Using prepaid 4G SIM cards, you can connect to the HUAWEI 4G Router B315. Additionally, it has a USB 2.0 port for printers, flash drives, HDDs, and network storage devices. A strong and reliable connection is produced by the Huawei B315 4G/LTE portable wireless router. You can use any SIM card you want to use because it is unlocked. The B315 LTE 4G Wireless Router offers a 150 Mbps fast download speed.',
      features: [
        'Download Speed: 150mbps, Upload Speed: 50mbps',
        'Connects up to 32 Wi-Fi enabled devices simultaneously',
        'Unlocked: Can use any SIM card from any network provider',
        'Powerful 250-meter Wi-Fi coverage - eliminates dead spots',
        'Gigabit Ethernet connector for maximum LTE CAT4 150 Mbps speed delivery',
        'USB 2.0 port for printers, flash drives, HDDs, and network storage devices',
        'Secure connection with fast speeds',
        'Can connect to smartphones, tablets, gaming consoles, laptops and many more devices',
      ],
      bestFor: [
        'Small businesses requiring reliable internet connectivity',
        'Travellers needing portable internet access',
        'General home use with multiple devices',
        'Offices and locations with limited wired internet options',
        'Eliminating Wi-Fi dead spots with powerful coverage',
      ],
    },
    {
      id: 'hp-m10-mouse',
      name: 'HP M10 Wired Mouse',
      price: '3,500 RWF',
      image: '/images/products/mouse.png',
      description: 'Smooth Connectivity. The HP M10 Wired Mouse offers reliable performance with a precise optical sensor and ergonomic design for comfortable daily use.',
      features: [
        'Precise optical sensor with 1,000 DPI that lets you work on most surfaces',
        'Ergonomic ambidextrous design that fits perfectly in your palm',
        'Product Dimensions (L x W x H): 11.5 x 6.5 x 4 cm',
        'Weight: 100 g',
        'Wired connectivity for reliable, lag-free performance',
        'Plug-and-play USB connection - no drivers required',
      ],
      bestFor: [
        'Office work and daily computing tasks',
        'Gaming and multimedia activities',
        'Left-handed and right-handed users (ambidextrous design)',
        'Users who prefer wired connectivity for reliability',
        'Budget-conscious users seeking quality performance',
      ],
    },
    {
      id: 'g550-gaming-mouse',
      name: 'G550 Wireless 2.4G Bluetooth Gaming Mouse',
      price: '15,000 RWF',
      image: '/images/products/mecha_cool_mouse.jpg',
      description: 'Mecha Cool Mouse - Sound off, comfort, high appearance level. Create an aesthetic gaming experience with this wireless gaming mouse featuring RGB backlight, ergonomic design, and adjustable DPI settings.',
      features: [
        'Wireless 2.4G Bluetooth connectivity for freedom of movement',
        'USB connection option for versatile connectivity',
        'Silent buttons for quiet operation',
        'Three-level DPI adjustment for precision control',
        'RGB backlight for aesthetic appeal',
        'Ergonomic mech-style design for comfortable gaming',
        'Type-C charging port for modern convenience',
        'High appearance level with premium build quality',
      ],
      bestFor: [
        'Gaming enthusiasts seeking precision and style',
        'Office work requiring silent operation',
        'Users who prefer wireless connectivity',
        'Gamers who want customizable DPI settings',
        'Anyone looking for a high-appearance gaming mouse',
      ],
    },
    {
      id: 'xikkart-rgb-mouse',
      name: 'Wireless Mouse, Rechargeable RGB Gaming Mice, 6 Buttons Upto 2400 DPI Mouse',
      price: '12,000 RWF',
      image: '/images/products/xikkart_mouse.webp',
      description: 'XIKKART Wireless Rechargeable RGB Gaming Mouse with 6 buttons and up to 2400 DPI. Perfect for gaming, notebooks, PC, laptop, and computer use. Available in multicolor options.',
      features: [
        'Wireless rechargeable design for freedom of movement',
        '6 programmable buttons for enhanced functionality',
        'Up to 2400 DPI adjustable sensitivity',
        'RGB lighting for aesthetic appeal',
        'Product Dimensions: 12 x 8 x 4 cm',
        'Compatible with notebooks, PC, laptop, and computers',
        'Multicolor options available',
        'Manufacturer: XIKKART | Model: XIKK-RGB-75',
      ],
      bestFor: [
        'Gaming enthusiasts requiring high DPI precision',
        'Notebook and laptop users seeking wireless convenience',
        'PC gamers who need multiple programmable buttons',
        'Users who prefer rechargeable wireless mice',
        'Anyone looking for RGB gaming aesthetics',
      ],
    },
    {
      id: 'hp-65w-adapter',
      name: 'New Authentic HP 65W USB-C Power Adapter 1HE08AA',
      price: '25,000 RWF',
      image: '/images/products/usb-c-power-adpter.jpg',
      description: 'HP 65W USB C Power Adapter: The Perfect Companion for Your Laptop on the Go. Keep going, stop hauling your adapter back and forth between home and office. Get a second adapter for your Laptop or Tablet and keep one in the office and one for home or travel.',
      features: [
        '65W USB-C power output for fast charging',
        'Designed and tested to deliver optimum power support',
        'Charges the notebook\'s internal battery simultaneously when connected',
        'Built-in surge-protector helps keep your laptop safe from sudden power changes',
        'Quality cable specifically designed to alleviate stress from bending',
        'HP branded adapter - 100 percent compatible with original manufacturer\'s device',
        'Model: 1HE08AA',
        'Perfect for HP laptops and tablets with USB-C charging',
      ],
      bestFor: [
        'HP laptop and tablet users needing a second adapter',
        'Travelers who want a dedicated travel adapter',
        'Office workers who need an adapter at work and home',
        'Users seeking authentic HP replacement adapters',
        'Anyone needing reliable USB-C power delivery',
      ],
    },
    {
      id: 'dell-65w-adapter',
      name: 'Dell Genuine Original 65W USB Type-C Adapter',
      price: '25,000 RWF',
      image: '/images/products/65w-ctype.jpg',
      description: 'Genuine Dell AC Power Adapter 65-watt power supply. This power adapter uses the USB C (USB Type-C) connector. Compatible with Dell Latitude 5289, 5290, 7389, 7390, 7400 and other Dell laptops with USB-C charging.',
      features: [
        'Genuine Dell original power adapter',
        '65-watt power supply for fast charging',
        'USB Type-C (USB C) connector',
        'Compatible with Dell Latitude 5289, 5290, 7389, 7390, 7400',
        'Works with other Dell laptops supporting USB-C charging',
        'Reliable power delivery for optimal performance',
        'Authentic Dell quality and compatibility',
        'Compact and portable design',
      ],
      bestFor: [
        'Dell Latitude 5289, 5290, 7389, 7390, 7400 owners',
        'Users needing a replacement Dell power adapter',
        'Travelers requiring a portable USB-C charger',
        'Office workers needing a second adapter',
        'Anyone seeking genuine Dell accessories',
      ],
    },
    {
      id: 'lenovo-90w-adapter',
      name: 'Original Lenovo 90W 20V 4.74A AC Adapter',
      price: '8,000 RWF',
      image: '/images/products/6-1536x1536.jpg',
      description: 'Original Lenovo 90W AC Adapter with 5.5mm*2.5mm Regular Pin Size. Super fast adapter by LapGadgets. Genuine Lenovo original power adapter designed for optimal performance and reliability.',
      features: [
        'Original Lenovo brand adapter',
        '90W power output for fast charging',
        '20V voltage, 4.74A current',
        '5.5mm*2.5mm Regular Pin Size',
        'Super fast charging capability',
        'Product Dimensions: 24 × 16 × 6 cm',
        'Weight: 0.5 kg',
        'Compatible with Lenovo laptops requiring 90W adapter',
      ],
      bestFor: [
        'Lenovo laptop owners needing replacement adapter',
        'Users requiring 90W power supply',
        'Budget-conscious buyers seeking original Lenovo quality',
        'Anyone needing 5.5mm*2.5mm pin size adapter',
        'Users looking for super fast charging solution',
      ],
    },
    {
      id: 'hp-150w-charger',
      name: 'HP 150W Laptop Charger 19.5V – 7.89A',
      price: '8,000 RWF',
      image: '/images/products/hp-150w-7.4.png',
      description: 'New HP 150W Laptop Charger with 7.4mm x 5.0mm adapter. Perfect replacement charger for HP Pavilion, ZBook, EliteBook & Envy series. Features stable and fast charging with built-in safety protections.',
      features: [
        '150W (19.5V – 7.89A) for stable & fast charging',
        'Connector Size: 7.4mm x 5.0mm HP barrel pin',
        'Wide Compatibility: Supports HP Pavilion, ZBook, EliteBook & Envy series',
        'Safe & Reliable: Built-in protection against over-voltage, over-current & short circuit',
        'Premium Build: Durable cable and high-quality internal components',
        'Ideal Replacement: Perfect substitute for original HP 150W laptop charger',
        'Fast charging capability for high-performance laptops',
        'Compatible with HP laptops requiring 150W power supply',
      ],
      bestFor: [
        'HP Pavilion, ZBook, EliteBook & Envy series owners',
        'Users needing replacement HP 150W charger',
        'High-performance laptop users requiring fast charging',
        'Anyone seeking reliable HP charger replacement',
        'Users with HP laptops using 7.4mm x 5.0mm connector',
      ],
    },
  ]

  const product = products.find((p) => p.id === id)

  const handleWhatsAppOrder = () => {
    if (!product) return
    const message = `Hello BullNet! I'm interested in ordering:\n\n*${product.name}*\nPrice: ${product.price}\n\nPlease provide more information.`
    const whatsappUrl = `https://wa.me/250783611372?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  if (!product) {
    return (
      <>
        <PageTitle
          title="Product Not Found"
          breadcrumbs={[
            { label: 'Home', path: '/' },
            { label: 'Shop', path: '/shop' },
            { label: 'Product Details' },
          ]}
        />
        <section className="product-details-section">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2>Product not found</h2>
                <Link to="/shop" className="btn-primary">
                  Back to Shop
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageTitle
        title={product.name}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Shop', path: '/shop' },
          { label: product.name },
        ]}
      />

      <section className="product-details-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="product-image-box">
                <img src={product.image} alt={product.name} className="product-main-image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="product-info-box">
                <h1 className="product-title">{product.name}</h1>
                <div className="product-price">{product.price}</div>
                <div className="product-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <span className="rating-text">(5.0)</span>
                </div>
                <p className="product-description">{product.description}</p>
                <div className="product-actions">
                  <button className="btn-whatsapp" onClick={handleWhatsAppOrder}>
                    <i className="fab fa-whatsapp"></i> Order via WhatsApp
                  </button>
                  <Link to="/contact" className="btn-contact">
                    <i className="fa fa-envelope"></i> Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="product-details-tabs">
                <div className="details-content">
                  <h3 className="section-title">Main Features</h3>
                  <ul className="features-list">
                    {product.features.map((feature, index) => (
                      <li key={index}>
                        <i className="fa fa-check-circle"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="details-content mt-4">
                  <h3 className="section-title">Best For</h3>
                  <ul className="best-for-list">
                    {product.bestFor.map((item, index) => (
                      <li key={index}>
                        <i className="fa fa-check"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ShopProductDetails

