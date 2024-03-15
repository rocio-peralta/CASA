import { Link } from 'react-router-dom'
import Navbar from './Navbar'
// import Logout from './Logout'
// import Singup from './Singup'

const Home = () => {
  return (
    <>
      {/* <div className="text-3xl bg-slate-700">Home</div> */}
      {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque debitis
        quos fugit iure ab omnis quibusdam dolore perspiciatis quis, in sunt
        accusantium inventore culpa, sit voluptate, veritatis ipsa eligendi?
        Dolores!
      </p> */}
      <Navbar />
      <h1 className="font-primaryTypography text text-3xl text-secondaryColor">
        DESIGN
      </h1>
      <h1 className="font- text text-3xl text-secondaryColor font-test font-thin">
        BAY OF PLENTY
      </h1>

      {/* <Logout />
      <Singup /> */}
      <button>
        <Link to="/dashboard">Design tool</Link>
      </button>
      <br></br>
    </>
  )
}

export default Home
