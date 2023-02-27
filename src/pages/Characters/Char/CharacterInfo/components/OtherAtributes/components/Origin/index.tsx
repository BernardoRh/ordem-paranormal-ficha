import { BaseBox } from "../BaseBox"
import styles from "./origin.module.css"

export function Origin() {
    return(
        <BaseBox className={styles.originContainer}>
            <h4>ORIGEM</h4>
            <input type="text" />
        </BaseBox>
    )
}