import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import FlybuysLink from "../pages/FlybuysLink";

export const router = createBrowserRouter([
  {
    index: true,
    Component: Main,
  },
  {
    path: "/flybuys",
    Component: FlybuysLink,
  },
]);
