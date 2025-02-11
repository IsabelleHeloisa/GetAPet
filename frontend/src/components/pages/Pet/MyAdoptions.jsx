import api from '../../../utils/api'
import { useState, useEffect } from 'react'
import styles from './Dashboard.module.css'

import RoudedImage from '../../layout/RoudedImage'

function MyAdoptions() {
  const [pets, setPets] = useState([])
  const [token] = useState(localStorage.getItem('token') || '')

  useEffect(() => {
    api
      .get('/pets/myadoptions', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setPets(response.data.pets)
      })
  }, [token])

  return <p>My adoptions</p>
}

export default MyAdoptions
