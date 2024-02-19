import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import "./LoginPage.css"
import ExclamationMark from "../components/svgs/ExclamationMark";

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const USERNAME_REGEX = /^[0-9A-Za-z]{6,16}$/
const PASSWORD_REGEX = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z]).{8,32}$/


const RegisterPage = () => {

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPwd, setConfirmPwd] = useState('')
  const [isValid, setIsValid] = useState({})

  
  useEffect(() => {
    if (email && !EMAIL_REGEX.test(email)) 
      setIsValid(prev => ({ ...prev, email: true }))
    else setIsValid(prev => ({ ...prev, email: false }))
  }, [email])

  useEffect(() => {
    if (username && !USERNAME_REGEX.test(username)) 
      setIsValid(prev => ({ ...prev, username: true }))
    else setIsValid(prev => ({ ...prev, username: false }))
  }, [username])

  useEffect(() => {
    if (password && !PASSWORD_REGEX.test(password)) 
      setIsValid(prev => ({ ...prev, password: true })) 
    else setIsValid(prev => ({ ...prev, password: false }))
  }, [password])


  const onEmailChange = (value) => setEmail(prev => value)
  const onUsernameChange = (value) => setUsername(prev => value)
  const onPasswordChange = (value) => setPassword(prev => value)
  const onConfirmPwdChange = (value) => setConfirmPwd(prev => value)


  const handleSubmit = (e) => {
    e.preventDefault()

    // alert('register')
  }


  return (
    <div className="login">

      <h3>Register</h3>

      {/* todo: manage accessibility for all fields */}
      <form className="login-form">

        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email"
          name="email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          autoComplete="off"
          placeholder="xxxxxxxx@gmail.com"
        />
        { isValid?.email && (
            <span>
              <ExclamationMark />
              <p>Expected format: (text)@(text).(2-4 characters)</p>
            </span>
          )
        }

        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          id="username"
          name="username"
          value={username}
          onChange={(e) => onUsernameChange(e.target.value)}
          autoComplete="off"
          placeholder="Enter a username, e.g.: Mark"
        />
        { isValid?.username && (
            <span>
              <ExclamationMark />
              <p>Must be between 4~12 characters long.</p>
            </span>
          )
        }

        {/* todo: add an icon to show/hide password on click */}
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password"
          name="password"
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
          placeholder="Must be 8-24 charachters long"
        />
        { isValid?.password && (
            <span>
              <ExclamationMark />
              <p>Must: be 8~32 characters long, contain at least one number, one uppercase letter and one lowercase letter.</p>
            </span>
          )
        }

        <label htmlFor="confirmPwd">Confirm Password</label>
        <input 
          type="password" 
          id="confirmPwd"
          name="confirmPwd"
          value={confirmPwd}
          onChange={(e) => onConfirmPwdChange(e.target.value)}
          placeholder="Retype password..."
        />
        { isValid?.confirmPwd && (
            <span>
              <ExclamationMark />
              <p>Username must be between 4 and 12 chars long.</p>
            </span>
          )
        }

        <button className="btn" onClick={handleSubmit}>Register</button>
        
        <div className="fs-0-9">
          Already have an account?{" "}
          <Link to="/login" className="underline">Log in</Link>
        </div>

      </form>    
      
    </div>
  )
}

export default RegisterPage
