import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
    <nav>

    <div>
      <span>Navbar</span>
    </div>
    <div>
       <Link to = '/about'>About</Link><br></br>
       <Link to = '/login'>Login</Link>
    </div>
    </nav>
    </>
  )
}

export default Navbar;