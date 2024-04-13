import ItemRarity from "../enums/ItemRarity";
import ItemTypes from "../enums/ItemTypes";

interface IItem {
    rarity: ItemRarity,
    itemType: ItemTypes,
    img: string
    name: string
}

export default IItem
