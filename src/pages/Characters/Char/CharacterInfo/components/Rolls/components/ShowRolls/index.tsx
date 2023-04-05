import { ChangeEvent } from "react"
import { rollsForLastRollsResults } from "../LastRolls"
import { Info } from "phosphor-react"

import styles from './showRolls.module.css'

import d4 from "../../../../../../../../img/dadoD4.png"
import d6 from "../../../../../../../../img/dadoD6.png"
import d8 from "../../../../../../../../img/dadoD8.png"
import d10 from "../../../../../../../../img/dadoD10.png"
import d12 from "../../../../../../../../img/dadoD12.png"
import d20 from "../../../../../../../../img/dadoD20.png"
import d100 from "../../../../../../../../img/dadoD100.png"
import d4red from "../../../../../../../../img/dadoD4Vermelho.png"
import d6red from "../../../../../../../../img/dadoD6Vermelho.png"
import d8red from "../../../../../../../../img/dadoD8Vermelho.png"
import d10red from "../../../../../../../../img/dadoD10Vermelho.png"
import d12red from "../../../../../../../../img/dadoD12Vermelho.png"
import d20red from "../../../../../../../../img/dadoD20Vermelho.png"
import d100red from "../../../../../../../../img/dadoD100Vermelho.png"
import d4green from "../../../../../../../../img/dadoD4Verde.png"
import d6green from "../../../../../../../../img/dadoD6Verde.png"
import d8green from "../../../../../../../../img/dadoD8Verde.png"
import d10green from "../../../../../../../../img/dadoD10Verde.png"
import d12green from "../../../../../../../../img/dadoD12Verde.png"
import d20green from "../../../../../../../../img/dadoD20Verde.png"
import d100green from "../../../../../../../../img/dadoD100Verde.png"

const dicesType = {
    "4": d4,
    "6": d6,
    "8": d8,
    "10": d10,
    "12": d12,
    "20": d20,
    "100": d100
}

const dicesTypeDisadvantaged = {
    "4": d4red,
    "6": d6red,
    "8": d8red,
    "10": d10red,
    "12": d12red,
    "20": d20red,
    "100": d100red
}

const dicesTypeVantage = {
    "4": d4green,
    "6": d6green,
    "8": d8green,
    "10": d10green,
    "12": d12green,
    "20": d20green,
    "100": d100green
}

export interface ShowRollProps {
    roll: rollsForLastRollsResults,
    dicesQuantity: string,
    onHistory?: boolean,
    diceQuantityChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export function ShowRolls({roll, dicesQuantity, onHistory, diceQuantityChange}: ShowRollProps) {

    function SumResults() {
        let sum: number = 0 + Number(roll.bonus ? roll.bonus : 0);
        roll.results.map((result) => {
            sum = sum + result.result
        })
        roll.isCritical ? sum = sum * 2 : ""
        return (
            <>
                <h4
                    style={{
                    color: `var(--${roll?.damageType}-light)`, 
                    filter: `blur(${roll?.damageType == "fear" ? '0.05rem' : ""})`}}
                >
                    {sum}
                </h4>
                {roll.isCritical ? <p style={{
                    color: `var(--${roll?.damageType}-light)`, 
                    filter: `blur(${roll?.damageType == "fear" ? '0.05rem' : ""})`}}>CRÍTICO</p> : ""}
            </>
        )
    }

    if(roll.results.length == 0){
        return(<></>)
    } else {
        return(
            <div className={`${styles.rollsContainer} ${onHistory ? styles.onHistory : ""}`} >
                {roll.isDamage ? 
                    <div className={`${styles.headerRoll}`}>
                        <h4 style={{ color: `var(--${roll?.damageType}-light)`, filter: `blur(${roll?.damageType == "fear" ? '0.05rem' : ""})`}}>DANO</h4>
                    </div> :
                    <>
                        <div className={`${styles.headerRoll}`}>
                            <h4>TESTE</h4>
                        </div>
                        {
                            diceQuantityChange ?
                            <span>
                                <h4>{Number(dicesQuantity) < 0 || Number(roll.quantity) + Number(dicesQuantity) <= 0 ? "DESVANTAGE:" : "VANTAGEM:"}</h4>
                                <input type="number" value={dicesQuantity} onChange={diceQuantityChange} style={{background: "transparent"}}/>
                                <span>
                                    <Info size={24} weight="fill" />
                                    <p>Valores negativos siginificam desvantagem e positivos vantagem</p>
                                </span>
                            </span> : ""
                        }
                        
                    </>
                }
                <div className={styles.rollsRow}>
                    {
                        roll.results.map((dice) => {
                            return(
                                <span className={styles.dice} key={String(new Date()) + String(Math.random())}>
                                    {roll.isDamage ?
                                        <h4 style={{ color: `var(--${roll?.damageType}-light)`, filter: `blur(${roll?.damageType == "fear" ? '0.05rem' : ""})`}}>{dice.result}</h4>
                                    :
                                        <h4>{dice.result}</h4>
                                    }                                
                                    <img src={ dice.type == "normal" ? dicesType[roll.diceType] : dice.type == "vantage" ? dicesTypeVantage[roll.diceType] : dicesTypeDisadvantaged[roll.diceType]}/> 
                                </span>
                            )
                        })
                    }
                    <div className={styles.dicesEnd}>
                        {roll.bonus ? 
                            <span className={styles.dice} style={ roll.isDamage ? { color: `var(--${roll?.damageType}-light)`, filter: `blur(${roll?.damageType == "fear" ? '0.05rem' : ""})`}: {}}>
                                <h4 style={ roll.isDamage ? { color: `var(--${roll?.damageType}-light)`, filter: `blur(${roll?.damageType == "fear" ? '0.05rem' : ""})`}: {}}>+ {roll.bonus}</h4>
                            </span>
                        : <></>}
                        <span className={styles.dice}>
                            <h4 style={ roll.isDamage ? { color: `var(--${roll?.damageType}-light)`, filter: `blur(${roll?.damageType == "fear" ? '0.05rem' : ""})`}: {}}>=</h4>
                        </span>
                        {roll.isDamage ?
                            <>
                                <span className={styles.dice}>
                                    {SumResults()}
                                    <img src={ roll.bestResult.type ? roll.bestResult.type == "normal" ? dicesType[roll.diceType] : roll.bestResult.type == "vantage" ? dicesTypeVantage[roll.diceType] : dicesTypeDisadvantaged[roll.diceType] : dicesType[roll.diceType]}/> 
                                </span>
                                <span className={`${styles.dice} ${styles.damageType}`} style={{ color: `var(--${roll?.damageType}-light)`, filter: `blur(${roll?.damageType == "fear" ? '0.05rem' : ""})`}}>
                                    {roll.damageType == "knowledge" ? "CONHECIMENTO" : ""} 
                                    {roll.damageType == "energy" ? "ENERGIA" : ""} 
                                    {roll.damageType == "death" ? "MORTE" : ""} 
                                    {roll.damageType == "blood" ? "SANGUE" : ""} 
                                    {roll.damageType == "fear" ? "MEDO" : ""} 
                                    {roll.damageType == "bludgeoning" ? "CONTUNDENTE" : ""} 
                                    {roll.damageType == "slash" ? "CORTANTE" : ""} 
                                    {roll.damageType == "piercing" ? "PERFURANTE" : ""} 
                                    {roll.damageType == "ballistic" ? "BALISTICO" : ""} 
                                    {roll.damageType == "fire" ? "FOGO" : ""} 
                                    {roll.damageType == "cold" ? "FRIO" : ""} 
                                    {roll.damageType == "chemical" ? "QUÍMICO" : ""}
                                    {roll.damageType == "mental" ? "MENTAL" : ""}
                                </span>
                            </>
                        :
                            <span className={styles.dice} >
                                <h4>{roll.bestResult.result + Number(roll.bonus ? roll.bonus : 0)}</h4>
                                <img src={ roll.bestResult.type == "normal" ? dicesType[roll.diceType] : roll.bestResult.type == "vantage" ? dicesTypeVantage[roll.diceType] : dicesTypeDisadvantaged[roll.diceType]}/> 
                            </span>
                        }
                    </div>
                </div>
            </div>
        )
    }
}