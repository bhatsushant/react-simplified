import { useState } from "react";

export function Name() {
  const [name, setName] = useState("Sushant");

  const handleClick = () => {
    const val = name === "Sushant" ? "Sush" : "Sushant";
    setName(val);
  };

  return (
    <h1 onClick={handleClick} style={{ color: "white" }}>
      {name}
    </h1>
  );
}
