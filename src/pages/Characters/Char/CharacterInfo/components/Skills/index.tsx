import { Pencil, Plus, Trash } from "phosphor-react"
import { ChangeEvent, useContext, useState } from "react"
import { CharactersContext } from "../../../../../../contexts/CaractersContexts/CharactersContext"
import { Skill } from "../../../../../../reducers/CharactersReducer/charactersSheet"
import { SkillTableRow } from "./components/SkillTableRow"
import styles from "./skills.module.css"

interface Skills {
    skills?: Skill[]
}

export function Skills({skills}: Skills) {

    const {characterToDisplayId, changeCharacterSkills} = useContext(CharactersContext)

    function handleAddNewSkill() {
        const newSkill: Skill = {
            id: String(new Date()),
            name: "",
            page: "",
            description: "",
            cost: ""
        }
        if(characterToDisplayId != null){
            changeCharacterSkills(characterToDisplayId, "", "addSkill", newSkill)
        }
    }

    return(
        <div className={styles.skillsTable}>
            <div className={styles.skillsTableColumHeader}>
                <div>HABILIDADES</div>
                <div className={styles.center}>CUSTO</div>
                <div className={styles.center}>PAGINA</div>
                <div>
                    DESCRIÇÃO
                </div>
            </div>
            {skills?.map((skill) => {
                return(<SkillTableRow key={skill.id} skill={skill}/>)
            })}
            <button className={styles.addSkills} onClick={handleAddNewSkill}>
                <Plus size={24}/>
            </button>
        </div>
    )
}