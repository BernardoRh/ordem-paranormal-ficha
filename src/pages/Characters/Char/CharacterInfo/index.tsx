import { Attacks } from "./components/Atacks";
import { BaseAttributes } from "./components/BaseAtributes";
import { AllExpertises } from "./components/Expertise";
import { Inventory } from "./components/Inventory";
import { OtherAttributes } from "./components/OtherAttributes";
import { Skills } from "./components/Skills";

import styles from "./characterInfor.module.css"
import { useContext } from "react";
import { CharactersContext } from "../../../../contexts/CharactersContext";

export function CharacterInfo() {

    const { characterToDisplayId, characters } = useContext(CharactersContext)

    const characterToDisplay = characters.find((character) => {
        if(character.id == characterToDisplayId){
            return character
        }
    })

    return(
        <div className={styles.content}>
            <div className={styles.containerCharacterAtributes}>
                <BaseAttributes character={characterToDisplay}/>
                <OtherAttributes character={characterToDisplay}/>
            </div>
            <AllExpertises character={characterToDisplay}/>
            <Attacks/>
            <Skills/>
            <Inventory/>
        </div>
    )
}