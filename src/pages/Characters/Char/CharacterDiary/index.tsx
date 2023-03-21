import { CaretDoubleLeft, CaretDoubleRight } from "phosphor-react"
import { useRef } from "react"
import HTMLFlipBook from "react-pageflip"
import styles from "./characterDiary.module.css"
import { CharacterObjectives } from "./components/CharacterObjectives"
import { CharacterPage } from "./components/CharacterPage"
import { Page } from "./components/Page"

const RandomInfo = [
    {
        name: "afawfasa",
        note: "fiodmaoifmas"
    },
    {
        name: "afawfasa",
        note: "fiodmaoifmas"
    },
    {
        name: "afawfasa",
        note: "fiodmaoifmas"
    },
    {
        name: "afawfasa",
        note: "fiodmaoifmas"
    },
    {
        name: "afawfasa",
        note: "fiodmaoifmas"
    },
    {
        name: "afawfasa",
        note: "fiodmaoifmas"
    },
    {
        name: "afawfasa",
        note: "fiodmaoifmas"
    },
    {
        name: "afawfasa",
        note: "fiodmaoifmas"
    },
    {
        name: "afawfasa",
        note: "fiodmaoifmas"
    },
    {
        name: "afawfasa",
        note: "fiodmaoifmas"
    },
]

export function CharacterDiary() {

    let toDisplayContent: any[] = []
    let infoCount = 0
    let infoPerPage: any[] = []
    RandomInfo.map((info) => {
        if(infoCount > 4) {
            infoCount = 0
            toDisplayContent.push(infoPerPage)
            infoPerPage = []
        }
        infoPerPage.push(info)
        infoCount = infoCount + 1
    })

    infoCount = 0
    toDisplayContent.push(infoPerPage)
    infoPerPage = []

    let pageCount = 0

    const diary = useRef()

    return(
        <div className={styles.diaryContainer}>
            <div className={styles.diary}>
                <button
                    className={styles.prevPage}
                    // @ts-ignore
                    onClick={() => {diary.current.pageFlip().flipPrev()}}
                >
                    <CaretDoubleLeft size={32} weight="fill" />
                </button>
                <HTMLFlipBook ref={diary} className={styles.diaryBook} style={{}} startPage={0} size={"fixed"} width={664} height={912} minWidth={0} maxWidth={0} minHeight={0} maxHeight={0} drawShadow={true} flippingTime={400} usePortrait={false} startZIndex={0} autoSize={false} maxShadowOpacity={0.7} showCover={false} mobileScrollSupport={true} clickEventForward={false} useMouseEvents={false} swipeDistance={30} showPageCorners={true} disableFlipByClick={true}>
                    <div className={`${styles.page} ${styles.pageLeft}`}>
                        <CharacterPage
                            className={styles.pageContent}
                        >
                            <span className={styles.pageNumber}>
                                {pageCount = pageCount + 1}
                            </span>
                        </CharacterPage>
                    </div>
                    <div className={`${styles.page} ${styles.pageRight}`}>
                        <CharacterObjectives
                            className={styles.pageContent}
                        >
                            <span className={styles.pageNumber}>
                                {pageCount = pageCount + 1}
                            </span>
                        </CharacterObjectives>
                    </div>
                    {toDisplayContent.map((page) => {
                        pageCount = pageCount + 1
                        return(
                            <div key={String(new Date()) + String(Math.random())} className={`${styles.page} ${pageCount % 2 != 0 ? styles.pageLeft : styles.pageRight}`} >
                                <Page className={styles.pageContent}>
                                    {page.map((content: {name: string, note: string}) => {
                                        return(
                                            <div key={String(new Date()) + String(Math.random())}>
                                                <h4>{content.name}</h4>
                                                <p>{content.note}</p>
                                            </div>
                                        )
                                    })}
                                    <span className={styles.pageNumber}>
                                        {pageCount}
                                    </span>
                                </Page>
                            </div>
                        )
                    })}
                </HTMLFlipBook>
                <button
                    className={styles.nexPage}
                    // @ts-ignore
                    onClick={() => {diary.current.pageFlip().flipNext()}}
                >
                    <CaretDoubleRight size={32} weight="fill" />
                </button>
            </div>
        </div>
    )
}