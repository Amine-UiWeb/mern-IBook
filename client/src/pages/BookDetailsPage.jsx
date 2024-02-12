import { Link, useLocation } from "react-router-dom"

import useFetchImage from "../utils/hooks/useFetchImage.js"
import useFetchData from "../utils/hooks/useFetchData.js"

import BooksCarousel from "../components/main/BooksCarousel.jsx"
import "./BookDetailsPage.css"


const BookDetailsPage = () => {

  // accessing the state data passed to the navigated location  
  const location = useLocation()
  const path = location.pathname
  const data = location.state  

  // destructuring data properties
  let { authors, author_name, edition_count, first_publish_year, availability } = data

  // extract information
  console.log(data)
  const oledition = availability?.openlibrary_edition
  

  // fetch work info
  const workUrl = `https://openlibrary.org${path}.json`
  const { data: workData } = useFetchData(workUrl)   
  const olWork = path?.split('/works/')[1] 
  const title = workData?.title || 'Not available'
  const cover_id = `${workData?.covers[0]}`
  const authorKey = authors?.[0]?.key
  const authorName = authors?.[0]?.name || author_name?.[0] || 'Not available'
  const subjects = workData?.subjects?.splice(0, 6)
  const description = workData?.description?.value || 'Not available'

  // console.log(workData)
  
  // fetch book cover
  const coverUrl = `https://covers.openlibrary.org/b/id/${cover_id}-L.jpg`
  const { image } = cover_id ? useFetchImage(coverUrl) : null
 
  // fetch rating data
  const ratingUrl = `https://openlibrary.org/works/${olWork}/ratings.json`
  const { data: ratings } = useFetchData(ratingUrl)
  const rating = ratings?.summary?.average?.toFixed(2)
  
  
  // // fetch author works (by author key)
  // const { data: authorWorks1 } 
  //   = useFetchData(`https://openlibrary.org${authorKey}/works.json?limit=20`)
  // console.log(authorWorks1)
  

  // fetch author works (by author name)
  const uriAuthor = encodeURIComponent(authorName)
  const authorWorksUrl = `https://openlibrary.org/search.json?author=${uriAuthor}`
  const { data: authorWorks } = useFetchData(authorWorksUrl)
  // console.log(authorWorks)
  

  // todo: add loader for book details 
  if (!workData) {
    return <p>Loading...</p>
  }


  return (
    <div className="book-details">

      <h3 className="h3">{title}</h3>

      {/* details */}

      <section className="details-grid">
        <div className="cover">
          <img src={image} alt="book-cover_id" className="" />
        </div>
        
        <div className="info">
          <h5 className="h5 author"><b>Author: </b><Link to="#">{authorName}</Link></h5>
          <h5 className="h5"><b>Rating: </b>{rating ?? '...' }</h5>
          { edition_count && <h5 className="h5"><b>Editions: </b>{edition_count}</h5> }
          <h5 className="h5"><b>First Published:</b> {first_publish_year}</h5>
          <h5 className="h5 subjects"><b>Subjects:</b>{" "}
            {
              // display only first ten subjects 
              subjects?.map((subject, i) => (
                <span key={i}>
                  {" "}<Link to="#">{subject}{","}</Link>{" "}
                </span>)
              )
            }...
          </h5>
        </div>

        <div className="description">
          <b>Description: </b><p className="fs-0-9">{description ?? '...'}</p>
        </div>
      </section>
      

      {/* author */}
      <section className="author-brief">
        <h3 className="h4 mb-1">Brief overview on the author:</h3>
        
        <div className="author-grid">
          
          <div className="profile">
            <img src="#" alt="author profile" />
            <h5>{authorName}</h5>
          </div>

        </div>
      </section>


      {/* comments */}
      {/* <section className="comments">
        comments
      </section> */}


      {/* other works by the author */}
      { 
        authorWorks && 
          <section className="author-books">
            <h4 className="h4 mb-1">Other works for the same author</h4>

            <BooksCarousel books={authorWorks?.docs.splice(0, 20)} />
          </section>
      }


      {/* similar works */}
      {/* <section className="similar-books">
        similar works you might like
      </section> */}


    </div>
  )
}
export default BookDetailsPage