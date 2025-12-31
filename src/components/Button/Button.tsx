import { Link } from 'react-router-dom'
import './Button.css'

interface ButtonProps {
  children: React.ReactNode
  to?: string
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary'
}

const Button = ({ children, to, href, onClick, className = '', type, variant = 'primary' }: ButtonProps) => {
  const baseClass = `theme-btn ${variant === 'primary' ? 'btn-style-one' : ''} ${className}`

  if (to) {
    return (
      <Link to={to} className={baseClass}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={baseClass} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <button type={type || 'button'} className={baseClass} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button

