import { ChangeEvent, ReactNode, useEffect, useState } from "react";
import { Barbell, Sparkle, StarFour } from 'phosphor-react'

import styles from "./expertise.module.css"

interface ExpertiseProps {
    children: ReactNode;
    baseAtribute: 'AGI' | 'FOR' | 'INT' | 'PRE' | 'VIG',
    weightPenalty?: boolean;
    onlyWithExpertise?: boolean;
    special?: boolean;
}

export function Expertise({children, baseAtribute, weightPenalty, onlyWithExpertise, special}: ExpertiseProps) {
    const [skillExpertiseBonus, setSkillExpertiseBonus] = useState(0)
    const [levelSkillExpertise, setLevelSkillExpertise] = useState("")

    function HandleExpertiseChange(event: ChangeEvent<HTMLSelectElement>) {
        setLevelSkillExpertise(event.target.value);
    }

    useEffect(() => {
        if(levelSkillExpertise == "Treinado"){
            setSkillExpertiseBonus(5);
        }
        else if(levelSkillExpertise == "Veterano"){
            setSkillExpertiseBonus(10);
        }
        else if(levelSkillExpertise == "Expert"){
            setSkillExpertiseBonus(15);
        }
        else {
            setSkillExpertiseBonus(0);
        }
    })

    return(
        <div className={styles.expertise}>
            <button>
                {children}
                {weightPenalty ? <Barbell size={18}/> : <></>}
                {onlyWithExpertise ? <StarFour size={18} /> : <></>}
                {special ? <Sparkle size={18} weight="fill"/> : <></>}
            </button>
            <span className={styles.skillTotal}>
                [{baseAtribute}]
            </span>
            <span className={styles.skillBonus}>{skillExpertiseBonus}</span>
            <select onChange={HandleExpertiseChange} className={styles.skillBonusSelection} name="skillBonusSelection">
                <option value=""></option>
                <option value="Treinado">Treinado</option>
                <option value="Veterano">Veterano</option>
                <option value="Expert">Expert</option>
            </select>
            <input type="number" placeholder="0" min={0} max={40} step={5}/>
        </div>
    )
}