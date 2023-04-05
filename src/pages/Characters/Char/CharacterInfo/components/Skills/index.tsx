import { CaretDown, CaretRight, CaretUp, Pencil, Plus, Trash } from "phosphor-react"
import { useContext, useState } from "react"
import { CharactersContext } from "../../../../../../contexts/CharactersContexts/CharactersContext"
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
            id: String(new Date()) + String(Math.random()),
            name: "",
            page: "",
            description: "",
            cost: ""
        }
        if(characterToDisplayId != null){
            changeCharacterSkills(characterToDisplayId, "", "addSkill", newSkill)
        }
    }

    const [sortSkills, setSortSkills] = useState<boolean | undefined>(undefined)

    function handleChangeSort() {
        if(sortSkills == undefined){
            setSortSkills(true)
        } else if(sortSkills == true){
            setSortSkills(false)
        } else {
            setSortSkills(undefined)
        }
    }

    let skillsToDisplay = skills?.slice()

    if(sortSkills == true){
        skillsToDisplay = skillsToDisplay?.sort((a, b) => a.name > b.name ? 1 : -1)
    } else if(sortSkills == false){
        skillsToDisplay = skillsToDisplay?.sort((a, b) => a.name < b.name ? 1 : -1)
    }
    

    return(
        <div className={styles.skillsTable}>
            <div className={styles.skillsTableColumHeader}>
                <button onClick={handleChangeSort}>
                    HABILIDADES
                    {sortSkills == undefined ? <CaretRight size={16} weight="fill" /> : sortSkills ? 
                        <CaretDown size={16} weight="fill"/> : 
                        <CaretUp size={16} weight="fill"/>
                    }
                </button>
                <div className={styles.center}>CUSTO</div>
                <div className={styles.center}>PAGINA</div>
                <div>
                    DESCRIÇÃO
                </div>
            </div>
            {skillsToDisplay?.map((skill) => {
                return(<SkillTableRow key={skill.id} skill={skill}/>)
            })}
            <button className={styles.addSkills} onClick={handleAddNewSkill}>
                <Plus size={24} weight="fill"/>
            </button>
        </div>
    )
}