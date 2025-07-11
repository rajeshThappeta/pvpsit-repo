import { createBrowserRouter, RouterProvider, Navigate } from 'react-router'
import './App.css'
import RootLayout from './components/RootLayout'
import Home from './components/Home'
//import Register from './components/Registrer'
//import Login from './components/Login'
import Technologies from './components/Technologies'
import Java from './components/Java'
import Node from './components/Node'
import Vue from './components/Vue'


//Dynamic loading of Register component
import { lazy, Suspense } from 'react';
const Register = lazy(() => import('./components/Registrer'));
const Login = lazy(() => import('./components/Login'));

function App() {

  //create browser router object
  const browserRouterObj = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "register",
          element: <Suspense fallback={<p>Loading...</p>}><Register /></Suspense>
        },
        {
          path: "login",
          element: <Suspense fallback={<p>Loading...</p>}><Login /></Suspense>
        },
        {
          path: "technologies",
          element: <Technologies />,
          children: [
            {
              path: "java",
              element: <Java />
            },
            {
              path: "node",
              element: <Node />
            },
            {
              path: "vue",
              element: <Vue />
            },
            {
              path: "",
              element: <Navigate to='node' />

            }
          ]

        }
      ]
    }
  ])

  return (
    <RouterProvider router={browserRouterObj} />
  )
}

export default App
