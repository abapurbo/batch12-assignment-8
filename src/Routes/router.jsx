import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";
const Root = lazy(() => import("../Root"));
const AllApps = lazy(() => import("../Components/Banner/Features/Apps/AllApps"));
const Installationpage = lazy(() => import("../page/InstallationPage/Installationpage"));
const Details = lazy(() => import("../page/Details/Details"));
const Errorpage = lazy(() => import('../page/Error/Errorpage'));
const Home = lazy(() => import('../page/Home/Home'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={
        <div className='h-dvh text-3xl text-gray-400 font-semibold flex flex-row gap-3 items-center justify-center'>
          <div className="flex flex-row items-center">
            <img className="w-20 h-20 animate-[spin_1s_linear_infinite]" src="https://i.ibb.co.com/1Jdj50b3/logo.png" alt="Loading..." />
            <h1>Loading....</h1>
          </div>
        </div>
      }>
        <Root />
      </Suspense>
    ),
    errorElement:(
      <Suspense fallback={
        <div className='h-dvh text-3xl text-gray-400 font-semibold flex flex-row gap-3 items-center justify-center'>
          <div className="flex flex-row items-center">
            <img className="w-20 h-20 animate-[spin_1s_linear_infinite]" src="https://i.ibb.co.com/1Jdj50b3/logo.png" alt="Loading..." />
            <h1>Loading....</h1>
          </div>
        </div>
      }>
        <Errorpage />
      </Suspense>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: '/allApps', loader: () => fetch('/apps.json'), element: <AllApps /> },
      { path: '/installation', element: <Installationpage /> },
      { path: '/details/:id', loader: () => fetch('/apps.json'), element: <Details /> },
    ]
  }
]);

export default router;
