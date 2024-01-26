import { useState } from "react";

const slowFunc = () => {
  console.log("Some really slow function");
  return "Sushant";
};

export function StateFunc() {
  //   const [name, setName] = useState(slowFunc());
  // To stop running the above function again and again...

  const [name, setName] = useState("Sushant");
  const [age, setAge] = useState(30);

  const handleClick = () => {
    const nameVal = name === "Sushant" ? "Sush" : "Sushant";
    setName(nameVal);
    setAge((currentAge) => currentAge - 1);
    setAge((currentAge) => currentAge - 1);
  };

  return (
    <h1 onClick={handleClick} style={{ color: "white" }}>
      Name: {name}
      <br />
      Age: {age}
    </h1>
  );
}
