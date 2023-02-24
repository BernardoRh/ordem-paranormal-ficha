import { CheckedState } from '@radix-ui/react-checkbox';
import { Plus, X } from 'phosphor-react';
import { ChangeEvent, useState } from 'react'
import { RitualCheckBox } from '../RitualCheckBox';
import { RollDiceProps } from '../../../../../../components/Rolldice';
import styles from './ritualCard.module.css'

const Cards = {
    none: "https://i.imgur.com/h5902cF.png",
    knowledge: "https://i.imgur.com/rpjrcfF.png",
    energy: "https://i.imgur.com/nSBnmYx.png",
    fear: "https://i.imgur.com/qRrpKcS.png",
    death: "https://i.imgur.com/sCljDwb.png",
    blood: "https://i.imgur.com/99pF6l6.png",
}

interface RitualCardProps {
    name?: string,
    type?: "none" | "death" | "knowledge" | "blood" | "energy" | "fear",
    level?: "I" | "II" | "III" | "IV",
    execution?: string,
    range?: string,
    target?: string,
    duration?: string,
    resistance?: string,
    description?: {
        principal?: string,
        subDescriptions?: [
            {
                name?: string,
                description?: string,
            }
        ]
    },
    studied?: {
        activated?: boolean,
        additionalCost?: number,
        additionalEffect?: string,
    },
    truly?: {
        activated?: boolean,
        additionalCost?: number,
        additionalEffect?: string,
    },
    rolls?: [RollDiceProps]
}

export function RitualCard({
    name, type, level, execution,
    range, target, duration, resistance,
    description, studied, truly, rolls
    }: RitualCardProps) {

    const [cardType, setCardType] = useState<"none" | "death" | "knowledge" | "blood" | "energy" | "fear" >(type ? type : "none");
    const [cardName, setCardName] = useState(name ? name : "");
    const [trulyChecked, setTrulyChecked] = useState(false)

    function handleChangeCardType(event: ChangeEvent<HTMLSelectElement>) {
        const newCardType = event.target.value as "none" | "death" | "knowledge" | "blood" | "energy" | "fear";
        setCardType(newCardType)
    }

    function handleChangeLabelTruly(checked: CheckedState){
        const newState = checked as boolean
        setTrulyChecked(newState)
    }

    function cardNameChangeHandler(event: ChangeEvent<HTMLInputElement>){
        const changedName = event.target.value
        setCardName(changedName)
    }
    
    return(
        <div
            style={{backgroundImage: `url(${Cards[cardType]})`}}
            className={styles.ritualCard}
        >
            <div className={styles.ritualCardContent}>
                <div className={styles.ritualCardHeader}>
                    <input type="text" placeholder="Nome" value={cardName ? cardName : ""} onChange={cardNameChangeHandler}/>
                    <div className={styles.ritualCardTypeContainer}>
                        <select
                            className={styles.ritualCardType}
                            name="type"
                            defaultValue={cardType ? cardType : "none"}
                            onChange={handleChangeCardType}
                        >
                            <option value="none" disabled>Tipo</option>
                            <option value="knowledge">Conhecimento</option>
                            <option value="death">Morte</option>
                            <option value="energy">Energia</option>
                            <option value="blood">Sangue</option>
                            <option value="fear">Medo</option>
                        </select>
                        <select
                            className={styles.ritualCardLevel}
                            defaultValue="none"
                            name="level"
                        >
                            <option value="0" disabled>0</option>
                            <option value="1">I</option>
                            <option value="2">II</option>
                            <option value="3">III</option>
                            <option value="4">IV</option>
                        </select>
                    </div>
                </div>
                <div className={styles.ritualCardExecution}>
                    <span>Execução: <input type="text" /></span>
                    <span>Alcance: <input type="text" /></span>
                    <span>Alvo: <input type="text" /></span>
                    <span>Duração: <input type="text" /></span>
                    <span style={{gridColumnStart: 1, gridColumnEnd: 3}}>
                        Resistência: <input type="text" />
                    </span>
                    <label id='studied'>
                        <RitualCheckBox/>
                        Discente
                    </label>
                    <label id='truly'>
                        <RitualCheckBox onCheckedChange={handleChangeLabelTruly} checked={trulyChecked}/>
                        Verdadeiro
                    </label>
                </div>
                <div className={styles.ritualCardDescriptions}>
                    <div className={styles.description}>
                        <h4>Descrição:</h4>
                        <textarea rows={2}>
                        </textarea>
                    </div>
                    <div className={styles.description}>
                        <input type="text"/>
                        <textarea rows={2}>
                        </textarea>
                    </div>
                    <button className={styles.addSubDescription}><Plus size={24} weight="fill"/></button>
                    <div className={styles.description}>
                        <span className={styles.additionalEffects}>
                            Discente (+ <input type="number"></input> PE):
                        </span>
                        <textarea rows={2}>
                        </textarea>
                    </div>
                    <div style={trulyChecked ? {display: "flex"} : {display: "none"}} className={styles.description}>
                        <span className={styles.additionalEffects}>
                            Verdadeiro (+ <input type="number"></input> PE):
                        </span>
                        <textarea rows={2}>
                        </textarea>
                    </div>
                </div>
                <button className={styles.deleteRitualCard}><X size={24} weight="fill"/></button> 
            </div>
        </div>
    )
}