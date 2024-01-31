import Logo from "../assets/logo.svg"
import "./Navbar.css"

const Navbar = () => {

  return (
    <nav className="nav">

      <div className="logo-wrapper p-0-5">
        <a href="/">
          <img className="logo" src={Logo} alt="logo" />
        </a>
      </div>

      <div className="nav-links">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#">Log In</a></li>
          <li><a href="#">Register</a></li>
        </ul>
      </div>

    </nav>
  )
}
export default Navbar
