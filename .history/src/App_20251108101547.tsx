import "./App.css";
import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

function App() {
  return (
    <StrictMode>
      <RouterProvider />
    </StrictMode>
  );
}

export default App;
