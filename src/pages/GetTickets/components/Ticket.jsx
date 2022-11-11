import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TicketLayout } from '../../../styled-components/ticket-layout.styled'
import { getTicketService } from '../services'
import { useSelector } from 'react-redux'

const Ticket = ({ type }) => {

  const [ticket, setTicket] = useState(null)
  const user = useSelector(state => state.user)
  const userId = user?.id
  const { shiftNumber, shiftLetter } = type

  const getLastTurn = async () => {
    const { error, data } = await getTicketService(userId, shiftLetter, shiftNumber)
    if (error) throw error
    setTicket(data)
  }

  useEffect(() => {
    getLastTurn();
  }, [])

  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <TicketLayout>
        {ticket !== null ?
          <div className='ticket'>
            <p>{ticket[0]?.name}</p>
            <div>
              <h1>Turno</h1>
              <div className="ticket_number_container">
                <p>{ticket[0]?.shiftNumber}</p>
                <p>{ticket[0]?.shiftLetter}</p>
              </div>
            </div>
            <div>
              <p><strong>Cedula.</strong></p>
              <p>{ticket[0]?.documentNumber}</p>
            </div>
            <div>
              <p><strong>Tipo.</strong></p>
              <p>{ticket[0]?.meetType}</p>
            </div>
          </div> :
          <h1>Cargando...</h1>
        }
      </TicketLayout>
    </div>
  )
}

export default Ticket