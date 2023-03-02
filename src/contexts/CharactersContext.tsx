import { ReactNode, createContext, useEffect, useReducer, useState } from "react";
import {
    ActionsType, createNewCharacterAction, changeCharacterAgeAction,
    changeCharacterNameAction, deleteCharacterAction, displayCharacterAction,
    changeAvatarAction, changeCharacterAttributesAction, changeCharacterOriginAction,
    changeCharacterClassAction, changeCharacterNexAction, changeCharacterPePerRoundAction,
    changeCharacterMovementAction,
    changeCharacterHealthAction,
    changeCharacterPeAction,
    changeCharacterSanityAction
} from "../reducers/CharactersReducer/actions";
import { CharactersSheet } from "../reducers/CharactersReducer/charactersSheet";
import { charactersReducer } from "../reducers/CharactersReducer/reducer";

interface CharactersContextType {
    characters: CharactersSheet[],
    characterToDisplayId: string | null,
    displayCharacter: (id: string) => void,
    createNewCharacter: () => void,
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





    function createNewCharacter() {
        const newCharacter: CharactersSheet = {
            id: String(new Date()),
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
            prestige: "",
            loadout: {
                maxLoadout: "",
                actualLoadout: ""
            },
            inventory: [],
            description: {
                appearance: [],
                personality: [],
                history: [],
                objectives: []
            },
            itemsLimit: [],
            creditLimit: "none",
            patent: ""
        }
        dispatch(createNewCharacterAction(newCharacter))
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
            }}
        >
            {children}
        </CharactersContext.Provider>
    )
}