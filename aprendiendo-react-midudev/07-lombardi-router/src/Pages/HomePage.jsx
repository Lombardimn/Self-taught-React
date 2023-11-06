import { Link } from '../components/Link'
export default function HomePage () {
  return (
    <>
      <h1>Lombardi Router 📡</h1>
      <section>
        <h2>Home</h2>
        <div>
          <p>Esta es una página de ejemplo para crear un React Router desde cero</p>
          <Link to='/about'>Ir a sobre nosotros</Link>
          <Link to='/search/javascript'>Buscar</Link>
        </div>
      </section>
    </>
  )
}
