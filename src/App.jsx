import React from "react";
import Home from "../no-lib-routing/Home";
import About from "../no-lib-routing/About";
import Contact from "../no-lib-routing/Contact";

// import "./styles.css";

function App() {
  let component;
  const url = window.location.pathname;
  switch (url) {
    case "/":
      component = <Home />;
      break;
    case "/about":
      component = <About />;
      break;
    case "/contact":
      component = <Contact />;
      break;

    default:
      break;
  }
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      {component}
    </>
  );
}

export default App;
