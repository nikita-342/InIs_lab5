import PropTypes from 'prop-types'
import styles from './Button.module.css'

function Button({ children, variant = 'primary', onClick, type = 'button' }) {
  const className = [
    styles.button,
    variant === 'secondary' || variant === 'disabled' ? styles.secondary : ''
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
      disabled={variant === 'disabled'}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'disabled']),
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
}

export default Button
