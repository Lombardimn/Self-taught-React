// eslint-disable-next-line react/prop-types
function ListOfMovies ({ movies }) {
    return (
        <ul>
            {
                // eslint-disable-next-line react/prop-types
                movies.map(movie => (
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <img
                            src={movie.poster}
                            alt={`Poster de la pelicula ${movie.title}`}
                        />
                    </li>
                ))
            }
        </ul>
    )
}

function NoMoviesResult () {
    return (
        <p>No se ha encontrado peliculas para esta búsqueda</p>
    )
}

// eslint-disable-next-line react/prop-types
export function Movies ({ movies }) {
    // eslint-disable-next-line react/prop-types
    const hasMovie = movies?.length > 0
    return (
        hasMovie 
            ? <ListOfMovies movies={movies} />
            : <NoMoviesResult />
    )
}