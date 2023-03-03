import { createContext, ReactNode } from "react";

interface CharactersAutoContextType {
    
}

export const CharactersAutoContext = createContext({} as CharactersAutoContextType)

interface CharactersAutoContextProps {
    children: ReactNode
}

export function CharactersAutoContextProvider({children}: CharactersAutoContextProps) {
    
}