import { createBrowserRouter } from "react-router-dom"

import DefaultLayout from "./layouts/default"
import About from "./pages/About"
import Certification from "./pages/Certification"
import Education from "./pages/Education"
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume"
import Skill from "./pages/Skill"

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <div>Error page!</div>,

    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "education",
        element: <Education />,
      },
      {
        path: "certification",
        element: <Certification />,
      },
      {
        path: "skill",
        element: <Skill />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
    ],
  },
])

export default router
