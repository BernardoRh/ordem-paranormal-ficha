import { ArrowFatLineDown, ArrowFatLineUp, Plus } from "phosphor-react"
import { ChangeEvent, useContext, useState } from "react"
import styles from "./characters.module.css"


import { CharactersContext } from "../../contexts/CharactersContexts/CharactersContext"
import { CharacterCard } from "./components/CharacterCard"

export function Characters() {

    const { characters, createNewCharacter, exportImportCharacter} = useContext(CharactersContext)
    const [resetKey, setResetKey] = useState(String(new Date()))
    
    function handleResetKey() {
        setResetKey(String(new Date()))
    }

    function handleCreateNewCharacter() {
        createNewCharacter()
    }

    function handleExportCharacters() {
        exportImportCharacter("", "exportAllCharacters")
    }

    function handleExportCharacter(id: string) {
        exportImportCharacter(id, "exportCharacter")
    }


    function handleImportCharacters(event: ChangeEvent<HTMLInputElement>) {
        exportImportCharacter("", "importCharacter", event)
        handleResetKey()
    }
    

    return(
        <>
            <div className={styles.charactersManipulationContainer}>
                <button className={styles.exportImportButton} onClick={handleExportCharacters}>
                    <ArrowFatLineUp size={48} weight="fill" />
                    <h4>EXPORTAR</h4>
                </button>
                <label className={styles.exportImportButton} htmlFor="importFile">
                    <ArrowFatLineDown size={48} weight="fill" />
                    <h4>IMPORTAR</h4>
                </label>
                <input key={resetKey} id="importFile" type="file" accept=".json" onChange={handleImportCharacters}/>
            </div>
            <div className={styles.charactersContainer}>
                <nav>
                    <>
                        {characters ? characters.map((character) => {
                            return(
                                <CharacterCard handleExportCharacter={handleExportCharacter} key={character.id} id={character.id} avatar={`${character.avatar}`} name={character.name}/>
                            )
                        }):
                            ""
                        }
                        <button
                            className={styles.addCharacter}
                            onClick={handleCreateNewCharacter}>
                            <Plus size={128} weight="fill"/>
                        </button>
                    </>
                </nav>
            </div>
        </>
    )
}