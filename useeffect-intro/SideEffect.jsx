import { useEffect, useState } from "react";

export function SideEffect() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const increaseAge = () => setAge((currentAge) => currentAge + 1);

  const decreaseAge = () => {
    if (age !== 0) setAge((currentAge) => currentAge - 1);
  };

  useEffect(() => {
    const handler = () => {
      console.log(name);
    };

    document.addEventListener("click", handler);
    console.log("Inside Effect");

    return () => {
      document.removeEventListener("click", handler);
      console.log("Cleanup");
    };
  }, [name]);

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
