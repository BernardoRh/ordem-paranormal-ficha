import { X } from "phosphor-react";
import { useState } from "react"
import styles from "./rolldice.module.css"

export interface Rolls {
    id: string,
    diceType: "4" | "6" | "10" | "12" | "20" | "100" ,
    quantity: string,
    name?: string,
    bonus?: string,
    critical?: string,
    isDamage: boolean
    damageType?: "knowledge" | "energy" | "death" | "blood" | "fear" | "bludgeoning" | "slash" | "piercing" | "ballistic",
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