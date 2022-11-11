import { useEffect, useState } from "react"
import { Button } from "../../styled-components"
import { getAllShiftsService } from "./services"

const StaffBox = () => {

    const [shifts, setShifts] = useState(null)
    console.log(shifts)

    const getAllShifts = async () => {
        const data = await getAllShiftsService('C')
        try {
            setShifts(data.data)
        }
        catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getAllShifts();
    }, [])

    return (
        <div>
            {shifts !== null ?
                shifts.map(c => (
                    <div key={c.id}>
                        {c.name}
                        {c.shiftNumber}
                        {c.shiftLetter}
                        {c.created_at}
                        {c.documentNumber}
                        {c.status}
                        <Button>Atendido</Button>
                        <Button>Eliminar</Button>
                    </div>
                )) 
                :
                null
            }
        </div>
    )
}

export default StaffBox