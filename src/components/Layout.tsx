import React, { CSSProperties } from "react";
import { Monster } from "./Monster"
import Player from "../classes/Player"
import IItem from "../interfaces/IItems";
import ItemRarity from "../enums/ItemRarity";
import ItemTypes from "../enums/ItemTypes";

import slime from "../images/monsters/slime.png"
import croc from "../images/monsters/croc.png"
import knifer from "../images/monsters/knifer.png"
import packi from "../images/monsters/packi.png"
import root from "../images/monsters/root.png"

import helmet from "../images/items/helmet.png"
import boots from "../images/items/boots.png"
import shield_black from "../images/items/shield_black.png"
import shield_red from "../images/items/shield_red.png"
import dagger from "../images/items/dagger.png"
import dagger_double from "../images/items/dagger_dobble.png"

interface EnemyKilledEventArgs {
    xp: number
}

interface EnemyAreaProps {
    level: number

    onEnemyKilled?: (args: EnemyKilledEventArgs) => void
    onAttack?: () => number
}

const EnemyArea = (props: EnemyAreaProps) => {    
    const monsters = [
        croc,
        slime,
        knifer,
        packi,
        root
    ]
    
    function onMonsterDie(coinAmount: number) {
        const nextLevel = coinAmount + 1
    
        // add gold to wallet

        // generate xp


        props.onEnemyKilled?.({xp: coinAmount} as EnemyKilledEventArgs)

        // replace monster
        const monsterIndex = Math.floor(Math.random() * monsters.length)
        setCurrentMonster(<Monster 
            health_points={10 * nextLevel}
            attack_power={5}
            defense={0}
            speed={2}
            gold={nextLevel}
            image={monsters[monsterIndex]}
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
        image={monsters[Math.floor(Math.random() * monsters.length)]}
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

interface InventoryAreaProps {
    items: Array<IItem>
}

const InventoryArea = (props: InventoryAreaProps) => {

    const itemFrames = props.items.map(item => (<div>
        <img src={item.img}/>
        {item.name}
    </div>))    
    
    return (
        <div style={{backgroundColor: "lightcyan", gridArea: "inv", display: "flex", flexDirection: "row"}}>
            {itemFrames}
        </div>
    )
}

export const Layout = () => {
    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "25% 25% 25% 25%",
        gridTemplateRows: "100px 50vh 30vh",
        gridTemplateAreas: "'header header header header' 'char char enemy enemy' 'char char inv inv'"
    } as CSSProperties

    const [currentLevel, setCurrentLevel] = React.useState(1)
    const [player, setplayer] = React.useState(new Player(10, 2))

    player.bag = [{img:"", name:"Helmet", itemType: ItemTypes.Helm, rarity: ItemRarity.Epic}]

    function playerAttack(): number {
        return player.attackPower
    }

    const enemyKilled = (args: EnemyKilledEventArgs) => {
        setCurrentLevel(currentLevel + args.xp)
    }

    return (
    <div className="window" style={gridStyle}>
        
        <h1 style={{gridArea: "header"}}>LEVEL: {currentLevel}</h1>

        <div className="charachter" style={{backgroundColor: "lightcoral", gridArea: "char"}}>

        </div>
        <EnemyArea level={currentLevel} onAttack={playerAttack} onEnemyKilled={(e) => enemyKilled(e)}/>

 
        <InventoryArea items={[]}/>
    </div>)
}