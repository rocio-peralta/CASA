import { Link } from 'react-router-dom'
import Logout from './Logout'
import Singup from './Singup'

const Home = () => {
  return (
    <>
      <div>Home</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque debitis
        quos fugit iure ab omnis quibusdam dolore perspiciatis quis, in sunt
        accusantium inventore culpa, sit voluptate, veritatis ipsa eligendi?
        Dolores!
      </p>

      <Logout />
      <Singup />
      <button>
        <Link to="/dashboard">Design tool</Link>
      </button>
      <br></br>
    </>
  )
}

export default Home
