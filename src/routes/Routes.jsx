import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import Registation from "../pages/Registation";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            index:true,
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<LogIn></LogIn>
        },
        {
            path:'/registration',
            element:<Registation></Registation>
        }
      ]
      
    },
    
  ]);


  export default router