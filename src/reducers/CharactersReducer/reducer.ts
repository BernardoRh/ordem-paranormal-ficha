import produce from "immer"
import { Rolls } from "../../components/Rolldice"
import { ActionsType } from "./actions"
import { Attack, CharactersSheet, Item, MultipleRolls, Ritual, RitualSubDescription, Skill } from "./charactersSheet"

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

        case ActionsType.CHANGE_ATTACKS: {
            return produce(state, (draft) => {
                draft.characters.map((character) => {
                    if(character.id == action.payload.id) {
                        switch(action.payload.type){
                            case "delete": {
                                let newAttacks: Attack[] = []
                                character.attacks.map((attack) => {
                                    if(attack.id != action.payload.attackId){
                                        return newAttacks.push(attack)
                                    }
                                })
                                return character.attacks = newAttacks
                            }
                            case "addAttack": {
                                return character.attacks.push(action.payload.value)
                            }
                            default: {
                                character.attacks.map((attack) => {
                                    if(attack.id == action.payload.attackId){
                                        switch(action.payload.type){
                                            case "changeName": {
                                                return attack.name = action.payload.value
                                            }
                                            case "changeTestDiceQuantity": {
                                                return attack.rollTest.quantity = action.payload.value
                                            }
                                            case "changeTestBonus": {
                                                return attack.rollTest.bonus = action.payload.value
                                            }
                                            case"changeDamageDiceQuantity": {
                                                return attack.damage.quantity = action.payload.value
                                            }
                                            case"changeDamageDiceType": {
                                                return attack.damage.diceType = action.payload.value
                                            }
                                            case"changeDamageBonus": {
                                                return attack.damage.bonus = action.payload.value
                                            }
                                            case"changeCritical": {
                                                return attack.critical = action.payload.value
                                            }
                                            case"changeRange": {
                                                return attack.range = action.payload.value
                                            }
                                            case "changeSpecial": {
                                                return attack.especial = action.payload.value
                                            }
                                            case "changeDamageType": {
                                                return attack.damage.damageType = action.payload.value
                                            }
                                        }
                                    }
                                })
                            }
                        }
                    }
                    return character
                })
            })
        }

        case ActionsType.CHANGE_SKILLS: {
            return produce(state, (draft) => {
                draft.characters.map((character) => {
                    if(character.id == action.payload.id) {
                        switch(action.payload.type){
                            case "delete": {
                                let newSkills: Skill[] = []
                                character.skills.map((skill) => {
                                    if(skill.id != action.payload.skillId){
                                        return newSkills.push(skill)
                                    }
                                })
                                return character.skills = newSkills
                            }
                            case "addSkill": {
                                return character.skills.push(action.payload.value)
                            }
                            default: {
                                character.skills.map((skill) => {
                                    if(skill.id == action.payload.skillId){
                                        switch(action.payload.type){
                                            case "changeName": {
                                                return skill.name = action.payload.value
                                            }
                                            case "changeDescription": {
                                                return skill.description = action.payload.value
                                            }
                                            case "changeCost": {
                                                return skill.cost = action.payload.value
                                            }
                                            case "changePage": {
                                                return skill.page = action.payload.value
                                            }
                                        }
                                    }
                                })
                            }
                        }
                    }
                    return character
                })
            })
        }

        case ActionsType.CHANGE_INVENTORY: {
            return produce(state, (draft) => {
                draft.characters.map((character) => {
                    if(character.id == action.payload.id) {
                        switch(action.payload.type) {
                            case "addItem": {
                                const newItem = {
                                    id: String(new Date()),
                                    item: "",
                                    category: "",
                                    spaces: "",
                                }
                                character.inventory.items.push(newItem)
                            }
                            case "delete": {
                                const newItems: Item[] = []
                                character.inventory.items.map((item) => {
                                    if(item.id != action.payload.itemId){
                                        newItems.push(item)
                                    }
                                })
                                return character.inventory.items = newItems
                            }
                            case "prestige": {
                                return character.inventory.prestige = action.payload.value
                            }
                            case "itemsLimit": {
                                return character.inventory.itemsLimit = action.payload.value
                            }
                            case "patent": {
                                return character.inventory.patent = action.payload.value
                            }
                            case "weight": {
                                return character.inventory.loadout.actualLoadout = action.payload.value
                            }
                            case "maxWeight": {
                                return character.inventory.loadout.maxLoadout = action.payload.value
                            }
                            case "credit": {
                                return character.inventory.creditLimit = action.payload.value
                            }
                            default: {
                                character.inventory.items.map((item) => {
                                    if(item.id == action.payload.itemId){
                                        switch(action.payload.type) {
                                            case "changeName": {
                                                return item.item = action.payload.value
                                            }
                                            case "changeCategory": {
                                                return item.category = action.payload.value
                                            }
                                            case "changeSpaces": {
                                                return item.spaces = action.payload.value
                                            }
                                        }
                                    }
                                })
                            }
                        }
                    }
                    return character
                })
            })
        }

        case ActionsType.CHANGE_RITUALS: {
            return produce(state, (draft) => {
                draft.characters.map((character) => {
                    if(character.id == action.payload.id) {
                        switch(action.payload.type) {
                            case "addRitual": {
                                return character.rituals.push(action.payload.value)
                            }
                            case "delete": {
                                const newRituals: Ritual[] = []
                                character.rituals.map((ritual) => {
                                    if(ritual.id != action.payload.ritualId){
                                        newRituals.push(ritual)
                                    }
                                })
                                return character.rituals = newRituals
                            }
                            default: {
                                character.rituals.map((ritual) => {
                                    if(ritual.id == action.payload.ritualId) {
                                        switch(action.payload.block){
                                            case "subDescription": {
                                                switch(action.payload.type){
                                                    case "addSubDescription": {
                                                        const newSubDescription: RitualSubDescription = {
                                                            id: String(new Date) + String(Math.random()),
                                                            name: "",
                                                            description: ""
                                                        }
                                                        return ritual.description.subDescriptions.push(newSubDescription)
                                                    }
                                                    case "deleteSubDescription": {
                                                        const newSubDescription: RitualSubDescription[] = []
                                                        ritual.description.subDescriptions.map((subDescription) => {
                                                            if(subDescription.id != action.payload.subDescriptionId){
                                                                newSubDescription.push(subDescription)
                                                            }
                                                        })
                                                        return ritual.description.subDescriptions = newSubDescription
                                                    }
                                                    default: {
                                                        ritual.description.subDescriptions.map((subDescription) => {
                                                            if(subDescription.id == action.payload.subDescriptionId){
                                                                switch(action.payload.type) {
                                                                    case "DescriptionDescriptionSub": {
                                                                        return subDescription.description = action.payload.value
                                                                    }
                                                                    case "subDescriptionName": {
                                                                        return subDescription.name = action.payload.value
                                                                    }
                                                                }
                                                            }
                                                        })
                                                    }
                                                }
                                            }
                                            case "multipleRolls": {
                                                switch(action.payload.type){
                                                    case "deleteMultipleRolls": {
                                                        const newMultipleRolls: MultipleRolls[] = []
                                                        ritual.multipleRolls.map((multipleRoll) => {
                                                            if(multipleRoll.id != action.payload.multipleRollId){
                                                                newMultipleRolls.push(multipleRoll)
                                                            }
                                                        })
                                                        return ritual.multipleRolls = newMultipleRolls
                                                    }
                                                    case "addMultipleRolls": {
                                                        const newRoll: MultipleRolls = {
                                                            id: String(new Date) + String(Math.random()),
                                                            rolls: [
                                                                {
                                                                    id: String(new Date) + String(Math.random()),
                                                                    diceType: "4",
                                                                    isDamage: false,
                                                                    bonus: "",
                                                                    quantity: ""
                                                                }
                                                            ],
                                                            name: ""
                                                        }
                                                        return ritual.multipleRolls.push(newRoll)
                                                    }
                                                    default: {
                                                        return ritual
                                                    }
                                                }
                                            }
                                            case "rolls": {
                                                ritual.multipleRolls.map((multipleRoll) => {
                                                    if(multipleRoll.id == action.payload.multipleRollId){
                                                        switch(action.payload.type){
                                                            case "multipleRollsName": {
                                                                return multipleRoll.name = action.payload.value
                                                            }
                                                            case "addRoll": {
                                                                const newRoll: Rolls = {
                                                                    id: String(new Date) + String(Math.random()),
                                                                    diceType: "4",
                                                                    quantity: "",
                                                                    isDamage: false
                                                                }
                                                                multipleRoll.rolls.push(newRoll)
                                                            }
                                                            case "deleteRoll": {
                                                                const newRolls: Rolls[] = []
                                                                multipleRoll.rolls.map((roll) => {
                                                                    if(roll.id != action.payload.rollId){
                                                                        newRolls.push(roll)
                                                                    }
                                                                })
                                                                return multipleRoll.rolls = newRolls
                                                            }
                                                            default: {
                                                                multipleRoll.rolls.map((roll) => {
                                                                    if(roll.id == action.payload.rollId) {
                                                                        switch(action.payload.type) {
                                                                            case "rollBonus": {
                                                                                return roll.bonus = action.payload.value
                                                                            }
                                                                            case "rollCritical": {
                                                                                return roll.critical = action.payload.value
                                                                            }
                                                                            case "rollDamageType": {
                                                                                return roll.damageType = action.payload.value
                                                                            }
                                                                            case "rollDiceType": {
                                                                                return roll.diceType = action.payload.value
                                                                            }
                                                                            case "rollDiceQuantity": {
                                                                                return roll.quantity = action.payload.value
                                                                            }
                                                                            case "rollIsDamage": {
                                                                                return roll.isDamage = action.payload.value
                                                                            }
                                                                            default: {
                                                                                return roll
                                                                            }
                                                                        }
                                                                    }
                                                                })
                                                            }
                                                        }
                                                    }
                                                })
                                            }
                                            default: {
                                                switch(action.payload.type){
                                                    case "name": {
                                                        return ritual.name = action.payload.value 
                                                    }
                                                    case "type": {
                                                        return ritual.type = action.payload.value 
                                                    }
                                                    case "level": {
                                                        return ritual.level = action.payload.value 
                                                    }
                                                    case "duration": {
                                                        return ritual.duration = action.payload.value 
                                                    }
                                                    case "execution": {
                                                        return ritual.execution = action.payload.value 
                                                    }
                                                    case "range": {
                                                        return ritual.range = action.payload.value 
                                                    }
                                                    case "resistance": {
                                                        return ritual.resistance = action.payload.value 
                                                    }
                                                    case "target": {
                                                        return ritual.target = action.payload.value
                                                    }
                                                    case "studiedShow": {
                                                        return ritual.studied.isActive = action.payload.value 
                                                    }
                                                    case "studiedCost": {
                                                        return ritual.studied.additionalCost = action.payload.value 
                                                    }
                                                    case "studiedEffect": {
                                                        return ritual.studied.additionalEffect = action.payload.value 
                                                    }
                                                    case "trulyShow": {
                                                        return ritual.truly.isActive = action.payload.value 
                                                    }
                                                    case "trulyCost": {
                                                        return ritual.truly.additionalCost = action.payload.value 
                                                    }
                                                    case "trulyEffect": {
                                                        return ritual.truly.additionalEffect = action.payload.value 
                                                    }
                                                    case "description": {
                                                        return ritual.description.principal = action.payload.value 
                                                    }
                                                    default: {
                                                        return ritual
                                                    }
                                                }
                                            }
                                        }
                                    }
                                })   
                            }
                        }
                    }
                })
            })
        }
        default:
            return state
    }
}