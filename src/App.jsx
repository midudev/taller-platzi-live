import { useRef, useState } from 'react'
import { searchMovies } from './services/movies.js'
import { Movies } from './Movies.jsx'
import './App.css'

function App () {
  const inputRef = useRef()
  const [results, setResults] = useState(null)

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    const { value } = inputRef.current
    const resultsToStore = await searchMovies({ query: value })
    setResults(resultsToStore)
  }

  return (
    <>
      <h1>Buscador de películas</h1>
      <form data-testid='form' className='search' onSubmit={handleSubmit}>
        <input ref={inputRef} className='search-input' name='movie' placeholder='Buscar película...' />
        <button className='search-submit'>Buscar</button>
      </form>

      <Movies results={results} />
    </>
  )
}

export default App
