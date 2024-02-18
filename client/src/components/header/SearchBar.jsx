import { subjects } from "../../utils/constants"
import MagnifyingGlass from "../../assets/icons/magnifying-glass.svg"
import "./SearchBar.css"


const SearchBar = () => {

  return (
    <div className="search-bar">

      <div className="search-container">
        <span className="search-icon">
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"></path>
          </svg>
        </span>

        <input 
          type="search"
          id="search"
          name="search"
          placeholder="Search book title or Author name..."
        />
      </div>

      <div className="header-buttons">  

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

    </div>
  )
}
export default SearchBar