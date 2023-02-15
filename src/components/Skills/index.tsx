import { Pencil, Plus, Trash } from "phosphor-react"
import { ChangeEvent, useState } from "react"
import styles from "./skills.module.css"

export function Skills() {

    const [testTextarea, setTestTextarea] = useState("")

    function handleChangeTextArea(event: ChangeEvent<HTMLTextAreaElement>) {
        setTestTextarea(event.target.value);
    }

    console.log(testTextarea.length/48)

    return(
        <div className={styles.skillsTable}>
            <div className={styles.skillsTableColumHeader}>
                <div>HABILIDADES</div>
                <div className={styles.center}>CUSTO</div>
                <div className={styles.center}>PAGINA</div>
                <div>
                    DESCRIÇÃO
                    {/* <div className={styles.dtRituals}>
                        DT DE RITUAIS
                        <input type="number" />
                    </div> */}
                </div>
            </div>
            <div className={styles.skillsTableColum}>
                <input type="text" />
                <input type="number" className={styles.center} />
                <input type="number" className={styles.center} />
                <textarea 
                    onChange={handleChangeTextArea}
                    value={testTextarea}
                    rows={
                        Math.ceil(testTextarea.length != 0 ? (testTextarea.length)/69 : 1) < 4 ?
                        Math.ceil(testTextarea.length != 0 ? (testTextarea.length)/69 : 1) : 4
                    }
                />
                <button>
                    <Trash size={18} weight="fill" className={styles.trash} />
                </button>
            </div>
        </div>
    )
}