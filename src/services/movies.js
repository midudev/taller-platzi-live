const API_KEY = '4287ad07'

export const checkIsResponseOk = res => res.Response === 'True'

export const searchMovies = ({ query }) => {
  return window.fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
    .then(res => res.json())
    .then(response => {
      const resultsToStore = response.Response === 'True' ? response.Search : []
      return resultsToStore
    })
}
