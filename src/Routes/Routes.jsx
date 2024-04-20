import { createBrowserRouter} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path:"/",
            element:<Home></Home>,
            loader: () => fetch('')
        },
    ],
  },
]);

export default router;