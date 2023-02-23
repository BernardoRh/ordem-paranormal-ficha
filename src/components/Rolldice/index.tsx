import { X } from "phosphor-react";
import { useState } from "react"
import styles from "./rolldice.module.css"

interface Rolls {
    name: string,
    diceType: "d4" | "d6" | "d10" | "d12" | "d20" | "d100",
    quantity: number,
    bonus?: number,
    critical?: number,
    damageType?: "Conhecimento" | "Energia" | "Morte" | "Sangue" | "Medo",
}

export interface RollDiceProps {
    rolls: Rolls[]
}

export function RollDice({rolls}: RollDiceProps) {
    const [closeRoll, setCloseRoll] = useState(false);
    const [visible, setVisible] = useState("flex");

    function changeVisibility() {
        setVisible("none");
    }

    return(
        <div style={{display: visible}} className={styles.rollDiceContainer}>
            <div className={styles.rollDiceBox}>
                <div className={styles.rollDiceBoxContent}>
                    <div className={styles.rollDiceBoxHeader}>
                        <button onClick={changeVisibility}>
                            <X size={32} weight="fill"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}