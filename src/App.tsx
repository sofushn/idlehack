import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import {Monster} from './components/Monster';
import slime from "./images/slime.png";

function App() {
  const [counter, setCounter] = useState(1)
  function monsterDie(coinAmount: number) {
    console.log("ligma")
    const nextLevel = counter + 1
    
    // delete monster
    setCurrentMonster(<Monster 
      health_points={10 * nextLevel}
      attack_power={5}
      defense={0}
      speed={2}
      gold={1} 
      image={slime}
      onDie={monsterDie}
      key={nextLevel}
    />)

    setCounter(nextLevel)

    // add gold to wallet
  }

  const [currentMonster, setCurrentMonster] = useState(<Monster 
    health_points={10 * counter}
    attack_power={5}
    defense={0}
    speed={2}
    gold={1} 
    image={slime}
    onDie={monsterDie}
    key={counter}
  />)

  
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

      {currentMonster}
      
    </div>
  );
}

export default App;
