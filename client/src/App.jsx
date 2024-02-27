// libraries
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

// Components
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"

// Pages
import LoginPage from "./pages/auth/LoginPage"
import RegisterPage from "./pages/auth/RegisterPage"
import UserPage from "./pages/UserPage"
import LandingPage from "./pages/LandingPage"
import BookDetailsPage from "./pages/BookDetailsPage"
import Browse from "./pages/Browse"


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
      { path: '/user/collection', element: <UserPage /> },
      { path: '/works/:olWork', element: <BookDetailsPage /> },
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
