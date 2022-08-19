import stls from '@/styles/pages/PageJournalCategoryTagArticle.module.sass'
import type { NextPage } from 'next'
import { GetStaticPaths, GetStaticProps } from 'next'
import { TypePageJournalArticleProps } from '@/types/index'
import { Fragment, useEffect, useState } from 'react'
import { routesFront } from '@/config/index'
import { handleGetStaticProps, handleGetStaticPaths } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import { getImageHeight } from '@/helpers/index'
import { Wrapper, ContentJournalArticle } from '@/components/layout'
import { GeneralJournalArticleCreatedAt } from '@/components/general'
import {
  SectionJournalParagraph,
  SectionJournalTitle,
  SectionJournalPicture,
  SectionJournalEmphasis,
  SectionJournalQuote,
  SectionJournalList,
  SectionJournalRecommendedProgram,
  SectionJournalConclusion,
  SectionJournalTagedArticles,
  SectionJournalTagsWithPictures,
  SectionJournalBottom
} from '@/components/sections'
import { ImgJournalArticle } from '@/components/images'
import { SeoOrganizationJsonLd } from '@/components/seo'

const PageJournalCategoryTagArticle: NextPage<TypePageJournalArticleProps> = ({
  programs,
  journalCategories,
  journalTags,
  journalArticles,
  journalArticlesArticle,
  gspContextParamsJournalCategory,
  gspContextParamsJournalCategoryTag,
  gspContextParamsJournalCategoryTagArticle
}) => {
  usePageHandleContext({
    programs,
    journalCategories,
    journalTags,
    journalArticles,
    journalArticlesArticle,
    gspContextParamsJournalCategory,
    gspContextParamsJournalCategoryTag,
    gspContextParamsJournalCategoryTagArticle
  })

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
      <div className={stls.scrollProgress}>
        <div
          className={stls.scrollProgressBar}
          style={{
            transform: `translateX(-${
              100 - pageYOffset / ((scollHeight - clientHeight) / 100)
            }%)`
          }}></div>
      </div>
      <section>
        <Wrapper column>
          <ContentJournalArticle classNames={[stls.content]}>
            <h1 className={stls.title}>{journalArticlesArticle?.title}</h1>
            <div className={stls.categorydate}>
              <div className={stls.category}>
                {journalArticlesArticle?.journal_category.title}
              </div>
              <GeneralJournalArticleCreatedAt
                classNames={[stls.date]}
                createdAt={journalArticlesArticle?.createdAt}
                formatString='dd.MM.yyyy'
              />
            </div>
            <ImgJournalArticle
              src={journalArticlesArticle?.picture.url || undefined}
              width={journalArticlesArticle?.picture.url && 850}
              height={
                journalArticlesArticle?.picture.url &&
                getImageHeight({
                  width: 850,
                  widthInitial: journalArticlesArticle?.picture.width,
                  heightInitial: journalArticlesArticle?.picture.height
                })
              }
              alt={journalArticlesArticle?.title}
              title={journalArticlesArticle?.title}
              classNames={[stls.img]}
            />
          </ContentJournalArticle>
        </Wrapper>
      </section>
      {journalArticlesArticle?.articleBody?.map((component, idx) => (
        <Fragment key={`${component.__typename} ${idx}`}>
          {component.__typename === 'ComponentJournalParagraph' && (
            <SectionJournalParagraph body={component.paragraphBody} idx={idx} />
          )}
          {component.__typename === 'ComponentJournalTitle' && (
            <SectionJournalTitle body={component.titleBody} idx={idx} />
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
              body={component.body}
              authorPosition={component.athorPosition}
              authorName={component.authorName}
            />
          )}
          {component.__typename === 'ComponentJournalList' && (
            <SectionJournalList listItem={component.listItem} />
          )}
          {component.__typename ===
            'ComponentJournalJournalRecommendedProgram' && (
            <SectionJournalRecommendedProgram program={component.program} />
          )}
          {component.__typename === 'ComponentJournalConclusion' && (
            <SectionJournalConclusion item={component.item} />
          )}
        </Fragment>
      ))}
      <SectionJournalBottom />
      <SectionJournalTagedArticles suggestions />
      <SectionJournalTagsWithPictures />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routesFront.journalCategoryTagArticle })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({
    page: routesFront.journalCategoryTagArticle,
    context
  })

export default PageJournalCategoryTagArticle
