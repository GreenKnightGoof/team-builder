import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'

function App() {
  const [member, setMember] = useState([{
    name: "",
    email: "", 
    role: ""
  }]);

console.log(member)
console.log(setMember)

  return (
    <div className="App">
      <Form />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
