import React from 'react'
import { GetTicketsLayout } from '../styled-components/get-tickets-layout.styled'
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { Button } from '../../../styled-components/button.styled'
import { Link } from 'react-router-dom';
import { PrivateRoutes } from '../../../guards';
import { useSelector } from 'react-redux';

const TicketsHomePage = ({ id }) => {

  return (
    <GetTicketsLayout>
      <div className='container'>
        <h1>Solicita tu turno</h1>
        <div className='desciption_pc'>
          <p><BsFillCalendarCheckFill /> Planifica con anticipación tus visitas a nuestras sucursales </p>
          <p>Al llegar a la sucursal debes <strong>activar tu runo a través del código QR</strong> o pidiéndole ayuda a un direccionario para recibir tu turno</p>
          <Link to={`${PrivateRoutes.PRIVATE}${PrivateRoutes.GET_TICKETS}/${id}/personal_information`}>
            <Button style={{ padding: '0.8rem 4rem', fontWeight: 'bold', fontSize: '1.2rem' }}>Comenzar</Button>
          </Link>
        </div>
        <div className='video_movil'>
          <div className='video_container'>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='desciption_movil'>
          <p><BsFillCalendarCheckFill /> Planifica con anticipación tus visitas</p>
          <p>Al llegar a la sucursal debes <strong>activar tu runo a través del código QR</strong> o pidiéndole ayuda a un direccionario para recibir tu turno</p>
          <Link to={`${PrivateRoutes.PRIVATE}${PrivateRoutes.GET_TICKETS}/personal_information`}>
            <Button>Comenzar</Button>
          </Link>
        </div>
        <div className='video_pc'>
          <div className='video_container'>
          </div>
        </div>
      </div>
    </GetTicketsLayout>
  )
}

export default TicketsHomePage