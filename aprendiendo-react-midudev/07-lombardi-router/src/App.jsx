import { lazy, Suspense } from 'react'
import { Router } from './components/Router'
import { Route } from './components/Route'

const lazyHomePage = lazy(() => import('./Pages/HomePage.jsx'))
const lazyAboutPage = lazy(() => import('./Pages/AboutPage.jsx'))
const lazyPage404 = lazy(() => import('./Pages/404.jsx'))
const lazySearchPage = lazy(() => import('./Pages/SearchPage.jsx'))

const routes = [
  {
    path: '/:lang/about',
    Component: lazyAboutPage
  },
  {
    path: '/search/:query',
    Component: lazySearchPage
  }
]

export function App () {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={routes} defaultComponent={lazyPage404}>
          <Route path='/' Component={lazyHomePage} />
          <Route path='/about' Component={lazyAboutPage} />
          {/* <Route path='/search/:query' Component={SearchPage} /> */}
        </Router>
      </Suspense>
    </main>
  )
}
