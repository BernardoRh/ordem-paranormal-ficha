import { Plus, Trash } from "phosphor-react"
import styles from "./attacks.module.css"
import RollDice from "../../../../../../img/rollDice.png"

export function Attacks() {
    return(
        <div className={styles.attacksTable}>
            <div className={styles.attacksTableColumHeader}>
                <span></span>
                <div>ATAQUES</div>
                <div className={styles.center}>TESTE</div>
                <div className={styles.center}>DANO</div>
                <div className={styles.center}>CRITICO</div>
                <div className={styles.center}>ALCANCE</div>
                <div>ESPECIAL</div>
            </div>
            <div className={styles.attacksTableColum}>
                <button className={styles.rollForAttack}>
                    <img src={RollDice} alt="Rolling dices" />
                </button>
                <input type="text" />
                <div className={styles.rollsForAtack}>
                    <input type="number" />
                    <span>D</span>
                    <span>20</span>
                    <span>+</span>
                    <input type="number" />
                </div>
                <div className={styles.rollsForAtack}>
                    <input type="number" />
                    <span>D</span>
                    <input type="number" />
                    <span>+</span>
                    <input type="number" />
                </div>
                <input className={styles.center} type="number" />
                <input className={styles.center} type="text" />
                <textarea rows={1}></textarea>
                <button>
                    <Trash size={18} weight="fill" className={styles.trash} />
                </button>
            </div>
        </div>
    )
}