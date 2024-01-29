import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
    <nav className="nav">
    <div>
      <Link to = '/'>Navbar</Link>
    </div>
    <div>
       <Link to = '/about'>About</Link><br></br>
       <Link to = '/login'>Login</Link>
       <Link to = '/signup'>Signup</Link>
    </div>
    </nav>
    </>
  )
}

export default Navbar;