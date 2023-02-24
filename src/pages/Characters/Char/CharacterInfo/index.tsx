import { Barbell, Sparkle, StarFour } from "phosphor-react";
import { Attacks } from "./components/Atacks";
import { BaseAtributes } from "./components/BaseAtributes";
import { AllExpertises } from "./components/Expertise";
import { Inventory } from "./components/Inventory";
import { OtherAtributes } from "./components/OtherAtributes";
import { Skills } from "./components/Skills";

import styles from "./characterInfor.module.css"

export function CharacterInfo() {
    return(
        <div className={styles.content}>
            <div className={styles.containerCharacterAtributes}>
                <BaseAtributes/>
                <OtherAtributes/>
            </div>
            <div className={styles.expertiseTable}>
            <div>
                <span>PERÍCIA</span>
                <span>DADOS</span>
                <span>BÔNUS</span>
                <span>TREINO</span>
                <span>OUTROS</span>
            </div>
            <AllExpertises/>
            <div className={styles.expertiseTableFooter}>
                <p><Barbell size={18}/> Penalidade de Carga</p>
                <p><StarFour size={18}/> Apenas Treinado</p>
                <p><Sparkle size={18} weight="fill"/> Especial</p>
            </div>
            </div>
            <Attacks/>
            <Skills/>
            <Inventory/>
        </div>
    )
}