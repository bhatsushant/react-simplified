import React from "react";
import { UserCard } from "../user-card/UserCard";
import { UserCardClass } from "../user-card/UserCardClass";
import "../user-card/user.css";
import userData from "../user-card/user.json";

function App() {
  return (
    <>
      <UserCard {...userData}></UserCard>
      <br />
      <UserCardClass {...userData}></UserCardClass>
    </>
  );
}

export default App;
