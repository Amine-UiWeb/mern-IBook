import { useState, useEffect } from "react"
import CarouselCard from "./CarouselCard"
import "./BooksCarousel.css"

const BooksCarousel = ({ books }) => {

  console.log(books)

  return (      
    <div className="carousel-container">
      
      {
        books?.length > 0 && 
          books.map((book, i) => <CarouselCard key={i} book={book} />)
      }

    </div>
  )
}
export default BooksCarousel