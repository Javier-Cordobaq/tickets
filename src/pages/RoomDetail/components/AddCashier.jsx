import { useState } from 'react'
import { PaleteColors } from '../../../palete-colors/palete-colors'
import { Button, Input } from '../../../styled-components'
import { addCashierService } from '../services'
import { FormCashier } from '../styled-components'

const AddCashier = ({ room }) => {

  const [cashier, setCashier] = useState({
    email: '',
    role: '',
    roomId: room?.roomId,
    categorie: '',
    roomName: room?.name
  })

  const addCashier = async (e) => {
    e.preventDefault();
    try {
      await addCashierService(cashier)
    }
    catch (err) {
      console.error(err.message)
    }
  }

  const handleChange = (e) => {
    setCashier({
      ...cashier,
      [e.target.name]: e.target.value
    })
  }

  const handleSelect = (e) => {
    setCashier({
      ...cashier,
      categorie: e.target.value
    })
  }

  return (
    <FormCashier>
      <h2>Agregar cajeros.</h2>
      <form onSubmit={addCashier} className='form_container'>
        <label>Email</label>
        <Input
          placeholder='Email'
          name='email'
          value={cashier.email}
          style={{ backgroundColor: `${PaleteColors.BACKGROUND_COLOR}` }}
          onChange={(e) => handleChange(e)}
        />
        <label>Role</label>
        <Input
          placeholder='role'
          name='role'
          value={cashier.role}
          style={{ backgroundColor: `${PaleteColors.BACKGROUND_COLOR}` }}
          onChange={(e) => handleChange(e)}
        />
        <label>Area</label>
        <select onChange={(e) => handleSelect(e)} className='select_stylized'>
          <option value={-1}>Seleccione una opción: </option>
          {
            room?.meetCategorie.map(c => (
              <option name='categorie' key={c.id} value={c.id}>{c.name}</option>
            ))
          }
        </select>
        <Button>Agregar</Button>
      </form>
    </FormCashier>
  )
}

export default AddCashier