// libraries
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

// Components
import Footer from "./components/Footer"
import Header from "./components/Header"

// Pages
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import LandingPage from "./pages/LandingPage"


function App() {

  const router = createBrowserRouter([{
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> }
    ]
  }])

  function Root() {
    return (
      <>
        <Header />
        <main className="main">
          <Outlet />
        </main>
        <Footer />
      </>
    )
  }

  return (
    <div className="App container">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
