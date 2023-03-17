import { ChangeEvent, HtmlHTMLAttributes, ReactNode, useContext, useState } from "react"
import { Page } from "../Page"
import styles from "./characterPage.module.css"
import avatarPlaceHolder from "./../../../../../../img/silhuetaSenhorVerissimo.webp"
import pin from "./../../../../../../img/pin.png"
import tape from "./../../../../../../img/tape.png"
import { X } from "phosphor-react"
import { CharactersContext } from "../../../../../../contexts/CaractersContexts/CharactersContext"
import line from "./../../../../../../img/line.png"
import { useDropzone } from "react-dropzone"

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
                    Solte uma imagem ou clique
                    <input key={key} id="avatar" accept=".png" type="file" style={{ display: "none" }} {...getInputProps()}/>
                </div>
                
                }
                <div className={styles.characterPersonality}>
                    <h4>PERSONALIDADE</h4>
                    <input type="text" />
                    <div>
                        <span>Gayzão <button><X size={16}/></button></span>
                    </div>
                    <img className={`${styles.tape} ${styles.tapeOne}`} src={tape}/>
                    <img className={`${styles.tape} ${styles.tapeTwo}`} src={tape}/>
                </div>
            </div>
            <div className={styles.containerHistory}>
                <div className={styles.history}>
                    <h4>HISTÓRIA<img src={line}/></h4>
                    <textarea rows={15}/>
                    <img className={`${styles.tape} ${styles.tapeOne}`} src={tape}/>
                    <img className={`${styles.tape} ${styles.tapeTwo}`} src={tape}/>
                </div>
            </div>
            {children}
        </Page>
    )
}