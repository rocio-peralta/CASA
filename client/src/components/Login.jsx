import { useState } from "react"
const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = () => {
  }
  return (
    <>
      <div>
        <h2>Login</h2>
        <div>
          <form>
            <div>
            <label htmlFor = "username"> Username:</label>
            <input type = "text" placeholder="Enter Username" onChange={(e)=> setUsername(e.target.value)}></input>
            </div>
            <div>
            <label htmlFor = "pasword"> Password:</label>
            <input type = "password" placeholder="Enter Password" onChange={(e)=> setPassword(e.target.value)}></input>
            </div>
            <button onClick={handleSubmit}>Login</button>
          </form>
        </div>
      </div>
    </>
  )
} 

export default Login;