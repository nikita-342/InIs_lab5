import { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './QuantitySelector.module.css'

function QuantitySelector({ initialValue = 1, min = 1, max = 99, onChange }) {
  const [quantity, setQuantity] = useState(initialValue)

  const updateQuantity = (nextValue) => {
    setQuantity(nextValue)
    onChange?.(nextValue)
  }

  const decrease = () => {
    if (quantity <= min) return
    updateQuantity(quantity - 1)
  }

  const increase = () => {
    if (quantity >= max) return
    updateQuantity(quantity + 1)
  }

  return (
    <div className={styles.selector} aria-label="Количество товара">
      <button
        className={styles.control}
        onClick={decrease}
        disabled={quantity <= min}
        type="button"
        aria-label="Уменьшить количество"
      >
        −
      </button>

      <span className={styles.value}>{quantity}</span>

      <button
        className={styles.control}
        onClick={increase}
        disabled={quantity >= max}
        type="button"
        aria-label="Увеличить количество"
      >
        +
      </button>
    </div>
  )
}

QuantitySelector.propTypes = {
  initialValue: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func
}

export default QuantitySelector
