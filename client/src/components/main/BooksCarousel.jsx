import CarouselCard from "./CarouselCard"
import "./BooksCarousel.css"

const BooksCarousel = ({ books }) => {

  console.log(books)

  return (      
    <div className="carousel-container">
      <button>{"\u2770"}</button>
      {
        books?.length > 0 && books.map(
            (book, i) => <CarouselCard key={i} book={book} />
          )
      }
      <button>{"\u2771"}</button>
    </div>
  )
}
export default BooksCarousel