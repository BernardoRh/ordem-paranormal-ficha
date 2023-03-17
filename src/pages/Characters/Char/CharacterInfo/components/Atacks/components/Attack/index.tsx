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

    function handleChangeDamageType(event: ChangeEvent<HTMLSelectElement>) {
        const newDamageType = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterAttacks(characterToDisplayId, attack?.id as string, "changeDamageType", newDamageType)
        }
    }

    const [specialRows, setSpecialRows] = useState(1)


    useEffect(() => {
        const newRows = attack?.especial.length ? (attack?.especial.length/36 + 1) : 1
        setSpecialRows(newRows > 4 ? 4 : newRows)
    })

    return(
        <div className={styles.attacksTableColum}>
            <button className={styles.buttonRollForAttack}>
                <img src={RollDice} alt="Rolling dices" />
            </button>
            <input type="text" value={attack?.name} onChange={handleChangeName}/>
            <div className={styles.rollsForAttack}>
                <input type="number" value={attack?.rollTest.quantity} onChange={handleChangeTestDiceQuantity}/>
                <span>d20</span>
                <span>+</span>
                <input type="number" value={attack?.rollTest.bonus} onChange={handleChangeTestBonus}/>
            </div>
            <div className={styles.rollsForAttack}>
                <input type="number" value={attack?.damage.quantity} onChange={handleChangeDamageDiceQuantity}/>
                <select value={attack?.damage.diceType} onChange={handleChangeDamageDiceType}>
                    <option value="4">d4</option>
                    <option value="6">d6</option>
                    <option value="8">d8</option>
                    <option value="10">d10</option>
                    <option value="12">d12</option>
                    <option value="20">d20</option>
                    <option value="100">d100</option>
                </select>
                <span>+</span>
                <input type="number" value={attack?.damage.bonus} onChange={handleChangeDamageBonus}/>
            </div>
            <div className={styles.rollsForAttack}>
                <select
                    className={styles.damageType}
                    value={attack?.damage.damageType}
                    style={{borderBottom: `1px solid var(--${attack?.damage.damageType})`, color: `var(--${attack?.damage.damageType})`}}
                    onChange={handleChangeDamageType}
                >
                    <option value="slash">Cortante</option>
                    <option value="piercing">Perfurante</option>
                    <option value="bludgeoning">Contundente</option>
                    <option value="ballistic">Balistico</option>
                    <option value="knowledge">Conhecimento</option>
                    <option value="energy">Energia</option>
                    <option value="death">Morte</option>
                    <option value="blood">Sangue</option>
                    <option value="fear">Medo</option>
                </select>
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