import { NavLink } from "react-router-dom"

import Nav from "./Nav"
import Logo from "../../assets/icons/logo.svg"
import { MagnifyingGlass } from "../svgs/MagnifyingGlass"
import "./Header.css"
import { Menu } from "../svgs/Menu"
import { useState } from "react"


const Header = () => {

  const [isPanelOpen, setIsPanelOpen] = useState(false)

  const handleToggler = () => {
    document.querySelector("[data-panel-toggler]").classList.toggle('active')
    setIsPanelOpen(prev => !prev)
  } 
  
  return (
    <header className="header">

        {/* todo: add a side-panel (like imdb's) */}

        <div className="panel-toggler" data-panel-toggler onClick={handleToggler}>
          <Menu />
        </div>

        <div className="logo-wrapper p-0-5">
          <NavLink to='/'>
            <img className="logo" src={Logo} alt="logo" />
          </NavLink>
        </div>

        <div className="search-container">
          {/* todo: add a dropdown to use search queries */}
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

        <Nav isPanelOpen={isPanelOpen} handleToggler={handleToggler} />

    </header>
  )
}
export default Header