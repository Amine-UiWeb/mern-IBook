import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

import { Sun, Moon } from "../svgs/ThemeIcons"
import { ChevronRight } from "../svgs/ChevronRight"
import { GENRES } from "../../utils/constants"
import "./Nav.css"


const Nav = ({ isPanelOpen, handleToggler }) => {

  // todo: replace with rtk state
  const [isLoggedIn, setIsLoggedIn] = useState(false)
 
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    // toggle prefers-theme to: light or dark
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light')
  }


  return (
    <nav 
      onMouseLeave={handleToggler} 
      className={isPanelOpen ? 'nav open' : 'nav'}
    >

      <div className="browse-wrapper">
        <button className="fw-600 fs-0-9">Browse</button>
        <ul className="browse-ul fw-500 fs-0-9">

          <li className="genres-wrapper scrollbar-1">
            <a href="#">Genres</a>
            <ChevronRight />
            <ul className="genres-ul">
              { Object.keys(GENRES)?.map((genre, i) => (
                  <li key={i}>
                    <NavLink to={`browse/genres/${GENRES[genre]}`}>
                      {genre}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </li>
          
          <li><NavLink to="browse/awards">Awards</NavLink></li>
          <li><NavLink to="browse/recommendations">Recommendations</NavLink></li>
          <li><NavLink to="browse/popular">Most Popular</NavLink></li>
          <li><NavLink to="browse/explore">Explore</NavLink></li>
        
        </ul>
      </div>

      <div className="nav-links">
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          { isLoggedIn ? 
              <li><NavLink to='/user/collection'>My Collection</NavLink></li>
              : (
                <>
                  <li><NavLink to='/login'>LogIn</NavLink></li>
                  <li><NavLink to='/register'>Register</NavLink></li>
                </>
              )
          }
        </ul>
      </div>

      <div className="mode-toggler" style={{ 
          "--theme": theme === 'light' ? '##7e7e7e' : 'var(--pri-blue-200)' 
      }}>
        { theme === 'light' ? <Sun /> : <Moon /> }
        <input 
          type="checkbox" 
          id="theme-toggler" 
          className="theme-toggler" 
          onChange={toggleTheme}
        />
      </div>

    </nav>
  )
}
export default Nav