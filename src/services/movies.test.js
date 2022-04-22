import { checkIsResponseOk, searchMovies } from './movies.js'
import { expect, it, describe, beforeAll, afterAll, afterEach } from 'vitest'
import { server, MOCKED_RESPONSES } from './mock.setup.js'

describe('checkIsResponseOk', () => {
  it('should return true if response is ok', () => {
    const res = { Response: 'True' }
    expect(checkIsResponseOk(res)).toBe(true)
  })

  it('should return false if response is NOT ok', () => {
    const res = { Response: 'False' }
    expect(checkIsResponseOk(res)).toBe(false)
  })

  it('should return false if response is not present', () => {
    const res = {}
    expect(checkIsResponseOk(res)).toBe(false)
  })
})

describe('searchMovies', () => {
  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

  afterAll(() => server.close())

  afterEach(() => server.resetHandlers())

  it('should return an array of movies if response is ok', async () => {
    const query = 'normalResponse'
    const { Search } = MOCKED_RESPONSES[query]
    const movies = await searchMovies({ query })
    expect(Array.isArray(movies)).toBe(true)
    expect(movies[0].Title).toEqual(Search[0].Title)
  })
})
