import { CaretRight } from 'phosphor-react'
import { useState } from 'react'
import styles from './lastRolls.module.css'



export function LastsRolls() {

    const [showHistory, setShowHistory] = useState(false);

    function handleChangeShowHistory(show: boolean) {
        setShowHistory(show)
    }

    return(
        <div
            onMouseOver={() => {
                handleChangeShowHistory(true)
            }}
            onMouseOut={() => {
                handleChangeShowHistory(false)
            }}
            className={styles.historyRollDiceContainer}
            style={ showHistory == true ? {marginLeft: 0} : {marginLeft: "-8.5rem"}}
        >
            <div className={styles.historyRollDiceContainerContent}>
                <div className={styles.resultLastRoll}></div>
                <div className={styles.resultLastRoll}></div>
                <div className={styles.resultLastRoll}></div>
                <div className={styles.resultLastRoll}></div>
                <div className={styles.resultLastRoll}></div>
                <div className={styles.resultLastRoll}></div>
                <div className={styles.resultLastRoll}></div>
            </div>
            <div
                className={styles.arrowToHover}
                onMouseOver={() => {
                    handleChangeShowHistory(true)
                }}
                onMouseOut={() => {
                    handleChangeShowHistory(false)
                }}
            >
                <CaretRight size={32} weight="fill" />
            </div>
        </div>
    )
}