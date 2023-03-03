import { ChangeEvent, useContext } from "react"
import { CharactersContext } from "../../../../../../../../contexts/CaractersContexts/CharactersContext"
import { BaseBox } from "../BaseBox"
import styles from "./movement.module.css"

interface MovementProps {
    movement?: string
}

export function Movement({movement}: MovementProps) {

    const {characterToDisplayId, changeCharacterMovement} = useContext(CharactersContext)

    function handleChangeMovement(event: ChangeEvent<HTMLInputElement>) {
        const newMovement = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterMovement(characterToDisplayId, newMovement)
        }
    }

    return(
        <BaseBox className={styles.movementContainer}>
            <span>DESLOCAMENTO</span>
            <div className={styles.movement}>
                <input type="number" placeholder="0" value={movement} onChange={handleChangeMovement}/>
                <p>m</p>
            </div>
        </BaseBox>
    )
}