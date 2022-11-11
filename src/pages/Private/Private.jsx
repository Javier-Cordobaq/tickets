import { lazy } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { PrivateRoutes } from '../../guards'

const Home = lazy(() => import('../Home/Home'))
const GetTickets = lazy(() => import('../GetTickets/GetTickets'))
const FormRoom = lazy(() => import('../FormRoom/FormRoom'))
const Profile = lazy(() => import('../Profile/Profile'))
const RoomDetail = lazy(() => import('../RoomDetail/RoomDetail'))
const StaffBox = lazy(() => import('../StaffBox/StaffBox'))

const Private = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navigate to={`${PrivateRoutes.PRIVATE}${PrivateRoutes.HOME}`} />} />
                <Route path={PrivateRoutes.HOME} element={<Home />} />
                <Route path={`${PrivateRoutes.GET_TICKETS}/:id/*`} element={<GetTickets />} />
                <Route path={PrivateRoutes.FORM_ROOM} element={<FormRoom />} />
                <Route path={`${PrivateRoutes.ROOM_DETAIL}/:id`} element={<RoomDetail />} />
                <Route path={PrivateRoutes.PROFILE} element={<Profile />} />
                <Route path={`${PrivateRoutes.STAFF_BOX}/:id`} element={<StaffBox />} />
                <Route path='*' element={<>Not Found 404</>} />
            </Routes>
        </>
    )
}

export default Private