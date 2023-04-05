import { ChangeEvent, HtmlHTMLAttributes, ReactNode, useContext, useState } from "react"
import { CharactersContext } from "../../../../../../contexts/CharactersContexts/CharactersContext"
import { useDropzone } from "react-dropzone"

import { Page } from "../Page"
import { X } from "phosphor-react"

import styles from "./characterPage.module.css"

import line from "./../../../../../../img/line.png"
import avatarPlaceHolder from "./../../../../../../img/silhuetaSenhorVerissimo.webp"
import pin from "./../../../../../../img/pin.png"
import { Tape } from "../Tape"
import { Personality } from "../../../../../../reducers/CharactersReducer/charactersSheet"
interface CharacterPageProps extends HtmlHTMLAttributes<HTMLDivElement>{
    children?: ReactNode,
    characterName?: string,
    characterAge?: string,
    characterHistory?: string,
    characterPersonality?: Personality[]
    characterAvatar?: unknown,
}

export function CharacterPage({children, characterName, characterAge, characterHistory, characterAvatar, characterPersonality, ...props}: CharacterPageProps) {

    const { changeCharacterName, changeCharacterAge, changeAvatar, changeDiary, characterToDisplayId } = useContext(CharactersContext)

    const [name, setName] = useState(characterName ? characterName : "")
    const [age, setAge] = useState(characterAge ? characterAge : "")
    const [history, setHistory] = useState(characterHistory ? characterHistory : "" )
    const [newPersonality, setNewPersonality] = useState("")

    function ChangeCharacterName(event: ChangeEvent<HTMLTextAreaElement>){
        setName(event.target.value)
    }
    function ChangeCharacterAge(event: ChangeEvent<HTMLInputElement>){
        setAge(event.target.value)
    }
    function ChangeCharacterHistory(event: ChangeEvent<HTMLTextAreaElement>) {
        setHistory(event.target.value)
    }
    function handleChangePersonality(event: ChangeEvent<HTMLInputElement>) {
        setNewPersonality(event.target.value)
    }

    const {getRootProps, getInputProps} = useDropzone({
        accept: {
            "image/png": ['.png', '.jpeg', '.webp']
        },
        onDrop: acceptFiles => {
            if(characterToDisplayId != null){
                changeAvatar(characterToDisplayId, "changeAvatar", acceptFiles[0])
            }
        }
    })

    function handleRemoveAvatar() {
        restKey()
        if(characterToDisplayId != null) {
            changeAvatar(characterToDisplayId, "deleteAvatar")
        }
    }

    function handleChangeCharacterName(){
        if(characterToDisplayId != null){
            changeCharacterName(characterToDisplayId, name)
        }
    }

    function handleChangeCharacterAge(){
        if(characterToDisplayId != null){
            changeCharacterAge(characterToDisplayId, age)
        }
    }

    function handleChangeCharacterHistory() {
        if(characterToDisplayId != null){
            changeDiary(characterToDisplayId, "", "", "", "", "history", "history", history)
        }
    }

    function handleDeleteCharacterPersonality(id: string) {
        if(characterToDisplayId != null){
            changeDiary(characterToDisplayId, id, "", "", "", "deletePersonality", "personality", "")
        }
    }

    function handleAddPersonality(event: { key: string }) {
        if(event.key === 'Enter'){
            if(characterToDisplayId != null) {
                changeDiary(characterToDisplayId, "", "", "", "", "addPersonality", "personality", newPersonality)
                setNewPersonality("")
            }
        }
    }

    const [key, setKey] = useState(String(new Date()) + String(Math.random()))
    function restKey() {
        setKey(String(new Date()) + String(Math.random()))
    }

    return(
        <Page {...props}>
            <div className={`${styles.characterInfo}`}>
                <span className={styles.age}>
                    <h4>IDADE:</h4>
                    <input type="number"
                        value={age}
                        onChange={ChangeCharacterAge}
                        onBlur={handleChangeCharacterAge}
                    />
                    <img src={line}/>
                </span>
                {
                characterAvatar ?
                <div className={styles.characterPolaroid}>
                    <button className={styles.pinButton} onClick={handleRemoveAvatar}>
                        <img className={styles.pin} src={pin}/>
                    </button>
                    <img src={`${characterAvatar}`}/>
                    <textarea
                        maxLength={40}
                        rows={2}
                        placeholder="Nome"
                        onChange={ChangeCharacterName}
                        onBlur={handleChangeCharacterName}
                        value={name}
                    />
                </div>
                :
                <div {...getRootProps({className: styles.avatarInput})}>
                    <img src={avatarPlaceHolder} />
                    SOLTE UMA IMAGEM OU CLIQUE
                    <input key={key} id="avatar" accept=".png, .jpeg, .webp" type="file" style={{ display: "none" }} {...getInputProps()}/>
                </div>
                
                }
                <div className={styles.characterPersonality}>
                    <h4>PERSONALIDADE</h4>
                    <input type="text"
                        value={newPersonality}
                        onChange={handleChangePersonality}
                        onKeyDown={handleAddPersonality}
                    />
                    <div className={styles.personalityContent}>
                        {characterPersonality?.map((personality) => {
                            return(
                                <span key={personality.id}>
                                    {personality.personality}
                                    <button onClick={() => {handleDeleteCharacterPersonality(personality.id)}}>
                                        <X size={18} weight="fill"/>
                                    </button>
                                </span>
                            )
                        })}
                    </div>
                    <Tape rotation="-45deg" className={`${styles.tape} ${styles.tapeOne}`}/>
                    <Tape rotation="-45deg" className={`${styles.tape} ${styles.tapeTwo}`}/>
                </div>
            </div>
            <div className={styles.containerHistory}>
                <div className={styles.history}>
                    <h4>HISTÓRIA<img src={line}/></h4>
                    <textarea
                        rows={15}
                        value={history}
                        onChange={ChangeCharacterHistory}
                        onBlur={handleChangeCharacterHistory}
                    />
                    <Tape rotation="45deg" className={`${styles.tape} ${styles.tapeOne}`}/>
                    <Tape rotation="45deg" className={`${styles.tape} ${styles.tapeTwo}`}/>
                </div>
            </div>
            {children}
        </Page>
    )
}