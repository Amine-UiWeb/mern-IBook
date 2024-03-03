import { useEffect, useState } from "react"
import { useNavigate, redirectDocument } from "react-router-dom"
import DotsLoader from "../loading/dotsLoader/DotsLoader"
import "./CarouselCard.css"


const CarouselCard = ({ book }) => {

  const navigate = useNavigate()
  const [image, setImage] = useState(null)
  

  useEffect(() => {
    (async () => {
      const baseUrl = 'https://covers.openlibrary.org'
      const url = `${baseUrl}/b/id/${book?.cover_id || book?.cover_i}-L.jpg`
      const res = await fetch(url, { cache: 'force-cache' })
      const blob = await res.blob()
      
      let reader = new FileReader()
      reader.onload = function() { setImage(this.result) }
      reader.readAsDataURL(blob)
    })()
  }, [])

  
  const handleNavigate = () => navigate(`${book?.key}`)
  

  return ( 
    <div className="carousel-card">
      { !image ? <DotsLoader /> 
        // display a bookmark icon that adds a book to favorits (if user logged in)
        : (
          <button onClick={handleNavigate}>
            <img src={image}/>
          </button>
        )
      }
    </div>
  )
}

export default CarouselCard
