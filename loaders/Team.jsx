import React from "react";
import { useOutletContext } from "react-router-dom";

const Team = () => {
  const value = useOutletContext();
  return <h1>Team - {value}</h1>;
};

export default Team;
