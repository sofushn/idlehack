import { useState } from "react";


interface monsterProp{
    health_points: number
    attack_power: number
    defense: number
    speed: number
    gold: number

    image: string
}

export function Monster(prop:monsterProp) {
    const [health, setHealth] = useState(prop.health_points);
    
    // this class needs an image representation 

    function loseHealth(playerDamage: number) {
      // health cannot go below zero
      if (health > 0) {
        setHealth(health - playerDamage);
      }
    }
  
    function attack() {
      // not implemented
    }

    function die() {
      // not implemented
      if (health <= 0) {
        // drop cash ($)
      }
    }
    
    return (
      <div onClick={() => loseHealth(1)}>
        <img src={prop.image} alt="Monster" />
        <p>Health: {health}</p>
      </div>
    );
  }
  