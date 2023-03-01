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
    </>
  )
}
