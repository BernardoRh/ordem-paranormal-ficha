import { ChangeEvent, useState } from "react"
import { BarContainer } from "../BarContainer";
import styles from "./life.module.css"

export function Life() {
    const [life, setLife] = useState("");
    const [maxLife, setMaxLife] = useState("100");

    function changeActualLife(event: ChangeEvent<HTMLInputElement>) {
        setLife(event.target.value)
    }

    function changeActualMaxLife(event: ChangeEvent<HTMLInputElement>) {
        setMaxLife(event.target.value)
    }

    return(
        <BarContainer className={styles.lifeContainer}>
            <div>
                <span style={{width: (Number(life)*100) / Number(maxLife) + "%"}}>
                    <h4>PE</h4>
                </span>
            </div>
            <input className={styles.alignRight} onChange={changeActualLife} value={life} type="number" placeholder="0"/>
            |
            <input className={styles.alignLeft} onChange={changeActualMaxLife} value={maxLife} type="number" placeholder="0"/>
        </BarContainer>
    )
}