import { useFilters } from './hooks/useFilters'
import { CartProvider } from './context/cart'

import { Products } from './components/Products'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { MessageDev } from './components/MessageDev'

import { products as initialProducts } from './mocks/products.json'
import { IS_DEVELOPMENT } from './config'

import './styles/App.css'
import { Cart } from './components/Cart'

function App() {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts}/>
      <Footer />
      {IS_DEVELOPMENT && <MessageDev />}
    </CartProvider>
  )
}

export default App
