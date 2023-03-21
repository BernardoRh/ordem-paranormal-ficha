import { X } from "phosphor-react"
import { ChangeEvent, KeyboardEventHandler, ReactNode, useContext, useState } from "react"
import { CharactersContext } from "../../../../../../../../contexts/CharactersContexts/CharactersContext"
import styles from "./resiAndProtec.module.css"

interface ResistancesAndProtectionsProps {
    children: "protection" | "resistances" 
    resistanceOrProtection?: string[]
}

export function ResistancesAndProtections({children, resistanceOrProtection}: ResistancesAndProtectionsProps) {

    const { characterToDisplayId, changeCharacterProtectionAndResistances } = useContext(CharactersContext)

    const [newResistanceOrProtection, setNewResistanceOrProtection] = useState("")

    function handleChangeResistanceOrProtection(event: ChangeEvent<HTMLInputElement>) {
        const ResistanceOrProtection = event.target.value
        setNewResistanceOrProtection(ResistanceOrProtection) 
    }

    function handleAddResistanceOrProtection(event: { key: string }) {
        if(event.key === 'Enter'){
            if(characterToDisplayId != null) {
                changeCharacterProtectionAndResistances(characterToDisplayId, false, children, newResistanceOrProtection)
                setNewResistanceOrProtection("")
            }
        }
    }

    function handleDeleteResistanceOrProtection(value: string) {
        if(characterToDisplayId != null) {
            changeCharacterProtectionAndResistances(characterToDisplayId, true, children, value)
        }
    }

    const resistanceOrProtectionToDisplay = resistanceOrProtection?.slice()
    resistanceOrProtectionToDisplay?.sort()

    return(
        <div className={styles.protectionAndResistance}>
            <div className={styles.protectionAndResistanceHeader}>
                {children == "resistances" ? "Resistências:" : ""}
                {children == "protection" ? "Proteções:" : ""}
                <input
                    type="text"
                    onChange={handleChangeResistanceOrProtection}
                    value={newResistanceOrProtection}
                    onKeyDown={handleAddResistanceOrProtection}
                />
            </div>
            <div>
                {resistanceOrProtectionToDisplay?.map((value) => {
                    return(
                        <span key={value}>
                            {value}
                            <button onClick={() => {
                                handleDeleteResistanceOrProtection(value)
                            }}><X size={16} weight="fill"/></button>
                        </span>
                    )
                })}
            </div>
        </div>
    )
}