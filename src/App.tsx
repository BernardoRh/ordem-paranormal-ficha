import styles from "./App.module.css"
import { Expertise } from "./components/Expertise/components/ExpertiseComponent"
import { Header } from "./components/Header"
import { BaseAtributes } from "./components/BaseAtributes"
import { RollDice } from "./components/Rolldice"
import { Barbell, Sparkle, StarFour } from 'phosphor-react'
import './Global.css'

import OrdoRealitas from "./img/OrdoRealitas.png"
import { OtherAtributes } from "./components/OtherAtributes"
import { LastsRolls } from "./components/LastRolls"
import { AllExpertises } from "./components/Expertise"
import { Skills } from "./components/Skills"
import { Attacks } from "./components/Atacks"

export function App() {
  return (
    <div className={styles.principal}>
      <Header/>
      <div className={styles.content}>
        <div className={styles.characterInfo}>
          <span>
            NOME:<input type="text"/>
          </span>
          <span>
            IDADE:<input type="number"/>
          </span>
        </div>
        <div className={styles.containerCharacterAtributes}>
          <BaseAtributes/>
          <OtherAtributes/>
        </div>
        <div className={styles.expertiseTable}>
          <div>
            <span>PERÍCIA</span>
            <span>DADOS</span>
            <span>BÔNUS</span>
            <span>TREINO</span>
            <span>OUTROS</span>
          </div>
          <AllExpertises/>
          <div className={styles.expertiseTableFooter}>
            <p><Barbell size={18}/> Penalidade de Carga</p>
            <p><StarFour size={18}/> Apenas Treinado</p>
            <p><Sparkle size={18} weight="fill"/> Especial</p>
          </div>
        </div>
        <Attacks/>
        <Skills/>
      </div>
      <RollDice rolls={[]}/>
      <LastsRolls/>
    </div>
  )
}
