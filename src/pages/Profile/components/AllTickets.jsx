import { TicketLayout } from "../../../styled-components"

const AllTickets = ({ tickets }) => {
    return (
        <>
            {
                tickets !== null && tickets.length !== 0 ?
                    tickets.map(c => (
                        <TicketLayout>
                            <div className='ticket'>
                                <p>{c.name}</p>
                                <div>
                                    <h1>Turno</h1>
                                    <div className="ticket_number_container">
                                        <p>{c.shiftNumber}</p>
                                        <p>{c.shiftLetter}</p>
                                    </div>
                                </div>
                                <div>
                                    <p><strong>Cedula.</strong></p>
                                    <p>{c.documentNumber}</p>
                                </div>
                                <div>
                                    <p><strong>Tipo.</strong></p>
                                    <p>{c.meetType}</p>
                                </div>
                            </div>
                        </TicketLayout>
                    )) : <p>Aun no tienes Turnos.</p>
            }
        </>
    )
}

export default AllTickets