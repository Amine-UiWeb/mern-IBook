import { useNavigate } from "react-router-dom"

import "./NoPageData.css"


const NoPageData = ({ error }) => {

  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  return (
    <div className="no-page-data">
      <p>
        <span className="fw-6">Sorry. </span>
        <span className="fs-0-9">
          There have been a problem getting the needed information from the server.
        </span>
        {error && <span>{error}</span>}
      </p>
      <p className="mt-2 tc">
        <button className="a" onClick={goBack}>Go Back</button>
      </p>      
    </div>
  )
}
export default NoPageData
