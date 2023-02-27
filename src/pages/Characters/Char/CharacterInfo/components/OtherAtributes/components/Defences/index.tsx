import { Circle, Shield, ShieldChevron } from "phosphor-react";
import { BaseBox } from "../BaseBox";
import styles from "./defenses.module.css"

export function Defenses() {
    return(
        <div className={styles.defenses}>
            <BaseBox className={`${styles.defensesContainer} ${styles.defense}`}>
                <h4>
                    DEFESA
                </h4>
                <div className={styles.iconContainer}>
                    <Shield className={styles.borderIcon} weight="fill" size={72}/>
                    <Shield weight="fill" size={68}/>
                    <span>18</span>
                </div>
            </BaseBox>
            <BaseBox className={`${styles.defensesContainer} ${styles.dodge}`}>
                <h4>
                    ESQUIVA
                </h4>
                <div className={styles.iconContainer}>
                    <Circle className={styles.borderIcon} weight="fill" size={72}/>
                    <Circle weight="fill" size={68}/>
                    <span>18</span>
                </div>
            </BaseBox>
            <BaseBox className={`${styles.defensesContainer} ${styles.block}`}>
                <div>
                    <div className={styles.iconContainer}>
                        <ShieldChevron className={styles.borderIcon} weight="fill" size={72}/>
                        <ShieldChevron weight="fill" size={68}/>
                        <span>18</span>
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