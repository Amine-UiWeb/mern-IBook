import BooksCarousel from "../components/main/BooksCarousel"
import "./LandingPage.css"

const LandingPage = () => {

  return (
    <div className="landing-page">

      <section className="books-section">
        <h3 className="h3 ff-times p-1">
          <a href="#" className="hover-underline">Literature</a>
        </h3>
      
        <div className="list-container">
          <BooksCarousel />
        </div>

      </section>

      <section className="books-section">
        <h3 className="h3 ff-times p-1">
          <a href="#" className="hover-underline">Comedy</a>
        </h3>
        <div className="list-container">
          <BooksCarousel />
        </div>
      </section>

      <section className="books-section">
        <h3 className="h3 ff-times p-1">
          <a href="#" className="hover-underline">Thriller</a>
        </h3>
        <div className="list-container">
          <BooksCarousel />
        </div>
      </section>

      <section className="books-section">
        <h3 className="h3 ff-times p-1">
          <a href="#" className="hover-underline">Horror</a>
        </h3>
        <div className="books-container">
          <BooksCarousel />
        </div>
      </section>
      
    </div>
  )
}
export default LandingPage
