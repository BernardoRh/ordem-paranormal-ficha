import { X } from "phosphor-react";
import { useContext, useState } from "react"
import { RollRow } from "./components/RollRow";
import styles from "./rolldice.module.css"
import { rollsForLastRollsResults } from "../LastRolls";
import { CharactersContext } from "../../../../../../../../contexts/CharactersContexts/CharactersContext";

export interface Rolls {
    id: string,
    diceType: "4" | "6" | "10" | "12" | "20" | "100",
    quantity: string,
    bonus?: string,
    critical?: string,
    isDamage: boolean,
    dicesOrTotal?: "dice" | "total",
    multiplier?: "2" | "3" | "4",
    damageType?: "knowledge" | "energy" | "death" | "blood" | "fear" | "bludgeoning" | "slash" | "piercing" | "ballistic" | "fire" |
    "cold" | "chemical" | "mental"
}

export interface RollDiceProps {
    wrapperId?: string;
    rolls?: Rolls[]
    showRoll?: boolean;
    name?: string;
    rollsToUse?: rollsForLastRollsResults[];
    critical?: string,
    dicesOrTotal?: "dice" | "total",
    multiplier?: "2" | "3" | "4",
}

export function RollDice({ wrapperId, showRoll, name, rollsToUse }: RollDiceProps) {

    const {characterToDisplayId, rollingDices } = useContext(CharactersContext)

    const [visible, setVisible] = useState(showRoll ? "flex" : "none");
    function changeVisibility() {
        setVisible("none");
        rollingDices(characterToDisplayId as string, {
            name: "",
            rolls: [],
            showRoll: false,
            wrapperId: String(new Date()) + String(Math.random()),
        })
    }

    const [testResultIsCritical, setTestResultIsCritical] = useState(false)
    function changeTestResult(result: boolean){
        setTestResultIsCritical(result)
    }

    return(
        <div style={{display: visible}} className={styles.rollDiceContainer}>
            <div className={styles.rollDiceBox}>
                <div className={styles.rollDiceBoxContent}>
                    <div className={styles.rollDiceBoxHeader}>
                        <h4>{name}</h4>
                        <button onClick={() => {
                            changeVisibility();
                        }}>
                            <X size={32} weight="fill"/>
                        </button>
                    </div>
                    <div className={styles.rolls}>
                        {showRoll ? rollsToUse?.map((roll) => {
                            return(
                                <RollRow
                                    key={roll.id}
                                    roll={roll}
                                    rollsWrappId={wrapperId}
                                    IsCritical={testResultIsCritical}
                                    changeTestResult={changeTestResult}
                                />
                            )
                        }): ""}
                    </div>
                </div>
            </div>
        </div>
    )
}