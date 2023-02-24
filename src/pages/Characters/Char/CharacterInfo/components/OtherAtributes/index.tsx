import { Circle, Shield, ShieldChevron } from "phosphor-react";
import { ChangeEvent, useState } from "react"
import styles from "./otherAtributes.module.css"

export function OtherAtributes() {
    const [life, setLife] = useState("");
    const [maxLife, setMaxLife] = useState("100");

    function changeActualLife(event: ChangeEvent<HTMLInputElement>) {
        setLife(event.target.value)
    }

    return(
        <div className={styles.otherAtributesContainer}>
            <div className={`${styles.baseBox} ${styles.originContainer}`}>
                <h4>ORIGEM</h4>
                <input type="text" />
            </div>
            <div className={`${styles.baseBox} ${styles.classContainer}`}>
                <h4>CLASSE</h4>
                <select name="classe" id="classe">
                    <option value=""></option>
                    <option value="Combatente">Combatente</option>
                    <option value="Especialista">Especialista</option>
                    <option value="Ocultista">Oculstista</option>
                </select>
            </div>
            <div className={`${styles.baseBox} ${styles.nexContainer}`}>
                <h4>NEX</h4>
                <div className={styles.nexPercentageInput}>
                    <input type="number" placeholder="0"/>
                    <span>%</span>
                </div>
                <div className={styles.pePerRound}>
                    <span>5</span>
                    <p>PE / RODADA</p>
                </div>
            </div>
            <div className={`${styles.baseBox} ${styles.movementContainer}`}>
                <span>DESLOCAMENTO</span>
                <div className={styles.movement}>
                    <input type="number" placeholder="0"/>
                    <p>m</p>
                </div>
            </div>
            <div className={`${styles.barContainer} ${styles.lifeContainer}`}>
                <div>
                    <span style={{width: (Number(life)*100) / Number(maxLife) + "%"}}>
                        <h4>PV</h4>
                    </span>
                </div>
                <input onChange={changeActualLife} value={life} type="number" placeholder="0"/>
                |
                <p>{maxLife}</p>
            </div>
            <div className={`${styles.barContainer} ${styles.peContainer}`}>
                <div>
                    <span style={{width: (Number(life)*100) / Number(maxLife) + "%"}}>
                        <h4>PE</h4>
                    </span>
                </div>
                <input onChange={changeActualLife} value={life} type="number" placeholder="0"/>
                |
                <p>52</p>
            </div>
            <div className={`${styles.barContainer} ${styles.sanityContainer}`}>
                <div>
                    <span style={{width: (Number(life)*100) / Number(maxLife) + "%"}}>
                        <h4>SAN</h4>
                    </span>
                </div>
                <input onChange={changeActualLife} value={life} type="number" placeholder="0"/>
                |
                <p>52</p>
            </div>
            <div className={styles.defenses}>
                <div className={`${styles.baseBox} ${styles.defensesContainer} ${styles.defense}`}>
                    <h4>
                        DEFESA
                    </h4>
                    <div className={styles.iconContainer}>
                        <Shield className={styles.borderIcon} weight="fill" size={72}/>
                        <Shield weight="fill" size={68}/>
                        <span>18</span>
                    </div>
                </div>
                <div className={`${styles.baseBox} ${styles.defensesContainer} ${styles.dodge}`}>
                    <h4>
                        ESQUIVA
                    </h4>
                    <div className={styles.iconContainer}>
                        <Circle className={styles.borderIcon} weight="fill" size={72}/>
                        <Circle weight="fill" size={68}/>
                        <span>18</span>
                    </div>
                </div>
                <div className={`${styles.baseBox} ${styles.defensesContainer} ${styles.block}`}>
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
                </div>
            </div>
            <div className={styles.protectionAndResistance}>
                <div className={styles.protectionAndResistanceHeader}>
                    Proteção: <input type="text"/>
                </div>
                <div>
                    <span>
                        Perfurante
                    </span>
                    <span>
                        Contundente
                    </span>
                    <span>
                        Cortante
                    </span>
                </div>
            </div>
            <div className={styles.protectionAndResistance}>
                <div className={styles.protectionAndResistanceHeader}>
                    Resistencias: <input type="text" />
                </div>
                <div>
                    <span>
                        Perfurante
                    </span>
                    <span>
                        Contundente
                    </span>
                    <span>
                        Cortante
                    </span>
                </div>
            </div>
        </div>
    )
}