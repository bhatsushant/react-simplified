import React, { useState } from "react";
import { useToggle } from "./usToggle";
import { useInputValue } from "./useInputValue";

const DarkMode = () => {
  const nameInput = useInputValue("");
  const [isDarkMode, toggleDarkMode] = useToggle(false);

  return (
    <div
      style={{
        background: isDarkMode ? "#333" : "white",
        color: isDarkMode ? "white" : "#333",
      }}
    >
      <label htmlFor="nameField">
        Name:
        <input type="text" name="nameField" id="nameField" {...nameInput} />
      </label>
      <br />
      <br />
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
};

export default DarkMode;
