import IDefensiveItems from "../interfaces/IDefensiveItems";
import IItem from "../interfaces/IItems";
import IOffensiveItems from "../interfaces/IOffensiveItems";
import IPlayer from "../interfaces/IPlayer";

class Player implements IPlayer {
    maxHealth?: number;
    currentHealth?: number;
    attackPower: number;
    bag: IItem[] = [];
    Helm!: IDefensiveItems;
    Chestplate!: IDefensiveItems;
    Pants!: IDefensiveItems;
    Gloves!: IDefensiveItems;
    Boots!: IDefensiveItems;
    Ring1!: IOffensiveItems;
    Ring2!: IOffensiveItems;
    Neckless!: IOffensiveItems;
    Weapon!: IOffensiveItems;
    Offhand!: IOffensiveItems;

    public constructor(maxHealth: number, attackPower: number) {
        this.maxHealth = maxHealth
        this.attackPower = attackPower

    }
}
export default Player
