import React from "react";
import { Link } from "react-router-dom";

const TeamNav = () => {
  return (
    <>
      <li>
        <Link to="/team/sush">Team Member - Sush</Link>
      </li>
      <li>
        <Link to="/team/sam">Team Member - Sam</Link>
      </li>
      <li>
        <Link to="..">
          .. Route (this is the default when ".." is used in the ''to property)
        </Link>
      </li>
      <li>
        <Link to=".." relative="path">
          .. Path (this is the relative to the path we are on when the
          'relative' property is set to "path")
        </Link>
      </li>
    </>
  );
};

export default TeamNav;
