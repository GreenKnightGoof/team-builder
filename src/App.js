import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import MemberList from "./MemberList";

function App(props) {
  const [members, setMembers] = useState([
    {
      id: Date.now() + 1,
      name: "Kyle Nelson",
      email: "kyle@developer.com",
      role: "Web Developer",
    },
    {
      id: Date.now() + 3,
      name: "Naomi Priest",
      email: "naomi@developer.com",
      role: "Web Developer",
    },
    {
      id: Date.now() + 5,
      name: "Brandon Harris",
      email: "brandon@developer.com",
      role: "Web Developer",
    },
    {
      id: Date.now() + 7,
      name: "Jojo Zhang",
      email: "jojo@developer.com",
      role: "Web Developer",
    },
  ]);

  const addMember = (newMember) => {
    setMembers([...members, newMember]);
  };

  return (
    <div className="App">
      <h1>My Lambda Team!</h1>
      <MemberList members={members} />
      <Form onAdd={addMember} />
    </div>
  );
}

export default App;
