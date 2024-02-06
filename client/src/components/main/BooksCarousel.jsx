import { useState, useEffect } from "react"
import CarouselCard from "./CarouselCard"
import "./BooksCarousel.css"

const BooksCarousel = ({ books }) => {

  console.log(books)

  return (      
    <div className="carousel-container">
      
      {/* display books with placeholer data (3 books in each genre) */}

      { 
        books?.length > 0 && 
          books.map((book, i) => <CarouselCard key={i} book={book} />)
      }

    </div>
  )
}
export default BooksCarousel