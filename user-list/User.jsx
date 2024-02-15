import React from "react";

const User = ({ name, email, phone, username }) => {
  return (
    <li>
      {name}, {email}, {phone}, {username}
    </li>
  );
};

export default User;
