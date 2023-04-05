import { CaretRight } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CharactersContext } from '../../../../../../../../contexts/CharactersContexts/CharactersContext';
import { lastRollsProps } from '../../../../../../../../reducers/CharactersReducer/charactersSheet';
import styles from './lastRolls.module.css'
import { resultType } from '../Rolldice/components/RollRow';
import { ShowRolls } from '../ShowRolls';

interface HistoryRollsProps {
    lastRolls?: lastRollsProps[]
}

export interface rollsForLastRollsResults {
    results: resultType[],
    vantageDisadvantage: string,
    vantage: boolean,
    isCritical: boolean,
    bestResult: resultType,
    id: string,
    diceType: "4" | "6" | "10" | "12" | "20" | "100",
    quantity: string,
    isDamage: boolean,
    bonus?: string,
    critical?: string,
    damageType?: "knowledge" | "energy" | "death" | "blood" | "fear" | "bludgeoning" | "slash" | "piercing" | "ballistic" | "fire" |
    "cold" | "chemical" | "mental",
}

export function HistoryRolls({lastRolls}: HistoryRollsProps) {


    const {characterToDisplayId, clearHistoryRolls} = useContext(CharactersContext)

    const [showHistory, setShowHistory] = useState(false);
    function handleChangeShowHistory(show: boolean) {
        setShowHistory(show)
    }

    const lastRollsToShow = lastRolls?.slice()
    lastRollsToShow?.sort((a, b) => a.wrapperId < b.wrapperId ? 1 : -1)

    return(
        <div
            onMouseOver={() => {
                handleChangeShowHistory(true)
            }}
            onMouseOut={() => {
                handleChangeShowHistory(false)
            }}
            className={styles.historyRollDiceContainer}
            style={ showHistory == true ? {marginLeft: 0} : {marginLeft: "-28.5rem"}}
        >
            <div className={styles.historyRollDiceContainerContent}>
                <button className={styles.cleanLastRolls} onClick={() => clearHistoryRolls(characterToDisplayId as string)}>LIMPAR</button>
                {lastRollsToShow?.map((rolls) => {
                    return(
                        <div className={styles.lastRolls} key={rolls.wrapperId}>
                            <h4>{rolls.name}</h4>
                            {rolls.rollsForLastRolls.map((roll) => {
                                return(
                                    <ShowRolls key={roll.id} roll={roll} dicesQuantity={roll.vantageDisadvantage} onHistory/>
                                )
                            })}

                        </div>

                    )
                })}

            </div>
            <div
                className={styles.arrowToHover}
                onMouseOver={() => {
                    handleChangeShowHistory(true)
                }}
                onMouseOut={() => {
                    handleChangeShowHistory(false)
                }}
            >
                <CaretRight size={32} weight="fill" />
            </div>
        </div>
    )
}