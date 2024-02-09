import { useEffect, useState } from "react"
import "./CarouselCard.css"
import DotsLoader from "../loading/DotsLoader"
import { Link } from "react-router-dom"


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
          : <Link to="book/details"><img src={image}/></Link>
      }
    </div>
  )
}
export default CarouselCard