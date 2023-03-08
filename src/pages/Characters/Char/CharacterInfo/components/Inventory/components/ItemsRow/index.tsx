import { Trash } from "phosphor-react"
import { ChangeEvent, useContext } from "react"
import { CharactersContext } from "../../../../../../../../contexts/CaractersContexts/CharactersContext"
import { Item } from "../../../../../../../../reducers/CharactersReducer/charactersSheet"
import styles from "./itemsRow.module.css"

interface ItemsRowProps {
    item: Item,
}

export function ItemsRow({item}: ItemsRowProps) {


    const {characterToDisplayId, changeInventory} = useContext(CharactersContext)

    function handleDeleteItem() {
        if(characterToDisplayId != null) {
            changeInventory(characterToDisplayId, item.id, "delete", "")
        }
    }

    function handleChangeName(event: ChangeEvent<HTMLInputElement>) {
        const newName = event.target.value
        if(characterToDisplayId != null) {
            changeInventory(characterToDisplayId, item.id, "changeName", newName)
        }
    }

    function handleChangeSpaces(event: ChangeEvent<HTMLInputElement>) {
        const newSpaces = event.target.value
        if(characterToDisplayId != null) {
            changeInventory(characterToDisplayId, item.id, "changeSpaces", newSpaces)
        }
    }

    function handleChangeCategory(event: ChangeEvent<HTMLInputElement>) {
        const newCategory = event.target.value
        if(characterToDisplayId != null) {
            changeInventory(characterToDisplayId, item.id, "changeCategory", newCategory)
        }
    }

    return(
        <div className={styles.itemsRow}>
            <input type="text" value={item.item} onChange={handleChangeName}/>
            <input className={styles.center} type="number" value={item.category} onChange={handleChangeCategory}/>
            <input className={styles.center} type="number" value={item.spaces} onChange={handleChangeSpaces}/>
            <button onClick={handleDeleteItem}>
                <Trash size={18} weight="fill" className={styles.trash} />
            </button>
        </div>
    )
}