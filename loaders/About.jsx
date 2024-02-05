import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => navigate("/"), 3000);

    return () => clearTimeout(timeout);
  }, []);
  return <h1>About</h1>;
};

export default About;
