import { useState, useEffect } from "react"

import { subjects } from "../utils/constants"

import BooksCarousel from "../components/main/BooksCarousel"
import "./LandingPage.css"
import { ChevronRight } from "../components/svgs/ChevronRight"


const LandingPage = () => {

  const [books, setBooks] = useState({})
  // console.log(books)

  useEffect(() => {

    const fetchBooks = async (url) => {
      fetch(url, { cache: 'force-cache' })
        .then(res => res.json())
        .then(data => {
          // append the fetched books to the state 
          setBooks(prev => ({ ...prev, [data.name]: data.works }))
        })
    }
    
    // fetch books for each specified subject 
    Object.keys(subjects).forEach(subject => {
      fetchBooks(`https://openlibrary.org/subjects/${subjects[subject]}.json`)
    })

  }, [])

  // console.log(books)

  return (
    <div className="landing-page">

      {/* todo: add a landing banner (contains image and description) */}
      <div className="landing-banner">
        <img src="" alt="" />
      </div>
      
      { // pass each subject books to a BooksCarousel componenet
        Object.keys(books).map(book => (
          <section key={book} className="books-section">
            
            <h3 className="h3 ff-times m-1">
              <a href="#" className="cap">
                <span className="mr-0-5">{book}</span>
                <ChevronRight />
              </a>
            </h3>

            <div className="books-carousel">
              <BooksCarousel books={books[book]} />
            </div>

          </section>
        ))
      }  
    </div>
  )
}
export default LandingPage
