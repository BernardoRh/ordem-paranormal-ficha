import { X } from "phosphor-react";
import { ChangeEvent, useContext } from "react";
import styles from "./skillTableRow.module.css"
import { Skill } from "../../../../../../../../reducers/CharactersReducer/charactersSheet";
import { CharactersContext } from "../../../../../../../../contexts/CharactersContexts/CharactersContext";

interface SkillTableRow {
    skill?: Skill
}

export function SkillTableRow({skill}: SkillTableRow) {

    const {characterToDisplayId, changeCharacterSkills} = useContext(CharactersContext)

    function handleChangeDescription(event: ChangeEvent<HTMLTextAreaElement>) {
        const newDescription = event.target.value
        if(characterToDisplayId != null){
            changeCharacterSkills(characterToDisplayId, skill?.id as string, "changeDescription", newDescription)
        }
    }

    function handleDeleteSkill() {
        if(characterToDisplayId != null){
            changeCharacterSkills(characterToDisplayId, skill?.id as string, "delete", "")
        }
    }

    function handleChangeSkillName(event: ChangeEvent<HTMLInputElement>) {
        const newName = event.target.value
        if(characterToDisplayId != null){
            changeCharacterSkills(characterToDisplayId, skill?.id as string, "changeName", newName)
        }
    }

    function handleChangeSkillCost(event: ChangeEvent<HTMLInputElement>) {
        const newCost = event.target.value
        if(characterToDisplayId != null){
            changeCharacterSkills(characterToDisplayId, skill?.id as string, "changeCost", newCost)
        }
    }

    function handleChangeSkillPage(event: ChangeEvent<HTMLInputElement>) {
        const newPage = event.target.value
        if(characterToDisplayId != null){
            changeCharacterSkills(characterToDisplayId, skill?.id as string, "changePage", newPage)
        }
    }


    return(
        <div className={styles.skillsTableColum}>
            <input type="text" value={skill?.name} onChange={handleChangeSkillName}/>
            <input type="number" className={styles.center} value={skill?.cost} onChange={handleChangeSkillCost}/>
            <input type="number" className={styles.center} value={skill?.page} onChange={handleChangeSkillPage}/>
            <textarea
                onChange={handleChangeDescription}
                value={skill?.description}
                rows={
                    Math.ceil(skill?.description.length != 0 ? (skill?.description.length as number)/70 : 1) < 4 ?
                    Math.ceil(skill?.description.length != 0 ? (skill?.description.length as number)/70 : 1) : 4
                }
            />
            <button onClick={handleDeleteSkill}>
                <X size={18} weight="fill" className={styles.trash} />
            </button>
        </div>
    )
}