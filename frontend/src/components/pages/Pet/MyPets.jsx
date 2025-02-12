import api from '../../../utils/api'
import styles from './Dashboard.module.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import RoudedImage from '../../layout/RoudedImage'
import { toast } from 'react-toastify'
function MyPets() {
  const [pets, setPets] = useState([])
  const [token] = useState(localStorage.getItem('token') || '')

  useEffect(() => {
    api
      .get('/pets/mypets', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setPets(response.data.pets)
      })
  }, [token])

  async function removePet(id) {
    let msgType = 'success'
    const data = await api
      .delete(`/pets/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        const updatedPets = pets.filter(pet => pet._id !== id)
        setPets(updatedPets)
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

  async function concludeAdoption(id) {
    let msgType = 'success'

    const data = await api
      .patch(
        `/pets/conclude/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
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
      <div className={styles.petlist_header}>
        <h1>Meus Pets</h1>
        <Link to="/pet/add">Cadastrar Pet</Link>
      </div>
      <div className={styles.petlist_container}>
        {pets.length > 0 &&
          pets.map(pet => (
            <div className={styles.petlist_row} key={pet._id}>
              <RoudedImage
                src={`${process.env.REACT_APP_API}/images/pets/${pet.images[0]}`}
                alt={pet.name}
                width="px75"
              />
              <span className="bold">{pet.name}</span>
              <div className={styles.actions}>
                {pet.available ? (
                  <>
                    {pet.adopter && (
                      <button
                        className={styles.conclude_btn}
                        onClick={() => {
                          concludeAdoption(pet._id)
                        }}
                      >
                        Concluir adoção
                      </button>
                    )}
                    <Link to={`/pet/edit/${pet._id}`}>Editar</Link>
                    <button
                      onClick={() => {
                        removePet(pet._id)
                      }}
                    >
                      Excluir
                    </button>
                  </>
                ) : (
                  <p>Pet já adotado</p>
                )}
              </div>
            </div>
          ))}
        {pets.length === 0 && <p>Não há pets cadstrados</p>}
      </div>
    </section>
  )
}
export default MyPets
