import { createBrowserRouter } from "react-router-dom";

import GuessLayout from "../layouts/GuessLayout";
import ProfileLayout from "../layouts/ProfileLayout";
import Home from "../pages/Home";
import Settings from "../pages/Settings";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GuessLayout />,
    children: [
      {
        path: "/",
        element: <ProfileLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/settings",
            element: <Settings />,
          },
        ],
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);
