import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import Registation from "../pages/Registation";
import MyQuery from "../pages/MyQuery";
import AddQuery from "../components/AddQuery";
import ProtectedRoutes from "../components/protectedRoutes/ProtectedRoutes";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<LogIn></LogIn>
        },
        {
            path:'/registration',
            element:<Registation></Registation>
        },
        {
          path:'/myquery',
          element:<ProtectedRoutes><MyQuery></MyQuery></ProtectedRoutes>
        },
        {
          path:'/addquery',
          element:<ProtectedRoutes><AddQuery></AddQuery></ProtectedRoutes>
        }
      ]
      
    },
    
  ]);


  export default router