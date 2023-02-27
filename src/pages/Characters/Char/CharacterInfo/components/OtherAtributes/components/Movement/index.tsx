import { BaseBox } from "../BaseBox"
import styles from "./movement.module.css"

export function Movement() {
    return(
        <BaseBox className={styles.movementContainer}>
            <span>DESLOCAMENTO</span>
            <div className={styles.movement}>
                <input type="number" placeholder="0"/>
                <p>m</p>
            </div>
        </BaseBox>
    )
}