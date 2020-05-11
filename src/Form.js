import React from "react";
import "./Form.css";

function Form(props) {
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
          value={"Kyle"}
        ></input>
        <button type="submit">Click to Submit!</button>
      </form>
    </div>
  );
}

export default Form;
