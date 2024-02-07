import "./CarouselCard.css"

const CarouselCard = (props) => {

  return ( 
    <div className="carousel-card">
      <label>
        <a href="#">
          <img src={
            `https://covers.openlibrary.org/b/id/${props.book?.cover_id}-L.jpg`
          }/>
        </a>
      </label>
    </div>
  )
}
export default CarouselCard