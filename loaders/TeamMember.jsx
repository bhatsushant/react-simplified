import React from "react";
import { useLoaderData } from "react-router-dom";

const TeamMember = () => {
  const member = useLoaderData();
  return <h1>Hi {member.name}</h1>;
};

export default TeamMember;
