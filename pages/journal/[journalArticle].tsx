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
    SectionJournalForm
} from '@/components/sections'

import stls from '@/styles/pages/PageJournalArticles.module.sass'

type TypeJournalArticleProps = {
    journalArticle: TypeLibJournalArticle
}

const PageJournalArticle: NextPage<TypeJournalArticleProps> = ({ journalArticle }) => {
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
    return (
        <>
            <Wrapper column>
                <SectionJournalHistoryArticle
                    classNames={[stls.historyArticle]}
                    journalArticle={journalArticle} />
            </Wrapper>
            <div className={stls.scrollProgress}>
                <div
                    className={stls.scrollProgressBar}
                    style={{
                        transform: `translateX(-${100 - pageYOffset / ((scollHeight - clientHeight) / 100)
                            }%)`
                    }}></div>
            </div>
            <Wrapper>
                <article className={stls.article}>
                    <SectionJournalArticleHeader
                        journalArticle={journalArticle}
                        classNames={[stls.articleHeader]} />
                    <SectionJournalArticleTitle
                        journalArticle={journalArticle}
                        classNames={[stls.articleTitle]} />

                    {/* TODO Сделать содержание */}
                    <SectionJournalArticleContents
                        journalArticle={journalArticle}
                        classNames={[stls.articleTitle]} />
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
                                {component.__typename === 'ComponentJournalFormPdfMaterials' && (
                                    <SectionJournalForm pdfMaterials={journalArticle.pdfMaterials} formPdfMaterials={component.formPdfMaterials}/>
                                )}
                            </Fragment>
                        ))
                    }
                    <SectionJournalToShare journalArticle={journalArticle}/>
                </article>
                <aside>

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