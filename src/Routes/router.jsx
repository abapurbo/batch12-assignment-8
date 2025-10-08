import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Errorpage from "../page/Error/Errorpage";
import Home from "../page/Home/Home";

const router = createBrowserRouter([
   {
      path: '/',
      Component:Root,
      errorElement:<Errorpage></Errorpage>,
      children:(
         [
            {
               index:true,
               Component:Home
            }
         ]
      )
   }
])
export default router