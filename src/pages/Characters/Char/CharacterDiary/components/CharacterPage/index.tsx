import { ChangeEvent, HtmlHTMLAttributes, ReactNode, useContext, useState } from "react"
import { CharactersContext } from "../../../../../../contexts/CharactersContexts/CharactersContext"
import { useDropzone } from "react-dropzone"

import { Page } from "../Page"
import { X } from "phosphor-react"

import styles from "./characterPage.module.css"

import line from "./../../../../../../img/line.png"
import avatarPlaceHolder from "./../../../../../../img/silhuetaSenhorVerissimo.webp"
import pin from "./../../../../../../img/pin.png"
import tape from "./../../../../../../img/tape.png"
import { Tape } from "../Tape"

interface CharacterPageProps extends HtmlHTMLAttributes<HTMLDivElement>{
    children?: ReactNode,
}

export function CharacterPage({children, ...props}: CharacterPageProps) {

    const { changeCharacterName, changeCharacterAge, changeAvatar, characterToDisplayId, characters } = useContext(CharactersContext)

    const characterToDisplay = characters.find((character) => {
        if(character.id == characterToDisplayId){
            return character
        }
    })

    const {getRootProps, getInputProps} = useDropzone({
        accept: {
            "image/png": ['.png']
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

    function handleChangeCharacterName(event: ChangeEvent<HTMLTextAreaElement>){
        const name = event.target.value
        if(characterToDisplayId != null){
            changeCharacterName(characterToDisplayId, name)
        }
    }

    function handleChangeCharacterAge(event: ChangeEvent<HTMLInputElement>){
        const age = event.target.value
        if(characterToDisplayId != null){
            changeCharacterAge(characterToDisplayId, age)
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
                    <input type="number" value={characterToDisplay?.age} onChange={handleChangeCharacterAge}/>
                    <img src={line}/>
                </span>
                {
                characterToDisplay?.avatar ?
                <div className={styles.characterPolaroid}>
                    <button className={styles.pinButton} onClick={handleRemoveAvatar}>
                        <img className={styles.pin} src={pin}/>
                    </button>
                    <img src={`${characterToDisplay?.avatar}`}/>
                    <textarea
                        maxLength={40}
                        rows={2}
                        placeholder="Nome"
                        onChange={handleChangeCharacterName}
                        value={characterToDisplay?.name}
                    />
                </div>
                :
                <div {...getRootProps({className: styles.avatarInput})}>
                    <img src={avatarPlaceHolder} />
                    SOLTE UMA IMAGEM OU CLIQUE
                    <input key={key} id="avatar" accept=".png" type="file" style={{ display: "none" }} {...getInputProps()}/>
                </div>
                
                }
                <div className={styles.characterPersonality}>
                    <h4>PERSONALIDADE</h4>
                    <input type="text" />
                    <div className={styles.personalityContent}>
                        <span>Gayzão <button><X size={16}/></button></span>
                    </div>
                    <Tape rotation="-45deg" className={`${styles.tape} ${styles.tapeOne}`}/>
                    <Tape rotation="-45deg" className={`${styles.tape} ${styles.tapeTwo}`}/>
                </div>
            </div>
            <div className={styles.containerHistory}>
                <div className={styles.history}>
                    <h4>HISTÓRIA<img src={line}/></h4>
                    <textarea rows={15}/>
                    <Tape rotation="45deg" className={`${styles.tape} ${styles.tapeOne}`}/>
                    <Tape rotation="45deg" className={`${styles.tape} ${styles.tapeTwo}`}/>
                </div>
            </div>
            {children}
        </Page>
    )
}