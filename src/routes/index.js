import React from "react";
import HomePage from "@pages";
import {
  createHashRouter,
  // createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";
import TempNav from "@layouts/TempNav";
import Navbar from "@layouts/Navbar";


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