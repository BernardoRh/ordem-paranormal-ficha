import { CaretDown, CaretRight, CaretUp, Plus } from "phosphor-react"
import styles from "./attacks.module.css"
import { Attack } from "../../../../../../reducers/CharactersReducer/charactersSheet"
import { AttackRow } from "./components/Attack"
import { useContext, useState } from "react"
import { CharactersContext } from "../../../../../../contexts/CharactersContexts/CharactersContext"

interface AttacksProps {
    attacks?: Attack[]
}

export function Attacks({attacks}: AttacksProps) {

    const {characterToDisplayId, changeCharacterAttacks} = useContext(CharactersContext)

    function handleAddAttacks() {
        const newAttack: Attack = {
            id: String(new Date()) + String(Math.random()),
            name: "",
            rollTest: {
                diceType: "20",
                quantity: "",
                bonus: "",
                id: String(new Date()) + String(Math.random()),
                isDamage: false
            },
            damage: {
                diceType: "4",
                quantity: "",
                bonus: "",
                id: String(new Date()) + String(Math.random()),
                isDamage: true,
                damageType: 'ballistic'
            },
            critical: "",
            range: "",
            especial: "",
        }
        if(characterToDisplayId != null) {
            changeCharacterAttacks(characterToDisplayId, "", "addAttack", newAttack)
        }
    }

    const [sortAttacks, setSortAttacks] = useState<boolean | undefined>(undefined)

    function changeAttacksSort() {
        if(sortAttacks == undefined){
            setSortAttacks(true)
        } else if(sortAttacks == true){
            setSortAttacks(false)
        } else {
            setSortAttacks(undefined)
        }
    }

    let attacksToDisplay = attacks?.slice()

    if(sortAttacks == true) {
        attacksToDisplay = attacksToDisplay?.sort((a, b) => a.name > b.name ? 1 : -1)
    } else if(sortAttacks == false) {
        attacksToDisplay = attacksToDisplay?.sort((a, b) => a.name < b.name ? 1 : -1)
    }

    return(
        <div className={styles.attacksTable}>
            <div className={styles.attacksTableColumHeader}>
                <span></span>
                <div>
                    <button onClick={changeAttacksSort}>
                        ATAQUES
                        {sortAttacks == undefined ? <CaretRight size={16} weight="fill" /> : sortAttacks ? 
                        <CaretDown size={16} weight="fill"/> : 
                        <CaretUp size={16} weight="fill"/>
                    }
                    </button>
                </div>
                <div className={styles.center}>TESTE</div>
                <div className={styles.center}>DANO</div>
                <div className={styles.center}>TIPO</div>
                <div className={styles.center}>CRITICO</div>
                <div className={styles.center}>ALCANCE</div>
                <div>ESPECIAL</div>
            </div>
            {attacksToDisplay?.map((attack) => {
                return(<AttackRow key={attack.id} attack={attack}/>)
            })}
            <button className={styles.addAtacks} onClick={handleAddAttacks}>
                <Plus size={24} weight="fill"/>
            </button>
        </div>
    )
}