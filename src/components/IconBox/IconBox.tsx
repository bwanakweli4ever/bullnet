import './IconBox.css'

interface IconBoxProps {
  icon: string
  title: string
  description?: string
  className?: string
}

const IconBox = ({ icon, title, description, className = '' }: IconBoxProps) => {
  return (
    <div className={`icon-box-wrapper ${className}`}>
      <div className="icon-box">
        <i className={icon}></i>
      </div>
      {title && <h4 className="title">{title}</h4>}
      {description && <p>{description}</p>}
    </div>
  )
}

export default IconBox

