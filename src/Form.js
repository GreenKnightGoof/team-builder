import React, { useState } from "react";
import "./Form.css";

function Form(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  return (
    <div className="form-container">
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Please Enter Your Name:"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          name="email"
          placeholder="Please Enter Your Email:"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        ></input>
        <label htmlFor="role">Role:</label>
        <input
          id="role"
          type="text"
          name="role"
          placeholder="Please Enter Your Role:"
          value={role}
          onChange={(event) => {
            setRole(event.target.value);
          }}
        ></input>
        <button type="submit">Click to Submit!</button>
      </form>
    </div>
  );
}

export default Form;
