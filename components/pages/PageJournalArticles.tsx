import stls from '@/styles/components/pages/PageJournalArticles.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { ContextJournalContext } from '@/context/index'
// import {
//   SectionJournalTags,
//   SectionJournalCategories,
//   SectionJournalHeroArticle,
//   SectionJournalAllArticles,
//   SectionJournalNews,
//   SectionJournalTagsWithPictures,
//   SectionJournalTagedArticles,
//   SectionJournalMoreTags
// } from '@/components/sections'
import { SectionJournalCategories } from '@/components/sections'
// import SectionJournalTags from '@/components/sections/journal/SectionJournalTags'
// import SectionJournalCategories from '@/components/sections/journal/SectionJournalCategories'
// import SectionJournalHeroArticle from '@/components/sections/journal/SectionJournalHeroArticle'
// import SectionJournalAllArticles from '@/components/sections/journal/SectionJournalAllArticles'
// import SectionJournalNews from '@/components/sections/journal/SectionJournalNews'
// import SectionJournalTagsWithPictures from '@/components/sections/journal/SectionJournalTagsWithPictures'
// import SectionJournalTagedArticles from '@/components/sections/journal/SectionJournalTagedArticles'
// import SectionJournalMoreTags from '@/components/sections/journal/SectionJournalMoreTags'

// type TypePageJournalArticlesProps = {}

const PageJournalArticles = () => {
  return (
    <>
      <SectionJournalCategories classNames={[stls.sectionJournalCategories]}/>
      {/* <SectionJournalTags />
      <SectionJournalCategories />
      <SectionJournalHeroArticle />
      <SectionJournalAllArticles />
      <SectionJournalNews />
      <SectionJournalTagsWithPictures />
      <SectionJournalTagedArticles />
      {journalTags?.map(tag => (
        <SectionJournalTagedArticles key={tag?.slug} tag={tag} />
      ))}
      <SectionJournalMoreTags /> */}
    </>
  )
}

export default PageJournalArticles
