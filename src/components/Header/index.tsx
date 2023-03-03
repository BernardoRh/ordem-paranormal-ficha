import { NavLink } from 'react-router-dom'
import styles from './header.module.css'
import OrdoRealitasIcon from "../../img/OrdoRealitasIcon.png"

export function Header() {
    return(
        <header className={styles.header}>
            <nav>
                <NavLink to="/">
                    <img src={OrdoRealitasIcon} alt="Ordo Realitas Icone" />
                    <h4>INÍCIO</h4>
                </NavLink>
            </nav>
        </header>
    )
}