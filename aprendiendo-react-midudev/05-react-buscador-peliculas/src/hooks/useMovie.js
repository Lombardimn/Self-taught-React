import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovie } from '../services/movies'

export function useMovie({ query, sort }) {
    const [movies, setMovies] = useState([])
    const [loading, setloading] = useState(false)
    const [error, setError] = useState(null)
    const previousSearch = useRef(query)

    const getMovies = useCallback(async ({ query }) => {
            if (query === previousSearch.current) return

            try {
                setloading(true)
                setError(null)
                previousSearch.current = query
                const newMovies = await searchMovie ({ query })
                setMovies(newMovies)
            } catch (e) {
                setError(e.message)
            } finally {
                setloading(false)
            }
        }, [])

    const sortedMovies = useMemo(() => {
        return sort 
            ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) 
            : movies
    }, [sort, movies])

    return { movies: sortedMovies, getMovies, loading, error }
}
