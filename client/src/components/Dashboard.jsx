import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Logout from './Logout'

const Dashboard = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')

  axios.defaults.withCredentials = true

  useEffect(() => {
    axios
      .get('http://localhost:4000/auth/verify')
      .then((res) => {
        if (res.data.status) {
          setName(res.data.name)
          console.log(res.data.name)
        } else {
          navigate('/login')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <>
      <div>
        <Logout />
        <h3>Hi {name}!</h3>
        <h2>Design your own!</h2>
        <div></div>
      </div>
    </>
  )
}

export default Dashboard
