import {
  useContext,
  useState
} from 'react'

import { ContextStaticPropsJournal } from '@/context/index'

import {
  SectionJournalCategories,
  SectionJournalArticles,
  SectionJournalHeroArticle
} from '@/components/sections'

const PageJournalArticles = () => {
  const { categories, articles } = useContext(ContextStaticPropsJournal)
  const existenceCategory = categories
        .filter(category => articles
            .some(article => article.journalCategory.title === category.title))

  let [filterAllCategoriesButtons, setfilterAllCategoriesButtons] = useState(true)
  let [filterCategoriesButtons, setfilterCategoriesButtons] = useState(existenceCategory.map(item => ({ ...item, state: true })))
  
  const handlefilterAllCategoriesButtons = () => {
    setfilterCategoriesButtons(
      filterCategoriesButtons.map(item =>
        ({ ...item, state: true })
      )
    )
    setfilterAllCategoriesButtons(filterAllCategoriesButtons = true)
  }

  const handleFilterButtons = ({ title }) => {
    if (!filterAllCategoriesButtons) {
      setfilterCategoriesButtons(
        filterCategoriesButtons.map(
          item => (item.title === title)
            ? { ...item, state: !item.state }
            : { ...item, state: item.state }
        )
      )
    } else if (filterAllCategoriesButtons) {
      setfilterCategoriesButtons(
        filterCategoriesButtons
          .map(item =>
            ({ ...item, state: false })
          )
          .map(item => (item.title === title)
            ? { ...item, state: !item.state }
            : { ...item, state: item.state }
          )
      )
      setfilterAllCategoriesButtons(filterAllCategoriesButtons = false)
    }
  }

  return (
    <>
      <SectionJournalCategories
        filterCategoriesButtons={filterCategoriesButtons}
        filterAllCategoriesButtons={filterAllCategoriesButtons}
        handleFilterButtons={handleFilterButtons}
        handlefilterAllCategoriesButtons={handlefilterAllCategoriesButtons}

      />
      <SectionJournalHeroArticle />
      <SectionJournalArticles filterCategoriesButtons={filterCategoriesButtons} />
    </>
  )
}

export default PageJournalArticles
