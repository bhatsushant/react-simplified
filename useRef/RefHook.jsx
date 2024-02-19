import React from "react";
import { useRef } from "react";

const RefHook = () => {
  let ref = useRef(Math.random());

  return (
    <>
      <button onClick={() => console.log(ref.current)}>Print Ref</button>
      <button onClick={() => (ref.current = Math.random())}>Change Ref</button>
    </>
  );
};

export default RefHook;
