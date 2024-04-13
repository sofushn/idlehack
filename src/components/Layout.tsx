import React, { CSSProperties } from "react";
import { Monster } from "./Monster"
import slime from "../images/slime.png";

interface player {
    attackPower: number,
} 

interface EnemyKilledEventArgs {
    xp: number
}

interface EnemyAreaProps {
    level: number

    onEnemyKilled?: (args: EnemyKilledEventArgs) => void
    onAttack?: () => number
}

const EnemyArea = (props: EnemyAreaProps) => {    
    function onMonsterDie(coinAmount: number) {
        const nextLevel = coinAmount + 1
    
        // add gold to wallet

        // generate xp


        props.onEnemyKilled?.({xp: 10} as EnemyKilledEventArgs)

        // replace monster
        setCurrentMonster(<Monster 
            health_points={10 * nextLevel}
            attack_power={5}
            defense={0}
            speed={2}
            gold={nextLevel}
            image={slime}
            onDie={onMonsterDie}
            onTakeDamage={props.onAttack}
            key={Math.floor(Math.random() * 1000000)}
        />)
      }
    
    

    const [currentMonster, setCurrentMonster] = React.useState(<Monster 
        health_points={10 * props.level}
        attack_power={5}
        defense={0}
        speed={2}
        gold={1} 
        image={slime}
        onDie={onMonsterDie}
        onTakeDamage={props.onAttack}
        key={Math.floor(Math.random() * 1000000)}
      />)     

    return (
        <div className="monster" style={{backgroundColor: "lightgray", gridArea: "enemy"}}>
            {currentMonster}
        </div>   
    )
}

const CharacterArea = () => {

}

const InventoryArea = () => {

}

export const Layout = () => {
    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "25% 25% 25% 25%",
        gridTemplateRows: "100px 50vh 30vh",
        gridTemplateAreas: "'header header header header' 'char char enemy enemy' 'char char inv inv'"
    } as CSSProperties

    const [currentLevel, setCurrentLevel] = React.useState(1)
    const [player, setplayer] = React.useState({ attackPower: 2 } as player)

    function playerAttack(): number {
        return player.attackPower
    }

    return (
    <div className="window" style={gridStyle}>
        
        <h1 style={{gridArea: "header"}}>LEVEL: {currentLevel}</h1>

        <div className="charachter" style={{backgroundColor: "lightcoral", gridArea: "char"}}>

        </div>
        <EnemyArea level={currentLevel} onAttack={playerAttack}/>

 
        

        <div style={{backgroundColor: "lightcyan", gridArea: "inv"}}>

        </div>
    </div>)
}