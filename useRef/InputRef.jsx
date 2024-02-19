import React, { useEffect, useRef, useState } from "react";

const InputRef = () => {
  const [name, setName] = useState("");
  const inputRef = useRef("");

  useEffect(() => inputRef.current.focus(), []);

  return (
    <>
      <h1>{inputRef.current.value}</h1>
      <label htmlFor="name">
        {" "}
        Name:
        <input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
      </label>
    </>
  );
};

export default InputRef;
