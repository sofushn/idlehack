import IInventory from "./IInventory";

interface IPlayer extends IInventory{
    maxHealth?: number
    currentHealth?: number
    attackPower?: number


}

export default IPlayer
