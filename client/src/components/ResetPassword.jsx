import { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { API_URL } from '../api'

const ResetPassword = () => {
  const [password, setPassword] = useState('')
  const {token} = useParams()

  const navigate = useNavigate()

  // axios.defaults.withCredentials = true
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const result = await axios.post(
        `${API_URL}/reset-password/`+token,
        { password }
      )

      if (result.data.status) {
        navigate('/login')
      }
      console.log(result.data.message);
    } catch (err) {
      console.log(err.response.data.message)
    }
  }
  return (
    <>
      <div>
        <h2>Reset password</h2>
        <div>
          <form>
            <div>
              <label htmlFor="pasword"> New Password:</label>
              <input
                type="password"
                placeholder="*********"
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <button type="submit" onClick={handleSubmit}>
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ResetPassword
