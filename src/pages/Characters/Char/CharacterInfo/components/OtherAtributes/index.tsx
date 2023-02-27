import { ChangeEvent, useState } from "react"
import { Class } from "./components/Class";
import { Defenses } from "./components/Defences";
import { EffortPoints } from "./components/EffortPoints";
import { Life } from "./components/Life";
import { Movement } from "./components/Movement";
import { Origin } from "./components/Origin";
import { ParanormalExposition } from "./components/ParanormalExpositon";
import { ResistancesAndProtections } from "./components/ResistancesAndProtections";
import { Sanity } from "./components/Sanity";
import styles from "./otherAtributes.module.css"

export function OtherAtributes() {
    const [life, setLife] = useState("");
    const [maxLife, setMaxLife] = useState("100");

    function changeActualLife(event: ChangeEvent<HTMLInputElement>) {
        setLife(event.target.value)
    }

    return(
        <div className={styles.otherAtributesContainer}>
            <Origin />
            <Class/>
            <ParanormalExposition />
            <Movement />
            <Life />
            <EffortPoints />
            <Sanity />
            <Defenses />
            <ResistancesAndProtections>Proteções: </ResistancesAndProtections>
            <ResistancesAndProtections>Resistências: </ResistancesAndProtections>
        </div>
    )
}