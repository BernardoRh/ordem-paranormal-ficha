import { CharactersSheet } from "../../../../../../reducers/CharactersReducer/charactersSheet";
import { Class } from "./components/Class";
import { Defenses } from "./components/Defences";
import { EffortPoints } from "./components/EffortPoints";
import { Life } from "./components/Life";
import { Movement } from "./components/Movement";
import { Origin } from "./components/Origin";
import { ParanormalExposition } from "./components/ParanormalExpositon";
import { ResistancesAndProtections } from "./components/ResistancesAndProtections";
import { Sanity } from "./components/Sanity";
import styles from "./otherAttributes.module.css"


interface OtherAttributesProps {
    character?: CharactersSheet
}

export function OtherAttributes({character}: OtherAttributesProps) {

    return(
        <div className={styles.otherAtributesContainer}>
            <Origin characterOrigin={character?.origin}/>
            <Class characterClass={character?.class}/>
            <ParanormalExposition nex={character?.nex} pePerRound={character?.pePerRound}/>
            <Movement movement={character?.movementInMeters}/>
            <Life health={character?.health}/>
            <EffortPoints effortPoint={character?.pePoints} />
            <Sanity sanity={character?.sanity}/>
            <Defenses defense={character?.defense} dodge={character?.dodge} block={character?.blockReductionDamage}/>
            <ResistancesAndProtections resistanceOrProtection={character?.protections} children="protection"/>
            <ResistancesAndProtections resistanceOrProtection={character?.resistances} children="resistances"/>
        </div>
    )
}