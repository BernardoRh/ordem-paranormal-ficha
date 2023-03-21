import { Plus, X } from 'phosphor-react'
import { ChangeEvent, useContext } from 'react'
import { Rolls } from '../../../../../../components/Rolldice'
import { CharactersContext } from '../../../../../../contexts/CharactersContexts/CharactersContext'
import styles from './rowRollRitual.module.css'

interface RowRollRitualProps {
    roll: Rolls
    ritualId: string
    multipleRollsId: string
}

export function RowRollRitual({roll, ritualId, multipleRollsId}: RowRollRitualProps) {

    const {characterToDisplayId, changeRituals} = useContext(CharactersContext)

    function handleDeleteRoll() {
        if(characterToDisplayId != null) {
            changeRituals(characterToDisplayId, ritualId, "", multipleRollsId, roll.id, "deleteRoll", "rolls", "")
        }
    }

    function handleChangeRollType(event: ChangeEvent<HTMLSelectElement>) {
        const newType = event.target.value
        if(characterToDisplayId != null) {
            changeRituals(characterToDisplayId, ritualId, "", multipleRollsId, roll.id, "rollIsDamage", "rolls", newType == "test" ? false : true)
        }
    }

    function handleChangeRollQuantity(event: ChangeEvent<HTMLInputElement>) {
        const newQuantity = event.target.value
        if(characterToDisplayId != null) {
            changeRituals(characterToDisplayId, ritualId, "", multipleRollsId, roll.id, "rollDiceQuantity", "rolls", newQuantity)
        }
    }

    function handleChangeRollDiceType(event: ChangeEvent<HTMLSelectElement>) {
        const newDiceType = event.target.value
        if(characterToDisplayId != null) {
            changeRituals(characterToDisplayId, ritualId, "", multipleRollsId, roll.id, "rollDiceType", "rolls", newDiceType)
        }
    }


    function handleChangeRollBonus(event: ChangeEvent<HTMLInputElement>) {
        const newBonus = event.target.value
        if(characterToDisplayId != null) {
            changeRituals(characterToDisplayId, ritualId, "", multipleRollsId, roll.id, "rollBonus", "rolls", newBonus)
        }
    }

    return (
        <div className={styles.roll}>
            <select onChange={handleChangeRollType} className={styles.testOrdDamage} value={roll.isDamage ?  "damage" : "test"}>
                <option value="test">Teste</option>
                <option value="damage">Dano</option>
            </select>
            <input type="number" value={roll.quantity} onChange={handleChangeRollQuantity}/>
            <select value={roll.diceType} onChange={handleChangeRollDiceType}>
                <option value="4">d4</option>
                <option value="6">d6</option>
                <option value="8">d8</option>
                <option value="10">d10</option>
                <option value="12">d12</option>
                <option value="20">d20</option>
                <option value="100">d100</option>
            </select>
            <span>
                <Plus/>
                <input type="number" value={roll.bonus} onChange={handleChangeRollBonus}/>
            </span>
            <button onClick={handleDeleteRoll}><X size={16} weight="fill"/></button>
        </div>
    )
}