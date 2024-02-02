import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [validation, setValidation] = useState('')

  const navigate = useNavigate()

  axios.defaults.withCredentials = true
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const result = await axios.post(
        'http://localhost:4000/auth/forgot-password',
        { email }
      )

      if (result.data.status) {
        console.log(result.data.message)
        alert('We have sent you an email with a link to reset your password.')
        navigate('/login')
      }
    } catch (err) {
      console.log(err.response.data.message)
      const message = err.response.data.message
      setValidation(message)
    }

    setEmail('')
  }
  return (
    <>
      <div>
        <h2>Reset password</h2>
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
            <button type="submit" onClick={handleSubmit}>
              Send
            </button>
            <p style={{ color: 'red' }}>{validation}</p>
          </form>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword
