import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { Characters } from "./pages/Characters";
import { Monsters } from "./pages/Mosters";
import { CharacterInfo } from "./pages/Characters/Char/CharacterInfo";
import { Char } from "./pages/Characters/Char";
import { Rituals } from "./pages/Characters/Char/Rituals";

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/Characters" element={<Characters/>}/>
                <Route path="/Char" element={<Char/>}>
                    <Route path="/Char" element={<CharacterInfo/>}/>
                    <Route path="/Char/Rituals" element={<Rituals/>}/>
                    <Route path="/Char/Diary"/>
                </Route>
                <Route path="/Monsters" element={<Monsters/>}/>
            </Route>
        </Routes>
    )
}