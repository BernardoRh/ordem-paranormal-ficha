import { Plus } from "phosphor-react"
import styles from "./ritualRolls.module.css"
import { RollRitual } from "../RollRitual"
import { MultipleRolls } from "../../../../../../reducers/CharactersReducer/charactersSheet"
import { useContext } from "react"
import { CharactersContext } from "../../../../../../contexts/CharactersContexts/CharactersContext"

interface RitualRollsProps {
    multipleRolls: MultipleRolls[]
    ritualId: string
}


export function RitualRolls({multipleRolls, ritualId}: RitualRollsProps) {

    const {characterToDisplayId, changeRituals} = useContext(CharactersContext)

    function handleAddMultipleRolls() {
        if(characterToDisplayId != null) {
            changeRituals(characterToDisplayId, ritualId, "", "", "", "addMultipleRolls", "multipleRolls", "")
        }
    }

    return(
        <div className={styles.multipleRolls}>
            {multipleRolls.map((multipleRoll) => {
                return(<RollRitual key={multipleRoll.id} multipleRollsId={multipleRoll.id} rolls={multipleRoll.rolls} name={multipleRoll.name} ritualId={ritualId}/>)
            })}
            <button onClick={handleAddMultipleRolls}><Plus size={24} weight="fill"/></button>
        </div>
    )
}