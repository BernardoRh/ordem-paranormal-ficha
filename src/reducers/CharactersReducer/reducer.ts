import produce from "immer"
import { Rolls } from "../../pages/Characters/Char/CharacterInfo/components/Rolls/components/Rolldice"
import { ActionsType } from "./actions"
import { Attack, CharactersSheet, Item, MultipleRolls, Objectives, Pages, Personality, Ritual, RitualSubDescription, Skill } from "./charactersSheet"
import { rollsForLastRollsResults } from "../../pages/Characters/Char/CharacterInfo/components/Rolls/components/LastRolls"
import { resultType } from "../../pages/Characters/Char/CharacterInfo/components/Rolls/components/Rolldice/components/RollRow"

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
                        switch(action.payload.type) {
                            case "deleteAvatar": {
                                return character.avatar = ""
                            }
                            case "changeAvatar": {
                                return character.avatar = action.payload.avatar
                            }
                        }
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
                                                                    quantity: "",
                                                                    damageType: ritual.type == "none" ? undefined : ritual.type,
                                                                }
                                                            ],
                                                            name: ritual.name
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
                                                                    isDamage: false,
                                                                    damageType: ritual.type == "none" ? "slash" : ritual.type,
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

        case ActionsType.CHANGE_DIARY: {
            return produce(state, (draft) => {
                draft.characters.map((character) => {
                    if(character.id == action.payload.id){
                        switch(action.payload.block){
                            case "personality": {
                                switch(action.payload.type){
                                    case "addPersonality": {
                                        const newPersonality: Personality = {
                                            id: String(new Date) + String(Math.random()),
                                            personality: action.payload.value
                                        }
                                        return character.diary.personality.push(newPersonality)
                                    }
                                    case "deletePersonality": {
                                        const personalities: Personality[] = []
                                        character.diary.personality.map((personality) => {
                                            if(personality.id != action.payload.personalityId){
                                                personalities.push(personality)
                                            }
                                        })
                                        return character.diary.personality = personalities
                                    }
                                }
                            }
                            case "history": {
                                return character.diary.history = action.payload.value
                            }
                            case "objectives": {
                                switch(action.payload.type){
                                    case "addObjectiveNote": {
                                        const newObjective: Objectives = {
                                            id: String(new Date) + String(Math.random()),
                                            title: "",
                                            info: "",
                                            isImage: false,
                                            rotation: String((Math.random() * 2.5 + 1.5) * (Math.random() > 0.5 ? 1 : -1)),
                                            image: ""
                                        }
                                        return character.diary.objectives.push(newObjective)
                                    }
                                    case "addObjectiveNoteImage": {
                                        const newObjective: Objectives = {
                                            id: String(new Date) + String(Math.random()),
                                            title: "",
                                            info: "",
                                            isImage: true,
                                            rotation: String((Math.random() * 2.5 + 1.5) * (Math.random() > 0.5 ? 1 : -1)),
                                            image: action.payload.value
                                        }
                                        return character.diary.objectives.push(newObjective)
                                    }
                                    case "deleteObjective" : {
                                        const objectives: Objectives[] = []
                                        character.diary.objectives.map((objective) => {
                                            if(objective.id != action.payload.objectiveId){
                                                objectives.push(objective)
                                            }
                                        })
                                        return character.diary.objectives = objectives
                                    }
                                    default: {
                                        character.diary.objectives.map((objective) => {
                                            if(objective.id != action.payload.objectiveId){
                                                switch(action.payload.type){
                                                    case "changeObjectiveTitle": {
                                                        console.log("title")
                                                        return objective.title = action.payload.value
                                                    }
                                                    case "changeObjectiveInfo": {
                                                        console.log("info")
                                                        return objective.info = action.payload.value
                                                    }
                                                }
                                            }
                                        })
                                    }
                                }
                            }
                            case "pages": {
                                switch(action.payload.type){
                                    case "addPage": {
                                        const newPage: Pages = {
                                            id: String(new Date) + String(Math.random()),
                                            title: "",
                                            notes: []
                                        }
                                        return character.diary.pages.push(newPage)
                                    }
                                    default: {
                                        character.diary.pages.map((page) => {
                                            if(page.id == action.payload.pageId){
                                                switch(action.payload.type){
                                                    case "pageTitle": {
                                                        return page.title = action.payload.value
                                                    }
                                                    case "addNote": {
                                                        const newNote: Objectives = {
                                                            id: String(new Date) + String(Math.random()),
                                                            title: "",
                                                            info: "",
                                                            isImage: false,
                                                            rotation: String((Math.random() * 2.5 + 1.5) * (Math.random() > 0.5 ? 1 : -1)),
                                                            image: ""
                                                        }
                                                        return page.notes.push(newNote)
                                                    }
                                                    case "addNoteImage": {
                                                        const newNote: Objectives = {
                                                            id: String(new Date) + String(Math.random()),
                                                            title: "",
                                                            info: "",
                                                            isImage: true,
                                                            rotation: String((Math.random() * 2.5 + 1.5) * (Math.random() > 0.5 ? 1 : -1)),
                                                            image: action.payload.value
                                                        }
                                                        return page.notes.push(newNote)
                                                    }
                                                    case "deleteNote": {
                                                        const notes: Objectives[] = []
                                                        page.notes.map((note) => {
                                                            if(note.id != action.payload.noteId) {
                                                                notes.push(note)
                                                            }
                                                        })
                                                        return page.notes = notes
                                                    }
                                                    default: {
                                                        page.notes.map((note) => {
                                                            if(note.id == action.payload.noteId){
                                                                switch(action.payload.type){
                                                                    case "changeNoteTitle": {
                                                                        return note.title = action.payload.value
                                                                    }
                                                                    case "changeNoteInfo": {
                                                                        return note.info = action.payload.value
                                                                    }
                                                                }
                                                            }
                                                        })
                                                    }
                                                }
                                            }
                                        })
                                    }
                                }
                            }
                        }
                    }
                })
            })
        }

        case ActionsType.CHANGE_ROLL: {
            return produce(state, (draft) => {
                draft.characters.map((character) => {
                    if(character.id == action.payload.id){
                        return character.roll = action.payload.dicesToRoll
                    }
                })
            })
        }
        
        case ActionsType.ADD_LAST_ROLLS: {
            return produce(state, (draft) => {
                draft.characters.map((character) => {
                    if(character.id == action.payload.id){
                        const alreadyExists = character.lastRolls.find((lastRoll) => {
                            if(lastRoll?.wrapperId == action.payload.wrapperId){
                                return true
                            } else {
                                return false
                            }
                        })
                        if(alreadyExists){
                            character.lastRolls.map((rolls) => {
                                return rolls.rollsForLastRolls = []
                            })
                        } else {
                            return character.lastRolls.push({
                                wrapperId: action.payload.wrapperId,
                                rollsForLastRolls: [],
                                name: action.payload.name,
                            })
                        }
                    }
                })
            })
        }

        case ActionsType.ADD_RESULTS_TO_LAST_ROLLS: {
            return produce(state, (draft) => {
                draft.characters.map((character) => {
                    if(character.id == action.payload.id){
                        character.lastRolls.map((lastRoll) => {
                            if(lastRoll.wrapperId == action.payload.wrapperId){
                                const alreadyExists = lastRoll.rollsForLastRolls.find((results) => {
                                    if(results.id == action.payload.value.id){
                                        return results
                                    } else {
                                        return undefined
                                    }
                                })
                                if(alreadyExists != undefined){
                                    
                                } else {
                                    return lastRoll.rollsForLastRolls.push(action.payload.value)
                                }
                            }
                        })
                    }
                })
            })
        }

        case ActionsType.CHANGE_RESULTS_TO_LAST_ROLLS: {
            return produce(state, (draft) => {
                draft.characters.map((character) => {
                    if(character.id == action.payload.id){
                        character.lastRolls.map((lastRoll) => {
                            if(lastRoll.wrapperId == action.payload.wrapperId){
                                lastRoll.rollsForLastRolls.map((results) => {
                                    if(results.id == action.payload.rollId){
                                        switch(action.payload.type){
                                            case "results": {
                                                return results.results = action.payload.value
                                            }
                                            case "vantageDisadvantage": {
                                                return results.vantage = action.payload.value
                                            }
                                            case "vantageDisadvantageDices": {
                                                return results.vantageDisadvantage = action.payload.value
                                            }
                                            case "isCritical": {
                                                return results.isCritical = action.payload.value
                                            }
                                            case "bestResult": {
                                                return results.bestResult = action.payload.value
                                            }
                                        }
                                    }
                                })
                            }
                        })
                    }
                })
            })
        }

        case ActionsType.CLEAN_ROLLS_HISTORIC: {
            return produce(state, (draft) => {
                draft.characters.map((character) => {
                    if(character.id == action.payload.id){
                        return character.lastRolls = []
                    }
                })
            })
        }

        default:
            return state
    }
}