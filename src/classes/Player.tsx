import { ItemTypes } from "../types/enums";
import { Equipment, IDefensiveItems, IItem, IOffensiveItems } from "../types/interfaces";

class Player {
    maxHealth: number
    currentHealth: number
    attackPower: number
    bag: IItem[]
    equipment: Equipment

    public constructor(maxHealth: number, attackPower: number, equipment: Equipment = {}, bag: Array<IItem> = []) {
        this.maxHealth = maxHealth
        this.currentHealth = maxHealth
        this.attackPower = attackPower
        this.equipment = equipment
        this.bag = bag
    }

    public equipItem(item: IItem) {
        if (!this.bag.includes(item)) {
            window.alert("player does not have the item in their bag!")
            return
        }

        // remove new item from bag
        this.bag = this.bag.filter(i => i !== item)

        // equip new item
        let currentItem: IItem | undefined
        switch (item.itemType) {
            case ItemTypes.Boots:
                currentItem = this.equipment.boots
                this.equipment.boots = item as IDefensiveItems
                break;
            case ItemTypes.Chestplate:
                currentItem = this.equipment.chestplate
                this.equipment.chestplate = item as IDefensiveItems
                break;
            case ItemTypes.Gloves:
                currentItem = this.equipment.gloves
                this.equipment.gloves = item as IDefensiveItems
                break;
            case ItemTypes.Helm:
                currentItem = this.equipment.helm
                this.equipment.helm = item as IDefensiveItems
                break;
            case ItemTypes.Neckless:
                currentItem = this.equipment.neckless
                this.equipment.neckless = item as IOffensiveItems
                break;
            case ItemTypes.Offhand:
                currentItem = this.equipment.offhand
                this.equipment.offhand = item as IOffensiveItems
                break;
            case ItemTypes.Pants:
                currentItem = this.equipment.pants
                this.equipment.pants = item as IDefensiveItems
                break;
            case ItemTypes.Ring:
                currentItem = undefined
                if (this.equipment.ring1 === undefined) {
                    this.equipment.ring1 = item as IOffensiveItems
                } else if (this.equipment.ring2 === undefined) {
                    this.equipment.ring1 = item as IOffensiveItems
                } else {
                    window.alert("You need an empty ring slot before you can equip a new one!")
                }                
                break;
            case ItemTypes.Weapon:
                currentItem = this.equipment.weapon
                this.equipment.weapon = item as IOffensiveItems
                break;
            default:
                console.error(`Invalid ItemType: '${item.itemType}'`)
                return;
        }

        // add the previous equiped item to the bag
        if (currentItem !== undefined)
            this.bag.push(currentItem)
    }

    public getAttackPower() {
        const ring1AP = this.equipment.ring1?.attackPower ?? 0
        const ring2AP = this.equipment.ring2?.attackPower ?? 0
        const necklessAP = this.equipment.neckless?.attackPower ?? 0
        const weaponAP = this.equipment.weapon?.attackPower ?? 0
        const offhandAP = this.equipment.offhand?.attackPower ?? 0

        const bonusAP = ring1AP + ring2AP + necklessAP + weaponAP + offhandAP

        const realAttackPower = this.attackPower + bonusAP
            
        return realAttackPower;
    }

    public getMaxHealth() {
        const helmetHealth = this.equipment.helm?.health ?? 0
        const chestHealth = this.equipment.chestplate?.health ?? 0
        const pantsHealth = this.equipment.pants?.health ?? 0
        const glovesHealth = this.equipment.gloves?.health ?? 0
        const bootsHealth = this.equipment.boots?.health ?? 0

        const bonusHealth = helmetHealth + chestHealth + pantsHealth + glovesHealth + bootsHealth

        const realMaxHealth = this.maxHealth + bonusHealth;
        return realMaxHealth
    }
}
export default Player
