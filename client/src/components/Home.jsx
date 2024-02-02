import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Home = () => {
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
      <div>Home</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque debitis
        quos fugit iure ab omnis quibusdam dolore perspiciatis quis, in sunt
        accusantium inventore culpa, sit voluptate, veritatis ipsa eligendi?
        Dolores!
      </p>

      <button>
        <Link to="/dashboard">Dashboard</Link>
      </button>
      <br></br>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Home
