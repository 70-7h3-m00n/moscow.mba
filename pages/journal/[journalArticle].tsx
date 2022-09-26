import {
    GetStaticPaths,
    GetStaticProps
} from 'next'
import type { NextPage } from 'next'
import {
    Fragment,
    useEffect,
    useState
} from 'react'
import { createPortal } from "react-dom"
import cn from 'classnames'

import { useScroll, useWindowWidth } from '@/hooks/index'

import {
    routesFront
} from '@/config/index'

import {
    handleGetStaticProps,
    handleGetStaticPaths
} from '@/lib/index'

import { TypeLibJournalArticle } from '@/types/index'

import { Wrapper } from '@/components/layout'
import {
    SectionJournalHistoryArticle,
    SectionJournalArticleHeader,
    SectionJournalArticleTitle,
    SectionJournalArticleContents,
    SectionJournalParagraph,
    SectionJournalTitle,
    SectionJournalPicture,
    SectionJournalEmphasis,
    SectionJournalQuote,
    SectionJournalList,
    SectionJournalConclusion,
    SectionJournalRecommendedProgram,
    SectionJournalRecommendedArticles,
    SectionJournalRecommendedPrograms,
    SectionJournalTitlePicture,
    SectionJournalToShare,
    SectionJournalForm,
    SectionJournalTable
} from '@/components/sections'

import {
    PopupCoursesOnTopic,
    PopupDownloadMaterials,
    PopupPreviewCoursesOnTopic,
    PopupGetMaterials
} from '@/components/popups'

import stls from '@/styles/pages/PageJournalArticles.module.sass'
import classNames from 'classnames'

type TypeJournalArticleProps = {
    journalArticle: TypeLibJournalArticle
}

const PageJournalArticle: NextPage<TypeJournalArticleProps> = ({
    journalArticle,
}) => {
    // ScrollBar
    const [pageYOffset, setPageYOffset] = useState(0)
    const [scollHeight, setScrollHeight] = useState(0)
    const [clientHeight, setClientHeight] = useState(0)

    const handleScroll = () => {
        setPageYOffset(window.pageYOffset)
        setScrollHeight(document.body.scrollHeight)
        setClientHeight(
            window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight
        )
    }

    useEffect(() => {
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // Popup is show  (PopupCoursesOnTopicDesktop)
    const scroll = useScroll()
    const windowWidth = useWindowWidth()

    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)

        return () => setMounted(false)
    }, [])

    const [isPopupCoursesOnTopicDesktop, setIsPopupCoursesOnTopicDesktop] = useState(true)
    const [isPopupCoursesOnTopicPhone, setIsPopupCoursesOnTopicPhone] = useState(false)

    const handlePopupCoursesOnTopicDesktop = () => {
        setIsPopupCoursesOnTopicDesktop(isPopupCoursesOnTopicDesktop => !isPopupCoursesOnTopicDesktop)
    }

    const handlePopupCoursesOnTopicPhone = () => {
        setIsPopupCoursesOnTopicPhone(isPopupCoursesOnTopicPhone => !isPopupCoursesOnTopicPhone)
    }

    const [isPopupGetMaterials, setIsPopupGetMaterials] = useState(false)

    const handlePopupGetMaterials = () => {
        setIsPopupGetMaterials(isPopupGetMaterials => !isPopupGetMaterials)
    }

    const [isPopupDownloadMaterials, setIsPopupDownloadMaterials] = useState(true)

    const handlePopupDownloadMaterials = () => {
        setIsPopupDownloadMaterials(isPopupDownloadMaterials => !isPopupDownloadMaterials)
    }

    return (
        <>
            <SectionJournalHistoryArticle
                classNames={[stls.historyArticle]}
                journalArticle={journalArticle} />
            <div className={stls.scrollProgress}>
                <div
                    className={stls.scrollProgressBar}
                    style={{
                        transform: `translateX(-${100 - pageYOffset / ((scollHeight - clientHeight) / 100)
                            }%)`
                    }}></div>
            </div>
            <Wrapper classNames={[stls.wrapper]}>
                <article className={cn(stls.article,
                (!isPopupCoursesOnTopicDesktop && !isPopupDownloadMaterials)
                    ? stls.isPopup
                    : '')
                }>
                    <header>
                        <SectionJournalArticleHeader
                            journalArticle={journalArticle}
                            classNames={[stls.articleHeader]} />
                        <SectionJournalArticleTitle
                            journalArticle={journalArticle}
                            classNames={[stls.articleTitle]} />
                        <SectionJournalArticleContents
                            journalArticle={journalArticle}
                            classNames={[stls.articleTitle]} />
                    </header>
                    <section>
                        <SectionJournalTitlePicture journalArticle={journalArticle} />
                        {
                            journalArticle?.articleBody?.map((component, idx) => (
                                <Fragment key={`${component.__typename} ${idx}`}>
                                    {component.__typename === 'ComponentJournalParagraph' && (
                                        <SectionJournalParagraph body={component.paragraphBodyParts} idx={idx} />
                                    )}
                                    {component.__typename === 'ComponentJournalTitle' && (
                                        <SectionJournalTitle
                                            body={component.titleBodyParts}
                                            idx={idx} />
                                    )}
                                    {component.__typename === 'ComponentGeneralPicture' && (
                                        <SectionJournalPicture
                                            picture={component.picture}
                                            title={component.title}
                                            idx={idx}
                                        />
                                    )}
                                    {component.__typename === 'ComponentJournalEmphasis' && (
                                        <SectionJournalEmphasis body={component.emphasisBody} />
                                    )}
                                    {component.__typename === 'ComponentJournalQuote' && (
                                        <SectionJournalQuote
                                            quote={component.quote}
                                        />
                                    )}
                                    {component.__typename === 'ComponentJournalList' && (
                                        <SectionJournalList listItem={component.list} />
                                    )}
                                    {component.__typename === 'ComponentJournalConclusion' && (
                                        <SectionJournalConclusion item={component.conclusion} />
                                    )}
                                    {component.__typename === 'ComponentJournalJournalRecommendedProgram' && (
                                        <SectionJournalRecommendedProgram recommendedProgram={component.recommendedProgram} />
                                    )}
                                    {component.__typename === 'ComponentJournalJournalRecommendedArticles' && (
                                        <SectionJournalRecommendedArticles journalRecommendedArticles={component.journalRecommendedArticles} />
                                    )}
                                    {component.__typename === 'ComponentJournalJournalArticleRecommendedProgramsSection' && (
                                        <SectionJournalRecommendedPrograms recommendedProgramsSection={component.recommendedProgramsSection} />
                                    )}
                                    {component.__typename === 'ComponentJournalJournalTable' && (
                                        <SectionJournalTable
                                            htmlTableBody={component.htmlTableBody}
                                            isPopupCoursesOnTopicDesktop={isPopupCoursesOnTopicDesktop}
                                            isPopupDownloadMaterials={isPopupDownloadMaterials}
                                        />
                                    )}
                                    {component.__typename === 'ComponentJournalFormPdfMaterials' && (
                                        <SectionJournalForm
                                            pdfMaterials={journalArticle.pdfMaterials}
                                            formPdfMaterials={component.formPdfMaterials}
                                            windowWidth={windowWidth}
                                            mounted={mounted} />
                                    )}
                                </Fragment>
                            ))
                        }
                        <SectionJournalToShare journalArticle={journalArticle} />
                    </section>

                </article>
                <aside className={stls.aside}>
                    {
                        (mounted && windowWidth <= 1020 && isPopupCoursesOnTopicPhone)
                            ? createPortal(
                                <PopupCoursesOnTopic
                                    recommendedProgramsSection={
                                        journalArticle?.articleBody
                                            ?.find(item =>
                                                item.__typename === "ComponentJournalJournalArticleRecommendedProgramsSection")
                                            ?.recommendedProgramsSection
                                    }
                                    classNames={[stls.popupCoursesOnTopic]}
                                    handlePopupCoursesOnTopic={handlePopupCoursesOnTopicPhone} />
                                , document.querySelector('#__next'))
                            : (mounted && windowWidth > 1020 && isPopupCoursesOnTopicDesktop)
                                ? <PopupCoursesOnTopic
                                    recommendedProgramsSection={
                                        journalArticle?.articleBody
                                            ?.find(item =>
                                                item.__typename === "ComponentJournalJournalArticleRecommendedProgramsSection")
                                            ?.recommendedProgramsSection
                                    }
                                    classNames={[stls.popupCoursesOnTopic]}
                                    handlePopupCoursesOnTopic={handlePopupCoursesOnTopicDesktop} />
                                : ''
                    }
                    {
                        mounted
                            ? <PopupPreviewCoursesOnTopic
                                handlePopupCoursesOnTopic={handlePopupCoursesOnTopicPhone}
                                classNames={[scroll.height > 200 ? stls.showPopup : stls.noShowPopup]} />
                            : ''
                    }

                    {
                        (mounted && windowWidth <= 1020 && isPopupDownloadMaterials)
                            ? createPortal(
                                <PopupDownloadMaterials
                                    classNames={[stls.popupDownloadMaterials]}
                                    handlePopupGetMaterials={handlePopupGetMaterials}
                                    handlePopupDownloadMaterials={handlePopupDownloadMaterials}
                                />, document.querySelector('#__next'))
                            : (mounted && windowWidth > 1020 && isPopupDownloadMaterials)
                                ? <PopupDownloadMaterials
                                    classNames={[stls.popupDownloadMaterials]}
                                    handlePopupGetMaterials={handlePopupGetMaterials}
                                    handlePopupDownloadMaterials={handlePopupDownloadMaterials} />
                                : ''
                    }
                    {
                        (mounted && isPopupGetMaterials)
                            ? createPortal(
                                <PopupGetMaterials
                                    classNames={[stls.popupGetMaterials]}
                                    pdfMaterials={journalArticle.pdfMaterials}
                                    handlePopupGetMaterials={handlePopupGetMaterials} />, document.querySelector('#__next'))
                            : ""
                    }
                </aside>
            </Wrapper>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return await handleGetStaticPaths({ page: routesFront.journalArticles })
}

export const getStaticProps: GetStaticProps = async context => {
    return await handleGetStaticProps({
        page: routesFront?.journalArticles,
        context
    })
}

export default PageJournalArticle