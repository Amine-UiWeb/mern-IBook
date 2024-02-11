import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

import useFetchImage from "../utils/hooks/useFetchImage.js"

import "./BookDetailsPage.css"


const BookDetailsPage = () => {

  // accessing the state data passed to the navigated location  
  const location = useLocation()
  const data = location.state
    
  const {
    title, 
    cover_id, 
    authors, 
    edition_count, 
    first_publish_year, 
    subject,
    availability, key
  } = data
  
  console.log(data)

  
  // cover endpoint
  const coverUrl = `https://covers.openlibrary.org/b/id/${cover_id}-L.jpg`
  const { image, setImage } = useFetchImage(coverUrl)


  // books endpoint
  const olid = availability?.openlibrary_work || key?.split('/works/')[1] 
  const oledition = availability?.openlibrary_edition

  console.log("olid: ", oledition, "oledition: ", oledition)

  const booksUrl = `https://openlibrary.org/books/${olid}.json`
  useEffect(() => {
    (() =>
      fetch(booksUrl, { cache: 'force-cache' }).then(res => res.json())
        .then(data => console.log(data))
    )()
  })


  return (
    <div className="book-details">

      <h3 className="h3">{title}</h3>

      {/* details */}

      <section className="details-grid">
        
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

      </section>
      

      {/* comments */}
      <section className="comments">
        comments
      </section>


      {/* similar works */}
      <section className="similar-books">
        similar works you might like
      </section>


      {/* other works by the author */}
      <section className="author-books">
        other works for the same author
      </section>


    </div>
  )
}
export default BookDetailsPage