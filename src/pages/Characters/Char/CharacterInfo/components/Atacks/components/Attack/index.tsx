import styles from "./attack.module.css"
import { X } from "phosphor-react";
import RollDice from "../../../../../../../../img/rollDice.png"
import { Attack } from "../../../../../../../../reducers/CharactersReducer/charactersSheet";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { CharactersContext } from "../../../../../../../../contexts/CharactersContexts/CharactersContext";
import { Rolls } from "../../../Rolls/components/Rolldice";

interface AttackRowProps {
    attack?: Attack
}

export function AttackRow({attack}: AttackRowProps) {

    const {characterToDisplayId, changeCharacterAttacks, rollingDices} = useContext(CharactersContext)

    function handleDeleteAttack(){
        if(characterToDisplayId != null) {
            changeCharacterAttacks(characterToDisplayId, attack?.id as string, "delete", "")
        }
    }

    function handleChangeName(event: ChangeEvent<HTMLInputElement>){
        const newAttackName = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterAttacks(characterToDisplayId, attack?.id as string, "changeName", newAttackName)
        }
    }

    function handleChangeTestDiceQuantity(event: ChangeEvent<HTMLInputElement>) {
        const newDiceQuantity = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterAttacks(characterToDisplayId, attack?.id as string, "changeTestDiceQuantity", newDiceQuantity)
        }
    }

    function handleChangeTestBonus(event: ChangeEvent<HTMLInputElement>) {
        const newBonus = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterAttacks(characterToDisplayId, attack?.id as string, "changeTestBonus", newBonus)
        }
    }

    function handleChangeSpecial(event: ChangeEvent<HTMLTextAreaElement>){
        const newSpecial = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterAttacks(characterToDisplayId, attack?.id as string, "changeSpecial", newSpecial)
        }
    }

    function handleChangeDamageDiceQuantity(event: ChangeEvent<HTMLInputElement>){
        const newDamageQuantity = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterAttacks(characterToDisplayId, attack?.id as string, "changeDamageDiceQuantity", newDamageQuantity)
        }
    }

    function handleChangeDamageDiceType(event: ChangeEvent<HTMLSelectElement>){
        const newDamageType = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterAttacks(characterToDisplayId, attack?.id as string, "changeDamageDiceType", newDamageType)
        }
    }

    function handleChangeDamageBonus(event: ChangeEvent<HTMLInputElement>){
        const newDamageBonus = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterAttacks(characterToDisplayId, attack?.id as string, "changeDamageBonus", newDamageBonus)
        }
    }

    function handleChangeCritical(event: ChangeEvent<HTMLInputElement>){
        const newCritical = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterAttacks(characterToDisplayId, attack?.id as string, "changeCritical", newCritical)
        }
    }

    function handleChangeRange(event: ChangeEvent<HTMLInputElement>){
        const newRange = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterAttacks(characterToDisplayId, attack?.id as string, "changeRange", newRange)
        }
    }

    function handleChangeDamageType(event: ChangeEvent<HTMLSelectElement>) {
        const newDamageType = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterAttacks(characterToDisplayId, attack?.id as string, "changeDamageType", newDamageType)
        }
    }

    function handleChangeMultiplier(event: ChangeEvent<HTMLSelectElement>){
        const newMultiplier = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterAttacks(characterToDisplayId, attack?.id as string, "changeMultiplier", newMultiplier)
        }
    }

    function handleChangeDicesOrTotal(event: ChangeEvent<HTMLSelectElement>){
        const newDicesOrTotal = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterAttacks(characterToDisplayId, attack?.id as string, "changeDicesOrTotal", newDicesOrTotal)
        }
    }

    const [specialRows, setSpecialRows] = useState(1)


    useEffect(() => {
        const newRows = attack?.especial.length ? (attack?.especial.length/36 + 1) : 1
        setSpecialRows(newRows > 4 ? 4 : newRows)
    })

    return(
        <div className={styles.attacksTableColum}>
            <button
                className={styles.buttonRollForAttack}
                onClick={() => {
                rollingDices(characterToDisplayId as string, {
                    name: attack?.name ? attack?.name : "Rolagem De Ataque",
                    rolls: [
                        {
                            diceType: "20",
                            id: String(new Date()) + String(Math.random()),
                            isDamage: false,
                            quantity: attack?.rollTest.quantity ? attack?.rollTest.quantity : "",
                            bonus: attack?.rollTest.bonus,
                        },
                        {
                            diceType: attack?.damage.diceType ? attack?.damage.diceType : "4",
                            id: String(new Date()) + String(Math.random()),
                            isDamage: true,
                            quantity: attack?.damage.quantity ? attack?.damage.quantity : "",
                            damageType: attack?.damage.damageType ? attack?.damage.damageType : "ballistic",
                            bonus: attack?.damage.bonus,
                        }
                    ],
                    critical: attack?.critical,
                    showRoll: true,
                    wrapperId: String(new Date()) + String(Math.random()),
                    dicesOrTotal: attack?.dicesOrTotal,
                    multiplier: attack?.multiplier
                })
            }}>
                <img src={RollDice} alt="Rolling dices" />
            </button>
            <input type="text" value={attack?.name} onChange={handleChangeName}/>
            <div className={styles.rollsForAttack}>
                <input type="number" value={attack?.rollTest.quantity} onChange={handleChangeTestDiceQuantity}/>
                <span>d20</span>
                <span>+</span>
                <input type="number" value={attack?.rollTest.bonus} onChange={handleChangeTestBonus}/>
            </div>
            <div className={styles.rollsForAttack}>
                <input type="number" value={attack?.damage.quantity} onChange={handleChangeDamageDiceQuantity} style={{borderBottom: `1px solid var(--${attack?.damage.damageType}-light)`, color: `var(--${attack?.damage.damageType}-light)`, filter: `blur(${attack?.damage.damageType == "fear" ? '0.05rem' : ""})`}}/>
                <select value={attack?.damage.diceType} onChange={handleChangeDamageDiceType} style={{borderBottom: `1px solid var(--${attack?.damage.damageType}-light)`, color: `var(--${attack?.damage.damageType}-light)`, filter: `blur(${attack?.damage.damageType == "fear" ? '0.05rem' : ""})`}}>
                    <option value="4" style={{borderBottom: `1px solid var(--${attack?.damage.damageType}-light)`, color: `var(--${attack?.damage.damageType}-light)`, filter: `blur(${attack?.damage.damageType == "fear" ? '0.05rem' : ""})`}}>d4</option>
                    <option value="6" style={{borderBottom: `1px solid var(--${attack?.damage.damageType}-light)`, color: `var(--${attack?.damage.damageType}-light)`, filter: `blur(${attack?.damage.damageType == "fear" ? '0.05rem' : ""})`}}>d6</option>
                    <option value="8" style={{borderBottom: `1px solid var(--${attack?.damage.damageType}-light)`, color: `var(--${attack?.damage.damageType}-light)`, filter: `blur(${attack?.damage.damageType == "fear" ? '0.05rem' : ""})`}}>d8</option>
                    <option value="10" style={{borderBottom: `1px solid var(--${attack?.damage.damageType}-light)`, color: `var(--${attack?.damage.damageType}-light)`, filter: `blur(${attack?.damage.damageType == "fear" ? '0.05rem' : ""})`}}>d10</option>
                    <option value="12" style={{borderBottom: `1px solid var(--${attack?.damage.damageType}-light)`, color: `var(--${attack?.damage.damageType}-light)`, filter: `blur(${attack?.damage.damageType == "fear" ? '0.05rem' : ""})`}}>d12</option>
                    <option value="20" style={{borderBottom: `1px solid var(--${attack?.damage.damageType}-light)`, color: `var(--${attack?.damage.damageType}-light)`, filter: `blur(${attack?.damage.damageType == "fear" ? '0.05rem' : ""})`}}>d20</option>
                    <option value="100" style={{borderBottom: `1px solid var(--${attack?.damage.damageType}-light)`, color: `var(--${attack?.damage.damageType}-light)`, filter: `blur(${attack?.damage.damageType == "fear" ? '0.05rem' : ""})`}}>d100</option>
                </select>
                <span style={{ color: `var(--${attack?.damage.damageType}-light)`, filter: `blur(${attack?.damage.damageType == "fear" ? '0.05rem' : ""})`}}>+</span>
                <input type="number" value={attack?.damage.bonus} onChange={handleChangeDamageBonus} style={{borderBottom: `1px solid var(--${attack?.damage.damageType}-light)`, color: `var(--${attack?.damage.damageType}-light)`, filter: `blur(${attack?.damage.damageType == "fear" ? '0.05rem' : ""})`}}/>
            </div>
            <div className={styles.rollsForAttack}>
                <select
                    className={styles.damageType}
                    value={attack?.damage.damageType}
                    style={{borderBottom: `1px solid var(--${attack?.damage.damageType}-light)`, color: `var(--${attack?.damage.damageType}-light)`, filter: `blur(${attack?.damage.damageType == "fear" ? '0.05rem' : ""})`}}
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
                </select>
            </div>
            <div className={styles.critical}>
                <input className={styles.center} type="number" value={attack?.critical} onChange={handleChangeCritical}/>
                <select value={attack?.multiplier} onChange={handleChangeMultiplier}>
                    <option value="2">x2</option>
                    <option value="3">x3</option>
                    <option value="4">x4</option>
                </select>
                <select value={attack?.dicesOrTotal} onChange={handleChangeDicesOrTotal}>
                    <option value="dice">Dados</option>
                    <option value="total">Total</option>
                </select>
            </div>
            <input className={styles.center} type="text" value={attack?.range} onChange={handleChangeRange}/>
            <textarea
                rows={specialRows}
                value={attack?.especial}
                onChange={handleChangeSpecial}
            >
            </textarea>
            <button onClick={handleDeleteAttack} className={styles.trash}>
                <X size={18} weight="fill" />
            </button>
        </div>
    )
}