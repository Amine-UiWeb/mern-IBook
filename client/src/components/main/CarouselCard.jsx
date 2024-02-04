import "./CarouselCard.css"

const CarouselCard = ({ book }) => {

  return (
    <div className="carousel-card">
      <img src={book.cover}/>
      <p>{book.title}</p>
    </div>
  )
}
export default CarouselCard