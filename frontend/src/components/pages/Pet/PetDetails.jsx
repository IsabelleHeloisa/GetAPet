import api from '../../../utils/api'

import { useState, useEffect } from 'react'

import { useParams, Link, useNavigate } from 'react-router-dom'
import styles from './PetDetails.module.css'

import { toast } from 'react-toastify'

function PetDatails() {
  const [pet, setPet] = useState({})
  const { id } = useParams()
  const Navigate = useNavigate()
  const [token] = useState(localStorage.getItem('token') || '')

  useEffect(() => {
    api.get(`/pets/${id}`).then(response => {
      setPet(response.data.pet)
    })
  }, [id])

  return <h1>{pet.name}</h1>
}

export default PetDatails
