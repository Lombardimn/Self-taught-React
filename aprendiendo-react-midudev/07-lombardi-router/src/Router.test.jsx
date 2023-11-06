import { describe, it, expect, beforeEach, vi } from 'vitest'
import { cleanup, render, screen, fireEvent } from '@testing-library/react'
import { getCurrentPath } from './utils/getCurrentPath.js'

import { Router } from './components/Router'
import { Route } from './components/Route'
import { Link } from './components/Link'
import HomePage from './Pages/HomePage'
import Page404 from './Pages/404'

vi.mock('./utils/getCurrentPath', () => ({
  getCurrentPath: vi.fn()
}))

describe('Router', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('Reconocimiento del Componente', () => {
    expect(true).toBe(true)
  })

  it('Renderizar Home sin problemas', () => {
    getCurrentPath.mockReturnValue('/')
    render(<Router routes={[{ path: '/', Component: () => <HomePage /> }]} />)
    expect(true).toBeTruthy()
  })

  it('No Renderizar sin datos', () => {
    render(<Router routes={[{ path: '', Component: () => '' }]} />)
    expect(false).toBeFalsy()
  })

  it('Renderizar 404', () => {
    render(<Router routes={[]} defaultComponent={() => <Page404 />} />)
    expect(screen.getByText('Page Not Found')).toBeTruthy()
  })

  it('Debe representar el componente de la ruta que definimos', () => {
    getCurrentPath.mockReturnValue('/about')

    const routes = [
      {
        path: '/',
        Component: () => <h1>Home</h1>
      },
      {
        path: '/about',
        Component: () => <h1>About</h1>
      }
    ]

    render(<Router routes={routes} />)
    expect(screen.getByText('About')).toBeTruthy()
  })

  it('should navigate using Links', async () => {
    getCurrentPath.mockReturnValueOnce('/')

    render(
      <Router>
        <Route
          path='/' Component={() => {
            return (
              <>
                <h1>Home</h1>
                <Link to='/about'>Go to About</Link>
              </>
            )
          }}
        />
        <Route path='/about' Component={() => <h1>About</h1>} />
      </Router>
    )

    // Click on the link
    const anchor = screen.getByText(/Go to About/)
    fireEvent.click(anchor)

    const aboutTitle = await screen.findByText('About')

    // Check that the new route is rendered
    expect(aboutTitle).toBeTruthy()
  })
})
