import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PrivateRoutes } from '../../guards/Routes/routes'
import AllTickets from './components/AllTickets'
import { getTickets } from './services'
import { getRooms } from './services/get-rooms.service'
import { ProfileLayout } from './styled-components'
import { FaPlus } from "react-icons/fa";
import { AllClientBoxes } from './components'

const Profile = () => {

    const [rooms, setRooms] = useState(null)
    const [tickets, setTickets] = useState(null)
    const user = useSelector(state => state.user)

    const getUserRooms = async () => {
        const data = await getRooms(user?.id)
        const tickets = await getTickets(user?.id)
        try {
            setRooms(data.data)
            setTickets(tickets.data)
        }
        catch (err) {
            console.error(err.message)
        }
    };

    useEffect(() => {
        getUserRooms();
    }, [user])

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ProfileLayout>
                <div className="personal_info">
                    <h1>Correo.</h1>
                    <p>{user?.email}</p>
                </div>
                <div className="rooms_container">
                    <div className='rooms_header_container'>
                        <h1>Salas.</h1>
                        <Link to={`${PrivateRoutes.PRIVATE}${PrivateRoutes.FORM_ROOM}`}>
                            <div className='button_container'>
                                <button>Crear sala</button>
                                <FaPlus className='plus_icon' />
                            </div>
                        </Link>
                    </div>
                    {
                        rooms !== null && rooms.length !== 0 ?
                            rooms.map(c => (
                                <Link key={c.roomId} to={`${PrivateRoutes.PRIVATE}${PrivateRoutes.ROOM_DETAIL}/${c.roomId}`}>
                                    <div className='card_container'>
                                        <p>{c.name}</p>
                                    </div>
                                </Link>
                            )) : <p>Aun no tienes salas.</p>
                    }
                </div>
                <AllClientBoxes />
            </ProfileLayout>
        </div>
    )
}

export default Profile