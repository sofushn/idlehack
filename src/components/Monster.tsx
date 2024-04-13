import React, { useState } from "react";


interface monsterProp {
  health_points: number
  attack_power: number
  defense: number
  speed: number
  gold: number

  onDie?: (coinValue: number) => void
  onTakeDamage?: () => number


  image: string
}

export function Monster(prop: monsterProp) {
  const emptyFunc = (i: number) => { }
  const emptyFunc2 = () => { }
  const onDie = prop.onDie ?? emptyFunc
  const onTakeDamage = prop.onTakeDamage

  const [health, setHealth] = useState(prop.health_points);
  const [isDead, setIsDead] = useState(false)

  function loseHealth() {
    const damage = onTakeDamage?.() ?? 0
    const newHealth = health - damage

    if (newHealth < 1) {
      setIsDead(true)
      onDie(prop.gold)
    }
    setHealth(newHealth)
  }

  function attack() {
    // not implemented
  }

  if (isDead) {
    return <></>
  }

  return (
    <div onClick={loseHealth}>
      <img src={prop.image} alt="Monster" style={{maxHeight: "30vh"}} />
      <p>Health: {health}</p>
    </div>
  );
}
