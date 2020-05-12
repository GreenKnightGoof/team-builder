import React, { useState } from 'react';
import './App.css';
import Form from './Form'
import MemberList from './MemberList'

function App(props) {
  const [members, setMembers] = useState([{
    id: Date.now(),
    name: "",
    email: "", 
    role: ""
  }]);


  const addMember = (newMember) => {
    setMembers([...members, newMember])
  }

  return (
    <div className="App">
      <h1>My Lambda Team!</h1>
      <MemberList members={members}/>
      <Form addMember={addMember}/>
    </div>
  );
}

export default App;
