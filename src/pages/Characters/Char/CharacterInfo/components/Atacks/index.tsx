import { CaretDown, CaretUp, Plus, Trash } from "phosphor-react"
import styles from "./attacks.module.css"
import { Attack } from "../../../../../../reducers/CharactersReducer/charactersSheet"
import { AttackRow } from "./components/Attack"
import { useContext, useEffect, useState } from "react"
import { CharactersContext } from "../../../../../../contexts/CaractersContexts/CharactersContext"
import { string } from "zod"

interface AttacksProps {
    attacks?: Attack[]
}

export function Attacks({attacks}: AttacksProps) {

    const {characterToDisplayId, changeCharacterAttacks} = useContext(CharactersContext)

    function handleAddAttacks() {
        const newAttack: Attack = {
            id: String(new Date()),
            name: "",
            rollTest: {
                diceType: "20",
                quantity: "",
                name: "",
                bonus: "",
            },
            damage: {
                diceType: "4",
                quantity: "",
                name: "",
                bonus: "",
            },
            critical: "",
            range: "",
            especial: ""
        }
        if(characterToDisplayId != null) {
            changeCharacterAttacks(characterToDisplayId, "", "addAttack", newAttack)
        }
    }

    const [sortAttacks, setSortAttacks] = useState(true)

    function changeAttacksSort() {sortAttacks ? setSortAttacks(false) : setSortAttacks(true)}

    const attacksToDisplay = attacks?.slice()

    useEffect(() => {
        
    })

    return(
        <div className={styles.attacksTable}>
            <div className={styles.attacksTableColumHeader}>
                <span></span>
                <div>
                    <button onClick={changeAttacksSort}>ATAQUES</button>
                    {sortAttacks ?
                        <CaretDown size={16} weight="fill"/> : 
                        <CaretUp size={16} weight="fill"/>
                    }
                </div>
                <div className={styles.center}>TESTE</div>
                <div className={styles.center}>DANO</div>
                <div className={styles.center}>CRITICO</div>
                <div className={styles.center}>ALCANCE</div>
                <div>ESPECIAL</div>
            </div>
            <>
                {
                    sortAttacks ? attacksToDisplay?.sort((a, b) => a.name > b.name ? 1 : -1).map((attack) => {
                        return(<AttackRow key={attack.id} attack={attack}/>)
                    }) : attacksToDisplay?.sort((a, b) => a.name < b.name ? 1 : -1).map((attack) => {
                        return(<AttackRow key={attack.id} attack={attack}/>)
                    })
                }
            </>
            <button className={styles.addAtacks} onClick={handleAddAttacks}>
                <Plus size={24}/>
            </button>
        </div>
    )
}