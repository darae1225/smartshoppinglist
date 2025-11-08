import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";

export const router = createBrowserRouter([
  {
    index: true,
    Component: MainPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/signup",
    Component: SignUpPage,
  },
]);
