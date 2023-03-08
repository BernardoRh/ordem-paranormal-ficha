import produce from "immer";
import { ReactNode, createContext, useEffect, useReducer, useState, ChangeEvent } from "react";
import { Rolls } from "../../components/Rolldice";
import {
    ActionsType, createNewCharacterAction, changeCharacterAgeAction,
    changeCharacterNameAction, deleteCharacterAction, displayCharacterAction,
    changeAvatarAction, changeCharacterAttributesAction, changeCharacterOriginAction,
    changeCharacterClassAction, changeCharacterNexAction, changeCharacterPePerRoundAction,
    changeCharacterMovementAction, changeCharacterHealthAction, changeCharacterPeAction,
    changeCharacterSanityAction,
    changeCharacterDefensesAction,
    changeCharacterProtectionAndResistancesAction,
    changeCharacterExpertiseAction,
    changeCharacterAttacksAction,
    changeCharacterSkillsAction,
    changeInventoryAction,
} from "../../reducers/CharactersReducer/actions";
import { Attack, CharactersSheet, Skill } from "../../reducers/CharactersReducer/charactersSheet";
import { charactersReducer } from "../../reducers/CharactersReducer/reducer";
interface AlertProps {
    alert: "NONE" | "BAD" | "GOOD",
    value: string
}
interface CharactersContextType {
    characters: CharactersSheet[],
    characterToDisplayId: string | null,
    displayCharacter: (id: string) => void,
    createNewCharacter: (character?: CharactersSheet) => void,
    deleteCharacter: (id: string) => void,
    changeAvatar: (id: string, avatar: string) => void
    changeCharacterName: (id: string, name: string) => void
    changeCharacterAge: (id: string, age: string) => void
    changeCharacterAttributes: (id: string, attribute: string, value: string) => void
    changeCharacterOrigin: (id: string, origin: string) => void
    changeCharacterClass: (id: string, characterClass: "none" | "Combatente" | "Especialista" | "Ocultista") => void
    changeCharacterNex: (id: string, nex: string) => void
    changeCharacterPePerRound: (id: string, pePerRound: string) => void
    changeCharacterMovement: (id: string, movement: string) => void
    changeCharacterHealth: (id: string, type: "max" | "current", value: string) => void
    changeCharacterPe: (id: string, type: "max" | "current", value: string) => void
    changeCharacterSanity: (id: string, type: "max" | "current", value: string) => void
    changeCharacterDefenses: (id: string, type: "defense" | "dodge" | "block", value: string) => void
    changeCharacterProtectionAndResistances: (
        id: string, 
        toDelete: boolean, 
        type: "protection" | "resistances", 
        value: string
    ) => void
    changeCharacterExpertise: (
        id: string, 
        name: string, 
        trainedLevel: "none" | "Expert" | "Veterano" | "Treinado", 
        others: string, 
        type: "trainedLevel" | "others"
    ) => void
    changeCharacterAttacks: (
        id: string,
        attackId: string,
        type: "delete" | "changeName" | "changeTestDiceQuantity" | "changeTestBonus" | "changeDamageDiceQuantity" | 
        "changeDamageDiceType" | "changeDamageBonus" | "changeCritical" | "changeRange" | "changeSpecial" | "addAttack",
        value: string | Rolls | Attack
    ) => void
    changeCharacterSkills: (
        id: string,
        skillId: string,
        type: "delete" | "addSkill" | "changeName" | "changeDescription" | "changeCost" | "changePage",
        value: string | Skill
    ) => void
    exportImportCharacter: (
        id: string, 
        type: "exportAllCharacters" | "exportCharacter" | "importCharacter", 
        event?: ChangeEvent<HTMLInputElement>
    ) => void
    changeInventory: (
        id: string, 
        itemId: string, 
        type: "addItem" | "delete" | "changeName" | "changeCategory" | 
        "changeSpaces" | "prestige" | "itemsLimit" | "patent" | "weight" | "maxWeight" | "credit", 
        value: string | string[]
    ) => void
}

export const CharactersContext = createContext({} as CharactersContextType)

interface CharactersContextProps {
    children: ReactNode
}

export function CharactersContextProvider({children}: CharactersContextProps) {

    const [charactersState, dispatch] = useReducer(
        charactersReducer,
        {
            characters: [],
            characterToDisplay: null
        },
        () => {
            const StoarageJSON = localStorage.getItem(
                '@ficha-ordem:characters-state-1.0.0',
            )

            if(StoarageJSON){
                return JSON.parse(StoarageJSON)
            }

            return {
                characters: [],
                characterToDisplay: null
            }
        },
    )





    function createNewCharacter(character?: CharactersSheet) {
        const newCharacter: CharactersSheet = {
            id: String(new Date()) + String(Math.random()),
            expertise: [
                {
                    name: "Acrobacia",
                    trainedLevel: "none",
                    others: "",
                    principalAttribute: "AGI",
                    weightPenalty: true,
                    onlyWithExpertise: false,
                    special: false,
                    kit: false,
                },
                {
                    name: "Adestramento",
                    trainedLevel: "none",
                    others: "",
                    principalAttribute: "PRE",
                    weightPenalty: false,
                    onlyWithExpertise: true,
                    special: false,
                    kit: false,
                },
                {
                    name: "Artes",
                    trainedLevel: "none",
                    others: "",
                    principalAttribute: "PRE",
                    weightPenalty: false,
                    onlyWithExpertise: true,
                    special: false,
                    kit: false,
                },
                {
                    name: "Atletismo",
                    trainedLevel: "none",
                    others: "",
                    principalAttribute: "FOR",
                    weightPenalty: false,
                    onlyWithExpertise: false,
                    special: false,
                    kit: false,
                },
                {
                    name: "Atualidades",
                    trainedLevel: "none",
                    others: "",
                    principalAttribute: "INT",
                    weightPenalty: false,
                    onlyWithExpertise: false,
                    special: false,
                    kit: false,
                },
                {
                    name: "Ciências",
                    trainedLevel: "none",
                    others: "",
                    principalAttribute: "INT",
                    weightPenalty: false,
                    onlyWithExpertise: true,
                    special: false,
                    kit: false,
                },
                {
                    name: "Crime",
                    trainedLevel: "none",
                    others: "",
                    principalAttribute: "AGI",
                    weightPenalty: true,
                    onlyWithExpertise: true,
                    special: false,
                    kit: true,
                },
                {
                    name: "Diplomacia",
                    trainedLevel: "none",
                    others: "",
                    principalAttribute: "PRE",
                    weightPenalty: false,
                    onlyWithExpertise: false,
                    special: false,
                    kit: false,
                },
                {
                    name: "Eganação",
                    trainedLevel: "none",
                    others: "",
                    principalAttribute: "PRE",
                    weightPenalty: false,
                    onlyWithExpertise: false,
                    special: false,
                    kit: true,
                },
                {
                    name: "Fortitude",
                    trainedLevel: "none",
                    others: "",
                    principalAttribute: "VIG",
                    weightPenalty: false,
                    onlyWithExpertise: false,
                    special: false,
                    kit: false,
                },
                {
                    name: "Furtividade",
                    trainedLevel: "none",
                    others: "",
                    principalAttribute: "AGI",
                    weightPenalty: true,
                    onlyWithExpertise: false,
                    special: false,
                    kit: false,
                },
                {
                    name: "Iniciativa",
                    trainedLevel: "none",
                    others: "",
                    principalAttribute: "AGI",
                    weightPenalty: false,
                    onlyWithExpertise: false,
                    special: false,
                    kit: false,
                },
                {
                    name: "Intimidação",
                    trainedLevel: "none",
                    others: "",
                    principalAttribute: "PRE",
                    weightPenalty: false,
                    onlyWithExpertise: false,
                    special: false,
                    kit: false,
                },
                {
                    name: "Intuição",
                    trainedLevel: "none",
                    others: "",
                    principalAttribute: "PRE",
                    weightPenalty: false,
                    onlyWithExpertise: false,
                    special: false,
                    kit: false,
                },
                {
                    name: "Investigação",
                    trainedLevel: "none",
                    others: "",
                    principalAttribute: "INT",
                    weightPenalty: false,
                    onlyWithExpertise: false,
                    special: false,
                    kit: false,
                },
                {
                    name: "Luta",
                    trainedLevel: "none",
                    others: "",
                    principalAttribute: "FOR",
                    weightPenalty: false,
                    onlyWithExpertise: false,
                    special: false,
                    kit: false,
                },
                {
                    name: "Medicina",
                    trainedLevel: "none",
                    others: "",
                    principalAttribute: "INT",
                    weightPenalty: false,
                    onlyWithExpertise: false,
                    special: false,
                    kit: true,
                },
                {
                    name: "Ocultismo",
                    trainedLevel: "none",
                    others: "",
                    principalAttribute: "INT",
                    weightPenalty: false,
                    onlyWithExpertise: true,
                    special: false,
                    kit: false,
                },
                {
                    name: "Percepção",
                    trainedLevel: "none",
                    others: "",
                    principalAttribute: "PRE",
                    weightPenalty: false,
                    onlyWithExpertise: false,
                    special: false,
                    kit: false,
                },
                {
                    name: "Pilotagem",
                    trainedLevel: "none",
                    others: "",
                    principalAttribute: "AGI",
                    weightPenalty: false,
                    onlyWithExpertise: true,
                    special: false,
                    kit: false,
                },
                {
                    name: "Pontaria",
                    trainedLevel: "none",
                    others: "",
                    principalAttribute: "AGI",
                    weightPenalty: false,
                    onlyWithExpertise: true,
                    special: false,
                    kit: false,
                },
                {
                    name: "Profissão",
                    trainedLevel: "none",
                    others: "",
                    principalAttribute: "INT",
                    weightPenalty: false,
                    onlyWithExpertise: false,
                    special: true,
                    kit: false,
                },
                {
                    name: "Reflexos",
                    trainedLevel: "none",
                    others: "",
                    principalAttribute: "AGI",
                    weightPenalty: false,
                    onlyWithExpertise: false,
                    special: false,
                    kit: false,
                },
                {
                    name: "Religião",
                    trainedLevel: "none",
                    others: "",
                    principalAttribute: "PRE",
                    weightPenalty: false,
                    onlyWithExpertise: true,
                    special: false,
                    kit: false,
                },
                {
                    name: "Sobrevivência",
                    trainedLevel: "none",
                    others: "",
                    principalAttribute: "INT",
                    weightPenalty: false,
                    onlyWithExpertise: false,
                    special: false,
                    kit: false,
                },
                {
                    name: "Tática",
                    trainedLevel: "none",
                    others: "",
                    principalAttribute: "INT",
                    weightPenalty: false,
                    onlyWithExpertise: true,
                    special: false,
                    kit: false,
                },
                {
                    name: "Tecnologia",
                    trainedLevel: "none",
                    others: "",
                    principalAttribute: "INT",
                    weightPenalty: false,
                    onlyWithExpertise: true,
                    special: false,
                    kit: true,
                },
                {
                    name: "Vontade",
                    trainedLevel: "none",
                    others: "",
                    principalAttribute: "PRE",
                    weightPenalty: false,
                    onlyWithExpertise: false,
                    special: false,
                    kit: false,
                },
            ],
            attributes: {
                agility: "",
                intellect: "",
                presence: "",
                strength: "",
                vigor: ""
            },
            avatar: "",
            name: "",
            age: "",
            origin: "",
            class: "none",
            nex: "",
            pePerRound: "",
            movementInMeters: "",
            health: {
                maxHealth: "",
                actualHealth: ""
            },
            pePoints: {
                maxPE: "",
                actualPE: ""
            },
            sanity: {
                maxSanity: "",
                actualSanity: ""
            },
            defense: "",
            dodge: "",
            blockReductionDamage: "",
            protections: [],
            resistances: [],
            attacks: [],
            skills: [],
            rituals: [],
            inventory: {
                prestige: "",
                itemsLimit: ["0", "0", "0", "0"],
                creditLimit: "none",
                patent: "",
                loadout: {
                    maxLoadout: "",
                    actualLoadout: ""
                },
                items: [],
            },
            description: {
                appearance: [],
                personality: [],
                history: [],
                objectives: []
            },
        }
        dispatch(createNewCharacterAction(character ? character : newCharacter))
    }

    function deleteCharacter(id: string) {
        dispatch(deleteCharacterAction(id))
    }

    function displayCharacter(id: string) {
        dispatch(displayCharacterAction(id))
    }

    function changeAvatar(id: string, avatar: string){
        dispatch(changeAvatarAction(avatar, id))
    }

    function changeCharacterName(id: string, name: string) {
        dispatch(changeCharacterNameAction(name, id))
    }

    function changeCharacterAge (id: string, age: string) {
        dispatch(changeCharacterAgeAction(id, age))
    }

    function changeCharacterAttributes (id: string, attribute: string, value: string) {
        dispatch(changeCharacterAttributesAction(id, attribute, value))
    }

    function changeCharacterOrigin (id: string, origin: string) {
        dispatch(changeCharacterOriginAction(id, origin))
    }

    function changeCharacterClass (id: string, characterClass: "none" | "Combatente" | "Especialista" | "Ocultista") {
        dispatch(changeCharacterClassAction(id, characterClass))
    }

    function changeCharacterNex (id: string, nex: string) {
        dispatch(changeCharacterNexAction(id, nex))
    }

    function changeCharacterPePerRound(id: string, pePerRound: string){
        dispatch(changeCharacterPePerRoundAction(id, pePerRound))
    }

    function changeCharacterMovement(id: string, movement: string) {
        dispatch(changeCharacterMovementAction(id, movement))
    }

    function changeCharacterHealth(id: string, type: "max" | "current", value: string) {
        dispatch(changeCharacterHealthAction(id, type, value))
    }

    function changeCharacterPe(id: string, type: "max" | "current", value: string) {
        dispatch(changeCharacterPeAction(id, type, value))
    }

    function changeCharacterSanity(id: string, type: "max" | "current", value: string) {
        dispatch(changeCharacterSanityAction(id, type, value))
    }

    function changeCharacterDefenses(id: string, type: "defense" | "dodge" | "block", value: string) {
        dispatch(changeCharacterDefensesAction(id, type, value))
    }

    function changeCharacterProtectionAndResistances(id: string, toDelete: boolean, type: "protection" | "resistances", value: string) {
        dispatch(changeCharacterProtectionAndResistancesAction(id, toDelete, type, value))
    }

    function changeCharacterExpertise(
            id: string, 
            name: string, 
            trainedLevel: "none" | "Expert" | "Veterano" | "Treinado", 
            others: string,
            type: "trainedLevel" | "others"
        ) {
        dispatch(changeCharacterExpertiseAction(id, name, trainedLevel, others, type))
    }

    function changeCharacterAttacks(
        id: string,
        attackId: string,
        type: "delete" | "changeName" | "changeTestDiceQuantity" | "changeTestBonus" | "changeDamageDiceQuantity" | 
        "changeDamageDiceType" | "changeDamageBonus" | "changeCritical" | "changeRange" | "changeSpecial" | "addAttack",
        value: string | Rolls | Attack
    ) {
        dispatch(changeCharacterAttacksAction(id, attackId, type, value))
    }

    function changeCharacterSkills(
        id: string,
        skillId: string,
        type: "delete" | "addSkill" | "changeName" | "changeDescription" | "changeCost" | "changePage",
        value: string | Skill
    ) {
        dispatch(changeCharacterSkillsAction(id, skillId, type, value))
    }

    function exportImportCharacter(id: string, type: "exportAllCharacters" | "exportCharacter" | "importCharacter", event?: ChangeEvent<HTMLInputElement>) {
        let StateJSON = "";
        let fileName = "characters";
        switch(type){
            case "exportAllCharacters": {
                StateJSON = JSON.stringify(characters)
                handleCharacterExportation(StateJSON, fileName)
            }
            case "exportCharacter": {
                characters.map((character) => {
                    if(character.id == id){
                        StateJSON = JSON.stringify([character])
                        fileName = character.name ? character.name : "character"
                        handleCharacterExportation(StateJSON, fileName)
                    }
                })
            }
            case "importCharacter": {
                const fileReader = new FileReader();
                if(event?.target.files) {
                    fileReader.readAsText(event.target.files[0], "UTF-8");
                    fileReader.onload = (importedCharacters) => {
                    if(importedCharacters.target != null){
                        const toImportCharacters: CharactersSheet[] = JSON.parse(importedCharacters.target.result as string)
                        toImportCharacters.map((character: CharactersSheet) => {
                            if(
                                'id' in character &&
                                'expertise' in character &&
                                'attributes' in character &&
                                'avatar' in character &&
                                'name' in character &&
                                'age' in character &&
                                'origin' in character &&
                                'class' in character &&
                                'nex' in character &&
                                'pePerRound' in character &&
                                'movementInMeters' in character &&
                                'health' in character &&
                                'pePoints' in character &&
                                'sanity' in character &&
                                'defense' in character &&
                                'dodge' in character &&
                                'blockReductionDamage' in character &&
                                'protections' in character &&
                                'resistances' in character &&
                                'attacks' in character &&
                                'skills' in character &&
                                'rituals' in character &&
                                'inventory' in character &&
                                'description' in character
                            ){
                                const newCharacter = {...character, id: String(new Date()) + String(Math.random())}
                                createNewCharacter(newCharacter)
                            }
                        })
                    }
                };
                }
                
            }
            default: {

            }
        }
    }

    function handleCharacterExportation(StateJSON: any, fileName: string) {
        const blob = new Blob([StateJSON], { type: "application/json" });
        const href = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = href;
        link.download = `${fileName}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
    }

    function changeInventory(id: string, itemId: string, type: "addItem" | "delete" | "changeName" | "changeCategory" | 
    "changeSpaces" | "prestige" | "itemsLimit" | "patent" | "weight" | "maxWeight" | "credit", value: string | string[]) {
        dispatch(changeInventoryAction(id, itemId, type, value))
    }

    const {characters, characterToDisplayId} = charactersState

    useEffect(() => {
        const StateJSON = JSON.stringify(charactersState)
        localStorage.setItem('@ficha-ordem:characters-state-1.0.0', StateJSON)
    }, [charactersState])

    return(
        <CharactersContext.Provider
            value={{
                characters,
                characterToDisplayId,
                createNewCharacter,
                deleteCharacter,
                displayCharacter,
                changeAvatar,
                changeCharacterName,
                changeCharacterAge,
                changeCharacterAttributes,
                changeCharacterOrigin,
                changeCharacterClass,
                changeCharacterNex,
                changeCharacterPePerRound,
                changeCharacterMovement,
                changeCharacterHealth,
                changeCharacterPe,
                changeCharacterSanity,
                changeCharacterDefenses,
                changeCharacterProtectionAndResistances,
                changeCharacterExpertise,
                changeCharacterAttacks,
                changeCharacterSkills,
                exportImportCharacter,
                changeInventory
            }}
        >
            {children}
        </CharactersContext.Provider>
    )
}