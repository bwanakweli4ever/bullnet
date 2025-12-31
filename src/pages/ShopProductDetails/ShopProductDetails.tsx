import { useParams } from 'react-router-dom'
import PageTitle from '../../components/PageTitle/PageTitle'
import './ShopProductDetails.css'

const ShopProductDetails = () => {
  const { id } = useParams()

  return (
    <>
      <PageTitle
        title="Product Details"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Shop', path: '/shop' },
          { label: 'Product Details' },
        ]}
      />

      {/* Add Product Details page content here */}
      <section className="product-details-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Product Details - {id}</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ShopProductDetails

