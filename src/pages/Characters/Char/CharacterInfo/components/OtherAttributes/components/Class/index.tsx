import { ChangeEvent, useContext } from "react";
import { CharactersContext } from "../../../../../../../../contexts/CaractersContexts/CharactersContext";
import { BaseBox } from "../BaseBox";
import styles from "./class.module.css"

interface ClassProps {
    characterClass?: string
}

export function Class({characterClass}: ClassProps) {

    const {characterToDisplayId, changeCharacterClass} = useContext(CharactersContext)

    function handleChangeClass(event: ChangeEvent<HTMLSelectElement>) {
        const newClass = event.target.value as "none" | "Combatente" | "Especialista" | "Ocultista"
        if(characterToDisplayId != null) {
            changeCharacterClass(characterToDisplayId, newClass)
        }
    }

    return(
            <BaseBox className={styles.classContainer}>
                <h4>CLASSE</h4>
                <select name="classe" id="classe" value={characterClass} onChange={handleChangeClass}>
                    <option value="none"></option>
                    <option value="Combatente">Combatente</option>
                    <option value="Especialista">Especialista</option>
                    <option value="Ocultista">Oculstista</option>
                </select>
            </BaseBox>
    )
}