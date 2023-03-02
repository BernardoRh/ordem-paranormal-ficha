import { ChangeEvent, useContext } from "react"
import { CharactersContext } from "../../../../../../../../contexts/CharactersContext";
import { BarContainer } from "../BarContainer";
import styles from "./life.module.css"

interface LifeProps {
    health?: {
        maxHealth: string,
        actualHealth: string
    }
}

export function Life({health}: LifeProps) {

    const {characterToDisplayId, changeCharacterHealth} = useContext(CharactersContext)

    function changeActualLife(event: ChangeEvent<HTMLInputElement>) {
        const newCurrentLife = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterHealth(characterToDisplayId, "current", newCurrentLife)
        }
    }

    function changeActualMaxLife(event: ChangeEvent<HTMLInputElement>) {
        const newMaxLife = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterHealth(characterToDisplayId, "max", newMaxLife)
        }
    }

    return(
        <BarContainer className={styles.lifeContainer}>
            <div>
                <span style={{width: (Number(health?.actualHealth)*100) / Number(health?.maxHealth) + "%"}}>
                    <h4>PV</h4>
                </span>
            </div>
            <input
                className={styles.alignRight}
                onChange={changeActualLife}
                value={health?.actualHealth}
                type="number"
                placeholder="0"
            />
            |
            <input
                className={styles.alignLeft}
                onChange={changeActualMaxLife}
                value={health?.maxHealth}
                type="number"
                placeholder="0"
            />
        </BarContainer>
    )
}