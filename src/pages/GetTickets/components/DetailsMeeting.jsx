import React from 'react'
import { Link } from 'react-router-dom'
import { PrivateRoutes } from '../../../guards'
import { Button } from '../../../styled-components'
import { DetailMeetingLayout } from '../styled-components'

const DetailsMeeting = ({ id, type, getTicket }) => {
    return (
        <DetailMeetingLayout>
            <div className='row'>
                <h2>Detalles reunión.</h2>
                <p className='title'>Horario de atención.</p>
                <p>Lunes a Viernes 9:00am a 5:00pm</p>
                <p>Sábado: Cerrado</p>
                <p>Domingo: Cerrado</p>
            </div>
            <div className='row'>
                <p className='title'>Ubicación.</p>
                <p>Cra 84 #33 AA 1</p>
            </div>
            <div className='row'>
                <p className='title'>Modo.</p>
                <p>{type.type}</p>
            </div>
            <div>
                <Link to={`${PrivateRoutes.PRIVATE}${PrivateRoutes.GET_TICKETS}/${id}/ticket`}>
                    <Button onClick={() => getTicket()}>Confirmar</Button>
                </Link>
            </div>
        </DetailMeetingLayout>
    )
}

export default DetailsMeeting