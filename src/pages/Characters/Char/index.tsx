import { NavLink, Outlet } from "react-router-dom"
import { LastsRolls } from "../../../components/LastRolls"
import { RollDice } from "../../../components/Rolldice"
import styles from "./char.module.css"
import RitualsSimbol from "../../../img/RitualsSimbol.webp"
import CharacterSheetIcon from "../../../img/CharacterSheetIcon.webp"
import Knowledge from "../../../img/KnowledgeSimbol.webp"
import { ChangeEvent, useContext } from "react"
import { CharactersContext } from "../../../contexts/CharactersContext"

export function Char() {

    const { changeCharacterName, changeCharacterAge, characterToDisplayId, characters } = useContext(CharactersContext)

    const characterToDisplay = characters.find((character) => {
        if(character.id == characterToDisplayId){
            return character
        }
    })

    function handleChangeCharacterName(event: ChangeEvent<HTMLInputElement>){
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
        <>
            <nav className={styles.characterNavHeader}>
                <NavLink to="/Char">
                    <img src={CharacterSheetIcon} />
                    <h4>PERSONAGEM</h4>
                </NavLink>
                <NavLink to="/Char/Rituals">
                    <img src={RitualsSimbol} />
                    <h4>RITUAIS</h4>
                </NavLink>
                <NavLink to="/Char/Diary">
                    <img src={Knowledge} />
                    <h4>DIÁRIO</h4>
                </NavLink>
            </nav>
            <div className={styles.characterInfo}>
                <span>
                    NOME:<input 
                        type="text"
                        onChange={handleChangeCharacterName}
                        value={characterToDisplay?.name}
                    />
                </span>
                <span>
                    IDADE:<input
                        type="number"
                        value={characterToDisplay?.age}
                        onChange={handleChangeCharacterAge}
                    />
                </span>
            </div>
            <Outlet />
            {/* LEMBRAR DE REMOVER DIV COM DISPLAY: NONE */}
            <div style={{display: "none"}}>
                <RollDice rolls={[]}/>
            </div>
            {/* LEMBRAR DE REMOVER DIV COM DISPLAY: NONE */}
            <LastsRolls />
        </>
    )
}