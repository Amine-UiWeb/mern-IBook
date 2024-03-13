// libraries
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

// Components
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"

// Pages
import LoginPage from "./pages/auth/LoginPage"
import RegisterPage from "./pages/auth/RegisterPage"
import LandingPage from "./pages/landing/LandingPage"
import BookDetailsPage from "./pages/bookDetails/BookDetailsPage"
import AuthorPage from "./pages/authorDetails/AuthorPage"
import Browse from "./pages/browse/Browse"
import UserPage from "./pages/user/UserPage"
import PersistLogin from "./pages/auth/PersistLogin"


function App() {

  const Root = () => (
    <PersistLogin>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </PersistLogin>
  )

  const router = createBrowserRouter([{
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
      { path: '/user/collection', element: <UserPage /> },
      { path: '/works/:olWork', element: <BookDetailsPage /> },
      { path: '/authors/:key', element: <AuthorPage /> },
      { 
        path: '/browse/*', 
        element: <Browse />,
        children: [/* add nested pages later */]
      }
    ]
  }])

  
  return (
    <div className="App container">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
