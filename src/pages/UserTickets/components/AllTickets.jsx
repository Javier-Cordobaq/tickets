import { NoDocuments, TicketLayout } from "../../../styled-components"
import { HiOutlineTicket } from "react-icons/hi";
import { PaleteColors } from "../../../palete-colors/palete-colors";

const AllTickets = ({ tickets }) => {
    console.log(tickets, 'All Tickets Component')
    return (
        <>
            {
                tickets !== null ?
                    tickets?.map(c => (
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
                    ))
                    :
                    <NoDocuments style={{ color: `${PaleteColors.SECONDARY_GRAY}` }}>
                        <HiOutlineTicket className="files_icon" />
                        <p>Aun no tienes Turnos.</p>
                    </NoDocuments>
            }
        </>
    )
}

export default AllTickets