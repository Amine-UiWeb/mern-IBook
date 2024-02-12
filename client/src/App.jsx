// libraries
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

// Components
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"

// Pages
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import LandingPage from "./pages/LandingPage"
import BookDetailsPage from "./pages/BookDetailsPage"


function App() {

  const Root = () => (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )

  const router = createBrowserRouter([{
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
      { path: '/works/:olWork', element: <BookDetailsPage /> }
    ]
  }])

  return (
    <div className="App container">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
