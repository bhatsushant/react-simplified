import { useState } from "react";

export const useToggle = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue((currValue) => !currValue);
  return [value, toggle];
};
