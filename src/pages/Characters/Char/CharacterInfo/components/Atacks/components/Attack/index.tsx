import styles from "./attack.module.css"
import { Trash } from "phosphor-react";
import RollDice from "../../../../../../../../img/rollDice.png"
import { Attack } from "../../../../../../../../reducers/CharactersReducer/charactersSheet";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { CharactersContext } from "../../../../../../../../contexts/CaractersContexts/CharactersContext";
import { Rolls } from "../../../../../../../../components/Rolldice";

interface AttackRowProps {
    attack?: Attack
}

export function AttackRow({attack}: AttackRowProps) {

    const {characterToDisplayId, changeCharacterAttacks} = useContext(CharactersContext)

    function handleDeleteAttack(){
        if(characterToDisplayId != null) {
            changeCharacterAttacks(characterToDisplayId, attack?.id as string, "delete", "")
        }
    }

    function handleChangeName(event: ChangeEvent<HTMLInputElement>){
        const newAttackName = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterAttacks(characterToDisplayId, attack?.id as string, "changeName", newAttackName)
        }
    }

    function handleChangeTestDiceQuantity(event: ChangeEvent<HTMLInputElement>) {
        const newDiceQuantity = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterAttacks(characterToDisplayId, attack?.id as string, "changeTestDiceQuantity", newDiceQuantity)
        }
    }

    function handleChangeTestBonus(event: ChangeEvent<HTMLInputElement>) {
        const newBonus = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterAttacks(characterToDisplayId, attack?.id as string, "changeTestBonus", newBonus)
        }
    }

    function handleChangeSpecial(event: ChangeEvent<HTMLTextAreaElement>){
        const newSpecial = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterAttacks(characterToDisplayId, attack?.id as string, "changeSpecial", newSpecial)
        }
    }

    function handleChangeDamageDiceQuantity(event: ChangeEvent<HTMLInputElement>){
        const newDamageQuantity = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterAttacks(characterToDisplayId, attack?.id as string, "changeDamageDiceQuantity", newDamageQuantity)
        }
    }

    function handleChangeDamageDiceType(event: ChangeEvent<HTMLSelectElement>){
        const newDamageType = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterAttacks(characterToDisplayId, attack?.id as string, "changeDamageDiceType", newDamageType)
        }
    }

    function handleChangeDamageBonus(event: ChangeEvent<HTMLInputElement>){
        const newDamageBonus = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterAttacks(characterToDisplayId, attack?.id as string, "changeDamageBonus", newDamageBonus)
        }
    }

    function handleChangeCritical(event: ChangeEvent<HTMLInputElement>){
        const newCritical = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterAttacks(characterToDisplayId, attack?.id as string, "changeCritical", newCritical)
        }
    }

    function handleChangeRange(event: ChangeEvent<HTMLInputElement>){
        const newRange = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterAttacks(characterToDisplayId, attack?.id as string, "changeRange", newRange)
        }
    }

    const [specialRows, setSpecialRows] = useState(1)


    useEffect(() => {
        const newRows = attack?.especial.length ? (attack?.especial.length/40 + 1) : 1
        setSpecialRows(newRows > 4 ? 4 : newRows)
    })

    return(
        <div className={styles.attacksTableColum}>
            <button className={styles.rollForAttack}>
                <img src={RollDice} alt="Rolling dices" />
            </button>
            <input type="text" value={attack?.name} onChange={handleChangeName}/>
            <div className={styles.rollsForAtack}>
                <input type="number" value={attack?.rollTest.quantity} onChange={handleChangeTestDiceQuantity}/>
                <span>D</span>
                <span>20</span>
                <span>+</span>
                <input type="number" value={attack?.rollTest.bonus} onChange={handleChangeTestBonus}/>
            </div>
            <div className={styles.rollsForAtack}>
                <input type="number" value={attack?.damage.quantity} onChange={handleChangeDamageDiceQuantity}/>
                <span>D</span>
                <select value={attack?.damage.diceType} onChange={handleChangeDamageDiceType}>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                    <option value="20">20</option>
                    <option value="100">100</option>
                </select>
                <span>+</span>
                <input type="number" value={attack?.damage.bonus} onChange={handleChangeDamageBonus}/>
            </div>
            <input className={styles.center} type="number" value={attack?.critical} onChange={handleChangeCritical}/>
            <input className={styles.center} type="text" value={attack?.range} onChange={handleChangeRange}/>
            <textarea
                rows={specialRows}
                value={attack?.especial}
                onChange={handleChangeSpecial}
            >
            </textarea>
            <button onClick={handleDeleteAttack}>
                <Trash size={18} weight="fill" className={styles.trash} />
            </button>
        </div>
    )
}