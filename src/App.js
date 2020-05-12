import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import MemberList from "./MemberList";

function App(props) {
  const [members, setMembers] = useState([
    {
      id: Date.now() + 1,
      name: "Kyle N",
      email: "kyle@developer.com",
      role: "Web Developer",
    },
    {
      id: Date.now() + 3,
      name: "Valerie V",
      email: "valerie@developer.com",
      role: "Web Developer",
    },
    {
      id: Date.now() + 5,
      name: "William S",
      email: "william@developer.com",
      role: "Web Developer",
    },
    {
      id: Date.now() + 7,
      name: "Annemarie A",
      email: "annemarie@developer.com",
      role: "Web Developer",
    },
  ]);

  const addMember = (newMember) => {
    setMembers([...members, newMember]);
  };

  return (
    <div className="App">
      <h1>My Lambda Team!</h1>
      <MemberList team={members} />
      <Form onAdd={addMember} />
    </div>
  );
}

export default App;
