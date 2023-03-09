import { Plus } from "phosphor-react"
import styles from "./ritualRolls.module.css"
import rollDiceIcon from "../../../../../../img/rollDice.png"

export function RitualRolls() {
    return(
        <div className={styles.multipleRolls}>
            <button><img src={rollDiceIcon}/></button>:
            <div className={styles.roll}>
                <select>
                    <option value="test">Teste</option>
                    <option value="energy">Energia</option>
                    <option value="fear">Medo</option>
                    <option value="death">Morte</option>
                </select>
            </div>
            <button><Plus size={24} weight="fill"/></button>
        </div>
    )
}