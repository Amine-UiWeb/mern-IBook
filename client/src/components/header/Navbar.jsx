// Libraries
import { NavLink } from "react-router-dom"

// Assets
import Logo from "../../assets/icons/logo.svg"
import "./Navbar.css"


const Navbar = () => {
  return (
    <nav className="nav">

      {/* todo: customize header to look like imdb header */}
      {/* todo: add a side panel toggler: either here or in search bar */}
      {/* todo: add a side panel like imdb's */}

      <div className="panel-toggler">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" role="presentation">
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"></path>
        </svg>
      </div>

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

      <div className="mode-toggler"></div>

    </nav>
  )
}
export default Navbar
