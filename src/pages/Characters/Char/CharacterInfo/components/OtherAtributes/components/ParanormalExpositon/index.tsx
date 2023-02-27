import { BaseBox } from "../BaseBox"
import styles from "./paranormalExposition.module.css"

export function ParanormalExposition() {
    return(
        <BaseBox className={styles.nexContainer}>
            <h4>NEX</h4>
            <div className={styles.nexPercentageInput}>
                <input type="number" placeholder="0"/>
                <span>%</span>
            </div>
            <div className={styles.pePerRound}>
                <span>5</span>
                <p>PE / RODADA</p>
            </div>
        </BaseBox>
    )
}