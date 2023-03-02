import { RollDiceProps } from "../../components/Rolldice"


export interface Attributes {
    agility: string,
    strength: string,
    vigor: string,
    presence: string,
    intellect: string,
}
export interface Expertise {
    name: string,
    trainedLevel: "none" | "Expert" | "Veterano" | "Treinado",
    others: string,
    principalAttribute: "INT" | "FOR" | "AGI" | "PRE" | "VIG",
    weightPenalty: boolean,
    onlyWithExpertise: boolean,
    special: boolean,
    kit: boolean
}

interface Attack {
    id: string,
    name: string,
    rollTest: RollDiceProps,
    damage: RollDiceProps,
    critical: string,
    range: string,
    especial: string,
}

interface Skill {
    id: string,
    name: string,
    page: string,
    description: string,
    rolls: RollDiceProps[],
}

interface RitualSubDescription {
    id: string,
    name: string,
    description: string,
}

interface Ritual {
    id: string,
    name: string,
    type: "none" | "death" | "knowledge" | "blood" | "energy" | "fear",
    level: string,
    execution: string,
    range: string,
    target: string,
    duration: string,
    resistance: string,
    description: {
        principal: string,
        subDescriptions: RitualSubDescription[]
    },
    studied: {
        additionalCost: string,
        additionalEffect: string,
    },
    truly: {
        additionalCost: string,
        additionalEffect: string,
    },
    rolls: RollDiceProps[]
}

interface Item {
    id: string,
    item: string,
    category: string,
    spaces: string
}

interface HistoryAndObjectives {
    id: string,
    title: string,
    description: string,
}

export interface CharactersSheet {
    id: string,
    avatar: string,
    name: string,
    age: string,
    origin: string,
    class: "none" | "Combatente" | "Especialista" | "Ocultista",
    attributes: Attributes,
    nex: string,
    pePerRound: string,
    movementInMeters: string,
    health: {
        maxHealth: string,
        actualHealth: string
    },
    pePoints: {
        maxPE: string,
        actualPE: string
    },
    sanity: {
        maxSanity: string,
        actualSanity: string
    },
    defense: string,
    dodge: string,
    blockReductionDamage: string,
    protections: string[],
    resistances: string[],
    expertise: Expertise[],
    attacks:  Attack[],
    skills: Skill[],
    rituals: Ritual[],
    prestige: string,
    itemsLimit: string[],
    creditLimit: "none" | "low" | "medium" | "hight" | "unlimited" ,
    patent: string,
    loadout: {
        maxLoadout: string,
        actualLoadout: string
    },
    inventory: Item[],
    description: {
        appearance: string[],
        personality: string[],
        history: HistoryAndObjectives[],
        objectives: HistoryAndObjectives[],
    }
}