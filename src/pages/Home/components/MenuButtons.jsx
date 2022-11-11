import React from 'react'
import { Button } from '../../../styled-components'
import { MenuButtonsLayout } from '../styled-components'
import { FaPeopleArrows, FaCamera, FaTicketAlt, FaBuilding } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { PrivateRoutes } from '../../../guards';

const MenuButtons = () => {

    const number = '6c014814-b677-4610-898a-aadabfaaa286'

    return (
        <MenuButtonsLayout>
            <Link to={`${PrivateRoutes.PRIVATE}${PrivateRoutes.PROFILE}`}>
                <div className='button_container'>
                    <IoPersonCircleSharp />
                    <button>Perfil</button>
                </div>
            </Link>
            <Link to={`${PrivateRoutes.PRIVATE}${PrivateRoutes.GET_TICKETS}/${number}/home`}>
                <div className='button_container'>
                    <FaTicketAlt />
                    <button>Mis turnos</button>
                </div>
            </Link>
            <div className='button_container'>
                <FaPeopleArrows />
                <button>Ver fila</button>
            </div>
            <div className='button_container'>
                <FaCamera />
                <button>Cita virtual</button>
            </div>
        </MenuButtonsLayout>
    )
}

export default MenuButtons