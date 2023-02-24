import { Plus } from 'phosphor-react'
import { RitualCard } from './components/RitualCard'
import styles from './rituals.module.css'

export function Rituals() {
    return(
        <div className={styles.ritualsContainer}>
            <div className={styles.ritualsTable}>
                <RitualCard name='awdawdawd'/>
                <div className={styles.addRitualCard}>
                    <button>
                        <Plus size={84} weight="bold"/>
                    </button>
                </div>
            </div>
        </div>
    )
}