import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

import { Sun, Moon } from "../svgs/ThemeIcons"
import "./Nav.css"


const Nav = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    // change prefers-theme: dark
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light')
  }

  return (
    <nav className="nav">

      <div className="nav-buttons">  
        <div className="browse-wrapper">
          <button className="fw-600 fs-0-9">Browse</button>
          <ul className="browse-ul fw-500 fs-0-9">
            <li>Genre</li>
            <li>Awards</li>
            <li>Recommendations</li>
            <li>Most Popular</li>
            <li>Explore</li>
          </ul>
        </div>

        <button className="fw-600 fs-0-9">My Collection</button>
      </div>

      <div className="nav-links">
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/login'>LogIn</NavLink></li>
          <li><NavLink to='/register'>Register</NavLink></li>
        </ul>
      </div>

      <div 
        className="mode-toggler" 
        style={{ "--theme": theme === 'light' ? '##7e7e7e' : 'var(--pri-blue-200)' }}
      >
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