import { useContext, useEffect, useState } from 'react'

import { ContextStaticPropsJournal } from '@/context/index'

import {
  SectionJournalCategories,
  SectionJournalArticles,
  SectionJournalHeroArticle
} from '@/components/sections'

const defaultSizeArticlesShowSectionArticles = 2

const PageJournalArticles = () => {
  const { categories, articles } = useContext(ContextStaticPropsJournal)

  // Saving those categories that have articles.
  // Сохранение тех категорий, которые имеют статьи.
  const existenceCategory = categories.filter(category =>
    articles.some(article => article.journalCategory.title === category.title)
  )

  const [filterAllCategoriesButtons, setfilterAllCategoriesButtons] =
    useState(true)
  const [filterCategoriesButtons, setfilterCategoriesButtons] = useState(
    existenceCategory.map(item => ({ ...item, state: true }))
  )

  // Output of articles by filtered categories
  // Вывод статей по фильтрованным категориям
  const appliedCategories = filterCategoriesButtons.filter(
    category => category.state === true
  )

  const filteredArticles = articles.filter(article =>
    appliedCategories.some(
      appliedCategory => appliedCategory.title === article.journalCategory.title
    )
  )
  const sizeArticles = filteredArticles.length

  // Output of all existing articles by clicking on the "all articles" button
  // Вывод всех существующих статей, при клике на кнопку "все статьи"
  const handlefilterAllCategoriesButtons = () => {
    setfilterCategoriesButtons(filterCategoriesButtons =>
      filterCategoriesButtons.map(item => ({ ...item, state: true }))
    )
    setfilterAllCategoriesButtons(true)
  }

  // Output of those articles that correspond to the selected (pressed) categories
  // Вывод тех статей, которые соотстветствуют выбранной (нажатой) категогии
  const handleFilterButtons = ({ title }) => {
    if (!filterAllCategoriesButtons) {
      setfilterCategoriesButtons(filterCategoriesButtons =>
        filterCategoriesButtons.map(item =>
          item.title === title
            ? { ...item, state: !item.state }
            : { ...item, state: item.state }
        )
      )
    } else if (filterAllCategoriesButtons) {
      setfilterCategoriesButtons(filterCategoriesButtons =>
        filterCategoriesButtons
          .map(item => ({ ...item, state: false }))
          .map(item =>
            item.title === title
              ? { ...item, state: !item.state }
              : { ...item, state: item.state }
          )
      )
      setfilterAllCategoriesButtons(false)
    }
  }
  // Вывод тех статей, которые соотстветствуют выбранной (нажатой) категогии в компоненте "Статья"
  const handleFilterActiclesButtons = ({ title }) => {
    setfilterCategoriesButtons(filterCategoriesButtons =>
      filterCategoriesButtons.map(item =>
        item.title === title
          ? { ...item, state: true }
          : item.title !== title
          ? { ...item, state: false }
          : { ...item }
      )
    )
    setfilterAllCategoriesButtons(false)
  }

  // Output of all articles if no category is selected (the "All articles" button is pressed)
  // Вывод всех статей, если не выбрана ни одна категория (нажата кнопка "Все статьи")
  useEffect(() => {
    if (filterCategoriesButtons.every(category => category.state === false)) {
      handlefilterAllCategoriesButtons()
    }
  }, [filterCategoriesButtons])

  if (!categories || !articles) return null

  return (
    <>
      <SectionJournalCategories
        filterCategoriesButtons={filterCategoriesButtons}
        filterAllCategoriesButtons={filterAllCategoriesButtons}
        handleFilterButtons={handleFilterButtons}
        handlefilterAllCategoriesButtons={handlefilterAllCategoriesButtons}
      />
      <SectionJournalHeroArticle
        filteredArticles={filteredArticles}
        filterCategoriesButtons={filterCategoriesButtons}
        handleFilterActiclesButtons={handleFilterActiclesButtons}
      />
      {sizeArticles > defaultSizeArticlesShowSectionArticles ? (
        <SectionJournalArticles
          filteredArticles={filteredArticles}
          filterCategoriesButtons={filterCategoriesButtons}
          handleFilterActiclesButtons={handleFilterActiclesButtons}
          sizeArticles={sizeArticles}
        />
      ) : (
        ''
      )}
    </>
  )
}

export default PageJournalArticles
