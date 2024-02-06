import { useState, useEffect } from "react"

import { urls } from "../utils/constants"

import BooksCarousel from "../components/main/BooksCarousel"
import "./LandingPage.css"


const LandingPage = () => {

  const [books, setBooks] = useState({})

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
    Object.keys(urls).forEach(subject => {
      fetchBooks(urls[subject])
    })

  }, [])

  // console.log(books)

  return (
    <div className="landing-page">
      {
        // pass each subject books to a BooksCarousel componenet
        Object.keys(books).map(book => (
          <section key={book} className="books-section">
            
            <h3 className="h3 ff-times p-1">
              <a href="#" className="hover-underline">
                {book.toString().toUpperCase()}
              </a>
            </h3>

            <div className="books-container">
              <BooksCarousel books={books[book]} />
            </div>

          </section>
        ))
      }  
    </div>
  )
}
export default LandingPage
