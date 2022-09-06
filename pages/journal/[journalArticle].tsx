
import { GetStaticPaths, GetStaticProps } from 'next'

import {
    routesBack,
    routesFront
} from '@/config/index'

import {
    handleGetStaticProps,
    handleGetStaticPaths
} from '@/lib/index'


const PageJournalArticle = ({ journalArticle }) => {
    console.log(journalArticle.title)
    return (
        <div>
            {/* {
                journalArticle.title
            } */}
        </div>
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
    // const res = await fetch(`${routesBack.root}${routesBack.getStaticPropsPageJournalArticles}/${params.journalArticle}`)
    // const data = await res.json()
    // return { props: { data } }
}

export default PageJournalArticle