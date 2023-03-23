import { CaretDoubleLeft, CaretDoubleRight, Plus } from "phosphor-react"
import { useContext, useRef, useState } from "react"
import HTMLFlipBook from "react-pageflip"
import { CharactersContext } from "../../../../contexts/CharactersContexts/CharactersContext"
import styles from "./characterDiary.module.css"
import { CharacterNotes } from "./components/CharacterNotes"
import { CharacterObjectives } from "./components/CharacterObjectives"
import { CharacterPage } from "./components/CharacterPage"

export function CharacterDiary() {

    const { characterToDisplayId, characters, changeDiary } = useContext(CharactersContext)

    const characterToDisplay = characters.find((character) => {
        if(character.id == characterToDisplayId){
            return character
        }
    })

    const [addButtonPage, setAddButtonPage] = useState(false)

    function handelAddPage() {
        if(characterToDisplayId != null) {
            changeDiary(characterToDisplayId, "", "", "", "", "addPage", "pages", "")
        }
    }

    let pageCount = 0
    const diary = useRef()

    return(
        <div className={styles.diaryContainer}>
            <div className={styles.diary}>
                <button
                    className={styles.prevPage}
                    // @ts-ignore
                    onClick={() => {diary.current.pageFlip().flipPrev(); setAddButtonPage(false)}}
                >
                    <CaretDoubleLeft size={32} weight="fill" />
                </button>
                <HTMLFlipBook ref={diary} className={styles.diaryBook} style={{}} startPage={0} size={"fixed"} width={664} height={912} minWidth={0} maxWidth={0} minHeight={0} maxHeight={0} drawShadow={true} flippingTime={400} usePortrait={false} startZIndex={0} autoSize={false} maxShadowOpacity={0.7} showCover={false} mobileScrollSupport={true} clickEventForward={false} useMouseEvents={false} swipeDistance={30} showPageCorners={true} disableFlipByClick={true}>
                    <div className={`${styles.page} ${styles.pageLeft}`}>
                        <CharacterPage
                            className={styles.pageContent}
                            characterName={characterToDisplay?.name}
                            characterAge={characterToDisplay?.age}
                            characterHistory={characterToDisplay?.diary.history}
                            characterAvatar={characterToDisplay?.avatar}
                            characterPersonality={characterToDisplay?.diary.personality}
                        >
                            <span className={styles.pageNumber}>
                                {pageCount = pageCount + 1}
                            </span>
                        </CharacterPage>
                    </div>
                    <div className={`${styles.page} ${styles.pageRight}`}>
                        <CharacterObjectives
                            className={styles.pageContent}
                            objectives={characterToDisplay?.diary.objectives}
                        >
                            <span className={styles.pageNumber}>
                                {pageCount = pageCount + 1}
                            </span>
                        </CharacterObjectives>
                    </div>
                    {characterToDisplay?.diary.pages.map((page) => {
                        pageCount = pageCount + 1
                        return(
                        <div key={page.id} className={`${styles.page} ${pageCount % 2 == 0 ? styles.pageRight : styles.pageLeft}`}>
                            <CharacterNotes page={page} className={styles.pageContent}>
                                <span className={styles.pageNumber}>
                                    {pageCount}
                                </span>
                            </CharacterNotes>
                        </div>
                        )
                    })}
                </HTMLFlipBook>
                <button
                    className={`${addButtonPage || pageCount < 3 ? styles.addPageButton : styles.nexPage}`}
                    onClick={() => {
                        // @ts-ignore
                        diary.current.pageFlip().getCurrentPageIndex() + 2 == pageCount ||
                        // @ts-ignore
                        diary.current.pageFlip().getCurrentPageIndex() + 1 == pageCount ?
                        handelAddPage() :
                        // @ts-ignore
                        diary.current.pageFlip().flipNext();
                        // @ts-ignore
                        diary.current.pageFlip().getCurrentPageIndex() + 3 == pageCount ||
                        // @ts-ignore
                        diary.current.pageFlip().getCurrentPageIndex() + 1 == pageCount ? setAddButtonPage(true) 
                        : setAddButtonPage(false);
                    }}
                >
                    {
                        addButtonPage || pageCount < 3 ? 
                        <Plus size={32} weight="fill"/> :
                        <CaretDoubleRight size={32} weight="fill" /> 
                    }
                </button>
            </div>
        </div>
    )
}