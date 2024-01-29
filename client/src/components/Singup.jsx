import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'

const Singup = () => {
  const [name, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit= (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/signup',{name, email, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }
  return (
    <div>
      <h1>Register</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">
              <strong>Name:</strong>
            </label>
            <input
              type="text"
              placeholder="Enter name"
              autoComplete="off"
              name="name"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="email">
              <strong>Email:</strong>
            </label>
            <input 
              type="text"
              placeholder="Enter email"
              autoComplete="off"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="pasword"> Password:</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button type= "submit">
            Register
          </button>
          <p>Already have an account</p>
          <Link to= '/login'>Login</Link>
        </form>
      </div>
    </div>
  )
}

export default Singup
