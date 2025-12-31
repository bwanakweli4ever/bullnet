import { Link } from 'react-router-dom'
import './PageTitle.css'

interface PageTitleProps {
  title: string
  breadcrumbs: Array<{ label: string; path?: string }>
}

const PageTitle = ({ title, breadcrumbs }: PageTitleProps) => {
  return (
    <section className="page-title" style={{ backgroundImage: 'url(/images/background/page-title.jpg)' }}>
      <div className="auto-container">
        <div className="title-outer">
          <ul className="page-breadcrumb">
            {breadcrumbs.map((crumb, index) => (
              <li key={index}>
                {crumb.path ? (
                  <Link to={crumb.path}>{crumb.label}</Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </li>
            ))}
          </ul>
          <h1 className="title">{title}</h1>
        </div>
      </div>
    </section>
  )
}

export default PageTitle

