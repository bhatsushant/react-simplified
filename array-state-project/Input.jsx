import React from "react";

const Input = ({ labelValue, inputValue, onChange }) => {
  return (
    <div>
      <div>
        <label htmlFor="inputField">{labelValue}</label>
      </div>
      <input
        type="text"
        name="inputField"
        id="inputField"
        value={inputValue}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
