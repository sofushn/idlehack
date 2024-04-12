import { useState } from "react";


interface monsterProp{
    health_points: number
    attack_power: number
    defense: number
    speed: number
    gold: number

    onDie?: (coinValue: number) => void

    image: string
}

export function Monster(prop:monsterProp) {
  const emptyFunc = (i: number) => {}
  const emptyFunc2 = () => {} 
  const onDie = prop.onDie ?? emptyFunc

  const [health, setHealth] = useState(prop.health_points);
  const [isDead, setIsDead] = useState(false)

  function loseHealth(damage: number) {
    const newHealth = health - damage

    if(newHealth < 1) {
      setIsDead(true)
    }
    setHealth(newHealth)
  }

  function attack() {
    // not implemented
  }

  if (isDead) {
    onDie(prop.gold)
  }

  return (
    <div onClick={() => loseHealth(1)}>
      <img src={prop.image} alt="Monster" />
      <p>Health: {health}</p>
    </div>
  );
}
  