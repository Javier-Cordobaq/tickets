import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getTicketsService } from "./services"
import { AllTickets } from './components'
import { UserTicketsLayout } from "./styled-components/user-tickets-layout.styled"

const UserTickets = () => {

    // Estados

    const [tickets, setTickets] = useState(null)

    const user = useSelector(state => state.user)

    const getTickets = async () => {
        const data = await getTicketsService(user?.id)
        try {
            setTickets(data.data)
        }
        catch (err) {
            console.error(err.message)
        }
    };

    useEffect(() => {
        getTickets();
    }, [])


    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <UserTicketsLayout>
                <AllTickets tickets={tickets} />
            </UserTicketsLayout>
        </div>
    )
}

export default UserTickets