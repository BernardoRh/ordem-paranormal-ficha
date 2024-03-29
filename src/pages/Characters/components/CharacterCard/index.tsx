import { ArrowFatLineUp, Copy, X } from "phosphor-react"
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { CharactersContext } from "../../../../contexts/CharactersContexts/CharactersContext"
import styles from "./characterCard.module.css"

import PlaceholderAvatar from "../../../../img/silhuetaSenhorVerissimo.webp"

interface CharacterCardProps {
    id: string,
    avatar?: string,
    name?: string,
    handleExportCharacter: (id: string) => void
}

export function CharacterCard({id, avatar, name, handleExportCharacter}: CharacterCardProps) {
    
    const { deleteCharacter, displayCharacter, copyCharacter } = useContext(CharactersContext)
    
    function handleCopyCHaracter() {
        copyCharacter(id)
    }

    return(
        <div>
            <button className={styles.deleteCharacter} onClick={() => {
                deleteCharacter(id)
            }}>
                <X size={32} weight="fill"/>
            </button>
            <button className={styles.exportCharacters} onClick={() => {
                handleExportCharacter(id)
            }}>
                <ArrowFatLineUp size={32} weight="fill" />
            </button>
            <button className={styles.duplicateCharacter} onClick={handleCopyCHaracter}>
                <Copy size={32} weight="fill"/>
            </button>
            <NavLink to="/Char" onClick={() => {
                displayCharacter(id)
            }}>
                <>
                    <img 
                        src={avatar ? avatar : PlaceholderAvatar}
                    />
                    {name}
                </>
            </NavLink>
        </div>
    )
}