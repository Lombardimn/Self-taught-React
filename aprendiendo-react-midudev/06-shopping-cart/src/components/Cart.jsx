import { ClearCartIcon ,CartIcon } from './Icons'
import { useId } from 'react'
import { useCart } from '../hooks/useCart'

import '../styles/Cart.css'

// eslint-disable-next-line react/prop-types
function CartItem ({ thumbnail, title, price, quantity, addToCart }) {
    return (
        <li>
            <img 
                src={thumbnail}
                alt={title} 
            />
            <div>
                <strong>{title}</strong> - ${price}
            </div>

            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export function Cart() {
    const cartCheckBoxId = useId()
    const { cart, clearCart, addToCart } = useCart()

    return (
        <>
            <label htmlFor={cartCheckBoxId} className='cart-button'>
                <CartIcon />
            </label>
            <input id={cartCheckBoxId} type="checkbox" hidden/>

            <aside className='cart'>
                <ul>
                    {
                        // eslint-disable-next-line react/prop-types
                        cart.map(product => (
                            <CartItem 
                                key={product.id}
                                // eslint-disable-next-line no-undef
                                addToCart={() => addToCart(product)}
                                {...product} 
                            />))}
                </ul>

                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}