import {
  useContext,
  useEffect,
  useState
} from 'react'

import cn from 'classnames'

import { TypeClassNames } from '@/types/index'

import { getClassNames } from '@/helpers/index'

import { ContextStaticPropsJournal } from '@/context/index'

import stls from '@/styles/components/pages/PageJournalArticles.module.sass'

import {
  SectionJournalCategories,
  SectionJournalArticles,
  SectionJournalHeroArticle
} from '@/components/sections'

const PageJournalArticles = () => {

  const { categories } = useContext(ContextStaticPropsJournal)

  let [filterAllCategoriesButton, setFilterAllCategoriesButton] = useState(true)
  let [filterCategoriesButton, setFilterCategoriesButton] = useState(categories.map(item => ({ ...item, state: true })))

  const handleFilterAllCategoriesButton = ({ title }) => {
    setFilterCategoriesButton(
      filterCategoriesButton.map(item =>
        ({ ...item, state: true })
      )
    )
    setFilterAllCategoriesButton(filterAllCategoriesButton = true)
  }

  const handleFilterButtons = ({ title }) => {
    if (!filterAllCategoriesButton) {
      setFilterCategoriesButton(
        filterCategoriesButton.map(
          item => (item.title === title)
            ? { ...item, state: !item.state }
            : { ...item, state: item.state }
        )
      )
    } else if (filterAllCategoriesButton) {
      setFilterCategoriesButton(
        filterCategoriesButton
          .map(item =>
            ({ ...item, state: false })
          )
          .map(item => (item.title === title)
            ? { ...item, state: !item.state }
            : { ...item, state: item.state }
          )
      )
      setFilterAllCategoriesButton(filterAllCategoriesButton = false)
    }
  }

  return (
    <>
      <SectionJournalCategories handleFilterButtons={handleFilterButtons} handleFilterAllCategoriesButton={handleFilterAllCategoriesButton} />
      <SectionJournalHeroArticle />
      <SectionJournalArticles filterCategoriesButton={filterCategoriesButton} />
    </>
  )
}

export default PageJournalArticles
