import { Link, useLocation } from "react-router-dom"

import useFetchImage from "../utils/hooks/useFetchImage.js"
import useFetchData from "../utils/hooks/useFetchData.js"

import BooksCarousel from "../components/main/BooksCarousel.jsx"
import DotsLoader from "../components/loading/dotsLoader/DotsLoader.jsx"
import { HeaderSkeleton, ParagrahSkeleton } from "../components/loading/SkeletonLoaders/Skeleton.jsx"
import { TextSkeleton } from "../components/loading/SkeletonLoaders/Skeleton.jsx"
import "./BookDetailsPage.css"


const BookDetailsPage = () => {

  const location = useLocation()
  const path = location.pathname  // path is constructed as: /works/<workId>


  /* ---------------------------- */
  // fetch work info (use workId)
  /* ---------------------------- */
  const workUrl = `https://openlibrary.org${path}.json`
  const { data: workData, fetchCompleted: workFetched } = useFetchData(workUrl)

  const olWork = path?.split('/works/')[1]
  const cover_id = `${workData?.covers?.[0]}`
  const title = workData?.title 
  const authorKey = workData?.authors?.[0]?.author?.key
  const subjects = workData?.subjects?.splice(0, 6) 
  const description = workData?.description?.value || workData?.description


  /* ---------------------------------- */
  // fetch other information seperately
  /* ---------------------------------- */
  // cover:
  const coverUrl = `https://covers.openlibrary.org/b/id/${cover_id}-L.jpg`
  const { image } = useFetchImage(coverUrl)
  
  // rating: 
  const ratingUrl = `https://openlibrary.org/works/${olWork}/ratings.json`
  const { data: ratings, fetchCompleted: ratingFetched } = useFetchData(ratingUrl) 
  const rating = ratings?.summary?.average?.toFixed(2)
 
  // author name
  const encodedTitle = encodeURIComponent(title)
  const baseUrl = 'https://openlibrary.org/search.json'
  const urlParams = `?q=${encodedTitle}&fields=author_name,first_publish_year&limit=1`
  const url = baseUrl + urlParams
  const { data: bookData, fetchCompleted: bookFetched } = useFetchData(url) 
  const authorName = bookData?.docs?.[0]?.author_name?.[0] 

  // publish date
  const publishDate = bookData?.docs?.[0]?.first_publish_year
  /* ------------------------- */
  

  /* ----------------------------- */
  // fetch author profile and info
  /* ----------------------------- */
  // profile
  const olid = authorKey?.split('/authors/')[1]
  const authorProfileUrl = `https://covers.openlibrary.org/a/olid/${olid}-M.jpg`
  const { image: authorProfile, isImageLoading: authorLoading } 
    = useFetchImage(authorProfileUrl)

  // info
  /* ------------------ */


  /* ------------------ */
  // fetch author works 
  /* ------------------ */
  const uriAuthor = encodeURIComponent(authorName)
  const authorWorksUrl = `https://openlibrary.org/search.json?author=${uriAuthor}`
  const { data: authorWorks } = useFetchData(authorWorksUrl)
  /* ---------------------------------- */
  

  return (
    <div className="book-details">
      
      <h3 className="h3 title">
        {
          !title ? <HeaderSkeleton />  
          : title
        }
      </h3>


      {/* details */}
      <section className="details-grid">
        <div className="cover">
          {
            image ? <img src={image} alt="book-cover_id" className="" />
            : <DotsLoader />
          }
        </div>
        
        <div className="info">

          { (!bookFetched || authorName) && (
              <h5 className="h5 author"> 
                { !authorName ? <TextSkeleton />  
                  : <><b>Author: </b><Link to="#">{authorName}</Link></>
                } 
              </h5>
            )
          }
          
          { (!ratingFetched || rating) && (
              <h5 className="h5">
                { !rating ? <TextSkeleton /> : <><b>Rating: </b>{rating}</> }
              </h5> 
            )
          }
            
          { (!bookFetched || publishDate) &&
            <h5 className="h5"> 
              { !publishDate ? <TextSkeleton />
                : <><b>First Published:</b> {publishDate}</>
              }
            </h5>
          }

          { !subjects ? <ParagrahSkeleton nLines={3} />
            : <h5 className="h5 subjects"><b>Subjects:</b>{" "}
                {
                  Object.keys(subjects)?.map((subject, i) => (
                    <span key={i}>
                      {" "}<Link to="#">{subjects[subject]}{","}</Link>{" "}
                    </span>)
                  )
                }...
              </h5>
          }

        </div>

        <div className="description">
          {
            !description ? <ParagrahSkeleton nLines={8} />
            : <>
                <b>Description: </b><p className="fs-0-9">{description ?? '...'}</p>
              </>
          }
        </div>

      </section>
      

      {/* author */}
      { authorName && (
          <section className="author-brief">
            <h3 className="h4 mb-1">Brief overview on the author:</h3>
            
            <div className="author-flex">
              
              <div className="profile-wrapper">
                <img src={authorProfile} alt="author profile" />
                <h5>{authorName}</h5>
              </div>

            </div>
          </section>
        )
      }


      {/* reviews */}
      {/* <section className="reviews">
        reviews
      </section> */}


      {/* other works by the author */}
      { authorWorks?.docs?.length > 0 && (
          <section className="author-books">
            <h4 className="h4 mb-1">Other works for the same author</h4>

            <BooksCarousel books={authorWorks?.docs.splice(0, 20)} />
          </section>
        )
      }


      {/* similar works */}
      {/* <section className="similar-books">
        similar works you might like
      </section> */}


    </div>
  )
}
export default BookDetailsPage