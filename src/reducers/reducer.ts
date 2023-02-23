import { RollDiceProps } from "../components/Rolldice"

interface ChartersContextProps {
    id: Date,
    name?: string,
    age?: number,
    origin?: string,
    class?: string,
    attributes: {
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
        protections?: [string],
        resistances?: [string],
    }
    expertise?: [
        {
            name?: string,
            trainedLevel?: "Expert" | "Veterano" | "Treinado",
            others?: number
        }
    ],
    attacks?: [
        {
            id: Date,
            name?: string,
            rollTest?: RollDiceProps,
            damage?: RollDiceProps,
            critical?: number,
            range?: string,
            especial?: string,
        }
    ],
    skills?: [
        {
            id: Date,
            name?: String,
            page?: number,
            description?: string,
            rolls: [RollDiceProps],
        }
    ],
    rituals?: [
        {
            id: Date,
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
                subDescriptions?: [
                    {
                        id: Date,
                        name?: string,
                        description?: string,
                    }
                ]
            },
            studied?: {
                additionalCost?: number,
                additionalEffect?: string,
            },
            truly?: {
                additionalCost?: number,
                additionalEffect?: string,
            },
            rolls?: [RollDiceProps]
        }
    ],
    prestige?: number,
    loadout?: {
        maxLoadout?: number,
        actualLoadout?: number
    },
    inventory?: [
        {
            id: Date,
            item?: string,
            category?: number,
            spaces?: number
        }
    ],
    description?: {
        appearance?: [string],
        personality?: [string],
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