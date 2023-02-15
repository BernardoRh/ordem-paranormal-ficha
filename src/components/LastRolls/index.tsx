import styles from './lastRolls.module.css'



export function LastsRolls() {
    return(
        <div className={styles.historyRollDiceContainer}>
            <div className={styles.historyRollDiceContainerContent}>
                <div className={styles.resultLastRoll}></div>
                <div className={styles.resultLastRoll}></div>
                <div className={styles.resultLastRoll}></div>
                <div className={styles.resultLastRoll}></div>
                <div className={styles.resultLastRoll}></div>
                <div className={styles.resultLastRoll}></div>
                <div className={styles.resultLastRoll}></div>
                <div className={styles.resultLastRoll}></div>
            </div>
        </div>
    )
}