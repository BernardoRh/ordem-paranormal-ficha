import { Expertise } from "./components/ExpertiseComponent";

export function AllExpertises() {
    return(
        <>
            <Expertise baseAtribute="AGI" weightPenalty>
                Acrobacia
            </Expertise>
            <Expertise baseAtribute="PRE" onlyWithExpertise>
                Adestramento
            </Expertise>
            <Expertise baseAtribute="PRE" onlyWithExpertise>
                Artes
            </Expertise>
            <Expertise baseAtribute="FOR">
                Atletismo
            </Expertise>
            <Expertise baseAtribute="INT">
                Atualidades
            </Expertise>
            <Expertise baseAtribute="INT" onlyWithExpertise>
                Ciências
            </Expertise>
            <Expertise baseAtribute="AGI" weightPenalty onlyWithExpertise>
                Crime
            </Expertise>
            <Expertise baseAtribute="PRE">
                Diplomacia
            </Expertise>
            <Expertise baseAtribute="PRE">
                Eganação
            </Expertise>
            <Expertise baseAtribute="VIG">
                Fortitude
            </Expertise>
            <Expertise baseAtribute="AGI" weightPenalty>
                Furtividade
            </Expertise>
            <Expertise baseAtribute="AGI">
                Iniciativa
            </Expertise>
            <Expertise baseAtribute="PRE">
                Intimidação
            </Expertise>
            <Expertise baseAtribute="PRE">
                Intuição
            </Expertise>
            <Expertise baseAtribute="INT">
                Investigação
            </Expertise>
            <Expertise baseAtribute="FOR">
                Luta
            </Expertise>
            <Expertise baseAtribute="INT">
                Medicina
            </Expertise>
            <Expertise baseAtribute="INT" onlyWithExpertise>
                Ocultismo
            </Expertise>
            <Expertise baseAtribute="PRE">
                Percepção
            </Expertise>
            <Expertise baseAtribute="AGI" onlyWithExpertise>
                Pilotagem
            </Expertise>
            <Expertise baseAtribute="AGI" onlyWithExpertise>
                Pontaria
            </Expertise>
            <Expertise baseAtribute="INT" special>
                Profissão
            </Expertise>
            <Expertise baseAtribute="AGI">
                Reflexos
            </Expertise>
            <Expertise baseAtribute="PRE" onlyWithExpertise>
                Religião
            </Expertise>
            <Expertise baseAtribute="INT">
                Sobrevivência
            </Expertise>
            <Expertise baseAtribute="INT" onlyWithExpertise>
                Tática
            </Expertise>
            <Expertise baseAtribute="INT" onlyWithExpertise>
                Tecnologia
            </Expertise>
            <Expertise baseAtribute="PRE">
                Vontade
            </Expertise>
        </>
    )
}