import React from 'react'
import { Link } from 'react-router-dom'
import { PrivateRoutes } from '../../../guards'
import { Button } from '../../../styled-components'
import { TypeMeetingLayout } from '../styled-components'

const TypeMeeting = ({ id, setType, type }) => {

    const setTypeMeet = (prop) => {
        setType({ ...type, type: prop })
    }

    return (
        <TypeMeetingLayout>
            <h1>Modo.</h1>
            <p>Selecciona un modo para la cita</p>
            <div className='buttons_container'>
                <Link to={`${PrivateRoutes.PRIVATE}${PrivateRoutes.GET_TICKETS}/${id}/categorie`}>
                    <Button onClick={() => setTypeMeet('Virtual')}>Virtual</Button>
                </Link>
                <Link to={`${PrivateRoutes.PRIVATE}${PrivateRoutes.GET_TICKETS}/${id}/categorie`}>
                    <Button onClick={() => setTypeMeet('Presencial')}>Presencial</Button>
                </Link>
            </div>
        </TypeMeetingLayout>
    )
}

export default TypeMeeting