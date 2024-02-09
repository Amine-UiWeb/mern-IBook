import { useRef } from "react"
import CarouselCard from "./CarouselCard"
import "./BooksCarousel.css"

const BooksCarousel = ({ books }) => {

  const myRef = useRef()

  const handleScroll = (direction) => {
    // set scrolling width to 350 instead of 175, to scroll 2 times faster
    if (direction === 'left') myRef ? myRef.current.scrollLeft -= 350 : null
    else myRef ? myRef.current.scrollLeft += 350 : null
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