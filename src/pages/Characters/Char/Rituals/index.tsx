import { Plus } from 'phosphor-react'
import { useContext } from 'react'
import { CharactersContext } from '../../../../contexts/CaractersContexts/CharactersContext'
import { RitualCard } from './components/RitualCard'
import styles from './rituals.module.css'

export function Rituals() {

    const {characters, characterToDisplayId, changeRituals} = useContext(CharactersContext)

    const characterToDisplay = characters.find((character) => {
        if (character.id == characterToDisplayId){
            return character
        }
    })


    function handleAddRituals() {
        if(characterToDisplayId != null){
            changeRituals(characterToDisplayId, "", "", "", "", "addRitual", "")
        }
    }

    return(
        <div className={styles.ritualsContainer}>
            <div className={styles.ritualsTable}>
                {characterToDisplay?.rituals.map((ritual) => {
                    return(
                        <RitualCard key={ritual.id} ritual={ritual}/>
                    )
                })}
                <div className={styles.addRitualCard}>
                    <button onClick={handleAddRituals}>
                        <Plus size={84} weight="bold"/>
                    </button>
                </div>
            </div>
        </div>
    )
}