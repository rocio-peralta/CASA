import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../api'

const Logout = ()=>{
  const navigate = useNavigate()

  axios.defaults.withCredentials = true

  const handleLogout = () => {
    axios
      .get(`${API_URL}/logout`, {})
      .then((res) => {
        if (res.data.status) {
          navigate('/login')
        }
      })
      .catch((err) => {
        console.log(err)
      })
    }
  return (
    <>
     <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Logout