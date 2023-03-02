import { HTMLAttributes, ReactNode } from "react";
import styles from "./baseBox.module.css"

interface BaseBoxProps extends HTMLAttributes<HTMLDivElement>{
    children: ReactNode;
}

export function BaseBox({children, className, ...props}: BaseBoxProps) {
    return(
        <div className={`${styles.baseBox} ${className}`} {...props}>
            {children}
        </div>
    )
}