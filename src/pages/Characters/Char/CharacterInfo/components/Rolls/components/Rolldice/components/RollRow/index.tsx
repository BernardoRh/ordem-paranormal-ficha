import { ChangeEvent, useContext, useEffect, useState } from "react"
import { CharactersContext } from "../../../../../../../../../../contexts/CharactersContexts/CharactersContext"
import { rollsForLastRollsResults } from "../../../LastRolls"
import { ShowRolls } from "../../../ShowRolls"



interface RollRowProps {
    rollsWrappId?: string
    roll: rollsForLastRollsResults
    IsCritical: boolean
    changeTestResult: (result: boolean) => void
}

export interface resultType {
    result: number,
    type: "normal" | "disadvantage" | "vantage",
}

interface results {
    results: resultType[],
    vantageDisadvantage: string,
    vantage: boolean,
    bestResult: resultType,
}

export function RollRow({roll, IsCritical, rollsWrappId, changeTestResult}: RollRowProps) {

    const {characterToDisplayId, changeResultsToLastRolls} = useContext(CharactersContext)

    const [dicesQuantity, setDicesQuantity] = useState(roll.vantageDisadvantage);
    function handleChangeDicesQuantity(event: ChangeEvent<HTMLInputElement>) {
        setDicesQuantity(event.target.value)
        changeTestResult(false)
        results.bestResult = {
            result: 0,
            type: "normal"
        }
    }

    let results: results = {
        results: roll.results,
        vantageDisadvantage: dicesQuantity,
        bestResult: {
            result: 0,
            type: "normal"
        },
        vantage: roll.vantage
    }

    function handleChangeDicesResults(result: number, type: "normal" | "disadvantage" | "vantage", vantage: boolean) {
        results.results.push({result, type})
        results.vantage = vantage
    }

    function handleResetDices() {
        results.results = []
    }
    

    if(roll.isDamage){
        handleResetDices()
        for(let i = 0; i < Number(roll.quantity); i++){
            const damage = Math.floor(Math.random() * Number(roll.diceType)) + 1
            handleChangeDicesResults(damage, "normal", true)
        }
    } else {
        handleResetDices()
        if(Number(roll.quantity) + Number(dicesQuantity) == 0) {
            for(let i = 0; i < 2 ; i++){
                const result = Math.floor(Math.random() * Number(roll.diceType)) + 1
                handleChangeDicesResults(result, "disadvantage", false)
            }
        }
        else if(Number(roll.quantity) + Number(dicesQuantity) < 0){
            for(let i = Number(roll.quantity) + Number(dicesQuantity); i < 2 ; i++){
                const result = Math.floor(Math.random() * Number(roll.diceType)) + 1
                handleChangeDicesResults(result, "disadvantage", false)
            }
        }
        else if(Number(roll.quantity) + Number(dicesQuantity) > 0 && Number(dicesQuantity) <= 0){
            for(let i = 0; i < Number(roll.quantity) + Number(dicesQuantity) ; i++){
                const result = Math.floor(Math.random() * Number(roll.diceType)) + 1
                handleChangeDicesResults(result, "normal", true)
            }
        }
        else if(Number(roll.quantity) + Number(dicesQuantity) > 0 && Number(dicesQuantity) > 0){
            for(let i = 0; i < Number(roll.quantity) + Number(dicesQuantity) ; i++){
                const result = Math.floor(Math.random() * Number(roll.diceType)) + 1
                if(Number(roll.quantity) > i){
                    handleChangeDicesResults(result, "normal", true)
                } else {
                    handleChangeDicesResults(result, "vantage", true)
                }
            }
        }
    }

    if(results.vantage){
        const theBestResult = results.results.slice()
        theBestResult.sort((a, b) => a.result < b.result ? 1 : -1)
        results.bestResult = theBestResult[0]
    } else {
        const theBestResult = results.results.slice()
        theBestResult.sort((a, b) => a.result > b.result ? 1 : -1)
        results.bestResult = theBestResult[0]
    }

    if(roll.isDamage == false) {
        if(roll.bestResult.result >= Number(roll.critical)){
            changeTestResult(true)
        } else {
            changeTestResult(false)
        }
    }

    useEffect(() => {
        changeResultsToLastRolls(characterToDisplayId as string, rollsWrappId as string, roll.id, IsCritical, "isCritical")
    }, [IsCritical])

    useEffect(() => {
        changeResultsToLastRolls(characterToDisplayId as string, rollsWrappId as string, roll.id, results.results, "results")
        changeResultsToLastRolls(characterToDisplayId as string, rollsWrappId as string, roll.id, results.bestResult, "bestResult")
        changeResultsToLastRolls(characterToDisplayId as string, rollsWrappId as string, roll.id, results.vantage, "vantageDisadvantage")
        changeResultsToLastRolls(characterToDisplayId as string, rollsWrappId as string, roll.id, dicesQuantity, "vantageDisadvantageDices")
    }, [rollsWrappId, dicesQuantity])

    return(
        <ShowRolls roll={roll} dicesQuantity={roll.vantageDisadvantage} diceQuantityChange={handleChangeDicesQuantity} />
    )
}