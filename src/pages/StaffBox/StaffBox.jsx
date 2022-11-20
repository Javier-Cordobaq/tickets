import { useEffect, useState } from "react"
import { getAllShiftsService } from "./services"
import { TableLayout } from "./styled-components"
import { TableResponsiveLayout } from "./styled-components/table-responsive-layout.styled"
import ShiftsTable from "./components/ShiftsTable";
import { supabase } from "../../supabase/client";
import { useParams } from "react-router-dom";

const StaffBox = () => {

    const [shifts, setShifts] = useState([])
    const { id, categorie } = useParams()
    console.log(shifts, 'SHIFTS')

    const columns = [
        { field: 'id', headerName: 'Id', width: 50 },
        { field: 'name', headerName: 'Nombre', width: 130 },
        { field: 'state', headerName: 'Estado', width: 130 },
        { field: 'documentNumber', headerName: 'Número de documento', width: 130 },
    ];

    const rows = shifts?.map(c => ({ id: c.id, name: c.name, state: c.state, documentNumber: c.documentNumber }))

    const getAllShifts = async () => {
        const data = await getAllShiftsService(categorie, id)
        try {
            setShifts(data.data)
        }
        catch (err) {
            console.error(err.message)
        }
    }

    const channels = supabase.getChannels()
    console.log(channels, 'CHANELLS')

    useEffect(() => {
        const supabaseSuscription = supabase
            .channel('public:shifts')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'shifts' }, payload => {
                console.log('Change received!', payload)
                getAllShifts();
            })
            .subscribe()
        getAllShifts();
        console.log('Se repite?')
    }, [])

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <TableResponsiveLayout>
                <TableLayout>
                    {shifts.length !== 0 ?
                        <ShiftsTable getAllShifts={getAllShifts} shifts={shifts} />
                        : <h1>Cargando...</h1>
                    }
                </TableLayout>
            </TableResponsiveLayout>
        </div>
    )
}

export default StaffBox