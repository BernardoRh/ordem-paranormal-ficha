import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Barbell, FirstAidKit, Sparkle, StarFour } from 'phosphor-react'

import styles from "./expertise.module.css"
import { Attributes, Expertise } from "../../../../../../../../reducers/CharactersReducer/charactersSheet";
import { CharactersContext } from "../../../../../../../../contexts/CharactersContexts/CharactersContext";

interface ExpertiseRow extends Expertise {
    baseAttributes?: Attributes
}

export function ExpertiseRow({
    name, principalAttribute, weightPenalty,
    onlyWithExpertise, special, kit,
    others, trainedLevel, baseAttributes}: ExpertiseRow) {
    
    const {characterToDisplayId, changeCharacterExpertise, rollingDices} = useContext(CharactersContext)

    function HandleExpertiseChange(event: ChangeEvent<HTMLSelectElement>) {
        const newTrainedLevel = event.target.value as "none" | "Expert" | "Veterano" | "Treinado"
        if(characterToDisplayId != null) {
            changeCharacterExpertise(characterToDisplayId, name, newTrainedLevel, others, "trainedLevel")
        }
    }

    function HandleOthersChange(event: ChangeEvent<HTMLInputElement>) {
        const newOthers = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterExpertise(characterToDisplayId, name, trainedLevel, newOthers, "others")
        }
    }

    const [skillExpertiseBonus, setSkillExpertiseBonus] = useState(0)

    useEffect(() => {
        if(trainedLevel == "Treinado"){
            setSkillExpertiseBonus(5);
        }
        else if(trainedLevel == "Veterano"){
            setSkillExpertiseBonus(10);
        }
        else if(trainedLevel == "Expert"){
            setSkillExpertiseBonus(15);
        }
        else {
            setSkillExpertiseBonus(0);
        }
    }, [trainedLevel])

    const attributeToBeUse = (): string => {
        switch(principalAttribute){
            case "AGI": {
                return baseAttributes?.agility ? baseAttributes?.agility : "0"
            }
            case "FOR": {
                return baseAttributes?.strength ? baseAttributes?.strength : "0"
            }
            case "INT": {
                return baseAttributes?.intellect ? baseAttributes?.intellect : "0"
            }
            case "PRE": {
                return baseAttributes?.presence ? baseAttributes?.presence : "0"
            }
            case "VIG": {
                return baseAttributes?.vigor ? baseAttributes?.vigor : "0"
            }
            default: return "0"
        }
    } 

    return(
        <div className={styles.expertise}>
            <button onClick={() => {
                rollingDices(characterToDisplayId as string, {
                    name: name ? name : "Rolagem De Pericia",
                    rolls: [{
                        diceType: "20",
                        id: String(new Date()) + String(Math.random()),
                        isDamage: false,
                        quantity: attributeToBeUse(),
                        bonus: String(skillExpertiseBonus),
                    }],
                    showRoll: true,
                    wrapperId: String(new Date()) + String(Math.random())
                })
            }}>
                {name}
                {weightPenalty ? <Barbell size={18}/> : <></>}
                {onlyWithExpertise ? <StarFour size={18} /> : <></>}
                {kit ? <FirstAidKit size={18} weight="fill" /> : <></>}
                {special ? <Sparkle size={18} weight="fill"/> : <></>}
            </button>
            <span className={styles.skillTotal}>
                [{principalAttribute}]
            </span>
            <span className={styles.skillBonus}>{skillExpertiseBonus}</span>
            <select
                onChange={HandleExpertiseChange}
                className={styles.skillBonusSelection}
                value={trainedLevel}
            >
                <option value="none"></option>
                <option value="Treinado">Treinado</option>
                <option value="Veterano">Veterano</option>
                <option value="Expert">Expert</option>
            </select>
            <input type="number" placeholder="0" min={0} max={40} value={others} onChange={HandleOthersChange}/>
        </div>
    )
}