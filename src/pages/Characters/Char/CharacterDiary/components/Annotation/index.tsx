import { useState } from "react"
import styles from "./annotation.module.css"

export function Annotation() {
    const[isDisable, setIsDisabled] = useState(true)

    function handleChangeDisabled(){
        setIsDisabled(false)
    }

    return(
        <div>
            <button onClick={handleChangeDisabled}>CLICK MEE</button>
            {isDisable? "AAA" : "BBB"}
        </div>
    )
}