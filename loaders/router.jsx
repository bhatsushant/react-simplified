import {
  Navigate,
  Outlet,
  createBrowserRouter,
  redirect,
  useNavigation,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Team from "./Team";
import TeamMember from "./TeamMember";
import TeamNav from "./TeamNav";
import NewTeamMember from "./NewTeamMember";

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    errorElement: (
      <h1>Shucks! Someone's writing some erroneous code aren't they?</h1>
    ),
    children: [
      {
        path: "*",
        element: <Navigate to="/" />,
      },
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/test/*", element: <h1>Test</h1> }, // * is a wildcard
      {
        path: "/team",
        element: <TeamNavLayout />,
        loader: ({ request: { signal } }) =>
          fetch("https://jsonplaceholder.typicode.com/users", { signal }),
        children: [
          { index: true, element: <Team /> },
          {
            path: ":memberId",
            loader: ({ params, request: { signal } }) =>
              fetch(
                `https://jsonplaceholder.typicode.com/users/${params.memberId}`,
                { signal }
              ).then((res) => {
                if (res.status === 200) return res.json();

                throw redirect("/team");
              }),
            element: <TeamMember />,
          },
          { path: "new", element: <NewTeamMember /> },
        ],
      },
    ],
  },
]);

function NavLayout() {
  const { state } = useNavigation();
  return (
    <>
      <Navbar />
      {state === "loading" ? <h1>Loading...</h1> : <Outlet />}
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
