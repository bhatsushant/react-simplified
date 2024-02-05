import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const TeamNav = () => {
  const teamMembers = useLoaderData();
  return (
    <nav>
      <ul>
        {teamMembers.map((member) => (
          <li key={member.id}>
            <Link to={member.id.toString()}>Team Member - {member.name}</Link>
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
