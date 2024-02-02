// Components
import Footer from "./components/Footer"
import Header from "./components/Header"

// Pages
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import LandingPage from "./pages/LandingPage"

function App() {

  return (
    <div className="App container">

      <Header />
      
      <main className="main">
        {/* dynamic main content */}
        {/* <LoginPage /> */}
        {/* <RegisterPage /> */}
        {/* <LandingPage /> */}
      </main>
      
      <Footer />
      
    </div>
  )
}

export default App
