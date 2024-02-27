import React, { useMemo, useState } from "react";
import "./styles.css";
import { checkEmail, checkPassword } from "./validators";

const StateFormValidation = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isAfterFirstSubmit, setAfterFirstSubmit] = useState(false);

  const emailErrors = useMemo(
    () => (isAfterFirstSubmit ? checkEmail(email) : []),
    [isAfterFirstSubmit, email]
  );

  const passwordErrors = useMemo(
    () => (isAfterFirstSubmit ? checkPassword(password) : []),
    [isAfterFirstSubmit, password]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setAfterFirstSubmit(true);

    const emailResults = checkEmail(email);
    const passwordResults = checkPassword(password);

    if (emailResults.length === 0 && passwordResults.length === 0)
      alert("Success");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className={`form-group ${emailErrors.length > 0 ? "error" : ""}`}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailErrors.length > 0 && (
          <div className="msg">{emailErrors.join(", ")}</div>
        )}
      </div>
      <div className={`form-group ${passwordErrors.length > 0 ? "error" : ""}`}>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          value={password}
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordErrors.length > 0 && (
          <div className="msg">{passwordErrors.join(", ")}</div>
        )}
      </div>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default StateFormValidation;
