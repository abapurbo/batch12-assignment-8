import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";
const Root = lazy(() => import("../Root"));
const AllApps = lazy(() => import("../Components/Banner/Features/Apps/AllApps"));
const Installationpage = lazy(() => import("../page/InstallationPage/Installationpage"));
const Details = lazy(() => import("../page/Details/Details"));
const Errorpage = lazy(() => import('../page/Error/Errorpage'))
const Home = lazy(() => import('../page/Home/Home'))
const router = createBrowserRouter([
   {
      path: '/',
      element: (
         <Suspense fallback={<div className='h-dvh text-3xl text-gray-400 font-semibold  flex flex-row gap-3 items-center justify-center '><div className="flex flex-row items-center"><img
            className="w-20 h-20 animate-[spin_1s_linear_infinite]"
            src="../src/assets/logo.png"
            alt="Loading..."
         /><h1>Loading....</h1></div></div>}>
            <Root></Root>
         </Suspense>
      ),
      errorElement: (
         <Suspense fallback={<div className='h-dvh text-3xl text-gray-400 font-semibold  flex flex-row gap-3 items-center justify-center '><div className="flex flex-row items-center"><img
            className="w-20 h-20 animate-[spin_1s_linear_infinite]"
            src="../src/assets/logo.png"
            alt="Loading..."
         /><h1>Loading....</h1></div></div>}>
            <Errorpage></Errorpage>
         </Suspense>
      ),
      children: (
         [
            {
               index: true,
               element: (
                  <Suspense fallback={<div className='h-dvh text-3xl text-gray-400 font-semibold  flex flex-row gap-3 items-center justify-center '><div className="flex flex-row items-center"><img
                     className="w-20 h-20 animate-[spin_1s_linear_infinite]"
                     src="../src/assets/logo.png"
                     alt="Loading..."
                  /><h1>Loading....</h1></div></div>}>
                     <Home></Home>
                  </Suspense>
               ),
            },
            {
               path: '/allApps',
               loader:()=>fetch('/apps.json'),
               element: (
                  <Suspense fallback={<div className='h-dvh text-3xl text-gray-400 font-semibold  flex flex-row gap-3 items-center justify-center '><div className="flex flex-row items-center"><img
                     className="w-20 h-20 animate-[spin_1s_linear_infinite]"
                     src="../src/assets/logo.png"
                     alt="Loading..."
                  /><h1>Loading....</h1></div></div>}>
                     <AllApps></AllApps>
                  </Suspense>
               ),
            }, {
               path: '/installation',
               element: (
                  <Suspense fallback={<div className='h-dvh text-3xl text-gray-400 font-semibold  flex flex-row gap-3 items-center justify-center '><div className="flex flex-row items-center"><img
                     className="w-20 h-20 animate-[spin_1s_linear_infinite]"
                     src="../src/assets/logo.png"
                     alt="Loading..."
                  /><h1>Loading....</h1></div></div>}>
                     <Installationpage></Installationpage>
                  </Suspense>
               ),
            },
            {
               path: '/details/:id',
               loader: () => fetch('/apps.json'),
               element: (
                  <Suspense fallback={<div className='h-dvh text-3xl text-gray-400 font-semibold  flex flex-row gap-3 items-center justify-center '><div className="flex flex-row items-center"><img
                     className="w-20 h-20 animate-[spin_1s_linear_infinite]"
                     src="../src/assets/logo.png"
                     alt="Loading..."
                  /><h1>Loading....</h1></div></div>}>
                     <Details></Details>
                  </Suspense>
               ),
            }
         ]
      )
   }
])
export default router