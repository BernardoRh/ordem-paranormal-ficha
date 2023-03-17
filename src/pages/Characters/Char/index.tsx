import { NavLink, Outlet } from "react-router-dom"
import { LastsRolls } from "../../../components/LastRolls"
import { RollDice } from "../../../components/Rolldice"
import styles from "./char.module.css"
import RitualsSimbol from "../../../img/RitualsSimbol.webp"
import CharacterSheetIcon from "../../../img/CharacterSheetIcon.webp"
import Knowledge from "../../../img/KnowledgeSimbol.webp"
import { ChangeEvent, useContext } from "react"
import { CharactersContext } from "../../../contexts/CaractersContexts/CharactersContext"

export function Char() {
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