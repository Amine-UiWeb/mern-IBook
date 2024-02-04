const CarouselCard = ({ book }) => {

  return (
    <div className="carousel-card">
      <img src={book.cover} alt={book.title} />
      <p>{book.title}</p>
    </div>
  )
}
export default CarouselCard