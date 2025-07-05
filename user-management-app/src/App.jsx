
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './RootLayout'
import Home from './components/Home'
import AddUser from './components/AddUser'
import UsersList from './components/UsersList'

function App() {

  const browserRouterObj = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "add-user",
          element: <AddUser />
        },
        {
          path: "users",
          element: <UsersList />
        }
      ]
    }
  ])


  return (
    <RouterProvider router={browserRouterObj} />
  )
}

export default App
