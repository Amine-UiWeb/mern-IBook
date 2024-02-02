import "./LandingPage.css"

const LandingPage = () => {
  return (
    <div className="landing-page">

      <section className="list-container">
        <h3 className="h3 ff-times p-1">
          <a href="#" className="hover-underline">
            Most Popular Books
          </a>

        </h3>
        <div className="list-container">{/* <BooksCarrousel /> */}</div>
      </section>

      <section className="books-section">
        <h3 className="h3 ff-times p-1">
          <a href="#" className="hover-underline">
            Bestsellers
          </a>
        </h3>

        <div className="list-container">{/* <BooksCarrousel /> */}</div>
      </section>

      <section className="books-section">
        <h3 className="h3 ff-times p-1">
          <a href="#" className="hover-underline">
            New Books
          </a>
        </h3>

        <div className="list-container">{/* <BooksCarrousel /> */}</div>
      </section>

      <section className="books-section">
        <h3 className="h3 ff-times p-1">
          <a href="#" className="hover-underline">
            Awards Winning Books
          </a>
        </h3>

        <div className="books-slide">{/* <BooksCarrousel /> */}</div>
      </section>
      
    </div>
  )
}
export default LandingPage
