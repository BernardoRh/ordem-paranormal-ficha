import { Info } from 'phosphor-react'
import { ChangeEvent, useEffect, useState } from 'react'
import styles from './inventory.module.css'

export function Inventory() {

    const [prestigePoints, setPrestigePoints] = useState("0")
    const [patent, setPatent] = useState("")
    const [credit, setCredit] = useState(" ")
    const [itemsLimit, setItemsLimit] = useState([0, 0, 0, 0,])

    function handleChangePrestigePoints(event: ChangeEvent<HTMLInputElement>) {
        const newPrestigePoints = event.target.value
        setPrestigePoints(newPrestigePoints)
    }

    function handleChangeCredit(event: ChangeEvent<HTMLSelectElement>){
        const newCredit = event.target.value
        setCredit(newCredit)
    }

    useEffect(() => {
            if(Number(prestigePoints) < 0) {
                setPatent("Não Recrutado")
                setCredit("none")
                setItemsLimit([0, 0, 0, 0])
            }
            else if(0 <= Number(prestigePoints) && Number(prestigePoints) < 20) {
                setPatent("Recruta")
                setCredit("low")
                setItemsLimit([2, 0, 0, 0])
            }
            else if (20 <= Number(prestigePoints) && Number(prestigePoints) < 50) {
                setPatent("Operador")
                setCredit("low")
                setItemsLimit([3, 1, 0, 0])
            }
            else if (50 <= Number(prestigePoints) && Number(prestigePoints) < 100) {
                setPatent("Agente Especial")
                setCredit("medium")
                setItemsLimit([3, 2, 1, 0])
            }
            else if (100 <= Number(prestigePoints) && Number(prestigePoints) < 200) {
                setPatent("Oficial de Operações")
                setCredit("hight")
                setItemsLimit([3, 3, 2, 1])
            }
            else if (200 <= Number(prestigePoints)) {
                setPatent("Agente de Elite")
                setCredit("unlimited")
                setItemsLimit([3, 3, 3, 2])
            }
        },
        [prestigePoints]
    )

    return(
        <div className={styles.inventoryContainer}>
            <div className={styles.inventoryHeader}>
                <h4>INVENTÁRIO</h4>
                <div className={styles.prestigePointsContainer}>
                    PONTOS DE PRESTÍGIO
                    <input
                        type="number"
                        value={prestigePoints}
                        onChange={handleChangePrestigePoints}
                        placeholder="0"
                    />
                    <span>
                        <Info size={24} weight="fill" />
                        <p>Valores menores que 0 singificam que você não faz parte da ordem</p>
                    </span>
                </div>
                <div className={styles.patentContainer}>
                    PATENTE<input type="text" placeholder={patent}/>
                </div>
            </div>
            <div className={styles.inventoryItemsContainer}>
                <div className={styles.itemsHeader}>
                    <div className={styles.itemsLimitContainer}>
                        <h4>
                            LIMITE DE ITENS
                        </h4>
                        <div className={styles.itemsLimit}>
                            <span>I</span>
                            <input type="number" placeholder={itemsLimit[0] == 0 ? "" : String(itemsLimit[0])}/>
                        </div>
                        <div className={styles.itemsLimit}>
                            <span>II</span>
                            <input type="number" placeholder={itemsLimit[1] == 0 ? "" : String(itemsLimit[1])}/>
                        </div>
                        <div className={styles.itemsLimit}>
                            <span>III</span>
                            <input type="number" placeholder={itemsLimit[2] == 0 ? "" : String(itemsLimit[2])}/>
                        </div>
                        <div className={styles.itemsLimit}>
                            <span>IV</span>
                            <input type="number" placeholder={itemsLimit[3] == 0 ? "" : String(itemsLimit[3])}/>
                        </div>
                    </div>
                    <div className={styles.creditLimit}>
                        <h4>LIMITE DE CRÉDITO</h4>
                        <select value={false ? "none" : credit} onChange={handleChangeCredit}>
                            <option value="none"></option>
                            <option value="low">Baixo</option>
                            <option value="medium">Médio</option>
                            <option value="hight">Alto</option>
                            <option value="unlimited">Ilimitado</option>
                        </select>
                    </div>
                    <div className={styles.loadout}>
                        <h4>PESO MAX.</h4>
                        <input type="number" />
                        <input type="number" />
                    </div>
                </div>
            </div>
            <div className={styles.items}>
                <div className={styles.itemsRow}>
                    <h4>ITEM</h4>
                    <h4 className={styles.center}>CATEGORIA</h4>
                    <h4 className={styles.center}>ESPAÇOS</h4>
                </div>
                <div className={styles.itemsRow}>
                    <h4>ITEM</h4>
                    <h4 className={styles.center}>CATEGORIA</h4>
                    <h4 className={styles.center}>ESPAÇOS</h4>
                </div>
                <div className={styles.itemsRow}>
                    <input type="text" />
                    <input className={styles.center} type="number" />
                    <input className={styles.center} type="number" />
                </div>
                <div className={styles.itemsRow}>
                    <input type="text" />
                    <input className={styles.center} type="number" />
                    <input className={styles.center} type="number" />
                </div>
            </div>
        </div>
    )
}