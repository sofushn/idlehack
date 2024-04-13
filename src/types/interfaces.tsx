import { ItemRarity, ItemTypes } from "./enums";

export interface IItem {
    rarity: ItemRarity,
    itemType: ItemTypes,
    img: string
    name: string
}

export interface IDefensiveItems extends IItem{
    health: number
}

export interface IOffensiveItems extends IItem{
    attackPower: number
}

export interface Equipment {
    helm?: IDefensiveItems
    chestplate?: IDefensiveItems;
    pants?: IDefensiveItems;
    gloves?: IDefensiveItems;
    boots?: IDefensiveItems;
    ring1?: IOffensiveItems;
    ring2?: IOffensiveItems;
    neckless?: IOffensiveItems;
    weapon?: IOffensiveItems;
    offhand?: IOffensiveItems;
}