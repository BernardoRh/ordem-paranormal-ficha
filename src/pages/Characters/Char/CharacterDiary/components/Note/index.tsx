import { ChangeEvent, useContext, useState } from "react"
import { Objectives } from "../../../../../../reducers/CharactersReducer/charactersSheet"

import styles from "./note.module.css"

import line from "./../../../../../../img/line.png"
import { TapeButton } from "../TapeButton"
import { Tape } from "../Tape"
import { CharactersContext } from "../../../../../../contexts/CharactersContexts/CharactersContext"
import { X } from "phosphor-react"

interface NoteProps {
    note: Objectives
    pageId: string
    isAnObjective: boolean
}

export function Note({note, pageId, isAnObjective}: NoteProps) {

    const { characterToDisplayId, changeDiary } = useContext(CharactersContext)


    const [title, setTitle] = useState(note.title)
    const [info, setInfo] = useState(note.info)
    function changeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value)
    }
    function changeInfo(event: ChangeEvent<HTMLTextAreaElement>) {
        setInfo(event.target.value)
    }

    function handleDeleteNote() {
        if(characterToDisplayId != null){
            if(isAnObjective) {
                changeDiary(characterToDisplayId, "", note.id, "", "", "deleteObjective", "objectives", "")
            } else {
                changeDiary(characterToDisplayId, "", "", pageId, note.id, "deleteNote", "pages", "")
            }
        }
    }
    
    function handleChangeTitleNote() {
        if(characterToDisplayId != null){
            if(isAnObjective) {
                changeDiary(characterToDisplayId, "", note.id, "", "", "changeObjectiveTitle", "objectives", title)
            } else {
                changeDiary(characterToDisplayId, "", "", pageId, note.id, "changeNoteInfo", "pages", title)
            }
        }
    }

    function handleChangeInfoNote() {
        if(characterToDisplayId != null){
            if(isAnObjective) {
                changeDiary(characterToDisplayId, "", note.id, "", "", "changeObjectiveInfo", "objectives", info)
            } else {
                changeDiary(characterToDisplayId, "", "", pageId, note.id, "changeNoteInfo", "pages", info)
            }
        }
    }

    if(note.isImage){
        return(
            <div 
                className={`${styles.noteImage} ${styles.note}`}
                style={{rotate: `${note.rotation}deg`, marginRight: `${2 * Number(note.rotation)}rem`}}
            >
                <img src={note.image}/>
                {Number(note.rotation) < 0 ?
                    <>
                        <TapeButton rotation="-45deg" className={`${styles.tape} ${styles.tapeOneNegative}`} onClick={handleDeleteNote}/>
                        <Tape rotation="-45deg" className={`${styles.tape} ${styles.tapeTwoNegative}`}/>
                    </>
                :
                    <>
                        <TapeButton rotation="45deg" className={`${styles.tape} ${styles.tapeOnePositive}`} onClick={handleDeleteNote}/>
                        <Tape rotation="45deg" className={`${styles.tape} ${styles.tapeTwoPositive}`}/>
                    </>
                }
            </div>
        )
    } else {
        return(
            <div className={`${styles.noteText} ${styles.note}`} style={{rotate: `${note.rotation}deg`, marginRight: `${2 * Number(note.rotation)}rem`}}>
                <button onClick={handleDeleteNote}>
                    <X size={18} weight="fill"/>
                </button>
                <div className={`${styles.noteTextHeader}`}>
                    <input type="text" value={title} onChange={changeTitle} onBlur={handleChangeTitleNote}/>
                    <img src={line}/>
                </div>
                <textarea maxLength={280} value={info} onChange={changeInfo} onBlur={handleChangeInfoNote}/>
            </div>
        )
    }
}