import IDefensiveItems from "./IDefensiveItems"
import IItem from "./IItems"
import IOffensiveItems from "./IOffensiveItems"

interface IInventory {
    bag: IItem[],
    Helm: IDefensiveItems,
    Chestplate: IDefensiveItems,
    Pants: IDefensiveItems,
    Gloves: IDefensiveItems,
    Boots: IDefensiveItems,
    Ring1: IOffensiveItems,
    Ring2: IOffensiveItems,
    Neckless: IOffensiveItems,
    Weapon: IOffensiveItems,
    Offhand: IOffensiveItems,
}
export default IInventory
