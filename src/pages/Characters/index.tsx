import { Pencil, Plus } from "phosphor-react"
import { MouseEvent } from "react"
import { NavLink } from "react-router-dom"
import styles from "./characters.module.css"

export function Characters() {

    function ChangeImage(event: MouseEvent<HTMLButtonElement>) {

    }

    return(
        <div className={styles.charactersContainer}>
            <nav>
                <div>
                    <button onClick={ChangeImage}>
                        <Pencil size={32}/>
                    </button>
                    <NavLink to="/Char">
                    </NavLink>
                </div>
                <button><Plus size={64}/></button>
            </nav>
        </div>
    )
}