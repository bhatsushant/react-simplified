import { useRef } from "react";
import { CustomInput } from "./CustomInput";

const ForwardRefExample = () => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CustomInput ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ForwardRefExample;
