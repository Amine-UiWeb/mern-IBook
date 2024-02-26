import { useLocation, useParams } from "react-router-dom"

const AuthorPage = () => {

  const path = useLocation()
  const authorKey = path.pathname.split('/')[1]
  console.log(authorKey)

  // todo: in author page use url https://openlibrary.org/authors/<authorkey>.json
  // to display author information


  return (
    <div>AuthorPage</div>
  )
}
export default AuthorPage