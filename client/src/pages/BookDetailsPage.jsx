import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

import useFetchImage from "../utils/hooks/useFetchImage.js"
import useFetchData from "../utils/hooks/useFetchData.js"

import "./BookDetailsPage.css"


const BookDetailsPage = () => {

  // accessing the state data passed to the navigated location  
  const location = useLocation()
  const data = location.state
  // console.log(data)
    
  const {
    title, 
    cover_id, 
    authors, 
    edition_count, 
    first_publish_year, 
    subject,
    availability, key
  } = data

  // extract informations
  const author = authors?.[0]?.name
  const olWork = availability?.openlibrary_work || key?.split('/works/')[1] 
  const oledition = availability?.openlibrary_edition
  // console.log("olWork: ", olWork, "oledition: ", oledition)
  
  

  // fetch book cover
  const coverUrl = `https://covers.openlibrary.org/b/id/${cover_id}-L.jpg`
  const { image } = useFetchImage(coverUrl)


  // fetch work
  const workUrl = `https://openlibrary.org/works/${olWork}.json`
  const { data: workData } = useFetchData(workUrl)
  const description = workData?.description?.value ?? workData?.description
  console.log(workData)
  
  // fetch rating
  const ratingUrl = `https://openlibrary.org/works/${olWork}/ratings.json`
  const { data: ratings } = useFetchData(ratingUrl)
  const rating = ratings?.summary?.average?.toFixed(2)


  return (
    <div className="book-details">

      <h3 className="h3">{title}</h3>

      {/* details */}

      <section className="details-grid">
        
        <div className="cover">
          <img src={image} alt="book-cover_id" className="" />
        </div>
        
        <div className="info">
          <h5 className="h5 author"><b>Author: </b><Link to="#">{author}</Link></h5>
          <h5 className="h5"><b>Rating: </b>{rating ?? '...' }</h5>
          <h5 className="h5"><b>Editions: </b>{edition_count}</h5>
          <h5 className="h5"><b>First Published:</b> {first_publish_year}</h5>
          <h5 className="h5 subjects"><b>Subjects:</b>{" "}
            {
              // display only first ten subjects 
              subject.splice(0, 6).map((subject, i) => (
                <span key={i}>
                  {" "}<Link to="#">{subject}{","}</Link>{" "}
                </span>)
              )
            }...
          </h5>
        </div>

        <div className="description">
          <b>Description: </b>{description ?? '...'}
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