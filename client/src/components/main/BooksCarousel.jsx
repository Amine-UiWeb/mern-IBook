import { useRef } from "react"
import CarouselCard from "./CarouselCard"
import "./BooksCarousel.css"

const BooksCarousel = ({ books }) => {

  const myRef = useRef()

  const handleScroll = (direction) => {
    if (direction === 'left') myRef.current.scrollLeft -= 175
    else myRef.current.scrollLeft += 175
  }

  console.log(books)

  return (      
    <div className="carousel-container">

      <button onClick={() => handleScroll('left')}>{"\u2770"}</button>
      
      <div className="carousel-wrapper" ref={myRef}>
        {
          books?.length > 0 && books.map(
              (book, i) => <CarouselCard key={i} book={book} />
            )
        }
      </div>
      
      <button onClick={() => handleScroll('right')}>{"\u2771"}</button>
    
    </div>
  )
}
export default BooksCarousel