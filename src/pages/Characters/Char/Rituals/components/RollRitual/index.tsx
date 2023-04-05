import styles from './rollRitual.module.css'
import rollDiceIcon from "../../../../../../img/rollDice.png"
import { Plus, X } from 'phosphor-react'
import { RowRollRitual } from '../RowRollRitual'
import { Rolls } from '../../../CharacterInfo/components/Rolls/components/Rolldice'
import { ChangeEvent, useContext } from 'react'
import { CharactersContext } from '../../../../../../contexts/CharactersContexts/CharactersContext'

interface RollRitualProps {
    rolls: Rolls[]
    name: string
    ritualId: string
    multipleRollsId: string
}

export function RollRitual({rolls, name, ritualId, multipleRollsId}: RollRitualProps) {

    const {characterToDisplayId, changeRituals, rollingDices} = useContext(CharactersContext)

    function handleDeleteMultipleRolls() {
        if(characterToDisplayId != null) {
            changeRituals(characterToDisplayId, ritualId, "", multipleRollsId, "", "deleteMultipleRolls", "multipleRolls", "")
        }
    }

    function handleChangeNameMultipleRolls(event: ChangeEvent<HTMLInputElement>) {
        const newName = event.target.value
        if(characterToDisplayId != null) {
            changeRituals(characterToDisplayId, ritualId, "", multipleRollsId, "", "multipleRollsName", "rolls", newName)
        }
    }

    function handleAddRolls() {
        if(characterToDisplayId != null) {
            changeRituals(characterToDisplayId, ritualId, "", multipleRollsId, "", "addRoll", "rolls", "")
        }
    }

    return(
        <div className={styles.rollsContainer}>
            <div className={styles.rollsHeader}>
                <button onClick={() => {
                rollingDices(characterToDisplayId as string, {
                    name: name ? name : "Rolagem De Ritual",
                    rolls: rolls,
                    showRoll: true,
                    wrapperId: String(new Date()) + String(Math.random())
                })
            }}><img src={rollDiceIcon}/>:</button>
                <input type="text" value={name} onChange={handleChangeNameMultipleRolls}/>
                <button onClick={handleDeleteMultipleRolls} className={styles.deleteRoll}><X size={24} weight="fill"/></button>
            </div>
            <div className={styles.rolls}>
                {rolls.map((roll) => {
                    return(<RowRollRitual key={roll.id} roll={roll} multipleRollsId={multipleRollsId} ritualId={ritualId}/>)
                })}
                <button onClick={handleAddRolls}><Plus size={16} weight="fill"/></button>
            </div>
        </div>
    )
} 