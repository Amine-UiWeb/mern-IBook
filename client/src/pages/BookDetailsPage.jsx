import { Link, useLocation } from "react-router-dom"
import "./BookDetailsPage.css"
import { useEffect, useState } from "react"

const BookDetailsPage = () => {

  // accessing the state data passed to the navigated location  
  const location = useLocation()
  const data = location.state
  console.log(data)
  const { title, authors, edition_count, cover_id, first_publish_year, subject } = data

  const [image, setImage] = useState(null)
  const url = `https://covers.openlibrary.org/b/id/${cover_id}-L.jpg`

  useEffect(() => {
    (async () => {
      const res = await fetch(url, { cache: 'force-cache' })
      const blob = await res.blob()
      
      let reader = new FileReader()
      reader.onload = function() { setImage(this.result) }
      reader.readAsDataURL(blob)
    })()
  }, [])

  // useEffect(() => {
  //   (() => {
  //     fetch(`https://openlibrary.org/works/${cover_id}.json`)
  //       .then(res => res.json())
  //       .then(data => console.log(data))
  //   })()
  // })


  return (
    <div className="book-details">

      <h3 className="h3">{title}</h3>

      {/* details */}

      <div className="details-grid">
        
        <div className="cover">
          <img src={image} alt="book-cover_id" className="" />
        </div>
        
        <div className="info">
          <h5 className="h5 author"><b>Author:</b> <Link to="#">{authors?.[0]?.name}</Link></h5>
          <h5 className="h5"><b>Editions:</b> {edition_count}</h5>
          <h5 className="h5"><b>First Published:</b> {first_publish_year}</h5>
          <h5 className="h5 subjects"><b>Subjects:</b>{" "}
            {
              // display only first ten subjects 
              subject.splice(0, 10).map((subject, i) => (
                <span key={i}>
                  {" "}<Link to="#">{subject}{","}</Link>{" "}
                </span>)
              )
            }...
          </h5>
        </div>

        <div className="description">
          <b>Description:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quis veniam iste rem error corporis, voluptate sequi nobis assumenda ea repellat quo quasi ipsum facilis. Nobis, tenetur! Maxime ut modi explicabo blanditiis earum repellat iste dolorum itaque sint. Quod, libero!
        </div>

      </div>
      

      {/* comments */}


      {/* similar works */}


      {/* other works by the author */}


    </div>
  )
}
export default BookDetailsPage