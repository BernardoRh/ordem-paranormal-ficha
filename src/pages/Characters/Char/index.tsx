import { NavLink, Outlet } from "react-router-dom"
import styles from "./char.module.css"
import RitualsSimbol from "../../../img/RitualsSimbol.webp"
import CharacterSheetIcon from "../../../img/CharacterSheetIcon.webp"
import Knowledge from "../../../img/KnowledgeSimbol.webp"
import { RollsComponents } from "./CharacterInfo/components/Rolls"

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
            <RollsComponents/>
        </>
    )
}