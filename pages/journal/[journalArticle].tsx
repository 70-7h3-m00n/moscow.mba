
import {
    GetStaticPaths,
    GetStaticProps
} from 'next'
import type { NextPage } from 'next'
import {
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
    SectionJournalArticleHeader
} from '@/components/sections/index'

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
                </article>
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