import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import Login from "../pages/Login/Login";
import newsLoader from "../loaders/newsloader";


const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<Root></Root>,
            children:[
                {
                    path:"/",
                    element:<Home></Home>,
                    loader:newsLoader,
                },
                {
                    path:"/about",
                    element:<About></About>
                },
                {
                    path:"/career",
                    element:<Career></Career>
                },
                {
                    path:"/login",
                    element:<Login></Login>
                }
            ]
        }
    ]
);

export default router;