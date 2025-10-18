import React, { Suspense, lazy } from 'react'
import {
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import { AuthProvider, useAuth } from './AuthContext.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'

const ProductList = lazy(() => import('./pages/ProductList.jsx'))
const ProductDetails = lazy(() => import('./pages/ProductDetails.jsx'))

function Layout() {
  const { user, login, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div style={{ padding: 16 }}>
      <nav style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
        {user ? (
          <>
            <span>Hi, {user.username}</span>
            <button
              onClick={() => {
                logout()
                navigate('/', { replace: true })
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <button onClick={() => login('demo')}>Login</button>
        )}
        <span style={{ marginLeft: 'auto', opacity: 0.7 }}>
          Path: {location.pathname}
        </span>
      </nav>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route index element={<p>Welcome to the store</p>} />
          <Route path='/products' element={<ProductList />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/products/:id' element={<ProductDetails />} />
          </Route>
          <Route
            path='/login'
            element={<p>Click Login in the nav to authenticate.</p>}
          />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  )
}
