import { describe, beforeAll, afterEach, afterAll, it } from 'vitest'

import { server } from './services/mock.setup.js'

import App from './App.jsx'
import { fireEvent, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const user = userEvent.setup()

describe.only('When a user uses the app', () => {
  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

  afterAll(() => server.close())

  afterEach(() => server.resetHandlers())

  it('is able to search for a movie using the form and get the results', async () => {
    const { getByPlaceholderText, getByTestId, findByAltText } = render(<App />)
    const input = getByPlaceholderText('Buscar película...')
    const form = getByTestId('form')

    await user.type(input, 'normalResponse')
    fireEvent.submit(form)

    await findByAltText('The MiduAvengers')
  })
})
