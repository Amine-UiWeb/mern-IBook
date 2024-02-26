import { NavLink } from "react-router-dom"

import Nav from "./Nav"
import Logo from "../../assets/icons/logo.svg"
import { MagnifyingGlass } from "../svgs/MagnifyingGlass"
import "./Header.css"


const Header = () => {
  
  return (
    <header className="header">
      <div className="top-header">

        {/* todo: add a side-panel (like imdb's) */}

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

        <div className="search-container">
          <span className="search-icon">
            <MagnifyingGlass />
          </span>

          <input 
            type="search"
            id="search"
            name="search"
            placeholder="Search titles or Authors..."
          />
        </div>

        <Nav />

      </div>

    </header>
  )
}
export default Header