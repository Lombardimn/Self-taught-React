import { useEffect } from 'react'
import { Link } from '../components/Link'

export default function SearchedPage ({ routeParams }) {
  useEffect(() => {
    document.title = `Router - ${routeParams.query}`
  }, [])

  return (
    <>
      <h1>Lombardi Router 📡</h1>
      <p>Esta es la página de búsqueda</p>
      <p>Has buscado: {routeParams.query}</p>
      <Link to='/'>Ir a la home</Link>
    </>
  )
}
