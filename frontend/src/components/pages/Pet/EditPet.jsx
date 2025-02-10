import api from '../../../utils/api'

import { useState, useEffect } from 'react'

import styles from './AddPet.module.css'

import PetForm from '../../form/PetForm'

import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

function EditPet() {
  const [pet, setPet] = useState({})
  const [token] = useState(localStorage.getItem('token') || '')
  const { id } = useParams()
  const Navigate = useNavigate()

  useEffect(() => {
    api
      .get(`/pets/${id}`, {
        Authorization: `Bearer ${token}`
      })
      .then(response => {
        setPet(response.data.pet)
      })
  }, [token, id])

  async function updatePet(pet) {
    let msgType = 'success'

    const formData = new FormData()

    await Object.keys(pet).forEach(key => {
      if (key === 'images') {
        for (let i = 0; i < pet[key].length; i++) {
          formData.append('images', pet[key][i])
        }
      } else {
        formData.append(key, pet[key])
      }
    })

    const data = await api
      .patch(`pets/${pet._id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        return response.data
      })
      .catch(err => {
        msgType = 'error'
        return err.response.data
      })

    if (msgType === 'success') {
      toast.success(data.message)
    } else {
      toast.error(data.message)
    }
  }

  return (
    <section>
      <div className={styles.addpet_header}>
        <h1>Editando o Pet: {pet.name}</h1>
        <p>Depois da edição os dados serão atualizados no sistema</p>
      </div>
      {pet.name && (
        <PetForm handleSubmit={updatePet} btnText="Atualizar" petData={pet} />
      )}
    </section>
  )
}
export default EditPet
