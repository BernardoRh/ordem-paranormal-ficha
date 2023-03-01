import { RollDiceProps } from "../../components/Rolldice"

interface Expertise {
    name: string,
    trainedLevel?: "Expert" | "Veterano" | "Treinado",
    others?: number
}

interface Attack {
    id: string,
    name?: string,
    rollTest?: RollDiceProps,
    damage?: RollDiceProps,
    critical?: number,
    range?: string,
    especial?: string,
}

interface Skill {
    id: string,
    name?: String,
    page?: number,
    description?: string,
    rolls: RollDiceProps[],
}

interface RitualSubDescription {
    id: string,
    name?: string,
    description?: string,
}

interface Ritual {
    id: string,
    name?: string,
    type?: "none" | "death" | "knowledge" | "blood" | "energy" | "fear",
    level?: number,
    execution?: string,
    range?: string,
    target?: string,
    duration?: string,
    resistance?: string,
    description?: {
        principal?: string,
        subDescriptions?: RitualSubDescription[]
    },
    studied?: {
        additionalCost?: number,
        additionalEffect?: string,
    },
    truly?: {
        additionalCost?: number,
        additionalEffect?: string,
    },
    rolls?: RollDiceProps[]
}

interface Item {
    id: string,
    item?: string,
    category?: number,
    spaces?: number
}

export interface CharactersSheet {
    id: string,
    avatar?: string,
    name?: string,
    age?: number,
    origin?: string,
    class?: string,
    attributes?: {
        agility?: number,
        strength?: number,
        intellect?: number,
        presence?: number,
        vigor?: number,
        nex?: number,
        pePerRound?: number,
        movementInMeters?: number,
        health?: {
            maxHealth?: number,
            actualHealth?: number
        },
        pePoints?: {
            maxPE?: number,
            actualPE?: number
        },
        sanity?: {
            maxSanity?: number,
            actualSanity?: number
        },
        defense?: {
            equippedDefenses?: number,
            otherDefenses?: number
        },
        dodge?: number,
        blockReductionDamage?: number,
        protections?: string[],
        resistances?: string[],
    }
    expertise?: Expertise[],
    attacks?:  Attack[],
    skills?: Skill[],
    rituals?: Ritual[],
    prestige?: number,
    loadout?: {
        maxLoadout?: number,
        actualLoadout?: number
    },
    inventory?: Item[],
    description?: {
        appearance?: string[],
        personality?: string[],
        history?: [
            {
                id: Date,
                title?: string,
                description?: string 
            }
        ],
        objectives?: [
            {
                id: Date,
                title?: string,
                description?: string
            }
        ]
    }
}