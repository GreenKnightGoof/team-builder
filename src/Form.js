import React, { useState } from "react";
import "./Form.css";

function Form(props) {
  const [member, setMember] = useState({
    id: Date.now(),
    name: "",
    email: "",
    role: "",
  });

  const changeHandler = (event) => {
    setMember({
      ...member,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="form-container">
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          props.onAdd(member);
          setMember({ id: Date.now(), name: "", email: "", role: "" });
        }}
      >
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Please Enter Your Name:"
          value={member.name}
          onChange={changeHandler}
        ></input>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          name="email"
          placeholder="Please Enter Your Email:"
          value={member.email}
          onChange={changeHandler}
        ></input>
        <label htmlFor="role">Role:</label>
        <input
          id="role"
          type="text"
          name="role"
          placeholder="Please Enter Your Role:"
          value={member.role}
          onChange={changeHandler}
        ></input>
        <button type="submit">Click to Submit!</button>
      </form>
    </div>
  );
}

export default Form;
