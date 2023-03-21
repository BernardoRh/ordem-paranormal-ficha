import { X } from 'phosphor-react'
import { HtmlHTMLAttributes } from 'react'
import styles from './tape.module.css'

interface TapeButtonProps extends HtmlHTMLAttributes<HTMLButtonElement>{
    rotation: "45deg" | "-45deg" | "135deg" | "-135deg"
}

export function TapeButton({rotation, className, ...props}: TapeButtonProps) {
    return (
        <button className={ `${className} ${styles.containerTape}`} style={{rotate: rotation}} {...props}>
            <div id={styles.container} className={`${styles.animation}`}>
                <div className={`${styles.sticky} ${styles.animation}`}>
                    <div className={`${styles.front} ${styles.tape_wrapper} ${styles.animation}`}>
                        <div className={`${styles.square} ${styles.animation}`}></div>
                    </div>
                </div>
                <div className={styles.x}>
                    <X size={18} weight="fill"/>
                </div>
                <div className={`${styles.sticky} ${styles.animation}`}>
                    <div className={`${styles.back} ${styles.tape_wrapper} ${styles.animation}`}>
                        <div className={`${styles.square} ${styles.animation}`}>
                        </div>
                    </div>
                </div>
            </div>
        </button>
    )
}