import { useEffect, useState } from "react"
import "./CarouselCard.css"

const CarouselCard = ({ book }) => {

  return (  
    <div className="carousel-card">
      <img 
        src={
          `https://covers.openlibrary.org/b/id/${book?.cover_id}-L.jpg`
        }/>
      <p>{book?.title}</p>
    </div>
  )
}
export default CarouselCard