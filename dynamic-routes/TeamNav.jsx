import React from "react";
import { Link } from "react-router-dom";
import teamMembers from "./teamMembers.json";

const TeamNav = () => {
  return (
    <nav>
      <ul>
        {teamMembers.map((member) => (
          <li key={member.id}>
            <Link to={member.id}>Team Member - {member.name}</Link>
          </li>
        ))}
        <li>
          <Link to="new">New Team Member</Link>
        </li>
      </ul>
    </nav>
  );
};

export default TeamNav;
