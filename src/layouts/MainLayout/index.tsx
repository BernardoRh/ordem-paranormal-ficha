import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header"
import { CharactersContextProvider } from "../../contexts/CaractersContexts/CharactersContext"
import styles from "./mainLayout.module.css"

export function MainLayout() {
    return(
        <>
            <Header/>
            <CharactersContextProvider>
                <Outlet/>
            </CharactersContextProvider>
        </>
    )
}