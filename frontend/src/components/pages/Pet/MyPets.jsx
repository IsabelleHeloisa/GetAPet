import api from '../../../utils/api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import RoudedImage from '../../layout/RoudedImage'
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

  return (
    <section>
      <div>
        <h1>MyPets</h1>
        <Link to="/pet/add">Cadastrar Pet</Link>
      </div>
      <div>
        {pets.length > 0 && <p>Meus pets cadastrados</p>}
        {pets.length === 0 && <p>Não há pets cadstrados</p>}
      </div>
    </section>
  )
}
export default MyPets
