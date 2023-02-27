import { BaseBox } from "../BaseBox";
import styles from "./class.module.css"

export function Class() {
    return(
            <BaseBox className={styles.classContainer}>
                <h4>CLASSE</h4>
                <select name="classe" id="classe">
                    <option value=""></option>
                    <option value="Combatente">Combatente</option>
                    <option value="Especialista">Especialista</option>
                    <option value="Ocultista">Oculstista</option>
                </select>
            </BaseBox>
    )
}