import { Navigate, Outlet } from 'react-router-dom'
import { PublicRoutes } from './index'
import { useSelector } from 'react-redux'
import { supabase } from '../supabase/client'

export const AuthGuard = () => {

  return localStorage.getItem('sb-ddwsjkfihgurenvpkdur-auth-token') ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />
}

export default AuthGuard