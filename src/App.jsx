import React from "react";
import Lesson01 from "../jsx-basics/jsx-basics";
import { ToDoListClass } from "../components-intro/TodoListClass";
import { FunctionProps } from "../functionProps/FunctionProps";
import { TodoListItem } from "../components-intro/TodoListItem";
import { TodoListItemClass } from "../components-intro/TodoListItemClass";
// import { TodoList } from "../lesson-02/TodoList";

function App() {
  // return <TodoList />;
  // return <ToDoListClass />;
  return (
    <>
      {/* <FunctionProps name="Sushant" age={27} />
      <FunctionProps name="Sush" age={25} isProgrammer />
      <FunctionProps>
        <span>Sushi </span>
        <span>28</span>
      </FunctionProps> */}
      <TodoListItem isComplete>Item 1</TodoListItem>
      <TodoListItemClass isComplete>Item 2</TodoListItemClass>
    </>
  );
}

export default App;
