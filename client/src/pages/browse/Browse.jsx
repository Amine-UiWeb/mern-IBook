import { useLocation, useParams } from "react-router-dom"
import "./Browse.css"


const Browse = () => {

  const { pathname } = useLocation()
  const location = pathname.split('/browse')[1]

  return (
    <div>Browse: {location}</div>
  )
}
export default Browse