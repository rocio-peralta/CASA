import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
    <nav className="nav">
    <div>
      <Link to = '/' className="font-logo text-secondaryColor text-xl">SANCTUARY</Link>
    </div>
    {/* <div>
       <Link to = '/about'>About</Link><br></br>
       <Link to = '/login'>Login</Link>
       <Link to = '/signup'>Signup</Link>
    </div> */}
    </nav>
    </>
  )
}

export default Navbar;