import { useState } from "react";

export function InputEventListener() {
  const [name, setName] = useState("Sush");
  return (
    <input
      type="text"
      name="firstname"
      id="firstname"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
