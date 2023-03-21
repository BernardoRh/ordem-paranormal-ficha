import { Circle, Shield, ShieldChevron } from "phosphor-react";
import { ChangeEvent, useContext } from "react";
import { CharactersContext } from "../../../../../../../../contexts/CharactersContexts/CharactersContext";
import { BaseBox } from "../BaseBox";
import styles from "./defenses.module.css"

interface DefensesProps {
    defense?: string,
    dodge?: string,
    block?: string,
}

export function Defenses({defense, dodge, block}: DefensesProps) {

    const {characterToDisplayId, changeCharacterDefenses} = useContext(CharactersContext)

    function handleChangeDefense(event: ChangeEvent<HTMLInputElement>) {
        const newDefense = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterDefenses(characterToDisplayId, "defense", newDefense)
        }
    }
    function handleChangeDodge(event: ChangeEvent<HTMLInputElement>) {
        const newDodge = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterDefenses(characterToDisplayId, "dodge", newDodge)
        }
    }
    function handleChangeBlock(event: ChangeEvent<HTMLInputElement>) {
        const newBlock = event.target.value
        if(characterToDisplayId != null) {
            changeCharacterDefenses(characterToDisplayId, "block", newBlock)
        }
    }

    return(
        <div className={styles.defenses}>
            <BaseBox className={`${styles.defensesContainer} ${styles.defense}`}>
                <h4>
                    DEFESA
                </h4>
                <div className={styles.iconContainer}>
                    <Shield className={styles.borderIcon} weight="fill" size={72}/>
                    <Shield weight="fill" size={68}/>
                    <input
                        type="number"
                        value={defense}
                        onChange={handleChangeDefense}
                        placeholder="0"
                    />
                </div>
            </BaseBox>
            <BaseBox className={`${styles.defensesContainer} ${styles.dodge}`}>
                <h4>
                    ESQUIVA
                </h4>
                <div className={styles.iconContainer}>
                    <Circle className={styles.borderIcon} weight="fill" size={72}/>
                    <Circle weight="fill" size={68}/>
                    <input
                        type="number"
                        value={dodge}
                        onChange={handleChangeDodge}
                        placeholder="0"
                    />
                </div>
            </BaseBox>
            <BaseBox className={`${styles.defensesContainer} ${styles.block}`}>
                <div>
                    <div className={styles.iconContainer}>
                        <ShieldChevron className={styles.borderIcon} weight="fill" size={72}/>
                        <ShieldChevron weight="fill" size={68}/>
                        <input
                            type="number"
                            value={block}
                            onChange={handleChangeBlock}
                            placeholder="0"
                        />
                        <span className={styles.damageReduction}>
                            RED. DANO
                        </span>
                    </div>
                </div>
                <h4>
                    BLOQUEAR
                </h4>
            </BaseBox>
        </div>
    )
}