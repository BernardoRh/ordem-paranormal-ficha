import { ChangeEvent, HtmlHTMLAttributes, ReactNode, useContext, useState } from "react"
import { CharactersContext } from "../../../../../../contexts/CharactersContexts/CharactersContext"
import { useDropzone } from "react-dropzone"

import { Page } from "../Page"
import { Note } from "../Note"

import { Pages } from "../../../../../../reducers/CharactersReducer/charactersSheet"

import styles from './characterNotes.module.css'

import line from "./../../../../../../img/line.png"

interface CharacterPageProps extends HtmlHTMLAttributes<HTMLDivElement>{
    children?: ReactNode,
    page: Pages
}

export function CharacterNotes({children, page,...props}: CharacterPageProps) {

    const { characterToDisplayId, changeDiary } = useContext(CharactersContext)

    const [title, setTitle] = useState(page.title)
    function changeTitle(event: ChangeEvent<HTMLInputElement>){
        setTitle(event.target.value)
    }

    const {getRootProps, getInputProps} = useDropzone({
        accept: {
            "image/png": ['.png', '.jpeg', '.webp']
        },
        onDrop: acceptFiles => {
            const newObjective = new Promise((resolve, reject) => {
                const fileReader = new FileReader();
                fileReader.onload = () => resolve(fileReader.result);
                fileReader.readAsDataURL(acceptFiles[0]);
            });
            if(characterToDisplayId != null){
                newObjective.then(base64 => changeDiary(characterToDisplayId, "", "", page.id, "", "addNoteImage", "pages", base64))
            }
            restKey()
        }
    })

    function handleAddNote() {
        if(characterToDisplayId != null){
            changeDiary(characterToDisplayId, "", "", page.id, "", "addNote", "pages", "")
        }
    }

    function handleChangeTitle(){
        if(characterToDisplayId != null){
            changeDiary(characterToDisplayId, "", "", page.id, "", "pageTitle", "pages", title)
        }
    }

    const [key, setKey] = useState(String(new Date()) + String(Math.random()))
    function restKey() {
        setKey(String(new Date()) + String(Math.random()))
    }

    return(
        <Page {...props}>
            <div className={`${styles.notesContainer}`}>
                <span className={styles.notesTitle}>
                    <input type="text" value={title} onChange={changeTitle} onBlur={handleChangeTitle}/>
                    <img src={line}/>
                </span>
                {page?.notes.map((note) => {
                    return (
                        <Note note={note} pageId={page.id} isAnObjective={false}/>
                    )
                })}
                <div className={styles.inputOptions}>
                    <button onClick={handleAddNote}>
                        ANOTAR
                    </button>
                    <div {...getRootProps()}>
                        ADICIONE UMA IMAGEM
                        <input key={key} id="objectivesImages" accept=".png, .jpeg, .webp" type="file" {...getInputProps()}/>
                    </div>
                </div>
            </div>
            {children}
        </Page>
    )
}