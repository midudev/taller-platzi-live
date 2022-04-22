export function Movies ({ results }) {
  return (
    <>
      {
      results === null ? <h2>Te doy la bienvenida!</h2> : null
    }

      {
      results && results.length > 0
        ? (
          <ul className='movies'>
            {
            results.map(movie => (
              <li className='movie' key={movie.imdbID}>
                <img className='movie-poster' src={movie.Poster} alt={movie.Title} />
                <h2>{movie.Title}</h2>
                <p className='movie-year'>{movie.Year}</p>
              </li>
            ))
          }
          </ul>
          )
        : null
    }
    </>
  )
}
