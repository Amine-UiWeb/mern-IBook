import { useEffect, useState } from "react"

import DotsLoader from "../loading/DotsLoader"
import "./CarouselCard.css"


const CarouselCard = ({ book }) => {

  // i'm requesting images as blob to force caching them
  // couldn't cache the images by just setting the url in the src 

  const [image, setImage] = useState(null)
  const url = `https://covers.openlibrary.org/b/id/${book?.cover_id}-L.jpg`

  useEffect(() => {
    (async () => {
      const res = await fetch(url, { cache: 'force-cache' })
      const blob = await res.blob()
      
      let reader = new FileReader()
      reader.onload = function() { setImage(this.result) }
      reader.readAsDataURL(blob)
    })()
  }, [])

  
  return ( 
    <div className="carousel-card">
      { 
        !image ? <DotsLoader /> 
          : <button to="book/details"><img src={image}/></button>
      }
    </div>
  )
}
export default CarouselCard