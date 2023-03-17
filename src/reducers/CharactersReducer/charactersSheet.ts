import { Rolls } from "../../components/Rolldice"


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

export interface Attack {
    id: string,
    name: string,
    rollTest: Rolls,
    damage: Rolls,
    critical: string,
    range: string,
    especial: string,
}

export interface Skill {
    id: string,
    name: string,
    page: string,
    description: string,
    cost: string,
}

export interface RitualSubDescription {
    id: string,
    name: string,
    description: string,
}

export interface MultipleRolls {
    id: string
    name: string
    rolls: Rolls[]
}
export interface Ritual {
    id: string,
    name: string,
    type: "none" | "death" | "knowledge" | "blood" | "energy" | "fear",
    level: "1" | "2" | "3" | "4",
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
        isActive: boolean,
        additionalCost: string,
        additionalEffect: string,
    },
    truly: {
        isActive: boolean,
        additionalCost: string,
        additionalEffect: string,
    },
    multipleRolls: MultipleRolls[]
}

export interface Item {
    id: string,
    item: string,
    category: string,
    spaces: string
}

export interface Inventory {
    prestige: string,
    itemsLimit: string[],
    creditLimit: "none" | "low" | "medium" | "hight" | "unlimited" ,
    patent: string,
    loadout: {
        maxLoadout: string,
        actualLoadout: string
    },
    items: Item[],
}

export interface HistoryAndObjectives {
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
    inventory: Inventory,
    description: {
        personality: string[],
        history: HistoryAndObjectives[],
        objectives: HistoryAndObjectives[],
    }
}