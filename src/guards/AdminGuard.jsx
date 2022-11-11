import { Navigate, Outlet } from 'react-router-dom'
import { PrivateRoutes } from './index'

export const AdminGuard = () => {
    return localStorage.getItem('user') ? <Outlet /> : <Navigate to={PrivateRoutes.PRIVATE} />
}

export default AdminGuard