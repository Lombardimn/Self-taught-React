import './styles/App.css'
import { Movies } from './components/Movies'
import { useMovie } from './hooks/useMovie'
import { useEffect, useState } from 'react'

function useSearch () {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (query.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con un número.')
      return
    }

    if (query.length < 3 && query !== '') {
      setError('La busqueda debe tener mas de 3 caracteres.')
      return
    }

    if (query.match(/^\W+/)) {
      setError('La busqueda no puede iniciar con caracteres especiales.')
      return
    }

    setError(null)
  }, [query])

  return {query, setQuery, error}
}

function App() {
  const { movies: mappedMovies } = useMovie()
  const { query, setQuery, error } = useSearch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ query })
  }

  const handleChange = (event) => {
    const newQuery = event.target.value

    // validamos que no permita iniciar con un espacio
    if (newQuery.startsWith(' ')) return
    setQuery(event.target.value)
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscardor de Peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name='query'
            value={query}
            type="text"
            placeholder='Avengers, The Matrix, Star Wars ...'
            style={{
              border: '1px solid transparent',
              borderColor: error 
                ? 'red'
                : 'transparent'
            }}
          />
          <button
            type='submit'
          >
            Buscar
          </button>
        </form>
        {error && <p className='error'>{error}</p>}
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App
