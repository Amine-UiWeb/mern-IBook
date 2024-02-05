import CarouselCard from "./CarouselCard"
import "./BooksCarousel.css"

import data from "../../assets/db/data.json"

const BooksCarousel = () => {

  return (      
    <div className="carousel-container">
      
      {/* display books with placeholer data (3 books in each genre) */}

      { 
        data?.books?.length && data.books.map((book, i) => (
            <CarouselCard key={i} book={book} />
          )
        )
      }

    </div>
  )
}
export default BooksCarousel