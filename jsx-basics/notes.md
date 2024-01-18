## ESLint Configuration File

- eslintrc.cjs is used to detect errors and warn us about different errors that occur in our component files
- We can got to the 'rules' section of the file and add the type of erros we want our application to ignore
  - Ex. "react/prop-types": "off"
  - There are 3 options to turn it on or off - "off", "warn", "error"
  - You can also set it in numbers like "1", "2" and "3" which corresponds to "off", "warn", "error" respectively
- We can delete the file completely and remove the dependencies from package.json to stop eslint from detecting errors or warnings

## JSX Basics

- Creating HTML elements using 'React.createElement(..)' is a long and tedious process especially when creating nested components. This is where JSX makes life easier
- For an input element, once you set a _value={something}_ you cannot change that value. If you do want to change it however, use the property _defaultValue_ instead which is React specific
- JSX elements can be stored as variables and then used as JavaScript using {}
- You can return only one element inside _return_.
- {undefined}, {null} and {false} will return absolutely not
