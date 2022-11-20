import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PrivateRoutes } from '../../guards/Routes/routes'
import { getRooms } from './services/get-rooms.service'
import { ProfileLayout } from './styled-components'
import { AllClientBoxes, AllRooms, ProfileInformation } from './components'
import { getClientBoxesService } from './services'

const Profile = () => {

    const [rooms, setRooms] = useState(null)
    const [boxes, setBoxes] = useState(null)
    const user = useSelector(state => state.user)
    // Funcion para obtener las salas del usuario
    const getUserRooms = async () => {
        const data = await getRooms(user?.id)
        try {
            setRooms(data.data)
        }
        catch (err) {
            console.error(err.message)
        }
    };
    // Funcion para obtener las cajas del usuario
    const getClientBoxes = async () => {
        const data = await getClientBoxesService(user?.email)
        try {
            if (data.data.length !== 0) {
                setBoxes(data.data)
            }
        }
        catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getUserRooms();
        getClientBoxes();
    }, [user])

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ProfileLayout>
                <ProfileInformation user={user} rooms={rooms} boxes={boxes} />
                <AllRooms rooms={rooms} />
                <AllClientBoxes boxes={boxes} />
            </ProfileLayout>
        </div>
    )
}

export default Profile