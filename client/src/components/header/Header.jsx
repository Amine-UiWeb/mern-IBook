import { NavLink } from "react-router-dom"

import Nav from "./Nav"
import Logo from "../../assets/icons/logo.svg"
import { MagnifyingGlass } from "../svgs/MagnifyingGlass"
import "./Header.css"
import { Menu } from "../svgs/Menu"


const Header = () => {
  
  return (
    <header className="header">

        {/* todo: add a side-panel (like imdb's) */}

        <div className="panel-toggler">
          <Menu />
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

    </header>
  )
}
export default Header