import { off } from "process";
import IDefensiveItems from "../interfaces/IDefensiveItems";
import IItem from "../interfaces/IItems";
import IOffensiveItems from "../interfaces/IOffensiveItems";
import IPlayer from "../interfaces/IPlayer";

class Player implements IPlayer {
    maxHealth: number;
    currentHealth: number;
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


    public constructor(maxHealth: number, attackPower: number, Helm: IDefensiveItems, Chestplate: IDefensiveItems, Pants: IDefensiveItems, Gloves: IDefensiveItems, Boots: IDefensiveItems, Ring1: IOffensiveItems, Ring2: IOffensiveItems, Neckless: IOffensiveItems, Weapon: IOffensiveItems, Offhand: IOffensiveItems) {
        this.maxHealth = maxHealth
        this.currentHealth = maxHealth
        this.attackPower = attackPower
        this.Helm = Helm;
        this.Chestplate = Chestplate;
        this.Pants = Pants;
        this.Gloves = Gloves;
        this.Boots = Boots;
        this.Ring1 = Ring1;
        this.Ring2 = Ring2;
        this.Neckless = Neckless;
        this.Weapon = Weapon;
        this.Offhand = Offhand;
    }

    public getAttackPower() {

        const realAttackPower = this.attackPower + this.Ring1.attackPower + this.Ring2.attackPower + this.Neckless.attackPower + this.Weapon.attackPower + this.Offhand.attackPower
        return realAttackPower;
    }

    public getMaxHealth() {
        const realMaxHealth = this.maxHealth + this.Helm.health + this.Chestplate.health + this.Pants.health + this.Gloves.health + this.Boots.health;
    }


}
export default Player
