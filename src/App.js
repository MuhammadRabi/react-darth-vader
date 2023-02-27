import Homepage from "./Pages/Homepage"
import ArticlesPage from "./Pages/ArticlesPage"
import StaffPage from "./Pages/StaffPage"
import FourthPage from "./Pages/FourthPage"
import Root from "./Pages/Root"

import { RouterProvider, createBrowserRouter } from "react-router-dom"

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
          path: "about",
          element: <FourthPage />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
