import { useState } from "react";

export function StateObject() {
  const [person, setName] = useState({ name: "Sushant", age: 30 });

  const handleClick = () => {
    const value = name === "Sushant" ? "Sush" : "Sushant";
    setName((currentPerson) => {
      return { ...currentPerson, name: value };
    });
  };

  const { name, age } = person;

  return (
    <h1 onClick={handleClick} style={{ color: "white" }}>
      Name: {name}
      <br />
      Age: {age}
    </h1>
  );
}
