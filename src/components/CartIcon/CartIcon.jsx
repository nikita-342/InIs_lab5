import { useSelector } from 'react-redux'
import { selectCartCount } from '../../store/cartSlice'
import iconCart from '../../assets/cart.svg'

function CartIcon() {
  const count = useSelector(selectCartCount)

  return (
    <button type="button" className="cart-btn" aria-label="Корзина">
      <img src={iconCart} alt="" />
      {count > 0 && <span className="cart-badge">{count}</span>}
    </button>
  )
}

export default CartIcon
