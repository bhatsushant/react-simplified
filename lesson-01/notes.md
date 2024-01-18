## ESLint Configuration File

- eslintrc.cjs is used to detect errors and warn us about different errors that occur in our component files
- We can got to the 'rules' section of the file and add the type of erros we want our application to ignore
  - Ex. "react/prop-types": "off"
  - There are 3 options to turn it on or off - "off", "warn", "error"
  - You can also set it in numbers like "1", "2" and "3" which corresponds to "off", "warn", "error" respectively
- We can delete the file completely and remove the dependencies from package.json to stop eslint from detecting errors or warnings
