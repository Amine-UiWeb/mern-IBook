import "./BooksCarousel.css"

import data from "../../assets/db/data.json"

const BooksCarousel = () => {

  return (      
    <div className="carousel-container">
      
      {/* display books with placeholer information, 3 books in each genre */}

      {/* Horror */}
      <div className="carousel-card">
        <img src="http://covers.openlibrary.org/b/isbn/9780345806789-L.jpg" />
        <p>The Shining</p>
      </div>

      <div className="carousel-card">
        <img src="http://covers.openlibrary.org/b/isbn/9780143039983-L.jpg" />
        <p>The Haunting of Hill House</p>
      </div>

      <div className="carousel-card">
        <img src="http://covers.openlibrary.org/b/isbn/9781501143106-L.jpg" />
        <p>Misery</p>
      </div>

      {/* Comedy */}
      <div className="carousel-card">
        <img src="http://covers.openlibrary.org/b/isbn/9788445006696-L.jpg" />
        <p>Good Omens</p>
      </div>
      
      <div className="carousel-card">
        <img src="http://covers.openlibrary.org/b/isbn/9780802130204-L.jpg" />
        <p>A Confederacy of Dunces</p>
      </div>
      
      <div className="carousel-card">
        <img src="http://covers.openlibrary.org/b/isbn/9780671003753-L.jpg" />  
        <p>She's Come Undone</p>
      </div>

      {/* Literature */}
      <div className="carousel-card">
        <img src="http://covers.openlibrary.org/b/isbn/9780452284234-L.jpg" />
        <p>1984</p>
      </div>
      
      <div className="carousel-card">
        <img src="http://covers.openlibrary.org/b/isbn/9780060935467-L.jpg" />
        <p>To Kill a Mockingbird</p>
      </div>
      
      <div className="carousel-card">
        <img src="http://covers.openlibrary.org/b/isbn/9780142437230-L.jpg" />
        <p>Don Quixote</p>
      </div>

      {/* Historical-Fiction */}
      <div className="carousel-card">
        <img src="http://covers.openlibrary.org/b/isbn/9781509848492-L.jpg" />
        <p>The Pillars of The Earth</p>
      </div>
      
      <div className="carousel-card">
        <img src="http://covers.openlibrary.org/b/isbn/9780312427290-L.jpg" />
        <p>The Red Tent</p>
      </div>
      
      <div className="carousel-card">
        <img src="http://covers.openlibrary.org/b/isbn/9780679781585-L.jpg" />
        <p>Memoirs of a Geisha</p>
      </div>

      {/* thriller */}
      <div className="carousel-card">
        <img src="http://covers.openlibrary.org/b/isbn/9781250301703-L.jpg" />
        <p>The Silent Patient</p>
      </div>

      <div className="carousel-card">
        <img src="http://covers.openlibrary.org/b/isbn/9781594634024-L.jpg" />
        <p>The Girl on the Train</p>
      </div>
      
      {/*  */}
      <div className="carousel-card">
        <img src="http://covers.openlibrary.org/b/isbn/9780312924584-M.jpg" />
        <p>The Silence of the Lambs</p>
      </div>

    </div>
  )
}
export default BooksCarousel