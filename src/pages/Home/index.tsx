import { NavLink } from "react-router-dom"
import styles from "./home.module.css"
import SenhorVerissimo from "../../img/SenhorVerissimo.webp"
import ZumbiDeSangue from "../../img/ZumbiDeSangue.webp"

export function Home() {
    return(
        <div className={styles.homeContainer}>
            <nav>
                <NavLink to={"/Characters"}>
                    <img src={SenhorVerissimo} alt="Senhor Verissimo" />
                    <h4>PERSONAGENS</h4>
                </NavLink>
                <NavLink to={"/Monsters"}>
                    <img src={ZumbiDeSangue} alt="Senhor Verissimo" />
                    <h4>MONSTROS</h4>
                </NavLink>
            </nav>
        </div>
    )
}