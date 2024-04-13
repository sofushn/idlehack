import './App.css';
import { useState } from "react";
import { Monster } from './components/Monster';
import slime from "./images/slime.png";
import PlayerClass from './classes/Player';
import PlayerComponent from './components/Player';
import IDefensiveItems from './interfaces/IDefensiveItems';
import ItemTypes from './enums/ItemTypes';
import ItemRarity from './enums/ItemRarity';
import IOffensiveItems from './interfaces/IOffensiveItems';



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
      onTakeDamage={playerAttack}
      key={nextLevel}
    />

    setCurrentLevel(nextLevel)
    // delete monster
    setCurrentMonster(nextMonster)

    // add gold to wallet
  }

  const [helm] = useState({health:2,itemType:ItemTypes.Helm,rarity:ItemRarity.Common} as IDefensiveItems)
  const [Chestplate] = useState({health:2,itemType:ItemTypes.Chestplate,rarity:ItemRarity.Common} as IDefensiveItems)
  const [pants] = useState({health:2,itemType:ItemTypes.Pants,rarity:ItemRarity.Common} as IDefensiveItems)
  const [gloves] = useState({health:2,itemType:ItemTypes.Gloves,rarity:ItemRarity.Common} as IDefensiveItems)
  const [boots] = useState({health:2,itemType:ItemTypes.Boots,rarity:ItemRarity.Common} as IDefensiveItems)
  const [ring1] = useState({attackPower:2,itemType:ItemTypes.Ring,rarity:ItemRarity.Common} as IOffensiveItems)
  const [ring2] = useState({attackPower:2,itemType:ItemTypes.Ring,rarity:ItemRarity.Common} as IOffensiveItems)
  const [neckless] = useState({attackPower:2,itemType:ItemTypes.Helm,rarity:ItemRarity.Common} as IOffensiveItems)
  const [weapon] = useState({attackPower:4,itemType:ItemTypes.Helm,rarity:ItemRarity.Common} as IOffensiveItems)
  const [offhand] = useState({attackPower:2,itemType:ItemTypes.Helm,rarity:ItemRarity.Common} as IOffensiveItems)

  const [player, setplayer] = useState(new PlayerClass(10, 2, helm ,Chestplate ,pants ,gloves ,boots ,ring1 ,ring2 ,neckless ,weapon ,offhand))

  function playerAttack(): number {
    return player.getAttackPower()
  }


  const [currentMonster, setCurrentMonster] = useState(<Monster
    health_points={10 * currentLevel}
    attack_power={5}
    defense={0}
    speed={2}
    gold={1}
    image={slime}
    onDie={monsterDie}
    onTakeDamage={playerAttack}
    key={currentLevel}
  />)



  return (
    <div className="App">
      <h1>LEVEL: {currentLevel}</h1>

      {currentMonster}
      {player.getAttackPower()}



    </div>
  );
}

export default App;
