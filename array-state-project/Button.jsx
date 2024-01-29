import React from "react";

const Button = ({ buttonName, handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>{buttonName}</button>;
    </div>
  );
};

export default Button;
