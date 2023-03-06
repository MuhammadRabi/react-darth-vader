import { RouterProvider, createBrowserRouter } from "react-router-dom"

import "./styles.scss"
import Homepage from "./Pages/Homepage"
import ArticlesPage from "./Pages/ArticlesPage"
import StaffPage from "./Pages/StaffPage"
import FourthPage from "./Pages/FourthPage"
import Root from "./Pages/Root"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Homepage /> },

        {
          path: "articles",
          element: <ArticlesPage />,
        },
        {
          path: "staff",
          element: <StaffPage />,
        },
        {
          path: "contact",
          element: <FourthPage />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
