import { Plus } from "phosphor-react"
import { useContext, useState } from "react"
import styles from "./characters.module.css"


import { CharactersContext } from "../../contexts/CaractersContexts/CharactersContext"
import { CharacterCard } from "./components/CharacterCard"

export function Characters() {

    const { characters, createNewCharacter } = useContext(CharactersContext)
    const [isDisabled, setIsDisabled] = useState(false)

    function cooldownButton() {
        setIsDisabled(true)
        setTimeout(function() {setIsDisabled(false)}, 2000)
    }

    return(
        <div className={styles.charactersContainer}>
            <nav>
                <>
                    {characters ? characters.map((character) => {
                        return(
                            <CharacterCard key={character.id} id={character.id} avatar={character.avatar} name={character.name}/>
                        )
                    }):
                        ""
                    }
                    <button
                        disabled={isDisabled}
                        className={styles.addCharacter}
                        onClick={() => {createNewCharacter(); cooldownButton()}}>
                        <Plus size={128} weight="fill"/>
                    </button>
                </>
            </nav>
        </div>
    )
}