import { Link } from "react-router-dom"

import useFetchImage from "../../../utils/hooks/useFetchImage"

import DotsLoader from "../../loading/dotsLoader/DotsLoader"
import EditionsPrev from "../editionsPreview/EditionsPrev"

/* 
##important fields (to include in the search query if needed):

key +
title +
first_publish_year +
cover_i +
author_name +
author_key +
ia +
edition_count +
language +

number_of_pages_median -
edition_key -
ratings_average -
ratings_count -
cover_edition_key - ? (try to use to fetch cover and compare with the one appears on openlibrary )
first_sentence -
*/

const SearchPaginItem = ({ work, pathname }) => {

  const { 
    key, title, first_publish_year, cover_i, 
    author_name, 
    edition_count, language, ia, 
  } = work

  const { image, isImageLoading, isFetchError } = 
    useFetchImage({ end: 'a_cover', dep: cover_i, pathname, imageSize: 'L' })
  

  // (end == 'workEditions') {
  //   url = `http://openlibrary.org/works/<olWork>/editions.json?limit=5`
  // }
  

  return (
    <li className="works-pagin-item flex">

      <div className="cover">
        { isImageLoading ? <DotsLoader /> 
          : image ? (
              <Link className="d-inbl" to={key}>
                <img src={image} />
              </Link>
            )
            : null
        }
      </div>

      <div className="content relative p-0-5">

        <div className="flex-row ai-fs jc-sb gap-1">
          <div>
            <h3><Link className="d-inbl fs-1-2 fw-6" to={key}>{title}</Link></h3>
            <span>
              by{' '}
              <Link className="fw-4 d-in" to={pathname}>{author_name?.[0]}</Link>
            </span>
          </div>

          <div className="extra-info">
            <div className="rating">3.96 <sub>(1.320)</sub></div>
            <div className="n-pages">230 pages</div>
          </div>
        </div>


        <span className="publish-details d-bl ff-lucida mt-1-5">

          <span className="d-bl">First published in {first_publish_year}</span>
          
          <span className="editions-details">
            {/* todo: navigate to, and create work editions page */}
            <Link className="a" to={`${key}/editions`}>{edition_count} editions</Link>
            {' '}in {language?.length} languages
            {' - '}{ia?.length} previewable
          </span>
          
          <EditionsPrev ia={ia?.slice(0, 9)} height="45px" />

        </span>
      
      </div>

      {/* display editions thumbnails in a component */}
      {/* to be used also in WorkPage */}
      {/* pass down the ia array as prop */}

    </li>
  )
}
export default SearchPaginItem