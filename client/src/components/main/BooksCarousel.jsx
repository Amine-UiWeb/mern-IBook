
import "./BooksCarousel.css"

import data from "../../assets/db/data.json"

const BooksCarousel = () => {

  
  

  console.log(data.data.length)

  return (      
    <div className="carousel-container">
      
      {/* display books with placeholer data, 3 books in each genre */}

      { 
        data.data.length && data.data.map((book, i) => (
            <div key={i} className="carousel-card">
              <img src={book.cover} />
              <p>{book.title}</p>
            </div>
          )
        )
      }

    </div>
  )
}
export default BooksCarousel