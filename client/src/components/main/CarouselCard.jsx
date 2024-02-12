import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import DotsLoader from "../loading/DotsLoader"
import "./CarouselCard.css"


const CarouselCard = ({ book }) => {

  const navigate = useNavigate()

  // i'm requesting images as blob to force caching them
  // couldn't cache the images by just setting the url in the src 

  const [image, setImage] = useState(null)
  const url = `https://covers.openlibrary.org/b/id/${book?.cover_id || book?.cover_i}-L.jpg`

  useEffect(() => {
    (async () => {
      const res = await fetch(url, { cache: 'force-cache' })
      const blob = await res.blob()
      
      let reader = new FileReader()
      reader.onload = function() { setImage(this.result) }
      reader.readAsDataURL(blob)
    })()
  }, [])


  // pass the book data as state when navigating to the BookDetailsPage
  // instead on refetching it there
  const handleNavigate = () => {
    navigate(`${book?.key}`, { state: book })
  }
  
  return ( 
    <div className="carousel-card">
      { 
        !image ? <DotsLoader /> 
          : <button onClick={handleNavigate}><img src={image}/></button>
      }
    </div>
  )
}
export default CarouselCard