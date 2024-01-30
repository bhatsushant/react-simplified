import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Team from "./Team";
import TeamMember from "./TeamMember";
import TeamNav from "./TeamNav";

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    errorElement: (
      <h1>Shucks! Someone's writing some erroneous code aren't they?</h1>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/team",
        element: <TeamNavLayout />,
        children: [
          { index: true, element: <Team /> },
          { path: "sush", element: <TeamMember name="Sush" /> },
          { path: "sam", element: <TeamMember name="Sam" /> },
        ],
      },
    ],
  },
]);

function NavLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function TeamNavLayout() {
  return (
    <>
      <TeamNav />
      <Outlet context="Hi from context" />
    </>
  );
}
