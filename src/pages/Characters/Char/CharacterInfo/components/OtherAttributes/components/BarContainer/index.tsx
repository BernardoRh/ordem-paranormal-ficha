import { HTMLAttributes, ReactNode } from "react";
import styles from "./barContainer.module.css"

interface BaseBoxProps extends HTMLAttributes<HTMLDivElement>{
    children: ReactNode;
}

export function BarContainer({children, className, ...props}: BaseBoxProps) {
    return(
        <div className={`${styles.barContainer} ${className}`} {...props}>
            {children}
        </div>
    )
}