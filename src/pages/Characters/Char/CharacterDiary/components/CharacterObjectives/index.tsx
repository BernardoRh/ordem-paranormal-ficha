import { HtmlHTMLAttributes, ReactNode, useContext, useState } from "react"
import { CharactersContext } from "../../../../../../contexts/CharactersContexts/CharactersContext"
import { useDropzone } from "react-dropzone"

import { Page } from "../Page"

import styles from "./characterObjectives.module.css"

import line from "./../../../../../../img/line.png"
import { Objectives } from "../../../../../../reducers/CharactersReducer/charactersSheet"
import { Note } from "../Note"

interface CharacterObjectivesProps extends HtmlHTMLAttributes<HTMLDivElement> {
    children: ReactNode,
    objectives?: Objectives[]
}

export function CharacterObjectives({children, objectives, ...props}: CharacterObjectivesProps) {

    const { characterToDisplayId, changeDiary } = useContext(CharactersContext)

    const {getRootProps, getInputProps} = useDropzone({
        accept: {
            "image/png": ['.png', '.jpeg', '.webp', '.jpg']
        },
        onDrop: acceptFiles => {
            const newObjective = new Promise((resolve, reject) => {
                const fileReader = new FileReader();
                fileReader.onload = () => resolve(fileReader.result);
                fileReader.readAsDataURL(acceptFiles[0]);
            });
            if(characterToDisplayId != null){
                newObjective.then(base64 => changeDiary(characterToDisplayId, "", "", "", "", "addObjectiveNoteImage", "objectives", base64))
            }
            restKey()
        }
    })

    function addObjective() {
        if(characterToDisplayId != null) {
            changeDiary(characterToDisplayId, "", "", "", "", "addObjectiveNote", "objectives", "")
        }
    }

    const [key, setKey] = useState(String(new Date()) + String(Math.random()))
    function restKey() {
        setKey(String(new Date()) + String(Math.random()))
    }

    return (
        <Page {...props}>
            <div className={styles.objectivesPage}>
                <span className={styles.title}>
                    <h4>OBJETIVOS</h4>
                    <img src={line}/>
                </span>
                {objectives?.map((objective) => {
                    return(<Note key={objective.id} note={objective} pageId="" isAnObjective/>)
                })}
                <div className={styles.inputOptions}>
                    <button onClick={addObjective}>
                        ANOTAR
                    </button>
                    <div {...getRootProps()}>
                        ADICIONE UMA IMAGEM
                        <input key={key} id="objectivesImages" accept=".png, .jpeg, .webp, .jpg" type="file" {...getInputProps()}/>
                    </div>
                </div>
            </div>
            {children}
        </Page>
    )
}