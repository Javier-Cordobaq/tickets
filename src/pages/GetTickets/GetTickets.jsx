import React, { useEffect, useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes, useParams } from 'react-router-dom'
import { TypeMeeting, TicketsHomePage, DetailsMeeting, Categorie } from './components'
import PersonalInformation from './components/PersonalInformation'
import Ticket from './components/Ticket'
import { supabase } from '../../supabase/client'
import { getCategoriesService, getLastTurnService } from './services'

const GetTickets = () => {

  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const user = useSelector(state => state.user)

  const [type, setType] = useState({
    name: '',
    document: 0,
    userId: user?.id,
    shiftNumber: 0,
    shiftLetter: '',
    type: '',
  })

  const getRoom = async () => {
    const data = await getCategoriesService(id)
    try {
      setRoom(data.data)
    }
    catch (err) {
      console.error(err.message)
    }
  }

  const getTicket = async () => {
    try {
      const { data, error } = await supabase
        .from('shifts')
        .insert([
          {
            name: type.name,
            userId: user.id,
            roomId: id,
            documentNumber: type.document,
            meetType: type.type,
            shiftNumber: type.shiftNumber,
            shiftLetter: type.shiftLetter
          },
        ])
    }
    catch (err) {
      console.error(err.message)
    }
  }

  const handleChange = (e) => {
    setType({ ...type, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    getRoom();
  }, [])

  //Aquí obtenemos el ultimo turno cuando el estado de la letra cambia, sete el numero dle turno al ultimo + 1

  const getLastTurn = async () => {
    const data = await getLastTurnService(type.shiftLetter)
    console.log(data)
    try {
      if (typeof data[0]?.shiftNumber !== 'undefined') {
        setType({ ...type, shiftNumber: data[0]?.shiftNumber + 1 })
      } else {
        setType({ ...type, shiftNumber: 0 })
      }
    }
    catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getLastTurn(type.shiftNumber);
  }, [type.shiftLetter])

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Routes>
        <Route path='/home' element={<TicketsHomePage id={id} />} />
        <Route path='/personal_information' element={<PersonalInformation type={type} handleChange={handleChange} id={id} />} />
        <Route path='/mode' element={<TypeMeeting id={id} type={type} setType={setType} />} />
        <Route path='/categorie' element={<Categorie id={id} type={type} setType={setType} room={room} />} />
        <Route path='/details' element={<DetailsMeeting id={id} type={type.type} getTicket={getTicket} />} />
        <Route path='/ticket' element={<Ticket type={type} />} />
      </Routes>
    </div>
  )
}

export default GetTickets