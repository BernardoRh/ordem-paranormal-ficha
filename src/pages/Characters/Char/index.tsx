import { NavLink, Outlet } from "react-router-dom"
import { LastsRolls } from "../../../components/LastRolls"
import { RollDice } from "../../../components/Rolldice"
import styles from "./char.module.css"
import RitualsSimbol from "../../../img/RitualsSimbol.webp"
import CharacterSheetIcon from "../../../img/CharacterSheetIcon.webp"
import Knowledge from "../../../img/KnowledgeSimbol.webp"

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
            <div className={styles.characterInfo}>
                <span>
                    NOME:<input type="text"/>
                </span>
                <span>
                    IDADE:<input type="number"/>
                </span>
            </div>
            <Outlet />
            <RollDice rolls={[]} />
            <LastsRolls />
        </>
    )
}