import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header"
import styles from "./mainLayout.module.css"

export function MainLayout() {
    return(
        <>
            <Header/>
            <Outlet/>
        </>
    )
}