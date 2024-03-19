import { useState, useEffect, useCallback, memo } from "react"
import { Link, NavLink } from "react-router-dom"
import axios from "axios"

import Nav from "./Nav"
import Logo from "../../assets/icons/logo.svg"
import { Menu } from "../svgs/Menu"
import { MagnifyingGlass } from "../svgs/MagnifyingGlass"
import { Spinner } from "../loading/spinner/Spinner.jsx"
import "./Header.css"

const BASE_URL = 'https://openlibrary.org/search.json?'
const fields = 'title,author_name,key,cover_edition_key'
const COVER_URL = (coverID) => `https://covers.openlibrary.org/b/olid/${coverID}-S.jpg`


const Header = () => {

  const [isPanelOpen, setIsPanelOpen] = useState(false)

  const [searchText, setSearchText] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [searchResults, setSearchResults] = useState([])


  const togglePanel = () => setIsPanelOpen(prev => !prev)

  const onSearchChange = (e) => setSearchText(e.target.value)


  const memoizedSearch = useCallback(
    (() => {
      let to

      return (val) => {
        clearTimeout(to)
        to = setTimeout(async () => {
          try { 
            setIsSearching(true)
            let encodedTitle = encodeURIComponent(val)
            let url = `${BASE_URL}q=${encodedTitle}&fields=${fields}&limit=5`
            let { data } = await axios.get(url, 
              { headers: { 'Content-Type': 'application/json' } }
            );
            setSearchResults(data?.docs)
          }
          catch (e) { console.error(e); }
          finally { setIsSearching(false) }
        }, 500)
      }
    })()
  , [])

  useEffect(() => { if (searchText[2]) memoizedSearch(searchText) }, [searchText])


  const displaySearchResults = (e) => 
    e.target.closest('.search-container').classList.add('active') 

  const hideSearchResults = (e) =>
    e.target.closest('.search-container').classList.remove('active')

  // todo: copy imdb website scrollbar appearance and main container styling
  
  return (
    <header className="header">

        <div 
          className={"panel-toggler" + (isPanelOpen ? " active" : "")}
          onClick={togglePanel}
        >
          <Menu />
        </div>

        <div className="logo-wrapper">
          <NavLink to='/'>
            <img className="logo" src={Logo} alt="logo" />
          </NavLink>
        </div>

        <div className="search-container" onMouseLeave={hideSearchResults}>
          
          <span className="search-icon relative">
            {!isSearching ? <MagnifyingGlass /> : <Spinner />}
            {/* todo: display a spining icon when loading results */}
          </span>

          <input
            type="search"
            id="search"
            name="search"
            placeholder="Search by: Title, Author, Genre, ..."
            value={searchText}
            // todo: display search-results when cursor is visible 
            onChange={onSearchChange}
            onPointerDown={displaySearchResults}
          />

          <div className="search-results">
            <ul>
              {
                searchResults.map((doc, i) => (
                  <li key={i}>

                    <div className="thumbnail">
                      <img src={COVER_URL(doc?.cover_edition_key)} />
                    </div>
                    
                    <div>
                      <Link to={doc?.key}><h5 className="h5">{doc?.title}</h5></Link>
                      <Link to={'/author/' + doc?.author_key?.[0]}>
                        <span>{doc?.author_name?.[0]}</span>
                      </Link>
                    </div>

                  </li>
                ))
              }
            </ul>
          </div>
        </div>

        <Nav isPanelOpen={isPanelOpen} setIsPanelOpen={setIsPanelOpen} />

    </header>
  )
}
export default Header