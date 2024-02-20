import { useRef, useState } from "react"
import { Link } from "react-router-dom"

import Eye from "../components/svgs/Eye";
import EyeSlash from "../components/svgs/EyeSlash";
import "./LoginPage.css"


const LoginPage = () => {

  const [email, setEmail] = useState('')

  const [pw, setPw] = useState('')
  const [isPwVisible, setIsPwVisible] = useState(false)

  const [validationError, setValidationError] = useState('')
  const errorRef = useRef()


  const onEmailChange = (value) => setEmail(prev => value)
  const onPasswordChange = (value) => setPw(prev => value)

  const isSomeFieldsEmpty = () => !email || !pw
  const togglePwVisible = () => setIsPwVisible(prev => !prev)


  const handleSubmit = (e) => {
    e.preventDefault()

    // if login error set focus on errorRef
  }


  return (
    <div className="login">
      
      <h3>Login</h3>

      <form className="login-form">

        <div 
          ref={errorRef}
          className={validationError ? "error" : "offScreen"}
          aria-live="assertive"
        >
          {validationError}
        </div>

        {/* email */}
        <label htmlFor="email">Email</label>
        <input 
          type="text" 
          id="email"
          name="email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          autoComplete="off"
        />

        {/* password */}
        <label className="flex-row jc-sb" htmlFor="pw">
          <span>Password</span>
          
          <span className="eye flex-row ai-c gap-0-25" onClick={togglePwVisible}>
            {isPwVisible ? <Eye /> : <EyeSlash />}
            {isPwVisible ? "Hide ": "Show"}
          </span>
        </label>
        <input 
          type={!isPwVisible ? "password" : "text"} 
          id="pw"
          name="pw"
          value={pw}
          onChange={(e) => onPasswordChange(e.target.value)}
        />

        <button 
          className="btn btn-primary" 
          onClick={handleSubmit} 
          disabled={isSomeFieldsEmpty()} 
        >Log in</button>
        
        <p className="fs-0-9 fw-500">
          Don't have an account yet?{" "}
          <Link to="/register" className="underline">Register</Link>
        </p>

      </form>

    </div>
  )
}
export default LoginPage