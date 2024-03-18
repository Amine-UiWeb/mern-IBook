import "./NoSectionData.css"

export const NoSectionData = ({ message }) => {
  return (
    <div className="no-section-data p-0-5 m-bl-2">
      <span className="fs-1 fw-6 mr-0-5">Error!</span>
      <span className="fs-0-9">{message}</span>
    </div>
  )
}