import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useHistory } from "react-router-dom";

function App() {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button type="button" onClick={handleClick}>
          Go home
    </button>
      </header>
    </div>
  );
}

export default App;
