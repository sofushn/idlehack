import { useState } from 'react';

interface player {
    maxHealth?: number
    currentHealth?: number
    attackPower?: number
}

function Player(prop: player) {
    const [maxHealth, setMaxHealth] = useState(prop.maxHealth)
    const [currentHealth, setCurrentHealth] = useState(prop.currentHealth)
    const [attack, setAttack] = useState(prop.attackPower)

    function heal(heal: number) {
        if (maxHealth! <= currentHealth! + heal) {
            setCurrentHealth(maxHealth);
        } else {
            setCurrentHealth(currentHealth!+heal)
        }
    }

    return (
        <div onClick={() => heal(1)}>
            <p>player health: {currentHealth}</p>

        </div>
    )
}

export default Player;
