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
    critical?: string
    multiplier?: "2" | "3" | "4"
    dicesOrTotal?: "total" | "dice"
}

export function RollRitual({rolls, name, ritualId, multipleRollsId, critical, multiplier, dicesOrTotal}: RollRitualProps) {

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

    const alreadyHasTest = rolls.find((roll) => {
        if(roll.isDamage == false){
            return roll
        }
    })

    const rollsToShow = rolls.slice()
    rollsToShow.sort((a, b) => (a.isDamage ? -1 : 1) < (b.isDamage ? -1 : 1) ? 1 : -1 )

    return(
        <div className={styles.rollsContainer}>
            <div className={styles.rollsHeader}>
                <button onClick={() => {
                rollingDices(characterToDisplayId as string, {
                    name: name ? name : "Rolagem De Ritual",
                    rolls: rolls,
                    showRoll: true,
                    wrapperId: String(new Date()) + String(Math.random()),
                    critical: critical,
                    dicesOrTotal: dicesOrTotal,
                    multiplier: multiplier
                })
            }}><img src={rollDiceIcon}/>:</button>
                <input type="text" value={name} onChange={handleChangeNameMultipleRolls}/>
                <button onClick={handleDeleteMultipleRolls} className={styles.deleteRoll}><X size={24} weight="fill"/></button>
            </div>
            <div className={styles.rolls}>
                {rollsToShow.map((roll) => {
                    return(
                        <RowRollRitual
                            alreadyHasTest={alreadyHasTest ? true : false}
                            key={roll.id}
                            roll={roll}
                            multipleRollsId={multipleRollsId}
                            ritualId={ritualId}
                            critical={critical}
                            dicesOrTotal={dicesOrTotal}
                            multiplier={multiplier}
                        />)
                })}
                <button onClick={handleAddRolls}><Plus size={16} weight="fill"/></button>
            </div>
        </div>
    )
} 