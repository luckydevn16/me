import { createBrowserRouter } from "react-router-dom"

import DefaultLayout from "./layouts/default"
import About from "./pages/About"
import Certification from "./pages/Certification"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
// import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume"
import Skill from "./pages/Skill"

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <div>Error page!</div>,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "certification",
        element: <Certification />,
      },
      {
        path: "skill",
        element: <Skill />,
      },
      // {
      //   path: "portfolio",
      //   element: <Portfolio />,
      // },
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
])

export default router
