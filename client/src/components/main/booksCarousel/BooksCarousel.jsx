import { useCallback, useEffect, useRef, useState } from "react"

import { ChevronLeft } from "../../svgs/ChevronLeft"
import { ChevronRight } from "../../svgs/ChevronRight"
import CarouselCard from "./CarouselCard"
import "./BooksCarousel.css"


const BooksCarousel = ({ books }) => {
  
  const [dispLeftArr, setDispLeftArr] = useState(false)
  const [dispRightArr, setDispRightArr] = useState(true)
  const myRef = useRef()

  
  const dispHideArrows = () => {
    if (myRef.current.scrollLeft <= 0) setDispLeftArr(false)
    else setDispLeftArr(true)

    let scrolled = myRef.current.scrollLeft + myRef.current.clientWidth
    if (scrolled < myRef.current.scrollWidth) setDispRightArr(true)
    else setDispRightArr(false)
  }

  const Scroll = () => {
    let t;
    return function() {
      clearTimeout(t)
      t = setTimeout(dispHideArrows, 100)
    }
  }
  let debouncedScroll = useCallback(Scroll())

  const handleArrowClick = (direction) => {
    if (direction === 'left') myRef.current.scrollLeft -= 350 
    if (direction === 'right') myRef.current.scrollLeft += 350
    dispHideArrows()
  }


  return (
    <div className="carousel-container">

      {/* todo: improve card appearance: make it like in openlibrary website */}

      { dispLeftArr && 
        <div className="carousel-arrow" onClick={() => handleArrowClick('left')}>
          <ChevronLeft />
        </div>
      }
      
      <div className="carousel-wrapper" ref={myRef} onScroll={debouncedScroll}>
        { Array(books) && books?.length > 0 && books.map(
            (book, i) => <CarouselCard key={i} book={book} />
          )
        }
      </div>
      
      { dispRightArr &&
        <div className="carousel-arrow" onClick={() => handleArrowClick('right')}>
          <ChevronRight />
        </div>
      }
    
    </div>
  )
}
export default BooksCarousel