import { useState } from "react"
import "./LoginPage.css"

const RegisterPage = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPwd, setConfirmPwd] = useState('')


  const onUsernameChange = (value) => setUsername(prev => value)
  const onPasswordChange = (value) => setPassword(prev => value)
  const onConfirmPwdChange = (value) => setConfirmPwd(prev => value)

  const handleSubmit = (e) => {
    e.preventDefault()

    alert('register')
  }


  return (
    <div className="login p-2">

      <h3 className="mbo-1">Register</h3>

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

        <label htmlFor="confirmPwd">Confirm Password</label>
        <input 
          type="password" 
          id="confirmPwd"
          name="confirmPwd"
          value={confirmPwd}
          onChange={(e) => onConfirmPwdChange(e.target.value)}
        />

        <button onClick={handleSubmit}>
          Register
        </button>
        
        <div className="fs-0-9">
          Already have an account?{" "}
          <a href="#" className="underline">Log in</a>
        </div>

      </form>    </div>
  )
}
export default RegisterPage