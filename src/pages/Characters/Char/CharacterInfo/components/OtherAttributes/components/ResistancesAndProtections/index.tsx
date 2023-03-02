import { X } from "phosphor-react"
import { ReactNode, useContext } from "react"
import { CharactersContext } from "../../../../../../../../contexts/CharactersContext"
import styles from "./resiAndProtec.module.css"

interface ResistancesAndProtectionsProps {
    children: ReactNode
    resistanceOrProtection?: string[]
}

export function ResistancesAndProtections({children, resistanceOrProtection}: ResistancesAndProtectionsProps) {

    const { characterToDisplayId } = useContext(CharactersContext)

    function handleDeleteResistanceOrProtection(type: string, value: string) {

    }

    return(
        <div className={styles.protectionAndResistance}>
            <div className={styles.protectionAndResistanceHeader}>
                {children} <input type="text"/>
            </div>
            <div>
                {resistanceOrProtection?.map((value) => {
                    return(
                        <span>
                            {value}
                            <button onClick={() => {
                                handleDeleteResistanceOrProtection(String(children), value)
                            }}><X size={16} weight="fill"/></button>
                        </span>
                    )
                })}
            </div>
        </div>
    )
}