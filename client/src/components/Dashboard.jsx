import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const Dashboard = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  axios.defaults.withCredentials = true
  useEffect(() => {
    axios
      .get('http://localhost:4000/auth/verify', {})
      .then((res) => {
        if (res.data.status) {
          setName(res.data.name)
          console.log('THis is name' + res.data.name)
          console.log('You are logged in')
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
        <h3>Hi {name}!</h3>
        <h2>Design your own!</h2>
        <div></div>
      </div>
    </>
  )
}

export default Dashboard
