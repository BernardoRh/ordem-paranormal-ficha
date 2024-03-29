import { ReactNode, createContext, useEffect, useReducer, useState, ChangeEvent } from "react";
import { RollDiceProps, Rolls } from "../../pages/Characters/Char/CharacterInfo/components/Rolls/components/Rolldice";
import {
    ActionsType, createNewCharacterAction, changeCharacterAgeAction,
    changeCharacterNameAction, deleteCharacterAction, displayCharacterAction,
    changeAvatarAction, changeCharacterAttributesAction, changeCharacterOriginAction,
    changeCharacterClassAction, changeCharacterNexAction, changeCharacterPePerRoundAction,
    changeCharacterMovementAction, changeCharacterHealthAction, changeCharacterPeAction,
    changeCharacterSanityAction, changeCharacterDefensesAction, changeCharacterProtectionAndResistancesAction,
    changeCharacterExpertiseAction, changeCharacterAttacksAction, changeCharacterSkillsAction,
    changeInventoryAction, changeRitualsAction, changeDiaryAction, rollingDicesAction, clearHistoryRollsAction,
    addLastRollAction, addResultsToLastRollsAction, changeResultsToLastRollsAction, updateCharacterToVersion, updateVersion,
} from "../../reducers/CharactersReducer/actions";
import { Attack, CharactersSheet, Ritual, Skill } from "../../reducers/CharactersReducer/charactersSheet";
import { charactersReducer } from "../../reducers/CharactersReducer/reducer";
import { rollsForLastRollsResults } from "../../pages/Characters/Char/CharacterInfo/components/Rolls/components/LastRolls";
import { resultType } from "../../pages/Characters/Char/CharacterInfo/components/Rolls/components/Rolldice/components/RollRow";

interface CharactersContextType {
    characters: CharactersSheet[],
    characterToDisplayId: string | null,
    displayCharacter: (id: string) => void,
    createNewCharacter: (character?: CharactersSheet) => void,
    deleteCharacter: (id: string) => void,
    changeAvatar: (id: string, type: "deleteAvatar" | "changeAvatar", avatar?: File) => void
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
        "changeDamageDiceType" | "changeDamageBonus" | "changeCritical" | "changeRange" | "changeSpecial" | "addAttack" |
        "changeDamageType" | "changeMultiplier" | "changeDicesOrTotal",
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
    changeRituals: (
        id: string,
        ritualId: string,
        subDescriptionId: string,
        multipleRollId: string,
        rollId: string,
        type: "addRitual" | "delete" | "name" | "type" | "level" | "duration" |
        "execution" | "range" | "resistance" | "target" | "studiedShow" | "studiedCost" | "studiedEffect" | "trulyShow" |
        "trulyCost" | "trulyEffect" | "description" | "addSubDescription" | "deleteSubDescription" | "subDescriptionName" |
        "DescriptionDescriptionSub" | "addMultipleRolls" | "deleteMultipleRolls" | "addRoll" | "deleteRoll" |
        "rollBonus" | "rollCritical" | "rollDamageType" | "rollDiceType" | "rollDiceQuantity" | "rollIsDamage" | "multipleRollsName" |
        "changeMultiplier" | "changeDicesOrTotal" | "changeCritical",
        block: "subDescription" | "multipleRolls" | "rolls" | "",
        value: string | boolean | Ritual
    ) => void
    exportImportRituals: (
        id: string,
        ritualId: string,
        type: "exportAllRituals" | "exportRitual" | "importRitual",
        event?: ChangeEvent<HTMLInputElement>
    ) => void
    changeDiary: (
        id: string,
        personalityId: string,
        objectiveId: string,
        pageId: string,
        noteId: string, 
        type: "addPersonality" | "deletePersonality" | "addObjectiveNote" | "addObjectiveNoteImage" | "deleteObjective" |
        "changeObjectiveTitle" | "changeObjectiveInfo" | "addPage" | "pageTitle" | "addNote" | "addNoteImage" | "deleteNote" |
        "changeNoteTitle" | "changeNoteInfo" | "history",
        block: "personality" | "history" | "objectives" | "pages",
        value: string | unknown,
    ) => void
    rollingDices: (id: string, dicesToRoll: RollDiceProps) => void
    addLastRoll: (
        id: string,
        wrapperId: string,
        name: string,
    ) => void
    addResultsToLastRolls: (
        id: string,
        wrapperId: string,
        value: rollsForLastRollsResults,
    ) => void
    changeResultsToLastRolls: (
        id: string,
        wrapperId: string,
        rollId: string,
        value: string | boolean | resultType | resultType[] | number,
        typeChange: "results" | "vantageDisadvantage" | "vantageDisadvantageDices" | "isCritical" | "bestResult"
    ) => void
    clearHistoryRolls: (id: string) => void
    copyCharacter: (id: string) => void
    copyRitual: (id: string) => void
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
            characterToDisplay: null,
            version: "1.1"
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
                characterToDisplay: null,
                version: "1.1"
            }
        },
    )

    function createNewCharacter(character?: CharactersSheet) {
        const newCharacter: CharactersSheet = {
            version: "1.1",
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
                itemsLimit: ["", "", "", ""],
                creditLimit: "none",
                patent: "",
                loadout: {
                    maxLoadout: "",
                    actualLoadout: ""
                },
                items: [],
            },
            diary: {
                personality: [],
                history: "",
                objectives: [],
                pages: []
            },
            avatar: "",
            roll: {
                wrapperId: "",
                showRoll: false,
                name: "",
                rolls: []
            },
            lastRolls: []
        }
        dispatch(createNewCharacterAction(character ? character : newCharacter))
    }

    function deleteCharacter(id: string) {
        dispatch(deleteCharacterAction(id))
    }

    function displayCharacter(id: string) {
        dispatch(displayCharacterAction(id))
    }

    function changeAvatar(id: string, type: "deleteAvatar" | "changeAvatar", avatar?: File){
        if(avatar != undefined){
            const newAvatar = new Promise((resolve, reject) => {
                const fileReader = new FileReader();
                fileReader.onload = () => resolve(fileReader.result);
                fileReader.readAsDataURL(avatar);
            });
            newAvatar.then(base64 => dispatch(changeAvatarAction(id, type, base64)))
        } else {
            dispatch(changeAvatarAction(id, type))
            changeCharacterName(id, "")
        }
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
        "changeDamageDiceType" | "changeDamageBonus" | "changeCritical" | "changeRange" | "changeSpecial" | "addAttack" |
        "changeDamageType" | "changeMultiplier" | "changeDicesOrTotal",
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
        let fileName = "Personagens";
        switch(type){
            case "exportAllCharacters": {
                StateJSON = JSON.stringify(characters)
                handleExportation(StateJSON, fileName)
            }
            case "exportCharacter": {
                characters.map((character) => {
                    if(character.id == id){
                        StateJSON = JSON.stringify([character])
                        fileName = character.name ? character.name : "Personagen"
                        handleExportation(StateJSON, fileName)
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
                            console.log(character)
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
                                'diary' in character
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

    function handleExportation(StateJSON: any, fileName: string) {
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

    function changeRituals(id: string, ritualId: string, subDescriptionId: string, multipleRollId: string, rollId: string,
        type: "addRitual" | "delete" | "name" | "type" | "level" | "duration" |
        "execution" | "range" | "resistance" | "target" | "studiedShow" | "studiedCost" | "studiedEffect" | "trulyShow" |
        "trulyCost" | "trulyEffect" | "description" | "addSubDescription" | "deleteSubDescription" | "subDescriptionName" |
        "DescriptionDescriptionSub" | "addMultipleRolls" | "deleteMultipleRolls" | "addRoll" | "deleteRoll" |
        "rollBonus" | "rollCritical" | "rollDamageType" | "rollDiceType" | "rollDiceQuantity" | "rollIsDamage" | "multipleRollsName" |
        "changeMultiplier" | "changeDicesOrTotal" | "changeCritical",
        block: "subDescription" | "multipleRolls" | "rolls" | "",
        value: string | boolean | Ritual
    ){
        dispatch(changeRitualsAction(id, ritualId, subDescriptionId, multipleRollId, rollId, type, block, value))
    }

    function exportImportRituals(id: string, ritualId: string, type: "exportAllRituals" | "exportRitual" | "importRitual", event?: ChangeEvent<HTMLInputElement>) {
        let StateJSON = "";
        let fileName = "Rituais";
        characters.map((character) => {
            if(character.id == id){
                switch(type){
                    case "exportAllRituals": {
                        StateJSON = JSON.stringify(character.rituals)
                        handleExportation(StateJSON, fileName)
                    }
                    case "exportRitual": {
                        character.rituals.map((ritual) => {
                            if(ritual.id == ritualId){
                                StateJSON = JSON.stringify([ritual])
                                fileName = ritual.name ? ritual.name : "Ritual"
                                handleExportation(StateJSON, fileName)
                            }
                        })
                    }
                    case "importRitual": {
                        const fileReader = new FileReader();
                        if(event?.target.files) {
                            fileReader.readAsText(event.target.files[0], "UTF-8");
                            fileReader.onload = (importedRituals) => {
                                if(importedRituals.target != null){
                                    const toImportCharacters: Ritual[] = JSON.parse(importedRituals.target.result as string)
                                    toImportCharacters.map((ritual: Ritual) => {
                                        if(
                                            "id" in ritual &&
                                            "name" in ritual &&
                                            "type" in ritual &&
                                            "level" in ritual &&
                                            "execution" in ritual &&
                                            "range" in ritual &&
                                            "target" in ritual &&
                                            "duration" in ritual &&
                                            "resistance" in ritual &&
                                            "description" in ritual &&
                                            "studied" in ritual &&
                                            "truly" in ritual &&
                                            "multipleRolls" in ritual
                                        ){
                                            const newRitual = {...ritual, id: String(new Date()) + String(Math.random())}
                                            changeRituals(character.id, "", "", "", "", "addRitual", "",newRitual)
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
        })
        
    }

    function changeDiary(
        id: string,
        personalityId: string,
        objectiveId: string,
        pageId: string,
        noteId: string, 
        type: "addPersonality" | "deletePersonality" | "addObjectiveNote" | "addObjectiveNoteImage" | "deleteObjective" |
        "changeObjectiveTitle" | "changeObjectiveInfo" | "addPage" | "pageTitle" | "addNote" | "addNoteImage" | "deleteNote" |
        "changeNoteTitle" | "changeNoteInfo" | "history",
        block: "personality" | "history" | "objectives" | "pages",
        value: string | unknown,
    ){
        dispatch(changeDiaryAction(id, personalityId, objectiveId, pageId, noteId, type, block, value))
    }

    function rollingDices(id: string, dicesToRoll: RollDiceProps){
        if(dicesToRoll.showRoll == true) {
        }
        dispatch(rollingDicesAction(id, dicesToRoll))
    }

    function addLastRoll(
        id: string,
        wrapperId: string,
        name: string,
    ){
        dispatch(addLastRollAction(id, wrapperId, name))
    }

    function addResultsToLastRolls (
        id: string,
        wrapperId: string,
        value: rollsForLastRollsResults,
    ) {
        dispatch(addResultsToLastRollsAction(id, wrapperId, value))
    }

    function changeResultsToLastRolls(
        id: string,
        wrapperId: string,
        rollId: string,
        value: string | boolean | resultType | resultType[]  | number,
        typeChange: "results" | "vantageDisadvantage" | "vantageDisadvantageDices" | "isCritical" | "bestResult"
    ) {
        dispatch(changeResultsToLastRollsAction(id, wrapperId, rollId, value, typeChange))
    }

    function clearHistoryRolls(id: string){
        dispatch(clearHistoryRollsAction(id))
    }

    function copyCharacter(idCharacter: string) {
        const characterToCopy = (characters.find((character) => {
            if(character.id == idCharacter){
                return character
            }
        }))
        if(characterToCopy != undefined) {
            const {id, ...newCharacter} = characterToCopy
            createNewCharacter({...newCharacter, id: String(new Date()) + String(Math.random())})
        }
    }

    function copyRitual(id: string) {
        const character = characters.find((character) => {
            if(character.id == characterToDisplayId){
                return character
            }
        })

        if(character != undefined){
            const ritualToCopy = character.rituals.find((ritual) => {
                if(ritual.id == id){
                    return ritual
                }
            })
            if(characterToDisplayId != null && ritualToCopy != undefined){
                const {id, ...newRitual} = ritualToCopy
                changeRituals(characterToDisplayId, "", "", "", "", "addRitual", "", {...newRitual, id: String(new Date()) + String(Math.random())})
            }
        }
    }

    const {characters, characterToDisplayId, version} = charactersState

    useEffect(() => {
        const StateJSON = JSON.stringify(charactersState)
        localStorage.setItem('@ficha-ordem:characters-state-1.0.0', StateJSON)
    }, [charactersState])

    switch(version){
        case undefined: {
            dispatch(updateCharacterToVersion("1.1"))
            dispatch(updateVersion("1.1"))
        }
    }
    

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
                changeInventory,
                changeRituals,
                exportImportRituals,
                changeDiary,
                rollingDices,
                addLastRoll,
                clearHistoryRolls,
                addResultsToLastRolls,
                changeResultsToLastRolls,
                copyCharacter,
                copyRitual,
            }}
        >
            {children}
        </CharactersContext.Provider>
    )
}