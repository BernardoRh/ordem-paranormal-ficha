import styles from './status.module.css'


export function BaseAtributes() {
    return(
        <div className={styles.statusContainer}>
            <div className={`${styles.statusBox} ${styles.dexterity}`}>
                <input type="number" placeholder='0' maxLength={2}/>
            </div>
            <div className={`${styles.statusBox} ${styles.strength}`}>
                <input type="number" placeholder='0' maxLength={2}/>
            </div>
            <div className={`${styles.statusBox} ${styles.intellect}`}>
                <input type="number" placeholder='0' maxLength={2}/>
            </div>
            <div className={`${styles.statusBox} ${styles.presence}`}>
                <input type="number" placeholder='0' maxLength={2}/>
            </div>
            <div className={`${styles.statusBox} ${styles.vigor}`}>
                <input type="number" placeholder='0' maxLength={2}/>
            </div>
        </div>
    )
}