import { useContext, useEffect } from "react"
import { CharactersContext } from "../../../../../../contexts/CharactersContexts/CharactersContext"
import { RollDice } from "./components/Rolldice"
import { HistoryRolls, rollsForLastRollsResults } from "./components/LastRolls"

export function RollsComponents() {

    const {characters, characterToDisplayId, addLastRoll, addResultsToLastRolls} = useContext(CharactersContext)
    const characterToDisplay = characters.find((character) => {
        if (character.id == characterToDisplayId){
            return character
        }
    })

    useEffect(() => {
        if(characterToDisplay?.roll.showRoll){
            addLastRoll(
                characterToDisplayId as string,
                characterToDisplay?.roll.wrapperId as string,
                characterToDisplay?.roll.name as string
            )
            characterToDisplay?.roll.rolls?.map((roll) => {
                const newLastRoll: rollsForLastRollsResults = {
                    results: [],
                    vantageDisadvantage: "0",
                    isCritical: false,
                    id: roll.id,
                    diceType: roll.diceType,
                    quantity: roll.quantity,
                    isDamage: roll.isDamage,
                    bonus: roll.bonus,
                    damageType: roll.damageType,
                    critical: characterToDisplay?.roll.critical ? characterToDisplay?.roll.critical : roll.critical ? roll.critical : roll.diceType,
                    dicesOrTotal: characterToDisplay?.roll.dicesOrTotal,
                    multiplier: characterToDisplay?.roll.multiplier,
                    bestResult: {
                        result: 0,
                        type: "normal"
                    },
                    vantage: true
                }
                addResultsToLastRolls(characterToDisplayId as string, characterToDisplay?.roll.wrapperId as string, newLastRoll)
            })
        }
    }, [characterToDisplay?.roll.wrapperId])

    const rollToChange = characterToDisplay?.lastRolls.find((roll) => {
        if(roll.wrapperId == characterToDisplay?.roll.wrapperId){
            return roll
        }
    })

    return(
        <>
            <RollDice
                key={rollToChange?.wrapperId}
                wrapperId={rollToChange?.wrapperId}
                rollsToUse={rollToChange?.rollsForLastRolls}
                showRoll={characterToDisplay?.roll.showRoll}
                name={rollToChange?.name}
            />
            <HistoryRolls lastRolls={characterToDisplay?.lastRolls} />
        </>
    )
}