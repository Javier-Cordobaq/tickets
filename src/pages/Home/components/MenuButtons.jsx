import React, { useState } from 'react'
import { Input } from '../../../styled-components'
import { MenuButtonsLayout } from '../styled-components'
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { PrivateRoutes } from '../../../guards';
import { HiOutlineTicket } from "react-icons/hi";

const MenuButtons = () => {

    const [url, setUrl] = useState('')

    return (
        <MenuButtonsLayout>
            <div className='text_container'>
                <h2>Servicio de turnos Premium.</h2>
                <h2>Ahora gratis para todos.</h2>
                <p>
                    Hemos diseñado un servicio de turnos para empresas o negocios pequeños, Ticket.io, para que todo el mundo pueda usarlo de forma gratuita.
                </p>
            </div>
            <div className='actions_container'>
                <Link className='button_container' to={`${PrivateRoutes.PRIVATE}${PrivateRoutes.FORM_ROOM}`}>
                    <FaPlus className='button_icon' />
                    <p>Nueva sala</p>
                </Link>
                <Input
                    style={{ borderRadius: '0.3rem' }}
                    placeholder='Introduce un código o enlace'
                    onChange={(e) => setUrl(e.target.value)}
                />
                {url !== '' ?
                    <a target='_blanck' href={url}>
                        <HiOutlineTicket className='turno_button' />
                    </a> : null
                }
            </div>
        </MenuButtonsLayout>
    )
}

export default MenuButtons