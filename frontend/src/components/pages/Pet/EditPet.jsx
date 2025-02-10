import api from '../../../utils/api'

import { useState, useEffect } from 'react'

import styles from './AddPet.module.css'

import PetForm from '../../form/PetForm'

import { useNavigate, useParams } from 'react-router-dom'

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

  async function updatePet(pet) {}

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
