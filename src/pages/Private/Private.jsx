import { lazy } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import NotFound from '../../components/NotFound'
import { PrivateRoutes } from '../../guards'

const Home = lazy(() => import('../Home/Home'))
const GetTickets = lazy(() => import('../GetTickets/GetTickets'))
const FormRoom = lazy(() => import('../FormRoom/FormRoom'))
const Profile = lazy(() => import('../Profile/Profile'))
const RoomDetail = lazy(() => import('../RoomDetail/RoomDetail'))
const StaffBox = lazy(() => import('../StaffBox/StaffBox'))
const UserTickets = lazy(() => import('../UserTickets/UserTickets'))
const ShiftsOrderedView = lazy(() => import('../ShiftsOrderedView/ShiftsOrderedView'))

const Private = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navigate to={`${PrivateRoutes.PRIVATE}${PrivateRoutes.HOME}`} />} />
                <Route path={PrivateRoutes.HOME} element={<Home />} />
                <Route path={`${PrivateRoutes.GET_TICKETS}/:id/*`} element={<GetTickets />} />
                <Route path={`${PrivateRoutes.FORM_ROOM}/*`} element={<FormRoom />} />
                <Route path={`${PrivateRoutes.ROOM_DETAIL}/:id`} element={<RoomDetail />} />
                <Route path={PrivateRoutes.PROFILE} element={<Profile />} />
                <Route path={`${PrivateRoutes.STAFF_BOX}/:id/:categorie`} element={<StaffBox />} />
                <Route path={`${PrivateRoutes.USER_TICKETS}`} element={<UserTickets />} />
                <Route path={`${PrivateRoutes.SHIFTS_ORDERED}/:id`} element={<ShiftsOrderedView />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    )
}

export default Private