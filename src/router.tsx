import { createBrowserRouter } from "react-router-dom"
import DefaultLayout from "./layouts/default"

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <div>Error page!</div>,
    children: [
      {
        path: "/",
        element: <div>Hello world</div>
      }
    ]
  },
])

export default router
