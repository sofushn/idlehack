import { useState } from "react";


interface monsterProp{
    health_points: number
    attack_power: number
    defense: number
    speed: number
    gold: number

    onDie?:(coinValue: number) => void

    image: string
}

export function Monster(prop:monsterProp) {
    const emptyFunc = (i: number) => {}
    const onDie = prop.onDie ?? emptyFunc

    const [health, setHealth] = useState(prop.health_points);

    function loseHealth(playerDamage: number) {
      // health cannot go below zero
      if (health > 1) {
        setHealth(health - playerDamage);
      } else {
        die()
      }
    }
  
    function attack() {
      // not implemented
    }

    function die() {
      onDie(prop.gold)
    }
    
    return (
      <div onClick={() => loseHealth(1)}>
        <img src={prop.image} alt="Monster" />
        <p>Health: {health}</p>
      </div>
    );
  }
  