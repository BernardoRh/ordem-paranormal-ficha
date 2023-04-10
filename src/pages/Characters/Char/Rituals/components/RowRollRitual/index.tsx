import { Plus, X } from 'phosphor-react'
import { ChangeEvent, useContext } from 'react'
import { Rolls } from '../../../CharacterInfo/components/Rolls/components/Rolldice'
import { CharactersContext } from '../../../../../../contexts/CharactersContexts/CharactersContext'
import styles from './rowRollRitual.module.css'

interface RowRollRitualProps {
    roll: Rolls
    ritualId: string
    multipleRollsId: string
    critical?: string
    multiplier?: string
    dicesOrTotal?: string
    alreadyHasTest: boolean
}

export function RowRollRitual({roll, ritualId, multipleRollsId, critical, multiplier, dicesOrTotal, alreadyHasTest}: RowRollRitualProps) {

    const {characterToDisplayId, changeRituals} = useContext(CharactersContext)

    function handleDeleteRoll() {
        if(characterToDisplayId != null) {
            changeRituals(characterToDisplayId, ritualId, "", multipleRollsId, roll.id, "deleteRoll", "rolls", "")
        }
    }

    function handleChangeRollType(event: ChangeEvent<HTMLSelectElement>) {
        const newType = event.target.value
        if(characterToDisplayId != null) {
            changeRituals(characterToDisplayId, ritualId, "", multipleRollsId, roll.id, "rollIsDamage", "rolls", newType == "test" ? false : true)
        }
    }

    function handleChangeRollQuantity(event: ChangeEvent<HTMLInputElement>) {
        const newQuantity = event.target.value
        if(characterToDisplayId != null) {
            changeRituals(characterToDisplayId, ritualId, "", multipleRollsId, roll.id, "rollDiceQuantity", "rolls", newQuantity)
        }
    }

    function handleChangeRollDiceType(event: ChangeEvent<HTMLSelectElement>) {
        const newDiceType = event.target.value
        if(characterToDisplayId != null) {
            changeRituals(characterToDisplayId, ritualId, "", multipleRollsId, roll.id, "rollDiceType", "rolls", newDiceType)
        }
    }


    function handleChangeRollBonus(event: ChangeEvent<HTMLInputElement>) {
        const newBonus = event.target.value
        if(characterToDisplayId != null) {
            changeRituals(characterToDisplayId, ritualId, "", multipleRollsId, roll.id, "rollBonus", "rolls", newBonus)
        }
    }

    function handleChangeDamageType(event: ChangeEvent<HTMLSelectElement>) {
        const newDamageType = event.target.value
        if(characterToDisplayId != null) {
            changeRituals(characterToDisplayId, ritualId, "", multipleRollsId, roll.id, "rollDamageType", "rolls", newDamageType)
        }
    }

    function handleChangeCritical(event: ChangeEvent<HTMLInputElement>) {
        const newCritical = event.target.value
        if(characterToDisplayId != null) {
            changeRituals(characterToDisplayId, ritualId, "", multipleRollsId, roll.id, "changeCritical", "rolls", newCritical)
        }
    }
    function handleChangeMultiplier(event: ChangeEvent<HTMLSelectElement>) {
        const newMultiplier = event.target.value
        if(characterToDisplayId != null) {
            changeRituals(characterToDisplayId, ritualId, "", multipleRollsId, roll.id, "changeMultiplier", "rolls", newMultiplier)
        }
    }
    function handleChangeDicesOrTotal(event: ChangeEvent<HTMLSelectElement>) {
        const newDicesOrTotal = event.target.value
        if(characterToDisplayId != null) {
            changeRituals(characterToDisplayId, ritualId, "", multipleRollsId, roll.id, "changeDicesOrTotal", "rolls", newDicesOrTotal)
        }
    }

    return (
        <div className={styles.roll}>
            <select disabled={roll.isDamage == false ? false : alreadyHasTest} onChange={handleChangeRollType} className={styles.testOrdDamage} value={roll.isDamage ?  "damage" : "test"} style={roll.isDamage ? {borderBottom: `1px solid var(--${roll.damageType}-light)`, color: `var(--${roll.damageType}-light)`, filter: `blur(${roll.damageType == "fear" ? '0.05rem' : ""})`} : {}}>
                <option value="test" style={roll.isDamage ? {borderBottom: `1px solid var(--${roll.damageType}-light)`, color: `var(--${roll.damageType}-light)`, filter: `blur(${roll.damageType == "fear" ? '0.05rem' : ""})`} : {}}>Teste</option>
                <option value="damage" style={roll.isDamage ? {borderBottom: `1px solid var(--${roll.damageType}-light)`, color: `var(--${roll.damageType}-light)`, filter: `blur(${roll.damageType == "fear" ? '0.05rem' : ""})`} : {}}>Dano</option>
            </select>
            <input type="number" value={roll.quantity} onChange={handleChangeRollQuantity} style={roll.isDamage ? {borderBottom: `1px solid var(--${roll.damageType}-light)`, color: `var(--${roll.damageType}-light)`, filter: `blur(${roll.damageType == "fear" ? '0.05rem' : ""})`} : {}}/>
            <select
                value={roll.diceType}
                onChange={handleChangeRollDiceType}
                style={roll.isDamage ? {borderBottom: `1px solid var(--${roll.damageType}-light)`, color: `var(--${roll.damageType}-light)`, filter: `blur(${roll.damageType == "fear" ? '0.05rem' : ""})`} : {}}
            >
                <option value="4" style={roll.isDamage ? {borderBottom: `1px solid var(--${roll.damageType}-light)`, color: `var(--${roll.damageType}-light)`, filter: `blur(${roll.damageType == "fear" ? '0.05rem' : ""})`} : {}}>d4</option>
                <option value="6" style={roll.isDamage ? {borderBottom: `1px solid var(--${roll.damageType}-light)`, color: `var(--${roll.damageType}-light)`, filter: `blur(${roll.damageType == "fear" ? '0.05rem' : ""})`} : {}}>d6</option>
                <option value="8" style={roll.isDamage ? {borderBottom: `1px solid var(--${roll.damageType}-light)`, color: `var(--${roll.damageType}-light)`, filter: `blur(${roll.damageType == "fear" ? '0.05rem' : ""})`} : {}}>d8</option>
                <option value="10" style={roll.isDamage ? {borderBottom: `1px solid var(--${roll.damageType}-light)`, color: `var(--${roll.damageType}-light)`, filter: `blur(${roll.damageType == "fear" ? '0.05rem' : ""})`} : {}}>d10</option>
                <option value="12" style={roll.isDamage ? {borderBottom: `1px solid var(--${roll.damageType}-light)`, color: `var(--${roll.damageType}-light)`, filter: `blur(${roll.damageType == "fear" ? '0.05rem' : ""})`} : {}}>d12</option>
                <option value="20" style={roll.isDamage ? {borderBottom: `1px solid var(--${roll.damageType}-light)`, color: `var(--${roll.damageType}-light)`, filter: `blur(${roll.damageType == "fear" ? '0.05rem' : ""})`} : {}}>d20</option>
                <option value="100" style={roll.isDamage ? {borderBottom: `1px solid var(--${roll.damageType}-light)`, color: `var(--${roll.damageType}-light)`, filter: `blur(${roll.damageType == "fear" ? '0.05rem' : ""})`} : {}}>d100</option>
            </select>
            <span>
                <Plus weight='fill' style={roll.isDamage ? {fill: `var(--${roll.damageType}-light)`, filter: `blur(${roll.damageType == "fear" ? '0.05rem' : ""})`} : {}}/>
                <input
                    type="number"
                    value={roll.bonus}
                    onChange={handleChangeRollBonus}
                    style={roll.isDamage ? {borderBottom: `1px solid var(--${roll.damageType}-light)`, color: `var(--${roll.damageType}-light)`, filter: `blur(${roll.damageType == "fear" ? '0.05rem' : ""})`} : {}}
                />
            </span>
            { roll.isDamage ?
                <select
                    className={styles.damageType}
                    value={roll.damageType}
                    style={{borderBottom: `1px solid var(--${roll.damageType}-light)`, color: `var(--${roll.damageType}-light)`, filter: `blur(${roll.damageType == "fear" ? '0.05rem' : ""})`}}
                    onChange={handleChangeDamageType}
                >
                    <option value="slash">Cortante</option>
                    <option value="piercing">Perfurante</option>
                    <option value="bludgeoning">Contundente</option>
                    <option value="ballistic">Balistico</option>
                    <option value="fire">Fogo</option>
                    <option value="cold">Frio</option>
                    <option value="chemical">Químico</option>
                    <option value="mental">Mental</option>
                    <option value="knowledge">Conhecimento</option>
                    <option value="energy">Energia</option>
                    <option value="death">Morte</option>
                    <option value="blood">Sangue</option>
                    <option value="fear">Medo</option>
                </select> : <div className={styles.critical}>
                    <input type="number" value={critical} onChange={handleChangeCritical}/>
                    <select value={multiplier} onChange={handleChangeMultiplier}>
                        <option value="2">x2</option>
                        <option value="3">x3</option>
                        <option value="4">x4</option>
                    </select>
                    <select value={dicesOrTotal} className={styles.dicesOrTotal} onChange={handleChangeDicesOrTotal}>
                        <option value="total">Total</option>
                        <option value="dice">Dados</option>
                    </select>
                    <p>CRITÍCO</p>
                </div>
            }
            <button onClick={handleDeleteRoll}><X size={16} weight="fill"/></button>
        </div>
    )
}