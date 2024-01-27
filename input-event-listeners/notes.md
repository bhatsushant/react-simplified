## Input Event Listeners

- In React there is a concept called controlled and uncontrolled input
- Whenever we want to provide a `value` property to an input field, we need to provide an `onChange` method to the `input` tag
- When we do this, React considers it a controlled input which means that React has control over that input element
- When we fail to provide an `onChange` method to input fields, Reatc throws an error saying that it we need to provide an `onChange` method if we need to change the value of the input field
- If we try to change the value of the input field without providing an `onChange` method, we are not able to chnage the value of the field when we type in
- For this purposes, React separates the property of `defaultValue` which can be changed on the fly as we type in the field, meaning, React says that this is just a deafult value for the field and not an actual value of the field whereas the `value` property is the actual value of the input field
