import { useId } from 'react'
import '../styles/Filters.css'
import { useFilters } from '../hooks/useFilters'

// eslint-disable-next-line react/prop-types
export function Filters () {
    const { filters, setFilters } = useFilters()

    const minPriceFilterid = useId()
    const categoryFilterid = useId()

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterid}>Price from:</label>
                <input 
                    type="range" 
                    id={minPriceFilterid}
                    min='0'
                    max='2000'
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterid}>Category</label>
                <select id={categoryFilterid} onChange={handleChangeCategory}>
                    <option value="all">All</option>
                    <option value="laptops">Laptops</option>
                    <option value="home-decoration">Home Decoration</option>
                    <option value="smartphones">Smartphones</option>
                    <option value="fragrances">Fragrances</option>
                    <option value="skincare">Skincare</option>
                    <option value="groceries">Groceries</option>
                </select>
            </div>
        </section>
    )
}