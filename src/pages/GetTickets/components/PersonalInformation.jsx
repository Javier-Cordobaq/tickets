import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PrivateRoutes } from '../../../guards'
import { Button, Input } from '../../../styled-components'
import { PersonalInfoLayout } from '../styled-components'

const PersonalInformation = ({ id, handleChange, type }) => {

    return (
        <PersonalInfoLayout>
            <h2>Información Personal.</h2>
            <form className='form_container'>
                <Input
                    placeholder='Nombre'
                    name='name'
                    value={type.name}
                    id='type'
                    onChange={handleChange}
                />
                <Input
                    id='number'
                    type='number'
                    name='document'
                    value={type.document}
                    placeholder='Número documento'
                    onChange={handleChange}
                />
                {/* <Input
                    placeholder='Celular'
                /> */}
            </form>
            {type.name !== '' && type.document !== 0 ?
                <Link to={`${PrivateRoutes.PRIVATE}${PrivateRoutes.GET_TICKETS}/${id}/mode`}>
                    <Button>Cotinuar</Button>
                </Link> :
                <Button style={{backgroundColor: '#2b2d42', color: '#8d99ae', transition: '0.2s all'}}>Cotinuar</Button>
            }
        </PersonalInfoLayout>
    )
}

export default PersonalInformation