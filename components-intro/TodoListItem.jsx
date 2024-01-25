import React from "react";

export function TodoListItem({ children, isComplete }) {
  return (
    <>
      <input
        type="checkbox"
        name="nameCheckbox"
        id="nameCheckbox"
        defaultChecked={isComplete}
      />
      <label htmlFor="nameCheckbox">{children}</label>
    </>
  );
}
