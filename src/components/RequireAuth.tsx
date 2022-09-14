import { useLocation, Navigate, Outlet } from "react-router-dom"
import useAuth from '../hooks/useAuth'

const RequireAuth = () => {
  const { auth } = useAuth()
  const location = useLocation()

  console.log('current location: ', location)
  console.log('current auth', auth)

  return (
    auth?.accessToken
      ? <Outlet />
      : <Navigate to='/proxy-frontend/login' state={{ from: location }} replace />
  )
}

export default RequireAuth
