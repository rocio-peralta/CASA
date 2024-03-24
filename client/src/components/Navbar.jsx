import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <div className="grid grid-cols-2 ">
          <div className="grid justify-items-start content-center p-5">
            <Link
              to="/"
              className="font-typographicPrimary text-secondaryColor text-xl sm:text-3xl"
            >
              SANCTUARY
            </Link>
          </div>
          <div className="fixed flex justify-self-end content-center p-5">
         
            <svg
              width="10px"
              height="10px"
              viewBox="0 0 6 6"
              id="meteor-icon-kit__solid-circle-xxxs"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 6C1.3431 6 0 4.6569 0 3C0 1.3431 1.3431 0 3 0C4.6569 0 6 1.3431 6 3C6 4.6569 4.6569 6 3 6z"
                  fill="#C8C2AF"
                ></path>
              </g>
            </svg>
          </div>
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

export default Navbar
