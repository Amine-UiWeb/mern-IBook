import Navbar from "./Navbar"
import SearchBar from "./searchBar"

import "./Header.css"


const Header = () => {
  
  return (
    <header className="header">
      <Navbar />
      <SearchBar />
    </header>
  )
}
export default Header