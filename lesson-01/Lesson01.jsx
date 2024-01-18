import React from "react";

function Lesson01() {
  // return React.createElement(
  //   "h1",
  //   { id: "5" },
  //   "Hello World",
  //   React.createElement("span", null, "Bye")
  // );

  const myCustomLabel = <label htmlFor="inputId">Input</label>;
  return (
    <>
      <label id="5" style={{ background: "red" }}>
        Hello World
      </label>
      <div className="large" id="largeDiv">
        Hi
      </div>
      <div className="large" id="largeDiv">
        {myCustomLabel}
        <input type="number" id="inputId" defaultValue={3} />
      </div>
    </>
  );
}

export default Lesson01;
