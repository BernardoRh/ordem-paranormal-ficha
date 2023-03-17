import { Info, Plus } from 'phosphor-react'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { CharactersContext } from '../../../../../../contexts/CaractersContexts/CharactersContext'
import { Inventory } from '../../../../../../reducers/CharactersReducer/charactersSheet'
import { ItemsRow } from './components/ItemsRow'
import styles from './inventory.module.css'

interface InventoryProps {
    inventory?: Inventory,
}

export function InventoryComponent({inventory}: InventoryProps) {

    const {characterToDisplayId, changeInventory} = useContext(CharactersContext)
    const [patent, setPatent] = useState("")
    const [credit, setCredit] = useState("")
    const [itemsLimit, setItemsLimit] = useState([0, 0, 0, 0,])

    function handleAddItem() {
        if(characterToDisplayId != null) {
            changeInventory(characterToDisplayId, "", "addItem", "")
        }
    }

    function handleChangePrestigePoints(event: ChangeEvent<HTMLInputElement>) {
        const newPrestigePoints = event.target.value
        if(characterToDisplayId != null) {
            changeInventory(characterToDisplayId, "", "prestige", newPrestigePoints)
        }
    }

    function handleChangePatent(event: ChangeEvent<HTMLInputElement>) {
        const newPatent = event.target.value
        if(characterToDisplayId != null) {
            changeInventory(characterToDisplayId, "", "patent", newPatent)
        }
    }

    function handleChangeCredit(event: ChangeEvent<HTMLSelectElement>){
        const newCredit = event.target.value
        if(characterToDisplayId != null) {
            changeInventory(characterToDisplayId, "", "credit", newCredit)
        }
    }

    function handleChangeCurrentLoadout(event: ChangeEvent<HTMLInputElement>) {
        const newWeight = event.target.value
        if(characterToDisplayId != null) {
            changeInventory(characterToDisplayId, "", "weight", newWeight)
        }
    }

    function handleChangeMaxLoadout(event: ChangeEvent<HTMLInputElement>) {
        const newMaxWeight = event.target.value
        if(characterToDisplayId != null) {
            changeInventory(characterToDisplayId, "", "maxWeight", newMaxWeight)
        }
    }

    function handleChangeMaxItems(event: ChangeEvent<HTMLInputElement>, position: number){
        if(characterToDisplayId != null) {
            let newMaxItems: string[]
            if(0 == position) {
                newMaxItems = [event.target.value, inventory?.itemsLimit[1], inventory?.itemsLimit[2], inventory?.itemsLimit[3]] as string[]
            } else if (1 == position) {
                newMaxItems = [inventory?.itemsLimit[0], event.target.value, inventory?.itemsLimit[2], inventory?.itemsLimit[3]] as string[]
            }
            else if (2 == position) {
                newMaxItems = [inventory?.itemsLimit[0], inventory?.itemsLimit[1], event.target.value, inventory?.itemsLimit[3]] as string[]
            }
            else if (3 == position) {
                newMaxItems = [inventory?.itemsLimit[0], inventory?.itemsLimit[1], inventory?.itemsLimit[2], event.target.value] as string[]
            } else {
                newMaxItems = inventory?.itemsLimit as string[]
            }
            changeInventory(characterToDisplayId, "", "itemsLimit", newMaxItems)
        }
    }

    useEffect(() => {
            if(Number(inventory?.prestige) < 0) {
                setPatent("Não Recrutado")
                setCredit("none")
                setItemsLimit([0, 0, 0, 0])
            }
            else if(0 <= Number(inventory?.prestige) && Number(inventory?.prestige) < 20) {
                setPatent("Recruta")
                setCredit("low")
                setItemsLimit([2, 0, 0, 0])
            }
            else if (20 <= Number(inventory?.prestige) && Number(inventory?.prestige) < 50) {
                setPatent("Operador")
                setCredit("low")
                setItemsLimit([3, 1, 0, 0])
            }
            else if (50 <= Number(inventory?.prestige) && Number(inventory?.prestige) < 100) {
                setPatent("Agente Especial")
                setCredit("medium")
                setItemsLimit([3, 2, 1, 0])
            }
            else if (100 <= Number(inventory?.prestige) && Number(inventory?.prestige) < 200) {
                setPatent("Oficial de Operações")
                setCredit("hight")
                setItemsLimit([3, 3, 2, 1])
            }
            else if (200 <= Number(inventory?.prestige)) {
                setPatent("Agente de Elite")
                setCredit("unlimited")
                setItemsLimit([3, 3, 3, 2])
            }
        },
        [inventory?.prestige]
    )

    return(
        <div className={styles.inventoryContainer}>
            <div className={styles.inventoryHeader}>
                <h4>INVENTÁRIO</h4>
                <div className={styles.prestigePointsContainer}>
                    PONTOS DE PRESTÍGIO
                    <input
                        type="number"
                        value={inventory?.prestige}
                        onChange={handleChangePrestigePoints}
                        placeholder="0"
                    />
                    <span>
                        <Info size={24} weight="fill" />
                        <p>Valores menores que 0 singificam que você não faz parte da ordem</p>
                    </span>
                </div>
                <div className={styles.patentContainer}>
                    PATENTE<input type="text" 
                        placeholder={patent}
                        value={inventory?.patent}
                        onChange={handleChangePatent}
                    />
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
                            <input 
                                type="number"
                                placeholder={String(itemsLimit[0])}
                                value={inventory?.itemsLimit[0]}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    handleChangeMaxItems(event, 0)
                                }}
                            />
                        </div>
                        <div className={styles.itemsLimit}>
                            <span>II</span>
                            <input
                                type="number"
                                placeholder={String(itemsLimit[1])}
                                value={inventory?.itemsLimit[1]}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    handleChangeMaxItems(event, 1)
                                }}
                            />
                        </div>
                        <div className={styles.itemsLimit}>
                            <span>III</span>
                            <input
                                type="number" 
                                placeholder={String(itemsLimit[2])}
                                value={inventory?.itemsLimit[2]}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    handleChangeMaxItems(event, 2)
                                }}
                            />
                        </div>
                        <div className={styles.itemsLimit}>
                            <span>IV</span>
                            <input 
                                type="number"
                                placeholder={String(itemsLimit[3])}
                                value={inventory?.itemsLimit[3]}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    handleChangeMaxItems(event, 3)
                                }}
                            />
                        </div>
                    </div>
                    <div className={styles.creditLimit}>
                        <h4>LIMITE DE CRÉDITO</h4>
                        <select 
                            value={inventory?.creditLimit != "none" ? inventory?.creditLimit : credit} 
                            onChange={handleChangeCredit}
                        >
                            <option value="none"></option>
                            <option value="low">Baixo</option>
                            <option value="medium">Médio</option>
                            <option value="hight">Alto</option>
                            <option value="unlimited">Ilimitado</option>
                        </select>
                    </div>
                    <div className={styles.loadout}>
                        <h4>PESO MAX.</h4>
                        <input type="number" value={inventory?.loadout.actualLoadout} onChange={handleChangeCurrentLoadout}/>
                        <input type="number" value={inventory?.loadout.maxLoadout} onChange={handleChangeMaxLoadout}/>
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
                {inventory?.items?.map((item) => {
                    return(
                        <ItemsRow key={item.id} item={item}/>
                    )
                })}
                <button className={styles.addItems} onClick={handleAddItem}>
                    <Plus size={24} weight="fill"/>
                </button>
            </div>
        </div>
    )
}