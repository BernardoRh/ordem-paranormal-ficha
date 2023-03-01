import { CharactersSheet } from './charactersSheet';

export enum ActionsType{
    ADD_NEW_CHARACTER = 'ADD_NEW_CHARACTER',
    CHANGE_CHARACTER_AGE = 'CHANGE_CHARACTER_AGE',
    CHANGE_CHARACTER_NAME = 'CHANGE_CHARACTER_NAME',
    DISPLAY_CHARACTER = 'CHARACTER_TO_DISPLAY',
    DELETE_CHARACTER = 'DELETE_CHARACTER',
    CHANGE_AVATAR = 'CHANGE_AVATAR',
}

export function createNewCharacterAction(newCharacter: CharactersSheet) {
    return {
        type: ActionsType.ADD_NEW_CHARACTER,
        payload: {
            newCharacter,
        }
    }
}

export function changeCharacterAgeAction(newAge: number, id: string) {
    return {
        type: ActionsType.CHANGE_CHARACTER_NAME,
        payload: {
            newAge,
            id,
        }
    }
}

export function changeCharacterNameAction(newName: string, id: string) {
    return {
        type: ActionsType.CHANGE_CHARACTER_NAME,
        payload: {
            newName,
            id,
        }
    }
}

export function displayCharacterAction(id: string) {
    return {
        type: ActionsType.DISPLAY_CHARACTER,
        payload: {
            id,
        }
    }
}

export function deleteCharacterAction(id: string) {
    return {
        type: ActionsType.DELETE_CHARACTER,
        payload: {
            id,
        }
    }
}

export function changeAvatarAction(avatar: string, id: string){
    return {
        type: ActionsType.CHANGE_AVATAR,
        payload: {
            avatar,
            id,
        }
    }
}