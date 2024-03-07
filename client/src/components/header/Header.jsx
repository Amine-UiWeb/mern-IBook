import { useState, useEffect, useCallback, memo } from "react"
import { Link, NavLink } from "react-router-dom"
import axios from "axios"

import { debounce } from "../../utils/helpers/debounce.js"

import Nav from "./Nav"
import Logo from "../../assets/icons/logo.svg"
import { Menu } from "../svgs/Menu"
import { MagnifyingGlass } from "../svgs/MagnifyingGlass"
import "./Header.css"

const BASE_URL = 'https://openlibrary.org/search.json?'
const fields = 'title,author_name,key,cover_edition_key'
const COVER_URL = (value) => `https://covers.openlibrary.org/b/olid/${value}-S.jpg`


const Header = () => {

  const [isPanelOpen, setIsPanelOpen] = useState(false)

  const [searchText, setSearchText] = useState('')

  const [isSearching, setIsSearching] = useState(false)
  const [searchResults, setSearchResults] = useState([])


  const handleToggler = () => setIsPanelOpen(prev => !prev)

  const onSearchChange = (e) => setSearchText(e.target.value)


  const memoizedSearch = useCallback(
    (() => {
      let to

      return (val) => {
        clearTimeout(to)
        to = setTimeout(async () => {
          try { 
            setIsSearching(true)
            const encodedTitle = encodeURIComponent(val)
            const url = `${BASE_URL}q=${encodedTitle}&fields=${fields}&limit=5`
            const { data } = await axios.get(url,
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

  
  return (
    <header className="header">

        <div 
          className={"panel-toggler" + (isPanelOpen ? " active" : "")}
          onClick={handleToggler}
        >
          <Menu />
        </div>

        <div className="logo-wrapper">
          <NavLink to='/'>
            <img className="logo" src={Logo} alt="logo" />
          </NavLink>
        </div>

        <div 
          className="search-container"
          onMouseLeave={hideSearchResults}
        >
          {/* todo: add a dropdown to use search queries */}
          
          <span className="search-icon">
            {!isSearching ? <MagnifyingGlass /> : "..."}
            {/* todo: display a spining icon when loading results */}
          </span>

          <input
            type="search"
            id="search"
            name="search"
            placeholder="Search by: Title, Author, Genre, ..."
            value={searchText}
            // todo: display search results when cursor is visible 
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
                      <Link to={doc?.key}>
                        <h5 className="h5">{doc?.title}</h5>
                      </Link>
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

        <Nav isPanelOpen={isPanelOpen} handleToggler={handleToggler} />

    </header>
  )
}
export default Header