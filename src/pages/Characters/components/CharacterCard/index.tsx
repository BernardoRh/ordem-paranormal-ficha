import { ArrowFatLineUp, Pencil, X } from "phosphor-react"
import { ChangeEvent, useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import { CharactersContext } from "../../../../contexts/CaractersContexts/CharactersContext"
import styles from "./characterCard.module.css"

import PlaceholderAvatar from "../../../../img/silhuetaSenhorVerissimo.webp"

interface CharacterCardProps {
    id: string,
    avatar?: string,
    name?: string,
    handleExportCharacter: (id: string) => void
}

export function CharacterCard({id, avatar, name, handleExportCharacter}: CharacterCardProps) {
    
    const [displayInputAvatar, setDisplayInputAvatar] = useState("none")
    const { deleteCharacter, displayCharacter, changeAvatar } = useContext(CharactersContext)

    function handleChangeAvatar(event: ChangeEvent<HTMLInputElement>) {
        const avatar = event.target.value
        changeAvatar(id, avatar)
    }

    return(
        <div key={id}>
            <button
                className={styles.changeCharacterAvatar}
                onClick={() => {setDisplayInputAvatar("flex")}}
            >
                <Pencil size={32} weight="fill"/>
            </button>
            <span
                style={{display: displayInputAvatar}}
                className={styles.characterUrlAvatar}
                onMouseLeave={() => {setDisplayInputAvatar("none")}}
            >
                <input
                    value={avatar ? avatar : ""}
                    type="text"
                    placeholder="https://exemplo"
                    onChange={handleChangeAvatar}
                />
            </span>
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
            <NavLink to="/Char" onClick={() => {
                displayCharacter(id)
            }}>
                <>
                    <img src={avatar ? avatar : PlaceholderAvatar} />
                    {name}
                </>
            </NavLink>
        </div>
    )
}