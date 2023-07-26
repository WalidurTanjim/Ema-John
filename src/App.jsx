import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Order from './components/Order/Order'
import OrderPreview from './components/OrderPreview/OrderPreview'
import Main from './layout/Main'
import { loadData } from './loadData/loadData'

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Main></Main>, children: [
      {
        path: '/',
        loader: loadData,
        element: <Order></Order>
      },
      {
        path: 'order',
        loader: loadData,
        element: <Order></Order>
      },
      {
        path: 'review',
        loader: loadData,
        element: <OrderPreview></OrderPreview>
      }
    ] },
    { path: '*', element: <ErrorPage></ErrorPage> }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
