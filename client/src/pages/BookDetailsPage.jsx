import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

import useFetchImage from "../utils/hooks/useFetchImage.js"
import useFetchData from "../utils/hooks/useFetchData.js"

import BooksCarousel from "../components/main/BooksCarousel.jsx"
import NoData from "../components/noData/NoData.jsx"
import DotsLoader from "../components/loading/dotsLoader/DotsLoader.jsx"
import { HeaderSkeleton, ParagrahSkeleton, TextSkeleton } from 
  "../components/loading/SkeletonLoaders/Skeleton.jsx"
import "./BookDetailsPage.css"


const BookDetailsPage = () => {

  
  const { pathname } = useLocation() // pathname is structured as: /works/<workId>
  const [workId, setWorkId] = useState(pathname.split('/works/')[1])

  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  /* ---------------------------- */
  // Fetch book info (use workId)
  /* ---------------------------- */
  const workUrl = `https://openlibrary.org${pathname}.json`
  const { data: workData, fetched: workFetched } = useFetchData(workUrl)

  const olWork = pathname?.split('/works/')[1]
  const cover_id = `${workData?.covers?.[0]}`
  const title = workData?.title
  const authorKey = workData?.authors?.[0]?.author?.key || workData?.author?.key
  const subjects = workData?.subjects?.sort().splice(0, 6)
  // todo: subjects values change while rendering
  const description = workData?.description?.value || workData?.description


  /* -------------------------------- */
  // Fetch other book info seperately
  /* -------------------------------- */
  // Cover:
  const coverUrl = `https://covers.openlibrary.org/b/id/${cover_id}-L.jpg`
  const { image } = useFetchImage(coverUrl)
  
  // Rating: 
  const ratingUrl = `https://openlibrary.org/works/${olWork}/ratings.json`
  const { data: ratings, fetched: ratingFetched } = useFetchData(ratingUrl) 
  const rating = ratings?.summary?.average?.toFixed(2)

  // Author Name
  const encodedTitle = encodeURIComponent(title)
  const baseUrl = 'https://openlibrary.org/search.json'
  const urlParams = `?q=${encodedTitle}&fields=author_name,first_publish_year&limit=1`
  const url = baseUrl + urlParams
  const { data: bookData, fetched: bookFetched } = useFetchData(url) 
  const authorName = bookData?.docs?.[0]?.author_name?.[0] 
  // Publish Date
  const publishDate = bookData?.docs?.[0]?.first_publish_year
  /* ------------------------- */
  

  /* ----------------------------- */
  // Fetch author profile and info
  /* ----------------------------- */
  // Profile
  const olid = authorKey?.split('/authors/')[1]
  const authorProfileUrl = `https://covers.openlibrary.org/a/olid/${olid}-M.jpg`
  const { image: authorProfile } = useFetchImage(authorProfileUrl)

  // Info 
  const encodedAuthor = encodeURIComponent(authorName)
  const authorUrl = `https://openlibrary.org/search/authors.json?q=${encodedAuthor}`
  const authorurl = 'https://openlibrary.org/authors/OL23919A.json'
  const { data: authorData } = useFetchData(authorUrl)
  const authorInfo = authorData?.[0]
  // console.log(authorData)
  // todo: display brief author infos (2 ~ 3)
  /* ------------------ */


  /* ------------------ */
  // Fetch author works 
  /* ------------------ */
  const uriAuthor = encodeURIComponent(authorName)
  const authorWorksUrl = `https://openlibrary.org/search.json?author=${uriAuthor}`
  const { data: authorWorks } = useFetchData(authorWorksUrl)
  /* ------------------ */


  // // todo: try to use this endpoint
  // const someLink = 'https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447&jscmd=data&format=json'
  // const { data: someData } = useFetchData(`${someLink}`)
  // console.log(someData)


  // if fetching is completed and there is no data
  if (workFetched && !workData) return <NoData />
  

  return (
    <div className="book-details">
      
      <h3 className="h3 title">{ title ?? <HeaderSkeleton /> }</h3>


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
            
          { (!bookFetched || publishDate) && (
              <h5 className="h5"> 
                { !publishDate ? <TextSkeleton />
                  : <><b>First Published:</b> {publishDate}</>
                }
              </h5>
            )
          }
  
          { (!workFetched || subjects) && (
              !workFetched ? <ParagrahSkeleton nLines={3} />
              : subjects.length > 0 ? <h5 className="h5 subjects"><b>Subjects:</b>{" "}   
                {
                  workData?.subjects?.splice(0, 6)?.map((subject, i) => ( 
                    <span key={i}>
                      {" "}<Link to="#">{subject}{","}</Link>{" "}
                    </span>)
                  )
                }...
              </h5>
              : null
            )
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
      

      {/* todo: display a section loader */}
      {/* author */}
      { authorName && (
          <section className="author-brief">
            <h3 className="h5 mb-1">Brief overview on the author:</h3>
            
            <div className="author-flex">
              
              <div className="profile-wrapper">
                <img src={authorProfile} alt="author profile" />
                <h5><Link to="#">{authorName}</Link></h5>

              </div>

            </div>
          </section>
        )
      }


      {/* todo: display a section loader */}
      {/* reviews */}
      {/* <section className="reviews">
        reviews
      </section> */}


      {/* todo: display a section loader */}
      {/* other works by the author */}
      { authorWorks?.docs?.length > 0 && (
          <section className="author-books">
            <h4 className="h4 mb-1">Other works for the same author</h4>

            <BooksCarousel books={authorWorks?.docs.splice(0, 20)} />
          </section>
        )
      }


      {/* todo: display a section loader */}
      {/* similar works */}
      {/* <section className="similar-books">
        similar works you might like
      </section> */}


    </div>
  )
}
export default BookDetailsPage