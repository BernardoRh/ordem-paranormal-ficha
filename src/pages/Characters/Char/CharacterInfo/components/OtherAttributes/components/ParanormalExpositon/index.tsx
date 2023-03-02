import { ChangeEvent, useContext, useEffect, useState } from "react"
import { CharactersContext } from "../../../../../../../../contexts/CharactersContext"
import { BaseBox } from "../BaseBox"
import styles from "./paranormalExposition.module.css"

interface ParanormalExpositionProps {
    nex?: string,
    pePerRound?: string,
}

export function ParanormalExposition({nex, pePerRound}: ParanormalExpositionProps) {

    const {characterToDisplayId, changeCharacterNex, changeCharacterPePerRound} = useContext(CharactersContext)

    function handleChangeNex(event: ChangeEvent<HTMLInputElement>) {
        const newNex = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterNex(characterToDisplayId, newNex)
        }
    } 
    
    function handleChangePePerRound(event: ChangeEvent<HTMLInputElement>) {
        const newPePerRound = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterPePerRound(characterToDisplayId, newPePerRound)
        }
    }

    const [pePerRoundAutomatic, setPePerRoundAutomatic] = useState("0")
    const nexBulletPointForPePerRound = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 99, 100]

    
    useEffect(() => {
        for(let i = 0; i < nexBulletPointForPePerRound.length - 1; i++) {
            if(nexBulletPointForPePerRound[i] <= Number(nex) && nexBulletPointForPePerRound[i+1] > Number(nex)) {
                setPePerRoundAutomatic(String(i))
            }
        }
    })

    return(
        <BaseBox className={styles.nexContainer}>
            <h4>NEX</h4>
            <div className={styles.nexPercentageInput}>
                <input
                    type="number"
                    placeholder="0"
                    value={nex}
                    onChange={handleChangeNex}
                />
                <span>%</span>
            </div>
            <div className={styles.pePerRound}>
                <input
                    type="number"
                    placeholder={pePerRoundAutomatic}
                    value={pePerRound}
                    onChange={handleChangePePerRound}
                />
                <p>PE / RODADA</p>
            </div>
        </BaseBox>
    )
}