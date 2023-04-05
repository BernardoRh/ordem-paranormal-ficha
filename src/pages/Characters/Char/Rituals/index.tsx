import { ArrowFatLineDown, ArrowFatLineUp, CaretDown, CaretRight, CaretUp, Plus } from 'phosphor-react'
import { ChangeEvent, useContext, useState } from 'react'
import { CharactersContext } from '../../../../contexts/CharactersContexts/CharactersContext'
import { Ritual } from '../../../../reducers/CharactersReducer/charactersSheet'
import { RitualCard } from './components/RitualCard'
import styles from './rituals.module.css'

export function Rituals() {

    const {characters, characterToDisplayId, changeRituals, exportImportRituals} = useContext(CharactersContext)

    const [perLevel, setPerLevel] = useState<boolean | undefined>(undefined)
    function handleChangeSortPerLevel () {
        perLevel ? setPerLevel(false) : setPerLevel(true)
        setOnlyLevel('none')
    }

    const [resetKey, setResetKey] = useState(String(new Date()))
    function handleResetKey() {
        setResetKey(String(new Date()))
    }

    const [onlyLevel, setOnlyLevel] = useState< "none" | "1" | "2" | "3" | "4" >('none')
    function handleChangeOnlyLevel(event: ChangeEvent<HTMLSelectElement>) {
        setOnlyLevel(event.target.value as "none" | "1" | "2" | "3" | "4")
        setPerLevel(undefined)
    }

    const [onlyType, setOnlyType] = useState<"none" | "knowledge" | "energy" | "death" | "fear" | "blood">('none')
    function handleChangeOnlyType(event: ChangeEvent<HTMLSelectElement>) {
        setOnlyType(event.target.value as "none" | "knowledge" | "energy" | "death" | "fear" | "blood")
    }


    const characterToDisplay = characters.find((character) => {
        if (character.id == characterToDisplayId){
            return character
        }
    })


    function handleAddRituals() {
        const newRitual: Ritual = {
            id: String(new Date) + String(Math.random()),
            name: "",
            type: "none",
            level: "1",
            execution: "",
            range: "",
            target: "",
            duration: "",
            resistance: "",
            description: {
                principal: "",
                subDescriptions: []
            },
            studied: {
                isActive: false,
                additionalCost: "",
                additionalEffect: "",
            },
            truly: {
                isActive: false,
                additionalCost: "",
                additionalEffect: "",
            },
            multipleRolls: []
        }
        if(characterToDisplayId != null){
            changeRituals(characterToDisplayId, "", "", "", "", "addRitual", "", newRitual)
        }
    }

    function handleExportRituals() {
        if(characterToDisplayId) {
            exportImportRituals(characterToDisplayId, "", "exportAllRituals")
        }
    }

    function handleExportRitual(id: string) {
        if(characterToDisplayId) {
            exportImportRituals(characterToDisplayId, id, "exportRitual")
        }
    }


    function handleImportRituals(event: ChangeEvent<HTMLInputElement>) {
        if(characterToDisplayId) {
            exportImportRituals(characterToDisplayId, "", "importRitual", event)
            handleResetKey()
        }
    }

    let ritualsToDisplay: Ritual[] = characterToDisplay?.rituals.slice().filter((ritual) => {
        if(onlyType != "none"){
            if(ritual.type == onlyType){
                return ritual
            } else if (ritual.type == 'none') {
                return ritual
            }
        } else {
            return ritual
        }
    }).filter((ritual) => {
        if(perLevel == undefined) {
            if(onlyLevel != "none"){
                if(ritual.level == onlyLevel){
                    return ritual
                } else if (ritual.type == 'none') {
                    return ritual
                }
            } else {
                return ritual
            }
        } else {
            return ritual
        }
    }) as Ritual[]

    if(perLevel == true) {
        ritualsToDisplay.sort((a, b) => a.level > b.level ? 1 : -1)
    } else if (perLevel == false) {
        ritualsToDisplay.sort((a, b) => a.level < b.level ? 1 : -1)
    }

    return(
        <div className={styles.ritualsContainer}>
            <div className={styles.ritualsTable}>
                <div className={styles.ritualHeader}>
                    <div>
                        <button onClick={handleChangeSortPerLevel}>
                            CÍRCULO
                            {perLevel == undefined ? <CaretRight size={24} weight="fill" /> : perLevel ? 
                                <CaretDown size={24} weight="fill"/> : 
                                <CaretUp size={24} weight="fill"/>
                            }
                        </button>
                        <select onChange={handleChangeOnlyLevel} value={onlyLevel}>
                            <option value="none">TODOS</option>
                            <option value="1">I</option>
                            <option value="2">II</option>
                            <option value="3">III</option>
                            <option value="4">IV</option>
                        </select>
                    </div>
                    <div>
                        <p>TIPO :</p>
                        <select onChange={handleChangeOnlyType} value={onlyType}>
                            <option value="none">TODOS</option>
                            <option value="knowledge">CONHECIMENTO</option>
                            <option value="energy">ENERGIA</option>
                            <option value="death">MORTE</option>
                            <option value="fear">MEDO</option>
                            <option value="blood">SANGUE</option>
                        </select>
                    </div>
                    <div className={styles.ritualsManipulationContainer}>
                        <button className={styles.exportImportButton} onClick={handleExportRituals}>
                            <h4>EXPORTAR</h4>
                            <ArrowFatLineUp size={24} weight="fill" />
                        </button>
                        <label className={styles.exportImportButton} htmlFor="importFile">
                            <h4>IMPORTAR</h4>
                            <ArrowFatLineDown size={24} weight="fill" />
                        </label>
                        <input key={resetKey} id="importFile" type="file" accept=".json" onChange={handleImportRituals}/>
                    </div>
                </div>
                {ritualsToDisplay.map((ritual) => {
                    return(<RitualCard key={ritual.id} ritual={ritual}/>)
                })}
                <div className={styles.addRitualCard}>
                    <button onClick={handleAddRituals}>
                        <Plus size={84} weight="fill"/>
                    </button>
                </div>
            </div>
        </div>
    )
}