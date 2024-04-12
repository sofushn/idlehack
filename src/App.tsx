import './App.css';
import { useState } from "react";
import {Monster} from './components/Monster';
import slime from "./images/slime.png";

function App() {
  const [currentLevel, setCurrentLevel] = useState(1)
  function monsterDie(coinAmount: number) {
    console.log("ligma")
    const nextLevel = coinAmount + 1
    
    const nextMonster = <Monster 
      health_points={10 * nextLevel}
      attack_power={5}
      defense={0}
      speed={2}
      gold={nextLevel}
      image={slime}
      onDie={monsterDie}
      key={nextLevel}
  />

    setCurrentLevel(nextLevel)
    // delete monster
    setCurrentMonster(nextMonster)


    // add gold to wallet
  }

  const [currentMonster, setCurrentMonster] = useState(<Monster 
    health_points={10 * currentLevel}
    attack_power={5}
    defense={0}
    speed={2}
    gold={1} 
    image={slime}
    onDie={monsterDie}
    key={currentLevel}
  />)

  
  return (
    <div className="App">
      <h1>LEVEL: {currentLevel}</h1>

      {currentMonster}
      
    </div>
  );
}

export default App;
