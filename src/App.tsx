import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Monster} from './components/Monster';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <Monster 
        health_points={10} 
        attack_power={5} 
        defense={0} 
        speed={2} 
        gold={1}/>
    </div>
  );
}

export default App;
