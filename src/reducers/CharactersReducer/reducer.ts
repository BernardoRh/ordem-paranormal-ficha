import produce from "immer"
import { ActionsType } from "./actions"
import { CharactersSheet } from "./charactersSheet"

interface CharactersState {
    characters: CharactersSheet[]
    characterToDisplay: string | null
}

export function charactersReducer(state: CharactersState, action: any) {

    switch(action.type) {
        case ActionsType.DISPLAY_CHARACTER: {
            return produce(state, (draft) => {
                draft.characterToDisplay = action.payload.id
            })
        }

        case ActionsType.ADD_NEW_CHARACTER: {
            return produce(state, (draft) => {
                draft.characters.push(action.payload.newCharacter)
            })
        }

        case ActionsType.DELETE_CHARACTER: {
            const newState: CharactersSheet[] = []
            
            state.characters.map((character) => {
                if(character.id != action.payload.id){
                    newState.push(character)
                }
            })

            return produce(state, (draft) => {
                draft.characters = newState
            })
        }

        case ActionsType.CHANGE_AVATAR: {
            return produce(state, (draft) => {
                draft.characters.map((character) => {
                    if(character.id == action.payload.id){
                        return character.avatar = action.payload.avatar
                    }
                    return character
                })
            })
        }

        default:
            console.log("DEFAULT")
            return state
    }
}