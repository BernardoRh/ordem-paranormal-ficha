import { X } from "phosphor-react"
import { ChangeEvent, useContext, useEffect, useState } from "react"
import { CharactersContext } from "../../../../../../contexts/CharactersContexts/CharactersContext"
import { RitualSubDescription } from "../../../../../../reducers/CharactersReducer/charactersSheet"
import styles from "./subDescription.module.css"

interface SubDescriptionProps {
    ritualId: string
    subDescription: RitualSubDescription
}

export function SubDescription({subDescription, ritualId}: SubDescriptionProps) {
    
    const {characterToDisplayId, changeRituals} = useContext(CharactersContext)

    function handleChangeSubDescription(event: ChangeEvent<HTMLTextAreaElement>) {
        const changedDescription = event.target.value
        if(characterToDisplayId != null) {
            changeRituals(characterToDisplayId, ritualId, subDescription.id, "", "", "DescriptionDescriptionSub", "subDescription", changedDescription)
        }
    }

    function handleChangeSubName(event: ChangeEvent<HTMLInputElement>) {
        const changedName = event.target.value
        if(characterToDisplayId != null) {
            changeRituals(characterToDisplayId, ritualId, subDescription.id, "", "", "subDescriptionName", "subDescription", changedName)
        }
    }

    function handleDeleteSubDescription() {
        if(characterToDisplayId != null) {
            changeRituals(characterToDisplayId, ritualId, subDescription.id, "", "", "deleteSubDescription", "subDescription", "")
        }
    }

    return(
        <div key={subDescription.id} className={styles.description}>
            <button
                onClick={handleDeleteSubDescription}
                className={`${styles.buttonsRitualCard} ${styles.deleteSubDescription}`}>
                <X size={24} weight="fill"/>
            </button>
            <input  type="text" value={subDescription.name} onChange={handleChangeSubName}/>
            <textarea
                
                onChange={handleChangeSubDescription}
                rows={
                    subDescription.description
                    ? subDescription.description.split(/\r\n|\r|\n/).length + subDescription.description.length/50
                    : 1
                }
                value={subDescription.description}
            />
        </div>
    )
} 