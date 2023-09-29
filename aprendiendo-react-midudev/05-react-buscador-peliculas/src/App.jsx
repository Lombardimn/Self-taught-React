import './styles/App.css'
import { Movies } from './components/Movies'
import { useMovie } from './hooks/useMovie'
import { useCallback, useEffect, useRef, useState } from 'react'
import debounce from 'just-debounce-it'

function useSearch () {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = query === ''
      return
    }

    if (query === '') {
      setError('No se puede buscar una pelicula vacia.')
      return
    }
    
    if (query.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con un número.')
      return
    }

    if (query.length < 3) {
      setError('La busqueda debe tener mas de 3 caracteres.')
      return
    }

    if (query.match(/^\W+/)) {
      setError('La busqueda no puede iniciar con caracteres especiales.')
      return
    }

    setError(null)
  }, [query])

  return {query, setQuery, error, setError}
}

function App() {
  const [sort, setSort] = useState(false)  
  const { query, setQuery, error, setError } = useSearch()
  const { movies, getMovies, loading } = useMovie({ query, sort })

  const debounceGetMovies = useCallback(
    debounce(query => {
      console.log('query')
      getMovies({ query })
  }, 500)
  , [getMovies])
  
  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ query })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    setQuery(newQuery)
    debounceGetMovies(newQuery)

    // validamos que no permita iniciar con un espacio
    if (newQuery.startsWith(' ')) return
    setQuery(event.target.value)
  }

  const handleBlur = () => {
    setError(null)
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscardor de Peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
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
          <input 
            type="checkbox"
            onChange={handleSort}
            checked={sort}
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
        {
          loading 
            ? <p>CARGANDO...</p>
            : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
