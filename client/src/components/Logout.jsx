import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Logout = ()=>{
  const navigate = useNavigate()

  axios.defaults.withCredentials = true

  const handleLogout = () => {
    axios
      .get('http://localhost:4000/auth/logout', {})
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