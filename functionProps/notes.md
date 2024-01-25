## Props

- Props are destructured in the component as parameters or before using them in JSX so as to avoid repeating the format `props.variableName`
- When a prop is assigned a value at function level, say `{age=26}`, this means that it's default value will be 26 if a certain prop value is not present or passed to the function from a component
- Removing `<React.StrictMode>` from _main.jsx_ prevents React from console logging twice
