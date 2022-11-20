import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getRoomInformationService } from "../../services/get-room-information.service"
import { getShiftsOrderService } from "./services/get-shifts-order.service"

const ShiftsOrderedView = () => {

  // Param id para conseguir los datos de la room
  const { id } = useParams();
  // Hooks
  const [shiftsOrdered, setShiftsOrdered] = useState([])
  const [room, setRoom] = useState([])
  // Funcion para obtener los turnos
  const getShiftsOrdered = async (shiftLetter) => {
    const data = await getShiftsOrderService(shiftLetter, room[0].roomId)
    console.log(data.data, 'DATA.DATA[0]')
    try {
      setShiftsOrdered([...shiftsOrdered, data.data[0]])
    }
    catch (err) {
      console.error(err.message)
    }
  }
  // Funcion para obetener los datos de la room
  const getRoomInformation = async () => {
    const data = await getRoomInformationService(id)
    try {
      setRoom(data.data)
    }
    catch (err) {
      console.error(err.message)
    }
  }

  const getOrderedShifts = () => {
    if (room.length !== 0) {
      room[0]?.meetCategorie.map(c => getShiftsOrdered(c.id))
    }
  }

  useEffect(() => {
    getRoomInformation();
  }, [])

  useEffect(() => {
    getOrderedShifts();
  }, [room])

  return (
    <div>
      {shiftsOrdered.length !== 0 ? shiftsOrdered.map(c => (
        <div key={c?.id}>
          <h1>Turno actual.</h1>
          <div>
            <p >{c?.shiftLetter + c?.shiftNumber}</p>
            <p >{c?.state}</p>
          </div>
        </div>
      ))
        :
        <p>Espera</p>
      }
      {shiftsOrdered.length !== 0 ? shiftsOrdered.map(c => (
        <div key={c?.id}>
          <h1>Siguiente.</h1>
          <div>
            <p >{c?.shiftLetter + (c?.shiftNumber + 1)}</p>
            <p >{c?.state}</p>
          </div>
        </div>
      ))
        :
        <p>Espera</p>
      }
    </div>
  )
}

export default ShiftsOrderedView