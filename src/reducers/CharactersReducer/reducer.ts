import produce from "immer"
import { ActionsType } from "./actions"
import { Attributes, CharactersSheet } from "./charactersSheet"

interface CharactersState {
    characters: CharactersSheet[]
    characterToDisplayId: string | null
}

export function charactersReducer(state: CharactersState, action: any) {
    switch(action.type) {
        case ActionsType.DISPLAY_CHARACTER: {
            return produce(state, (draft) => {
                draft.characterToDisplayId = action.payload.id
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

        case ActionsType.CHANGE_CHARACTER_NAME: {
            return produce(state, (draft) => {
                draft.characters.map((character) => {
                    if(character.id == action.payload.id){
                        return character.name = action.payload.name
                    }
                    return character
                })
            })
        }

        case ActionsType.CHANGE_CHARACTER_AGE: {
            return produce(state, (draft) => {
                draft.characters.map((character) => {
                    if(character.id == action.payload.id){
                        return character.age = action.payload.age
                    }
                    return character
                })
            })
        }

        case ActionsType.CHANGE_ATTRIBUTES: {

            const attribute: "agility" | "strength" | "vigor" |"presence" | "intellect" = action.payload.attribute
            const value: string = action.payload.value

            return produce(state, (draft) => {
                draft.characters.map((character) => {
                    if (character.id == action.payload.id){
                        switch(attribute) {
                            case "agility": {
                                return character.attributes.agility = value
                            }
                            case "intellect": {
                                return character.attributes.intellect = value
                            }
                            case "strength": {
                                return character.attributes.strength = value
                            }
                            case "vigor": {
                                return character.attributes.vigor = value
                            }
                            case "presence": {
                                return character.attributes.presence = value
                            }
                        }
                    }
                    return character
                })
            }) 
        }

        case ActionsType.CHANGE_ORIGIN: {
            return produce(state, (draft) => {
                draft.characters.map((character) => {
                    if(character.id == action.payload.id){
                        return character.origin = action.payload.origin
                    }
                    return character
                })
            })
        }

        case ActionsType.CHANGE_CLASS: {
            return produce(state, (draft) => {
                draft.characters.map((character) => {
                    if(character.id == action.payload.id){
                        return character.class = action.payload.characterClass
                    }
                    return character
                })
            })
        }

        case ActionsType.CHANGE_NEX: {
            return produce(state, (draft) => {
                draft.characters.map((character) => {
                    if(character.id == action.payload.id){
                        return character.nex = action.payload.nex
                    }
                    return character
                })
            })
        }

        case ActionsType.CHANGE_PE_PER_ROUND: {
            return produce(state, (draft) => {
                draft.characters.map((character) => {
                    if(character.id == action.payload.id){
                        return character.pePerRound = action.payload.pePerRound
                    }
                    return character
                })
            })
        }

        case ActionsType.CHANGE_MOVEMENT: {
            return produce(state, (draft) => {
                draft.characters.map((character) => {
                    if(character.id == action.payload.id){
                        return character.movementInMeters = action.payload.movement
                    }
                    return character
                })
            })
        }

        case ActionsType.CHANGE_HEALTH: {
            return produce(state, (draft) => {
                draft.characters.map((character) => {
                    if(character.id == action.payload.id) {
                        switch(action.payload.type) {
                            case "max": {
                                return character.health.maxHealth = action.payload.value
                            }
                            case "current": {
                                return character.health.actualHealth = action.payload.value
                            }
                        }
                    }
                    return character
                })
            })
        }

        case ActionsType.CHANGE_PE_POINTS: {
            return produce(state, (draft) => {
                draft.characters.map((character) => {
                    if(character.id == action.payload.id) {
                        switch(action.payload.type) {
                            case "max": {
                                return character.pePoints.maxPE = action.payload.value
                            }
                            case "current": {
                                return character.pePoints.actualPE = action.payload.value
                            }
                        }
                    }
                    return character
                })
            })
        }

        case ActionsType.CHANGE_SANITY: {
            return produce(state, (draft) => {
                draft.characters.map((character) => {
                    if(character.id == action.payload.id) {
                        switch(action.payload.type) {
                            case "max": {
                                return character.sanity.maxSanity = action.payload.value
                            }
                            case "current": {
                                return character.sanity.actualSanity = action.payload.value
                            }
                        }
                    }
                    return character
                })
            })
        }

        case ActionsType.CHANGE_DEFENSES: {
            return produce(state, (draft) => {
                draft.characters.map((character) => {
                    if(character.id == action.payload.id) {
                        switch(action.payload.type) {
                            case "defense": {
                                return character.defense= action.payload.value
                            }
                            case "dodge": {
                                return character.dodge = action.payload.value
                            }
                            case "block": {
                                return character.blockReductionDamage = action.payload.value
                            }
                        }
                    }
                    return character
                })
            })
        }

        case ActionsType.CHANGE_PROTECTIONS_AND_RESISTANCES: {
            return produce(state, (draft) => {
                draft.characters.map((character) => {
                    if(character.id == action.payload.id) {
                        if(action.payload.toDelete == true) {
                            switch(action.payload.type) {
                                case "protection": {
                                    const newProtections: string[] = []
                                    character.protections
                                    .filter((protection) => protection != action.payload.value)
                                    .map((protection) => {
                                        newProtections.push(protection)
                                    })
                                    return character.protections = newProtections
                                }
                                case "resistances": {
                                    const newResistances: string[] = []
                                    character.resistances
                                    .filter((resistance) => resistance != action.payload.value)
                                    .map((resistance) => {
                                        newResistances.push(resistance)
                                    })
                                    return character.resistances = newResistances
                                }
                            }
                        } else {
                            switch(action.payload.type) {
                                case "protection": {
                                    return character.protections.push(action.payload.value)
                                }
                                case "resistances": {
                                    return character.resistances.push(action.payload.value)
                                }
                            }
                        }
                    }
                    return character
                })
            })
        }

        case ActionsType.CHANGE_EXPERTISE: {
            return produce(state, (draft) => {
                draft.characters.map((character) => {
                    if(character.id == action.payload.id) {
                        character.expertise.map((expertise) => {
                            if(expertise.name == action.payload.name){
                                switch(action.payload.type){
                                    case "trainedLevel":
                                        return expertise.trainedLevel = action.payload.trainedLevel
                                    case "others":
                                        return expertise.others = action.payload.others
                                }
                            }
                        })
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