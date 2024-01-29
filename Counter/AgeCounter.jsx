import { useState } from "react";

export function AgeCounter() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const increaseAge = () => setAge((currentAge) => currentAge + 1);

  const decreaseAge = () => {
    if (age !== 0) setAge((currentAge) => currentAge - 1);
  };

  return (
    <>
      <input
        type="text"
        name="inputField"
        id="inputField"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <button type="button" onClick={decreaseAge}>
        -
      </button>
      <label htmlFor="">{age}</label>
      <button type="button" onClick={increaseAge}>
        +
      </button>
      <br />
      <br />
      <div>
        My name is {name} and my age is {age}
      </div>
    </>
  );
}
