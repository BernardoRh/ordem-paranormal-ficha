import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header"
import { CharactersContextProvider } from "../../contexts/CharactersContexts/CharactersContext"

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