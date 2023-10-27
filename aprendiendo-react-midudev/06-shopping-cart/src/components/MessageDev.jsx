import '../styles/MessageDev.css'
import { useFilters } from '../hooks/useFilters'
import { useCart } from '../hooks/useCart'
// eslint-disable-next-line react/prop-types
export function MessageDev () {
    const { filters } = useFilters()
    const { cart } =  useCart()

    return (
            <footer className='messagefooter'>
                <span>Filters: </span>
                {
                    JSON.stringify(filters, null, 2)
                }
                <br/>
                <span>Cart: </span>
                {
                    JSON.stringify(cart, null, 2)
                }
                <h4>Revisión de datos － <span>@Developers</span></h4>
            </footer>
    )
}