// Libraries
import { NavLink } from "react-router-dom"

// Assets
import Logo from "../../assets/logo.svg"
import "./Navbar.css"


const Navbar = () => {
  return (
    <nav className="nav">

      <div className="logo-wrapper p-0-5">
        <NavLink to='/'>
          <img className="logo" src={Logo} alt="logo" />
        </NavLink>
      </div>

      <div className="nav-links">
        <ul>

          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          
          <li>
            <NavLink to='/login'>LogIn</NavLink>
          </li>
          
          <li>
            <NavLink to='/register'>Register</NavLink>
          </li>
          
        </ul>
      </div>

    </nav>
  )
}
export default Navbar
