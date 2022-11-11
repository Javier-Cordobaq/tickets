import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Input } from '../../styled-components'
import { supabase } from '../../supabase/client'
import { FormRoomLayout } from './syled-components/form-room-layout.styled'

const FormRoom = () => {

  const [categorie, setCategorie] = useState({
    id: '',
    name: ''
  })
  const [formData, setFormData] = useState({
    boxNumber: 0,
    name: '',
    categories: []
  })

  const user = useSelector(state => state.user)

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from('room')
        .insert([
          { 
            name: formData.name, 
            creatorId: user.id,
            meetCategorie: formData.categories,
            boxesNumber: formData.boxNumber
          },
        ])
        setFormData({
          boxNumber: 0,
          name: '',
          categories: []
        })
    }
    catch (err) {
      console.error(err.message)
    }
  }
  const handleCategories = (e) => {
    setFormData({ ...formData, categories: [...formData.categories, categorie] })
    setCategorie({
      id: '',
      name: ''
    })
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleChangeCategory = (e) => {
    setCategorie({ ...categorie, [e.target.name]: e.target.value })
  }

  return (
    <FormRoomLayout>
      <div className='form_container'>
        <h1>Crear sala.</h1>
        <form onSubmit={handleSumbit} className='form_container'>
          <label>Room Name</label>
          <Input
            name='name'
            placeholder='Room name'
            value={formData.name}
            onChange={(e) => handleChange(e)}
          />
          <label>Número cajas</label>
          <Input
            placeholder='1'
            type='number'
            name='boxNumber'
            value={formData.boxNumber}
            onChange={(e) => handleChange(e)}
          />
          <label>Categorías</label>
          <Input
            placeholder='Finanzas'
            type='text'
            name='name'
            value={categorie.name}
            onChange={(e) => handleChangeCategory(e)}
          />
          <Input
            placeholder='Identificador'
            type='text'
            name='id'
            value={categorie.id}
            onChange={(e) => handleChangeCategory(e)}
          />
          <span className='fake_button' onClick={() => handleCategories()}>Agregar categoria</span>
          <Button style={{ marginTop: '0.5rem' }}>Crear sala</Button>
        </form>
      </div>
    </FormRoomLayout>
  )
}

export default FormRoom