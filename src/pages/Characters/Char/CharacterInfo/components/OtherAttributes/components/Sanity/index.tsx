import { ChangeEvent, useContext, useState } from "react"
import { CharactersContext } from "../../../../../../../../contexts/CharactersContexts/CharactersContext";
import { BarContainer } from "../BarContainer";
import styles from "./sanity.module.css"

interface SanityProps {
    sanity?: {
        maxSanity: string
        actualSanity: string
    }
}

export function Sanity({sanity}: SanityProps) {

    const {characterToDisplayId, changeCharacterSanity} = useContext(CharactersContext)

    function changeActualSanity(event: ChangeEvent<HTMLInputElement>) {
        const newCurrentSanity = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterSanity(characterToDisplayId, "current", newCurrentSanity)
        }
    }

    function changeActualMaxSanity(event: ChangeEvent<HTMLInputElement>) {
        const newMaxSanity = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterSanity(characterToDisplayId, "max", newMaxSanity)
        }
    }

    return(
            <BarContainer className={styles.sanityContainer}>
                <div>
                    <span style={{width: (Number(sanity?.actualSanity ? sanity?.actualSanity : 0)*100) / Number(sanity?.maxSanity ? sanity?.maxSanity : 1) + "%"}}>
                        <h4>SAN</h4>
                    </span>
                </div>
                <input
                    className={styles.alignRight}
                    onChange={changeActualSanity}
                    value={sanity?.actualSanity}
                    type="number"
                    placeholder="0"
                />
                |
                <input
                    className={styles.alignLeft}
                    onChange={changeActualMaxSanity}
                    value={sanity?.maxSanity} type="number"
                    placeholder="0"
                />
            </BarContainer>
    )
}