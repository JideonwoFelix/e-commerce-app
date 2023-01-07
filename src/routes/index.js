import React from "react";
import HomePage from "@pages";
import TestPage1 from "@pages/test_page1";
import TestPage2 from "@pages/test_page2";
import {
  createHashRouter,
  // createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";
import TempNav from "@layouts/TempNav";


// had to it to "createHashRouter" instead of "createBrowserRouter" because the gh-pages deosn't seem to support the later in routing
// learn more about the two and their differences here https://reactrouter.com/en/main/start/tutorial
const router = createHashRouter([
  {
    path: "/",
    element: 
      <>
        <HomePage/>
      </>,
      errorElement: <div className="text-center">Error, Page Not Found <br/> Go Back <Link className="text-blue-400" to={'/'}>Home</Link></div>,
      children:[]
    },
    {
      path: "/test-page1",
      element: <TestPage1/>,
    },
    {
      path: "/test-page2",
      element: <TestPage2/>,
    },
    {
      path: "/test-page3",
      element: 
        <>
          <TempNav/>
          <div>Home Page</div>
        </>
      ,
    }
]);

export default function Routes(){
    return(
        <React.StrictMode>
          <>
            <RouterProvider router={router} />
          </>
        </React.StrictMode>

    )
};