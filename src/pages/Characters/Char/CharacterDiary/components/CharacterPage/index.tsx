import { ChangeEvent, HtmlHTMLAttributes, ReactNode, useContext } from "react"
import { Page } from "../Page"
import styles from "./characterPage.module.css"
import avatarPlaceHolder from "./../../../../../../img/silhuetaSenhorVerissimo.webp"
import pin from "./../../../../../../img/pin.png"
import tape from "./../../../../../../img/tape.png"
import { X } from "phosphor-react"
import { CharactersContext } from "../../../../../../contexts/CaractersContexts/CharactersContext"
import line from "./../../../../../../img/line.png"

interface CharacterPageProps extends HtmlHTMLAttributes<HTMLDivElement>{
    children?: ReactNode,
}

export function CharacterPage({children, ...props}: CharacterPageProps) {

    const { changeCharacterName, changeCharacterAge, characterToDisplayId, characters } = useContext(CharactersContext)

    const characterToDisplay = characters.find((character) => {
        if(character.id == characterToDisplayId){
            return character
        }
    })

    

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

    return(
        <Page {...props}>
            <div className={`${styles.characterInfo}`}>
                <span className={styles.age}>
                    <h4>IDADE:</h4>
                    <input type="number" value={characterToDisplay?.age} onChange={handleChangeCharacterAge}/>
                    <img src={line}/>
                </span>
                <div className={styles.characterPolaroid}>
                    <button className={styles.pinButton}>
                        <img className={styles.pin} src={pin}/>
                    </button>
                    <img src="https://i.pinimg.com/originals/8f/8e/bf/8f8ebf44a8855679dda64ebee085a563.png"/>
                    <textarea
                        maxLength={40}
                        rows={2}
                        placeholder="Nome"
                        onChange={handleChangeCharacterName}
                        value={characterToDisplay?.name}
                    />
                </div>
                <div className={styles.characterPersonality}>
                    <h4>PERSONALIDADE</h4>
                    <input type="text" />
                    <div>
                        <span>Gayzão <button><X size={16}/></button></span>
                    </div>
                    <img className={`${styles.tape} ${styles.tapeOne}`} src={tape}/>
                    <img className={`${styles.tape} ${styles.tapeTwo}`} src={tape}/>
                </div>
                <label htmlFor="avatar" style={{display: "none"}}>
                    <img src={avatarPlaceHolder}/>
                    Solte uma imagem ou clique
                </label>
                <input id="avatar" type="file" style={{display: "none"}}/>
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