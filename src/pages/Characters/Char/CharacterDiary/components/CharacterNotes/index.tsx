import { ChangeEvent, HtmlHTMLAttributes, ReactNode, useContext, useState } from "react"
import { CharactersContext } from "../../../../../../contexts/CharactersContexts/CharactersContext"
import { useDropzone } from "react-dropzone"

import { Page } from "../Page"
import { Tape } from "../Tape"

import { Pages } from "../../../../../../reducers/CharactersReducer/charactersSheet"

import styles from './characterNotes.module.css'

import line from "./../../../../../../img/line.png"
import { X } from "phosphor-react"
import { Note } from "../Note"
interface CharacterPageProps extends HtmlHTMLAttributes<HTMLDivElement>{
    children?: ReactNode,
    page?: Pages
}

export function CharacterNotes({children, page,...props}: CharacterPageProps) {

    const { characterToDisplayId, changeDiary } = useContext(CharactersContext)


    const {getRootProps, getInputProps} = useDropzone({
        accept: {
            "image/png": ['.png']
        },
        onDrop: acceptFiles => {
            
        }
    })

    const [key, setKey] = useState(String(new Date()) + String(Math.random()))
    function restKey() {
        setKey(String(new Date()) + String(Math.random()))
    }

    return(
        <Page {...props}>
            <div className={`${styles.notesContainer}`}>
                <span className={styles.notesTitle}>
                    <input type="text" />
                    <img src={line}/>
                </span>
                {page?.notes.map((note) => {
                    return (
                        <Note note={note} pageId={page.id} isAnObjective={false}/>
                    )
                })}
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