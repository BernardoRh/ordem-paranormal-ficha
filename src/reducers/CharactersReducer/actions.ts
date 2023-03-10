import { Rolls } from './../../components/Rolldice/index';
import { Attack, CharactersSheet, Skill } from './charactersSheet';

export enum ActionsType{
    IMPORT_EXPORT_CHARACTER = 'IMPORT_EXPORT_CHARACTER',
    ADD_NEW_CHARACTER = 'ADD_NEW_CHARACTER',
    CHANGE_CHARACTER_AGE = 'CHANGE_CHARACTER_AGE',
    CHANGE_CHARACTER_NAME = 'CHANGE_CHARACTER_NAME',
    DISPLAY_CHARACTER = 'CHARACTER_TO_DISPLAY',
    DELETE_CHARACTER = 'DELETE_CHARACTER',
    CHANGE_AVATAR = 'CHANGE_AVATAR',
    CHANGE_ATTRIBUTES = 'CHANGE_ATTRIBUTES',
    CHANGE_ORIGIN = 'CHANGE_ORIGIN',
    CHANGE_CLASS = 'CHANGE_CLASS',
    CHANGE_NEX = "CHANGE_NEX",
    CHANGE_PE_PER_ROUND = 'CHANGE_PE_PER_ROUND',
    CHANGE_MOVEMENT = 'CHANGE_MOVEMENT',
    CHANGE_HEALTH = 'CHANGE_HEALTH',
    CHANGE_PE_POINTS = 'CHANGE_PE_POINTS',
    CHANGE_SANITY = 'CHANGE_SANITY',
    CHANGE_DEFENSES = 'CHANGE_DEFENSES',
    CHANGE_PROTECTIONS_AND_RESISTANCES = 'CHANGE_PROTECTIONS_AND_RESISTANCES',
    CHANGE_EXPERTISE = 'CHANGE_EXPERTISE',
    CHANGE_ATTACKS = 'CHANGE_ATTACKS', 
    CHANGE_SKILLS = 'CHANGE_SKILLS',
    CHANGE_RITUALS = 'CHANGE_RITUALS', /* */
    IMPORT_EXPORT_RITUALS = 'IMPORT_EXPORT_RITUALS', /* */
    CHANGE_INVENTORY = 'CHANGE_INVENTORY',
    CHANGE_DESCRIPTION = 'CHANGE_DESCRIPTION', /* */
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

export function changeCharacterDefensesAction(id: string, type: "defense" | "dodge" | "block", value: string) {
    return {
        type: ActionsType.CHANGE_DEFENSES,
        payload: {
            id,
            type,
            value,
        }
    }
}

export function changeCharacterProtectionAndResistancesAction(
        id: string, 
        toDelete: boolean, 
        type: "protection" | "resistances", 
        value: string
    ) {
    return {
        type: ActionsType.CHANGE_PROTECTIONS_AND_RESISTANCES,
        payload: {
            id,
            toDelete,
            type,
            value,
        }
    }
}

export function changeCharacterExpertiseAction(
        id: string,
        name: string,
        trainedLevel: "none" | "Expert" | "Veterano" | "Treinado",
        others: string,
        type: "trainedLevel" | "others"
    ) {
    return{
        type: ActionsType.CHANGE_EXPERTISE,
        payload: {
            id,
            name,
            trainedLevel,
            others,
            type
        }
    }
}

export function changeCharacterAttacksAction(
        id: string,
        attackId: string,
        type: "delete" | "changeName" | "changeTestDiceQuantity" | "changeTestBonus" | "changeDamageDiceQuantity" | 
        "changeDamageDiceType" | "changeDamageBonus" | "changeCritical" | "changeRange" | "changeSpecial" | "addAttack",
        value: string | Rolls | Attack
    ) {
        return {
            type: ActionsType.CHANGE_ATTACKS,
            payload: {
                id, attackId, type, value
            }
        }
}

export function changeCharacterSkillsAction(
    id: string,
    skillId: string,
    type: "delete" | "addSkill" | "changeName" | "changeDescription" | "changeCost" | "changePage",
    value: string | Skill
) {
    return {
        type: ActionsType.CHANGE_SKILLS,
        payload: {
            id, skillId, type, value
        }
    }
}

export function changeInventoryAction(
        id: string, 
        itemId: string, 
        type: "addItem" | "delete" | "changeName" | "changeCategory" | 
        "changeSpaces" | "prestige" | "itemsLimit" | "patent" | "weight" | "maxWeight" | "credit", 
        value: string | string[]
    ) {
    return {
        type: ActionsType.CHANGE_INVENTORY,
        payload: {
            id,
            itemId,
            type,
            value
        }
    }
}

export function changeRitualsAction(
    id: string,
    ritualId: string,
    subDescriptionId: string,
    multipleRollId: string,
    rollId: string,
    type: "addRitual" | "delete" | "name" | "type" | "level" | "duration" |
    "execution" | "range" | "resistance" | "target" | "studiedShow" | "studiedCost" | "studiedEffect" | "trulyShow" |
    "trulyCost" | "trulyEffect" | "description" | "addSubDescription" | "deleteSubDescription" | "subDescriptionName" |
    "DescriptionDescriptionSub" | "addMultipleRolls" | "deleteMultipleRolls" | "addRoll" | "deleteRoll" |
    "rollBonus" | "rollCritical" | "rollDamageType" | "rollDiceType" | "rollDiceQuantity" | "rollIsDamage",
    value: string | boolean
) {
    return {
        type: ActionsType.CHANGE_RITUALS,
        payload: {
            id, ritualId, subDescriptionId,
            multipleRollId, rollId, type, value
        }
    }
}