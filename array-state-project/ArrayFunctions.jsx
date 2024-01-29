import { useState } from "react";
import { Title } from "./Title";
import Input from "./Input";
import Button from "./Button";

export function ArrayFunctions() {
  const INITIAL_VALUE = ["A", "B", "C"];
  const [letters, setLetters] = useState(INITIAL_VALUE);
  const [input, setInput] = useState("");
  const [updatedInput, setUpdatedInput] = useState("");

  const handleRemoveFirstElement = () => {
    setLetters((currentLetters) => currentLetters.slice(1));
  };

  const removeSpecificLetter = (val) => {
    setLetters((currentLetters) =>
      currentLetters.filter((l) => l.toLowerCase() !== val.toLowerCase())
    );
    setInput("");
  };

  const addLetterToStart = (val) => {
    setLetters((currentLetters) => [val, ...currentLetters]);
    setInput("");
  };

  const addLetterToEnd = (val) => {
    setLetters((currentLetters) => [...currentLetters, val]);
    setInput("");
  };

  const updateLetter = (value, updatedValue) => {
    setLetters((currentLetters) =>
      currentLetters.map((element) => {
        if (element === value) return updatedValue;
        return element;
      })
    );
    setInput("");
    setUpdatedInput("");
  };

  const addLetterAtIndex = (letter, index) => {
    setLetters((currentLetters) => [
      ...currentLetters.slice(0, index),
      letter,
      ...currentLetters.slice(index),
    ]);
    setInput("");
    setUpdatedInput("");
  };

  const clearArray = () => setLetters([]);

  const resetArray = () => setLetters(INITIAL_VALUE);

  return (
    <>
      <Title title={"Remove first element from the array"} values={letters} />
      <Button
        buttonName={"Remove First Element"}
        handleClick={handleRemoveFirstElement}
      />
      <hr />

      <Title title={"Remove specific letter from the array"} values={letters} />
      <Input
        labelValue={"Which letter do you want to remove?"}
        inputValue={input}
        onChange={(e) => setInput(e.target.value)}
      ></Input>
      <Button
        buttonName={"Remove Specific Letter"}
        handleClick={() => removeSpecificLetter(input)}
      />
      <hr />

      <Title title={"Add letter to the start of the array"} values={letters} />
      <Input
        labelValue={"Which letter do you want to add at the beginning?"}
        inputValue={input}
        onChange={(e) => setInput(e.target.value)}
      ></Input>
      <Button
        buttonName={"Add letter at the start"}
        handleClick={() => addLetterToStart(input)}
      />
      <hr />

      <Title title={"Add letter to the end of the array"} values={letters} />
      <Input
        labelValue={"Which letter do you want to add at the end?"}
        inputValue={input}
        onChange={(e) => setInput(e.target.value)}
      ></Input>
      <Button
        buttonName={"Add letter at the end"}
        handleClick={() => addLetterToEnd(input)}
      />
      <hr />

      <Title title={"Update letter"} values={letters} />
      <Input
        labelValue={"Which letter do you want to update?"}
        inputValue={input}
        onChange={(e) => setInput(e.target.value)}
      ></Input>
      <Input
        labelValue={"To which letter do you want to update it to?"}
        inputValue={updatedInput}
        onChange={(e) => setUpdatedInput(e.target.value)}
      ></Input>
      <Button
        buttonName={"Update letter"}
        handleClick={() => updateLetter(input, updatedInput)}
      />
      <hr />

      <Title title={"Add letter to any index"} values={letters} />
      <Input
        labelValue={"Which letter do you want to add?"}
        inputValue={input}
        onChange={(e) => setInput(e.target.value)}
      ></Input>
      <Input
        labelValue={"Which index do you want to add it to?"}
        inputValue={updatedInput}
        onChange={(e) => setUpdatedInput(e.target.value)}
      ></Input>
      <Button
        buttonName={"Add letter at index"}
        handleClick={() => addLetterAtIndex(input, updatedInput)}
      />
      <hr />

      <Button buttonName={"Clear Array"} handleClick={clearArray} />

      <Button buttonName={"Reset Array"} handleClick={resetArray} />
    </>
  );
}
