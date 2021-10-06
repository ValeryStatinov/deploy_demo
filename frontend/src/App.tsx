import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [resp, setResp] = useState('FUCK')

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.text())
      .then(res => setResp(res))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>{resp}</div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="/api/hello"
          target="_blank"
          rel="noopener noreferrer"
        >
          GO TO /api/hello
        </a>
      </header>
    </div>
  );
}

export default App;
