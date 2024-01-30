import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
]);
