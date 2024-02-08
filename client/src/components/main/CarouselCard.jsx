import { useEffect, useState } from "react"
import axios from "axios"
import "./CarouselCard.css"

const CarouselCard = ({ book }) => {

  // i'm requesting image data as blob data to force caching the images
  // can't cache the images by just setting the url in the src 

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
      <a href="#">
        <img src={image}/>
      </a>
    </div>
  )
}
export default CarouselCard