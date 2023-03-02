import { ChangeEvent, useState } from "react"
import { BarContainer } from "../BarContainer";
import styles from "./sanity.module.css"

export function Sanity() {
    const [sanity, setSanity] = useState("");
    const [maxSanity, setMaxSanity] = useState("100");

    function changeActualSanity(event: ChangeEvent<HTMLInputElement>) {
        setSanity(event.target.value)
    }

    function changeActualMaxSanity(event: ChangeEvent<HTMLInputElement>) {
        setMaxSanity(event.target.value)
    }

    return(
            <BarContainer className={styles.sanityContainer}>
                <div>
                    <span style={{width: (Number(sanity)*100) / Number(maxSanity) + "%"}}>
                        <h4>SAN</h4>
                    </span>
                </div>
                <input className={styles.alignRight} onChange={changeActualSanity} value={sanity} type="number" placeholder="0"/>
                |
                <input className={styles.alignLeft} onChange={changeActualMaxSanity} value={maxSanity} type="number" placeholder="0"/>
            </BarContainer>
    )
}