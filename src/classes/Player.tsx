import { Equipment, IItem } from "../types/interfaces";

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
