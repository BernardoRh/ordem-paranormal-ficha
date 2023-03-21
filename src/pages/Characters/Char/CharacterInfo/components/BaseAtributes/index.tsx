import { ChangeEvent, useContext } from 'react'
import { CharactersContext } from '../../../../../../contexts/CharactersContexts/CharactersContext'
import { CharactersSheet } from '../../../../../../reducers/CharactersReducer/charactersSheet'
import styles from './status.module.css'

interface BaseAttributesProps{
    character?: CharactersSheet
}

export function BaseAttributes({character}: BaseAttributesProps) {

    const { changeCharacterAttributes, characterToDisplayId } = useContext(CharactersContext)

    function handleChangeAttribute(event: ChangeEvent<HTMLInputElement>) {
        const attribute = event.target.name
        const value = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterAttributes(characterToDisplayId, attribute, value)
        }
    }

    return(
        <div className={styles.statusContainer}>
            <div className={`${styles.statusBox} ${styles.dexterity}`}>
                <input
                    name="agility"
                    value={character?.attributes?.agility}
                    type="number"
                    placeholder='0'
                    maxLength={2}
                    onChange={handleChangeAttribute}
                />
            </div>
            <div className={`${styles.statusBox} ${styles.strength}`}>
                <input
                    name="strength"
                    value={character?.attributes?.strength}
                    type="number"
                    placeholder='0'
                    maxLength={2}
                    onChange={handleChangeAttribute}
                />
            </div>
            <div className={`${styles.statusBox} ${styles.intellect}`}>
                <input
                    name="intellect"
                    value={character?.attributes?.intellect}
                    type="number"
                    placeholder='0'
                    maxLength={2}
                    onChange={handleChangeAttribute}
                />
            </div>
            <div className={`${styles.statusBox} ${styles.presence}`}>
                <input
                    name="presence"
                    value={character?.attributes?.presence}
                    type="number"
                    placeholder='0'
                    maxLength={2}
                    onChange={handleChangeAttribute}
                />
            </div>
            <div className={`${styles.statusBox} ${styles.vigor}`}>
                <input
                    name="vigor"
                    value={character?.attributes?.vigor}
                    type="number"
                    placeholder='0'
                    maxLength={2}
                    onChange={handleChangeAttribute}
                />
            </div>
        </div>
    )
}