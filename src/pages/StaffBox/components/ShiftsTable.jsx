import { useState } from "react"
import { Filters, StateIndicator, Table } from "../styled-components"
import { FaFilter } from "react-icons/fa";
import { updateUserStateService } from "../services/update-user-state.service";
import { useSelector } from "react-redux";
import { BiUserX, BiUserPlus } from "react-icons/bi";

const ShiftsTable = ({ shifts, getAllShifts }) => {

    const [filter, setFilter] = useState([])
    const [stateFilter, setStateFilter] = useState('')
    const user = useSelector(state => state.user)

    const handleChange = (e) => {
        setFilter(shifts.filter(c => c.name.toLowerCase().includes(e.target.value.toLowerCase()) || c.meetType.toLowerCase().includes(e.target.value.toLowerCase())) || c.state.toLowerCase().includes(e.target.value.toLowerCase()))
    }

    const updateUserState = async (userId, state, shiftLetter, shiftNumber, meetType) => {
        await updateUserStateService(userId, state, shiftLetter, shiftNumber, meetType);
        try {
            getAllShifts();
        }
        catch (err) {
            console.error(err.message)
        }
    }

    return (
        <>
            <Filters>
                <div className="filters">
                    <p>Cajero {user?.email}</p>
                </div>
                <div className="searchbar">
                    <FaFilter />
                    <input
                        placeholder="Filtro"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </Filters>
            <Table>
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <th>Turno</th>
                        <th>Modalidad</th>
                        <th>Documento</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                    {filter.length !== 0 ?
                        filter.map(c => (
                            <tr key={c.id}>
                                <td>{c.name}</td>
                                <td>{c.shiftLetter}{c.shiftNumber}</td>
                                <td>{c.meetType}</td>
                                <td>{c.documentNumber}</td>
                                <td>
                                    <StateIndicator state={c.state}>
                                        {c.state}
                                    </StateIndicator>
                                </td>
                                <td className="action_column">
                                    <span state={c.state} onClick={() => updateUserState(c.userId, 'en proceso', c.shiftLetter, c.shiftNumber, meetType)}>
                                        <BiUserPlus />
                                    </span>
                                    <span onClick={() => updateUserState(c.userId, 'finalizado', c.shiftLetter, c.shiftNumber, c.meetType)}>
                                        <BiUserX />
                                    </span>
                                </td>
                            </tr>
                        )) :
                        shifts.length !== 0 ?
                            shifts.map(c => (
                                <tr key={c.id}>
                                    <td>{c.name}</td>
                                    <td>{c.shiftLetter}{c.shiftNumber}</td>
                                    <td>{c.meetType}</td>
                                    <td>{c.documentNumber}</td>
                                    <td>
                                        <StateIndicator state={c.state}>
                                            {c.state}
                                        </StateIndicator>
                                    </td>
                                    <td className="action_column">
                                        <BiUserPlus className="actions_button" onClick={() => updateUserState(c.userId, 'en proceso', c.shiftLetter, c.shiftNumber, meetType)} />
                                        <BiUserX className="actions_button" onClick={() => updateUserState(c.userId, 'finalizado', c.shiftLetter, c.shiftNumber, c.meetType)} />
                                    </td>
                                </tr>
                            ))
                            : <h1>Aun no tienes tickets</h1>
                    }
                </tbody>
            </Table>
        </>
    )
}

export default ShiftsTable