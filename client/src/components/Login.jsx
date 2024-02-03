import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { API_URL } from '../api'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validation, setValidation] = useState('')

  const navigate = useNavigate()

  axios.defaults.withCredentials = true
  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post(`${API_URL}/login`, { email, password })
      .then((result) => {
        if (result.data.status) {
          console.log(result)
          navigate('/')
        }
      })
      .catch((err) => {
        console.log(err.response.data.message)
        const message = err.response.data.message
        setValidation(message)
        setEmail('')
        setPassword('')
      })
  }
  return (
    <>
      <div>
        <h2>Login</h2>
        <div>
          <form>
            <div>
              <label htmlFor="email"> Email:</label>
              <input
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="pasword"> Password:</label>
              <input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <p style={{ color: 'red' }}>{validation}</p>
            <button onClick={handleSubmit}>Login</button>
            <br></br>
            <Link to="/forgotPassword">Forgot password?</Link>
            <p>
              Don`t have an account? <Link to="/signup">Signup</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
