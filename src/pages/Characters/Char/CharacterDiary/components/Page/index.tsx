import { HtmlHTMLAttributes, ReactNode } from "react"
import styles from "./page.module.css"

interface PageProps extends HtmlHTMLAttributes<HTMLDivElement>{
    children?: ReactNode,
}

export function Page({children, className, ...props}: PageProps) {
    return(
        <div {...props} className={`${styles.page} ${className}`}>
            {children}
        </div>
    )
}