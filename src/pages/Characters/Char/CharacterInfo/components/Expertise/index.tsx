import { Barbell, FirstAidKit, Sparkle, StarFour } from "phosphor-react";
import { ExpertiseRow } from "./components/ExpertiseRow";

import styles from "./allExpertises.module.css"
import { CharactersSheet } from "../../../../../../reducers/CharactersReducer/charactersSheet";

interface AllExpertisesProps {
    character?: CharactersSheet
}

export function AllExpertises({character}: AllExpertisesProps) {
    return(
        <div className={styles.expertiseTable}>
            <div>
                <span>PERÍCIA</span>
                <span>DADOS</span>
                <span>BÔNUS</span>
                <span>TREINO</span>
                <span>OUTROS</span>
            </div>
            <>
                {character?.expertise.map((expertise) => {
                    return(
                        <ExpertiseRow 
                            principalAttribute={expertise.principalAttribute}
                            key={expertise.name}
                            kit={expertise.kit}
                            special={expertise.special}
                            onlyWithExpertise={expertise.onlyWithExpertise}
                            weightPenalty={expertise.weightPenalty}
                            name={expertise.name}
                            trainedLevel={expertise.trainedLevel}
                            others={expertise.others}
                        />
                    )
                })}
            </>
            <div className={styles.expertiseTableFooter}>
                <p><Barbell size={18}/> Penalidade de Carga</p>
                <p><StarFour size={18}/> Apenas Treinado</p>
                <p><FirstAidKit size={18} weight="fill" />Precisa de Kit</p>
                <p><Sparkle size={18} weight="fill"/> Especial</p>
            </div>
        </div>
    )
}