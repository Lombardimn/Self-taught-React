import responseMovies from '../mocks/whit-results.json'

export function useMovie() {
    const movies = responseMovies.Search

    const mappedMovies = movies.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
    }))

    return { movies: mappedMovies }
}
