import { HtmlHTMLAttributes, ReactNode, useContext, useState } from "react"
import { CharactersContext } from "../../../../../../contexts/CharactersContexts/CharactersContext"
import { useDropzone } from "react-dropzone"

import { Page } from "../Page"

import styles from "./characterObjectives.module.css"

import line from "./../../../../../../img/line.png"
import { TapeButton } from "../TapeButton"
import { Tape } from "../Tape"

interface CharacterObjectivesProps extends HtmlHTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

export function CharacterObjectives({children, ...props}: CharacterObjectivesProps) {

    const {getRootProps, getInputProps} = useDropzone({
        accept: {
            "image/png": ['.png']
        },
        onDrop: acceptFiles => {
            restKey()
        }
    })

    const { characterToDisplayId, characters } = useContext(CharactersContext)

    const characterToDisplay = characters.find((character) => {
        if(character.id == characterToDisplayId){
            return character
        }
    })

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
                <div className={styles.annotationImage} style={{rotate: `${Math.floor((Math.random() * 3) + (Math.random() * -3))}deg`}}>
                    <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <TapeButton rotation="-45deg" className={`${styles.tapeOne}`}/>
                    <Tape rotation="-45deg" className={`${styles.tapeTwo}`}/>
                </div>
                <div className={styles.inputOptions}>
                    <button>
                        ANOTAR
                    </button>
                    <div {...getRootProps()}>
                        ADICIONE UMA IMAGEM
                        <input key={key} id="objectivesImages" accept=".png" type="file" {...getInputProps()}/>
                    </div>
                </div>
            </div>
            {children}
        </Page>
    )
}