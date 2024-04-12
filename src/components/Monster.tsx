import { useState } from "react";

interface monsterProp{
    health_points: number
    attack_power: number
    defense: number
    speed: number
    gold: number
}

export function Monster(prop:monsterProp) {
    const [health, setHealth] = useState(prop.health_points);
  
    function loseHealth() {
      if (health > 0) {
        setHealth(health - 1);
      }
      else {
        // die
      }
    }
  
    return (
      <div onClick={loseHealth}>
        Health: {health}
      </div>
    );
  }
  