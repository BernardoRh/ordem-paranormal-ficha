import { ReactNode } from "react"
import styles from "./resiAndProtec.module.css"

interface ResistancesAndProtectionsProps {
    children: ReactNode
}

export function ResistancesAndProtections({children}: ResistancesAndProtectionsProps) {
    return(
        <div className={styles.protectionAndResistance}>
            <div className={styles.protectionAndResistanceHeader}>
                {children} <input type="text" />
            </div>
            <div>
                <span>
                    Perfurante
                </span>
                <span>
                    Contundente
                </span>
                <span>
                    Cortante
                </span>
            </div>
        </div>
    )
}