import { ChangeEvent, useContext } from "react"
import { CharactersContext } from "../../../../../../../../contexts/CharactersContexts/CharactersContext"
import { BaseBox } from "../BaseBox"
import styles from "./origin.module.css"

interface OriginProps {
    characterOrigin?: string
}

export function Origin({characterOrigin}: OriginProps) {

    const {characterToDisplayId, changeCharacterOrigin} = useContext(CharactersContext)

    function handleChangeOrigin(event: ChangeEvent<HTMLInputElement>) {
        const newOrigin = event.target.value
        if(characterToDisplayId != null){
            changeCharacterOrigin(characterToDisplayId, newOrigin)
        }
    }

    return(
        <BaseBox className={styles.originContainer}>
            <h4>ORIGEM</h4>
            <input type="text" value={characterOrigin} onChange={handleChangeOrigin}/>
        </BaseBox>
    )
}