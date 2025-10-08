import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Errorpage from "../page/Error/Errorpage";
import Home from "../page/Home/Home";
import AllApps from "../Components/Banner/Features/Apps/AllApps";
import Installationpage from "../page/InstallationPage/Installationpage";

const router = createBrowserRouter([
   {
      path: '/',
      Component: Root,
      errorElement: <Errorpage></Errorpage>,
      children: (
         [
            {
               index: true,
               Component: Home
            },
            {
              path:'/allApps',
              loader:()=>fetch('/apps.json'),
              Component:AllApps
            },{
               path:'/installation',
               Component:Installationpage
            }
         ]
      )
   }
])
export default router