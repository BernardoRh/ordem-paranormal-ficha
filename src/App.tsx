import styles from "./App.module.css"
import './Global.css'

import { HashRouter } from "react-router-dom"
import { Router } from "./Router"

export function App() {
  return (
    <>
      <HashRouter>
        <Router/>
      </HashRouter>
      <span style={{height: "8rem", display: "flex"}}/>
      {/* <div className={styles.principal}>
        <Header/>
        <div className={styles.content}>
            
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
            <Inventory/>
            <Rituals/>
            <span></span>
        </div>
        <RollDice rolls={[]}/>
        <LastsRolls/>
      </div> */}
    </>
  )
}
