import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Singup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:4000/auth/signup', { username, email, password })
      .then((result) => {
        if (result.data.status) {
          console.log(result)
          navigate('/login')
        }
      })
      .catch((err) => console.log(err))
    setUsername('')
    setEmail('')
    setPassword('')
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
              placeholder="Enter Name"
              value={username}
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
              placeholder="Enter Email"
              value={email}
              autoComplete="off"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="pasword"> Password:</label>
            <input
              type="password"
              placeholder="*********"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button type="submit">Register</button>
          <p>
            Already have an account <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Singup
