import { CheckedState } from '@radix-ui/react-checkbox';
import { Plus, X, ArrowFatLineDown, ArrowFatLineUp, Copy } from 'phosphor-react';
import { ChangeEvent, useContext } from 'react'
import { RitualCheckBox } from '../RitualCheckBox';
import styles from './ritualCard.module.css'
import { Ritual } from '../../../../../../reducers/CharactersReducer/charactersSheet';
import { CharactersContext } from '../../../../../../contexts/CharactersContexts/CharactersContext';
import { SubDescription } from '../SubDescription';
import { RitualRolls } from '../RitualRolls';

const Cards = {
    none: "https://i.imgur.com/h5902cF.png",
    knowledge: "https://i.imgur.com/rpjrcfF.png",
    energy: "https://i.imgur.com/nSBnmYx.png",
    fear: "https://i.imgur.com/qRrpKcS.png",
    death: "https://i.imgur.com/sCljDwb.png",
    blood: "https://i.imgur.com/99pF6l6.png",
}

interface RitualCardProps {
    ritual: Ritual
}

export function RitualCard({ritual}: RitualCardProps) {

    const {characterToDisplayId, changeRituals} = useContext(CharactersContext)

    function handleChangeCardType(event: ChangeEvent<HTMLSelectElement>) {
        const newCardType = event.target.value as "none" | "death" | "knowledge" | "blood" | "energy" | "fear";
        if(characterToDisplayId != null){
            changeRituals(characterToDisplayId, ritual.id, "", "", "", "type", "", newCardType)
        }
    }

    function handleChangeRitualName(event: ChangeEvent<HTMLInputElement>){
        const changedName = event.target.value
        if(characterToDisplayId != null) {
            changeRituals(characterToDisplayId, ritual.id, "", "", "", "name", "", changedName)
        }
    }

    function handleChangeLabelStudied(checked: CheckedState){
        const newState = checked as boolean
        if(characterToDisplayId != null) {
            changeRituals(characterToDisplayId, ritual.id, "", "", "", "studiedShow", "", newState)
        }
    }

    function handleChangeLabelTruly(checked: CheckedState){
        const newState = checked as boolean
        if(characterToDisplayId != null) {
            changeRituals(characterToDisplayId, ritual.id, "", "", "", "trulyShow", "", newState)
        }
    }

    function handleAddSubDescription() {
        if(characterToDisplayId != null){
            changeRituals(characterToDisplayId, ritual.id, "", "", "", "addSubDescription", "subDescription", "")
        }
    }

    function handleChangeDescription(event: ChangeEvent<HTMLTextAreaElement>) {
        const newDescription = event.target.value
        if(characterToDisplayId != null) {
            changeRituals(characterToDisplayId, ritual.id, "", "", "", "description", "", newDescription)
        }
    }

    function handleChangeRitualLevel(event: ChangeEvent<HTMLSelectElement>){
        const newLevel = event.target.value
        if(characterToDisplayId != null) {
            changeRituals(characterToDisplayId, ritual.id, "", "", "", "level", "", newLevel)
        }
    }

    function handleChangeTrulyCost(event: ChangeEvent<HTMLInputElement>){
        const newCost = event.target.value
        if(characterToDisplayId != null) {
            changeRituals(characterToDisplayId, ritual.id, "", "", "", "trulyCost", "", newCost)
        }
    }

    function handleChangeStudiedCost(event: ChangeEvent<HTMLInputElement>){
        const newCost = event.target.value
        if(characterToDisplayId != null) {
            changeRituals(characterToDisplayId, ritual.id, "", "", "", "studiedCost", "", newCost)
        }
    }

    function handleDeleteRitual() {
        if(characterToDisplayId != null) {
            changeRituals(characterToDisplayId, ritual.id, "", "", "", "delete", "", "")
        }
    }

    function handleChangeStudiedEffect(event: ChangeEvent<HTMLTextAreaElement>) {
        const newEffect = event.target.value
        if(characterToDisplayId != null) {
            changeRituals(characterToDisplayId, ritual.id, "", "", "", "studiedEffect", "", newEffect)
        }
    }

    function handleChangeTrulyEffect(event: ChangeEvent<HTMLTextAreaElement>) {
        const newEffect = event.target.value
        if(characterToDisplayId != null) {
            changeRituals(characterToDisplayId, ritual.id, "", "", "", "trulyEffect", "", newEffect)
        }
    }

    function handleChangeRitualExecution(event: ChangeEvent<HTMLInputElement>){
        const newExecution = event.target.value
        if(characterToDisplayId != null){
            changeRituals(characterToDisplayId, ritual.id, "", "", "", "execution", "", newExecution)
        }
    }
    function handleChangeRitualRange(event: ChangeEvent<HTMLInputElement>){
        const newRange = event.target.value
        if(characterToDisplayId != null){
            changeRituals(characterToDisplayId, ritual.id, "", "", "", "range", "", newRange)
        }
    }
    function handleChangeRitualTarget(event: ChangeEvent<HTMLInputElement>){
        const newTarget = event.target.value
        if(characterToDisplayId != null){
            changeRituals(characterToDisplayId, ritual.id, "", "", "", "target", "", newTarget)
        }
    }
    function handleChangeRitualDuration(event: ChangeEvent<HTMLInputElement>){
        const newDuration = event.target.value
        if(characterToDisplayId != null){
            changeRituals(characterToDisplayId, ritual.id, "", "", "", "duration", "", newDuration)
        }
    }
    function handleChangeRitualResistance(event: ChangeEvent<HTMLInputElement>){
        const newResistances = event.target.value
        if(characterToDisplayId != null){
            changeRituals(characterToDisplayId, ritual.id, "", "", "", "resistance", "", newResistances)
        }
    }
    
    return(
        <div
            style={{
                backgroundImage: `url(${Cards[ritual.type]})`,
                boxShadow: `4px 4px 6px 
                ${ritual.type == "none" ? "black" : ""}
                ${ritual.type == "blood" ? "var(--blood-light)" : ""}
                ${ritual.type == "death" ? "var(--death-light)" : ""}
                ${ritual.type == "energy" ? "var(--energy-light)" : ""}
                ${ritual.type == "knowledge" ? "var(--knowledge-light)" : ""}
                ${ritual.type == "fear" ? "var(--fear-light)" : ""}
            `}}
            className={styles.ritualCard}
        >
            <div className={styles.ritualCardContent}>
                <div className={styles.ritualCardHeader}>
                    <input type="text" placeholder="Nome" value={ritual.name} onChange={handleChangeRitualName}/>
                    <div className={styles.ritualCardTypeContainer}>
                        <select
                            className={styles.ritualCardType}
                            name="type"
                            defaultValue={ritual.type}
                            onChange={handleChangeCardType}
                        >
                            <option value="none" disabled>Tipo</option>
                            <option value="knowledge">Conhecimento</option>
                            <option value="energy">Energia</option>
                            <option value="death">Morte</option>
                            <option value="fear">Medo</option>
                            <option value="blood">Sangue</option>
                        </select>
                        <select
                            className={styles.ritualCardLevel}
                            value={ritual.level}
                            name="level"
                            onChange={handleChangeRitualLevel}
                        >
                            <option value="1">I</option>
                            <option value="2">II</option>
                            <option value="3">III</option>
                            <option value="4">IV</option>
                        </select>
                    </div>
                </div>
                <div className={styles.ritualCardExecution}>
                    <span>Execução: <input type="text" onChange={handleChangeRitualExecution}/></span>
                    <span>Alcance: <input type="text" onChange={handleChangeRitualRange}/></span>
                    <span>Alvo: <input type="text" onChange={handleChangeRitualTarget}/></span>
                    <span>Duração: <input type="text" onChange={handleChangeRitualDuration}/></span>
                    <span style={{gridColumnStart: 1, gridColumnEnd: 3}}>
                        Resistência: <input type="text" onChange={handleChangeRitualResistance}/>
                    </span>
                    <label id='studied'>
                        <RitualCheckBox onCheckedChange={handleChangeLabelStudied} checked={ritual.studied.isActive}/>
                        Discente
                    </label>
                    <label id='truly'>
                        <RitualCheckBox onCheckedChange={handleChangeLabelTruly} checked={ritual.truly.isActive}/>
                        Verdadeiro
                    </label>
                </div>
                <div className={styles.ritualCardDescriptions}>
                    <div className={styles.description}>
                        <h4>Descrição:</h4>
                        <textarea
                            rows={
                                ritual.description.principal
                                ? ritual.description.principal.split(/\r\n|\r|\n/).length + ritual.description.principal.length/50
                                : 1
                            }
                            value={ritual.description.principal}
                            onChange={handleChangeDescription}
                        />
                    </div>
                    {ritual.description.subDescriptions.map((subDescription) => {
                        return(
                            <SubDescription ritualId={ritual.id} key={subDescription.id} subDescription={subDescription}/>
                        )
                    })}
                    <button className={styles.addSubDescription} onClick={handleAddSubDescription}><Plus size={24} weight="fill"/></button>
                    <div style={ritual.studied.isActive ? {display: "flex"} : {display: "none"}} className={styles.description}>
                        <span className={styles.additionalEffects}>
                            Discente (+ <input
                                type="number" 
                                value={ritual.studied.additionalCost} 
                                onChange={handleChangeStudiedCost}
                                
                            /> PE):
                        </span>
                        <textarea
                            rows={
                                ritual.studied.additionalEffect
                                ? ritual.studied.additionalEffect.split(/\r\n|\r|\n/).length + ritual.studied.additionalEffect.length/50
                                : 1
                            }
                            value={ritual.studied.additionalEffect}
                            onChange={handleChangeStudiedEffect}
                        />
                    </div>
                    <div style={ritual.truly.isActive ? {display: "flex"} : {display: "none"}} className={styles.description}>
                        <span className={styles.additionalEffects}>
                            Verdadeiro (+ <input
                                type="number"
                                value={ritual.truly.additionalCost}
                                onChange={handleChangeTrulyCost}
                            /> PE):
                        </span>
                        <textarea
                            rows={
                                ritual.truly.additionalEffect
                                ? ritual.truly.additionalEffect.split(/\r\n|\r|\n/).length + ritual.truly.additionalEffect.length/50
                                : 1
                            }
                            value={ritual.truly.additionalEffect}
                            onChange={handleChangeTrulyEffect}
                        />
                    </div>
                </div>
                <div className={styles.ritualsRolls}>
                    <h4>ROLAGENS</h4>
                    <RitualRolls multipleRolls={ritual.multipleRolls} ritualId={ritual.id}/>
                </div>
                <button className={`${styles.buttonsRitualCard} ${styles.deleteRitualCard}`} onClick={handleDeleteRitual}><X size={24} weight="fill"/></button> 
                <button className={`${styles.buttonsRitualCard} ${styles.exportRitualCard}`}><ArrowFatLineUp size={24} weight="fill"/></button>
                <button className={`${styles.buttonsRitualCard} ${styles.duplicateRitualCard}`}><Copy size={24} weight="fill"/></button>
            </div>
        </div>
    )
}