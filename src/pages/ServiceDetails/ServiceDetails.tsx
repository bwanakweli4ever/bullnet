import { useParams } from 'react-router-dom'
import PageTitle from '../../components/PageTitle/PageTitle'
import './ServiceDetails.css'

const ServiceDetails = () => {
  const { id } = useParams()

  return (
    <>
      <PageTitle
        title="Service Details"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Services', path: '/services' },
          { label: 'Service Details' },
        ]}
      />

      {/* Add Service Details page content here */}
      <section className="service-details-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Service Details - {id}</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceDetails

