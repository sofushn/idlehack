import React, { CSSProperties } from "react";
import { Monster } from "./Monster"
import Player from "../classes/Player"
import { ItemRarity, ItemTypes } from "../types/enums";
import { IItem, Equipment, IOffensiveItems } from "../types/interfaces";

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
    onItemClick?: (item: IItem) => void
}

const InventoryArea = (props: InventoryAreaProps) => {

    const onClick = (item: IItem) => {
        props.onItemClick?.(item)
    }

    const itemFrames = props.items.map(item => {
        let itemColor = "#f7f7f7"
        switch (item.rarity) {
            case ItemRarity.Poor:
                itemColor = "#aaaaaa"
                break;
            case ItemRarity.Uncommon:
                itemColor = "#1eff00"
                break;
            case ItemRarity.Rare:
                itemColor = "#006cd6"
                break;
            case ItemRarity.Epic:
                itemColor = "#9e33e7"
                break;
            case ItemRarity.Legendary:
                itemColor = "#f77c00"
                break;
        }

        return (
        <div style={{border: "2px solid", borderRadius: 5}} onClick={() => onClick(item)}>
            <img src={item.img} style={{height: "100px"}} alt="Monster"/>
            <p style={{backgroundColor: itemColor}}>{item.name}</p>
            
        </div>
    )})
    
    return (
        <div style={{backgroundColor: "lightcyan", gridArea: "inv"}}>
            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "1vh"}}>
                {itemFrames}
            </div>
            
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

    const equipment = {
        helm: { health:2, itemType: ItemTypes.Helm, rarity: ItemRarity.Common, name: "Common helmet" },
        chestplate: { health: 2, itemType: ItemTypes.Chestplate, rarity: ItemRarity.Common, name: "Common chestplate" },
        pants: { health: 2, itemType: ItemTypes.Pants, rarity: ItemRarity.Common, name: "Common pants" },
        gloves: { health: 2, itemType: ItemTypes.Gloves, rarity: ItemRarity.Common, name: "Common gloves" },
        boots: { health: 2, itemType: ItemTypes.Boots, rarity: ItemRarity.Common, name: "Common boots" },
        ring1: { attackPower: 2, itemType: ItemTypes.Ring, rarity: ItemRarity.Rare, name: "Rare ring" },
        ring2: { attackPower: 2, itemType: ItemTypes.Ring, rarity: ItemRarity.Rare, name: "Rare ring" },
        neckless: { attackPower: 2, itemType: ItemTypes.Neckless, rarity: ItemRarity.Rare, name: "Rare neckless" },
        weapon: { attackPower: 4, itemType: ItemTypes.Weapon, rarity: ItemRarity.Common, name: "Common sword" },
        offhand: { attackPower: 2, itemType: ItemTypes.Offhand, rarity: ItemRarity.Common, name: "Common sheild" }
    } as Equipment

    const bag = [
        {img: helmet, name: "Helmet", itemType: ItemTypes.Helm, rarity: ItemRarity.Epic},
        {img: boots, name: "Boots", itemType: ItemTypes.Boots, rarity: ItemRarity.Epic},
        {img: dagger, name: "Dagger", itemType: ItemTypes.Weapon, rarity: ItemRarity.Rare},
        {img: dagger_double, name: "Double Dagger", itemType: ItemTypes.Weapon, rarity: ItemRarity.Epic, attackPower: 200 } as IOffensiveItems,
        {img: shield_red, name: "Red Shield", itemType: ItemTypes.Offhand, rarity: ItemRarity.Epic},
        {img: shield_black, name: "Black Shield", itemType: ItemTypes.Offhand, rarity: ItemRarity.Rare},
    ]

    const [player, setPlayer] = React.useState(new Player(10, 2, equipment, bag))

    function playerAttack(): number {
        return player.getAttackPower()
    }

    const enemyKilled = (args: EnemyKilledEventArgs) => {
        setCurrentLevel(currentLevel + args.xp)
    }

    const equipItem = (item: IItem) => {
        player.equipItem(item)
        setPlayer(player)
    }

    return (
    <div className="window" style={gridStyle}>
        
        <h1 style={{gridArea: "header"}}>LEVEL: {currentLevel}</h1>

        <div className="charachter" style={{backgroundColor: "lightcoral", gridArea: "char"}}>

        </div>
        <EnemyArea level={currentLevel} onAttack={playerAttack} onEnemyKilled={(e) => enemyKilled(e)}/>

 
        <InventoryArea items={player.bag.map(i => i)} onItemClick={equipItem}/>
    </div>)
}