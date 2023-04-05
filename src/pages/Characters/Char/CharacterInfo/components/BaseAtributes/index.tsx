import { ChangeEvent, useContext } from 'react'
import { CharactersContext } from '../../../../../../contexts/CharactersContexts/CharactersContext'
import { CharactersSheet } from '../../../../../../reducers/CharactersReducer/charactersSheet'
import styles from './status.module.css'

interface BaseAttributesProps{
    character?: CharactersSheet
}

export function BaseAttributes({character}: BaseAttributesProps) {

    const { characterToDisplayId, changeCharacterAttributes, rollingDices } = useContext(CharactersContext)

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
                <button onClick={() => {
                rollingDices(characterToDisplayId as string, {
                    name: "Agilidade",
                    rolls: [{
                        diceType: "20",
                        id: String(new Date()) + String(Math.random()),
                        isDamage: false,
                        quantity: character?.attributes?.agility ? character?.attributes?.agility : "0",
                    }],
                    showRoll: true,
                    wrapperId: String(new Date()) + String(Math.random())
                })
            }}></button>
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
                <button onClick={() => {
                rollingDices(characterToDisplayId as string, {
                    name: "Força",
                    rolls: [{
                        diceType: "20",
                        id: String(new Date()) + String(Math.random()),
                        isDamage: false,
                        quantity: character?.attributes?.strength ? character?.attributes?.strength : "0",
                    }],
                    showRoll: true,
                    wrapperId: String(new Date()) + String(Math.random())
                })
            }}></button>
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
                <button onClick={() => {
                rollingDices(characterToDisplayId as string, {
                    name: "Intelecto",
                    rolls: [{
                        diceType: "20",
                        id: String(new Date()) + String(Math.random()),
                        isDamage: false,
                        quantity: character?.attributes?.intellect ? character?.attributes?.intellect : "0",
                    }],
                    showRoll: true,
                    wrapperId: String(new Date()) + String(Math.random())
                })
            }}></button>
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
                <button onClick={() => {
                rollingDices(characterToDisplayId as string, {
                    name: "Presença",
                    rolls: [{
                        diceType: "20",
                        id: String(new Date()) + String(Math.random()),
                        isDamage: false,
                        quantity: character?.attributes?.presence ? character?.attributes?.presence : "0",
                    }],
                    showRoll: true,
                    wrapperId: String(new Date()) + String(Math.random())
                })
            }}></button>
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
                <button onClick={() => {
                rollingDices(characterToDisplayId as string, {
                    name: "Vigor",
                    rolls: [{
                        diceType: "20",
                        id: String(new Date()) + String(Math.random()),
                        isDamage: false,
                        quantity: character?.attributes?.vigor ? character?.attributes?.vigor : "0",
                    }],
                    showRoll: true,
                    wrapperId: String(new Date()) + String(Math.random())
                })
            }}></button>
            </div>
        </div>
    )
}