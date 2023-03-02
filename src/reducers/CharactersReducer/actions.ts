import { CharactersSheet } from './charactersSheet';

export enum ActionsType{
    ADD_NEW_CHARACTER = 'ADD_NEW_CHARACTER', /* */
    CHANGE_CHARACTER_AGE = 'CHANGE_CHARACTER_AGE', /* */
    CHANGE_CHARACTER_NAME = 'CHANGE_CHARACTER_NAME', /* */
    DISPLAY_CHARACTER = 'CHARACTER_TO_DISPLAY', /* */
    DELETE_CHARACTER = 'DELETE_CHARACTER', /* */
    CHANGE_AVATAR = 'CHANGE_AVATAR', /* */
    CHANGE_ATTRIBUTES = 'CHANGE_ATTRIBUTES', /* */
    CHANGE_ORIGIN = 'CHANGE_ORIGIN', /* */
    CHANGE_CLASS = 'CHANGE_CLASS', /* */
    CHANGE_NEX = "CHANGE_NEX", /* */
    CHANGE_PE_PER_ROUND = 'CHANGE_PE_PER_ROUND', /* */
    CHANGE_MOVEMENT = 'CHANGE_MOVEMENT', /* */
    CHANGE_HEALTH = 'CHANGE_HEALTH', /* */
    CHANGE_PE_POINTS = 'CHANGE_PE_POINTS', /* */
    CHANGE_SANITY = 'CHANGE_SANITY', /* */
    CHANGE_DEFENSE = 'CHANGE_DEFENSE',
    CHANGE_DODGE = 'CHANGE_DODGE',
    CHANGE_BLOCK = 'CHANGE_BLOCK',
    CHANGE_PROTECTIONS = 'CHANGE_PROTECTIONS',
    CHANGE_RESISTANCES = 'CHANGE_RESISTANCES',
    CHANGE_EXPERTISE = 'CHANGE_EXPERTISE',
    CHANGE_ATTACKS = 'CHANGE_ATTACKS',
    CHANGE_SKILLS = 'CHANGE_SKILLS',
    CHANGE_RITUALS = 'CHANGE_RITUALS',
    CHANGE_PRESTIGE = 'CHANGE_PRESTIGE',
    CHANGE_LOADOUT = 'CHANGE_LOADOUT',
    CHANGE_INVENTORY = 'CHANGE_INVENTORY',
    CHANGE_DESCRIPTION = 'CHANGE_DESCRIPTION',
}

export function createNewCharacterAction(newCharacter: CharactersSheet) {
    return {
        type: ActionsType.ADD_NEW_CHARACTER,
        payload: {
            newCharacter,
        }
    }
}

export function changeCharacterAgeAction(id: string, age: string) {
    return {
        type: ActionsType.CHANGE_CHARACTER_AGE,
        payload: {
            age,
            id,
        }
    }
}

export function changeCharacterNameAction(name: string, id: string) {
    return {
        type: ActionsType.CHANGE_CHARACTER_NAME,
        payload: {
            name,
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

export function changeAvatarAction(avatar: string, id: string) {
    return {
        type: ActionsType.CHANGE_AVATAR,
        payload: {
            avatar,
            id,
        }
    }
}

export function changeCharacterAttributesAction(id: string, attribute: string, value: string) {
    return {
        type: ActionsType.CHANGE_ATTRIBUTES,
        payload: {
            id,
            attribute,
            value,
        }
    }
}

export function changeCharacterOriginAction(id: string, origin: string) {
    return{
        type: ActionsType.CHANGE_ORIGIN,
        payload: {
            id,
            origin,
        }
    }
}

export function changeCharacterClassAction(id: string, characterClass: "none" | "Combatente" | "Especialista" | "Ocultista") {
    return {
        type: ActionsType.CHANGE_CLASS,
        payload: {
            id,
            characterClass,
        }
    }
}

export function changeCharacterNexAction(id: string, nex: string) {
    return{
        type: ActionsType.CHANGE_NEX,
        payload: {
            id,
            nex,
        }
    }
}

export function changeCharacterPePerRoundAction(id: string, pePerRound: string) {
    return{
        type: ActionsType.CHANGE_PE_PER_ROUND,
        payload: {
            id,
            pePerRound,
        }
    }
}

export function changeCharacterMovementAction(id: string, movement: string) {
    return{
        type: ActionsType.CHANGE_MOVEMENT,
        payload: {
            id,
            movement,
        }
    }
}

export function changeCharacterHealthAction(id: string, type: "max" | "current", value: string) {
    return{
        type: ActionsType.CHANGE_HEALTH,
        payload: {
            id,
            type,
            value,
        }
    }
}

export function changeCharacterPeAction(id: string, type: "max" | "current", value: string) {
    return{
        type: ActionsType.CHANGE_PE_POINTS,
        payload: {
            id,
            type,
            value,
        }
    }
}

export function changeCharacterSanityAction(id: string, type: "max" | "current", value: string) {
    return{
        type: ActionsType.CHANGE_SANITY,
        payload: {
            id,
            type,
            value,
        }
    }
}