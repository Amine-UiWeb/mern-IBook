import { useState } from "react"
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
    <div className="login p-2">

      <h3 className="mbo-1">Login</h3>

      <form className="login-form">

        <label htmlFor="password">Username</label>
        <input 
          type="text" 
          id="username"
          name="username"
          value={username}
          onChange={(e) => onUsernameChange(e.target.value)}
          autoComplete="off"
        />

        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password"
          name="password"
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
        />

        <button onClick={handleSubmit}>
          Log in
        </button>
        
        <div className="fs-0-9">
          Don't have an account?{" "}
          <a href="#" className="underline">Register</a>
        </div>

      </form>

    </div>
  )
}
export default LoginPage