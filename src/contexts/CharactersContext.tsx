import { ReactNode, createContext, useEffect, useReducer, useState } from "react";
import {
    ActionsType, createNewCharacterAction, changeCharacterAgeAction,
    changeCharacterNameAction, deleteCharacterAction, displayCharacterAction,
    changeAvatarAction
} from "../reducers/CharactersReducer/actions";
import { CharactersSheet } from "../reducers/CharactersReducer/charactersSheet";
import { charactersReducer } from "../reducers/CharactersReducer/reducer";

interface CharactersContextType {
    characters: CharactersSheet[],
    characterToDisplay: string | null,
    displayCharacter: (id: string) => void,
    createNewCharacter: () => void,
    deleteCharacter: (id: string) => void,
    changeAvatar: (id: string, avatar: string) => void
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
                    name: "Acrobacia"
                },
                {
                    name: "Adestramento"
                },
                {
                    name: "Artes"
                },
                {
                    name: "Atletismo"
                },
                {
                    name: "Atualidades"
                },
                {
                    name: "Ciências"
                },
                {
                    name: "Crime"
                },
                {
                    name: "Diplomacia"
                },
                {
                    name: "Eganação"
                },
                {
                    name: "Fortitude"
                },
                {
                    name: "Furtividade"
                },
                {
                    name: "Iniciativa"
                },
                {
                    name: "Intimidação"
                },
                {
                    name: "Investigação"
                },
                {
                    name: "Luta"
                },
                {
                    name: "Medicina"
                },
                {
                    name: "Ocultismo"
                },
                {
                    name: "Percepção"
                },
                {
                    name: "Pilotagem"
                },
                {
                    name: "Pontaria"
                },
                {
                    name: "Profissão"
                },
                {
                    name: "Reflexos"
                },
                {
                    name: "Religião"
                },
                {
                    name: "Sobrevivência"
                },
                {
                    name: "Tática"
                },
                {
                    name: "Tecnologia"
                },
                {
                    name: "Vontade"
                },
            ]
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

    const {characters, characterToDisplay} = charactersState

    useEffect(() => {
        const StateJSON = JSON.stringify(charactersState)
        localStorage.setItem('@ficha-ordem:characters-state-1.0.0', StateJSON)
    }, [charactersState])

    return(
        <CharactersContext.Provider
            value={{
                characters,
                characterToDisplay,
                createNewCharacter,
                deleteCharacter,
                displayCharacter,
                changeAvatar,
            }}
        >
            {children}
        </CharactersContext.Provider>
    )
}