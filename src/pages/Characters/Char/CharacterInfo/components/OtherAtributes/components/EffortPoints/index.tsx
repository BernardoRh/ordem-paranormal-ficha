import { ChangeEvent, useState } from "react"
import { BarContainer } from "../BarContainer";
import styles from "./effortPoints.module.css"

export function EffortPoints() {
    const [pe, setPe] = useState("");
    const [maxPe, setMaxPe] = useState("100");

    function changeActualPe(event: ChangeEvent<HTMLInputElement>) {
        setPe(event.target.value)
    }

    function changeActualMaxPe(event: ChangeEvent<HTMLInputElement>) {
        setMaxPe(event.target.value)
    }

    return(
        <BarContainer className={styles.peContainer}>
            <div>
                <span style={{width: (Number(pe)*100) / Number(maxPe) + "%"}}>
                    <h4>PE</h4>
                </span>
            </div>
            <input className={styles.alignRight} onChange={changeActualPe} value={pe} type="number" placeholder="0"/>
            |
            <input className={styles.alignLeft} onChange={changeActualMaxPe} value={maxPe} type="number" placeholder="0"/>
        </BarContainer>
    )
}