import { useState } from "react"
import { Link } from "react-router-dom"

import "./LoginPage.css"


const LoginPage = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const onUsernameChange = (value) => setUsername(prev => value)
  const onPasswordChange = (value) => setPassword(prev => value)

  const handleSubmit = (e) => {
    e.preventDefault()

    alert('login')
  }


  return (
    <div className="login">

      <h3>Login</h3>

      <form className="login-form">

        <label htmlFor="password" className="fw-500">Username</label>
        <input 
          type="text" 
          id="username"
          name="username"
          value={username}
          onChange={(e) => onUsernameChange(e.target.value)}
          autoComplete="off"
        />

        <label htmlFor="password" className="fw-500">Password</label>
        <input 
          type="password" 
          id="password"
          name="password"
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
        />

        <button className="btn" onClick={handleSubmit}>Log in</button>
        
        <div className="fs-0-9 fw-500">
          Don't have an account yet?{" "}
          <Link to="/register" className="underline">Register</Link>
        </div>

      </form>

    </div>
  )
}
export default LoginPage