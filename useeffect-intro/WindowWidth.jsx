import React, { useEffect, useState } from "react";

const WindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handler = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handler);

    return () => {
      document.removeEventListener("resize", handler);
    };
  }, []);
  return <div>Window Width: {width}</div>;
};

export default WindowWidth;
