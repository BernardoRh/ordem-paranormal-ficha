import { RollDiceProps } from "../components/Rolldice"

interface ChartersContextProps {
    nome?: string,
    idade?: number,
    origem?: string,
    classe?: string,
    atributos: {
        agilidade?: number,
        forca?: number,
        intelecto?: number,
        presenca?: number,
        vigor?: number,
        nex?: number,
        pePorRodada?: number,
        deslocamentoEmMetros?: number,
        vida?: {
            vidaMaxima?: number,
            vidaAtual?: number
        },
        pontosDeEsforco?: {
            peMaximo?: number,
            peAtual?: number
        },
        sanidade?: {
            sanidadeMaxima?: number,
            sanidadeAtual?: number
        },
        defesa?: {
            defesaTotal?: number,
            defesaEquip?: number,
            defesaOutros?: number
        },
        esquiva?: number,
        redBloqueio?: number,
        protecoes?: [string],
        resistencias?: [string],
    }
    pericias?: [
        {
            nome?: string,
            levelTreino?: "Expert" | "Veterano" | "Treinado",
            outros?: number
        }
    ],
    ataques?: [
        {
            nome?: string,
            teste?: RollDiceProps,
            dano?: RollDiceProps,
            critico?: number,
            alcance?: string,
            especial?: string,
        }
    ],
    habilidades?: [
        {
            nome?: String,
            pagina?: number,
            descricao?: string
        }
    ],
    rituais?: [
        {
            nome?: string,
            pagina?: number,
            descricao?: string
        }
    ],
    prestigio?: number,
    carga?: {
        cargaMax?: number,
        cargaAtual?: number
    },
    inventario?: [
        {
            item?: string,
            categoria?: number,
            espacos?: number
        }
    ],
    descricao?: {
        aparencia?: [string],
        personalidade?: [string],
        historia?: [
            {
                titulo?: string,
                descricao?: string 
            }
        ],
        objetivos?: [
            {
                titulo?: string,
                descrição?: string
            }
        ]
    }
}