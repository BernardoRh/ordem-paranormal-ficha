import { ChangeEvent, useContext, useState } from "react"
import { CharactersContext } from "../../../../../../../../contexts/CharactersContexts/CharactersContext";
import { BarContainer } from "../BarContainer";
import styles from "./effortPoints.module.css"

interface EffortPointsProps {
    effortPoint?: {
        maxPE: string
        actualPE: string
    }
}

export function EffortPoints({effortPoint}: EffortPointsProps) {
    const {characterToDisplayId, changeCharacterPe} = useContext(CharactersContext)

    function changeActualPe(event: ChangeEvent<HTMLInputElement>) {
        const newCurrentPe = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterPe(characterToDisplayId, "current", newCurrentPe)
        }
    }

    function changeActualMaxPe(event: ChangeEvent<HTMLInputElement>) {
        const newMaxPe = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterPe(characterToDisplayId, "max", newMaxPe)
        }
    }

    return(
        <BarContainer className={styles.peContainer}>
            <div>
                <span style={{width: (Number(effortPoint?.actualPE ? effortPoint?.actualPE : 0)*100) / Number(effortPoint?.maxPE ? effortPoint?.maxPE : 1)  + "%"}}>
                    <h4>PE</h4>
                </span>
            </div>
            <input
                className={styles.alignRight}
                onChange={changeActualPe}
                value={effortPoint?.actualPE}
                type="number"
                placeholder="0"
            />
            |
            <input
                className={styles.alignLeft}
                onChange={changeActualMaxPe}
                value={effortPoint?.maxPE}
                type="number"
                placeholder="0"
            />
        </BarContainer>
    )
}