import "./BooksCarousel.css"

import data from "../../assets/db/data.json"
import CarouselCard from "./CarouselCard"

const BooksCarousel = () => {

  return (      
    <div className="carousel-container">
      
      {/* display books with placeholer data, 3 books in each genre */}

      { 
        data.data.length && data.data.map((book, i) => (
            <CarouselCard key={i} book={book} />
          )
        )
      }

    </div>
  )
}
export default BooksCarousel