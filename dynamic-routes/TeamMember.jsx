import React from "react";
import { useParams } from "react-router-dom";
import teamMembers from "./teamMembers.json";

const TeamMember = () => {
  const { memberId } = useParams();
  const member = teamMembers.find((m) => m.id === memberId);
  return <h1>Hi {member.name}</h1>;
};

export default TeamMember;
