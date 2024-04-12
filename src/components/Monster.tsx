import { useState } from "react";


interface monsterProp{
    health_points: number
    attack_power: number
    defense: number
    speed: number
    gold: number

    onDie?: (coinValue: number) => void
    onBeforeDie?: () => void

    image: string
}

export function Monster(prop:monsterProp) {
  const emptyFunc = (i: number) => {}
  const emptyFunc2 = () => {} 
  const onDie = prop.onDie ?? emptyFunc
  const onBeforeDie = prop.onBeforeDie ?? emptyFunc2
  const 

  const [health, setHealth] = useState(prop.health_points);

  function loseHealth(damage: number) {
    const newHealth = health - damage
    setHealth(newHealth)
  }

  function attack() {
    // not implemented
  }

  if (health < 1) {
    onBeforeDie()
    onDie(prop.gold)
    return <></>
  }

  return (
    <div onClick={() => loseHealth(1)}>
      <img src={prop.image} alt="Monster" />
      <p>Health: {health}</p>
    </div>
  );
}
  