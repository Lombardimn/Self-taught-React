import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes, Roles } from './models'
import { RoutesWithNotFounds } from './utilities'
import { AuthGuard, RoleGuard } from './guards'
import { Logout } from './components/Logout'
import { Suspense, lazy } from 'react'
import { Dashboard } from './pages'
import './App.css'


const Login = lazy(() => import('./pages/Login/Login'))
const Private = lazy(() => import('./pages/Private/Private'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<>Cargando...</>}>
        <h1>Aprendiendo React Routing</h1>
        <BrowserRouter>
          <RoutesWithNotFounds>
            <Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE} />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route element={<AuthGuard privateValidation={true} />}>
              <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
            </Route>
            <Route element={<RoleGuard rol={Roles.ADMIN}/>}>
              <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
            </Route>
          </RoutesWithNotFounds>
          <Logout />
        </BrowserRouter>
      </Suspense>
    </div>
    
  )
}

export default App
