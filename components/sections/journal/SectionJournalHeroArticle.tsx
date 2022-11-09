import Link from 'next/link'
import cn from 'classnames'

import { routesFront } from '@/config/index'

import { getClassNames, getImageHeight, getRenderTime } from '@/helpers/index'

import {
  TypeClassNames,
  TypeLessThan,
  TypeLessThanNonLiniar
} from '@/types/index'
import {
  TypeContextJournalArticles,
  TypeContextJournalCategory,
  TypeContextJournalFilterButtons
} from '@/types/context/journal/TypeContextJournal'

import { Wrapper } from 'components/layout'
import { ImgJournalArticle } from '@/components/images'
import { GeneralJournalArticleCreatedAt } from '@/components/general'

import stls from '@/styles/components/sections/journal/SectionJournalHeroArticle.module.sass'

type TypeSectionJournalArticleProps = {
  filteredArticles: TypeContextJournalArticles
  filterCategoriesButtons: TypeContextJournalFilterButtons
  handleFilterActiclesButtons: (category: TypeContextJournalCategory) => void
} & TypeClassNames

const lessThan: TypeLessThan = [
  {
    type: 'liniar',
    sec: 10,
    label: 'Только что'
  },
  {
    type: 'liniar',
    sec: 60,
    label: 'Меньше минуты назад'
  },
  {
    type: 'liniar',
    sec: 60 * 5,
    label: 'Меньше пяти минут назад'
  },
  {
    type: 'liniar',
    sec: 3600,
    label: 'Меньше часа назад'
  },
  {
    type: 'liniar',
    sec: 3600 * 2,
    label: 'Меньше двух часов назад'
  },
  {
    type: 'liniar',
    sec: 3600 * 3,
    label: 'Меньше трех часов назад'
  },
  {
    type: 'nonLiniar',
    days: 0,
    label: 'Сегодня'
  },
  {
    type: 'nonLiniar',
    days: -1,
    label: 'Вчера'
  },
  {
    type: 'nonLiniar',
    days: -2,
    label: 'Меньше двух дней назад'
  }
]

const pageOptions = lessThan.filter(
  item => item.type === 'nonLiniar'
) as Array<TypeLessThanNonLiniar>
const sizeImage = 748

const SectionJournalHeroArticle = ({
  classNames,
  filteredArticles,
  filterCategoriesButtons,
  handleFilterActiclesButtons
}: TypeSectionJournalArticleProps) => {
  const latestArticle = filteredArticles[0]

  if (
    !latestArticle?.slug ||
    !latestArticle?.picture ||
    !latestArticle?.title ||
    !latestArticle?.journalCategory?.title ||
    !latestArticle?.journalCategory?.slug ||
    !latestArticle?.createdAt
  )
    return null

  const getTime = () =>
    latestArticle
      ? getRenderTime({
          timestamp: filteredArticles[0]?.createdAt,
          options: pageOptions
        })
      : null

  const time = getTime()

  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.content}>
          <Link href={`${routesFront.journal}/${latestArticle.slug}`}>
            <a className={cn(stls.link, stls.leftRightContainer)}>
              <div className={stls.left}>
                <ImgJournalArticle
                  src={latestArticle.picture?.url || undefined}
                  width={latestArticle.picture?.width && sizeImage}
                  height={
                    latestArticle.picture?.height &&
                    getImageHeight({
                      width: sizeImage,
                      widthInitial: latestArticle.picture?.width,
                      heightInitial: latestArticle.picture?.height
                    })
                  }
                  alt={latestArticle.picture?.alt}
                  title={latestArticle.title}
                />
              </div>
              <div className={cn(stls.right, stls.pb)}>
                <h1 className={stls.title}>{latestArticle.title}</h1>
                <p className={stls.description}>
                  {latestArticle.shortDescription ||
                    'Медиахудожник Вадим Эпштейн о том, что такое «квантовый дизайн» и почему идеальную работу невозможно доделать до конца'}
                </p>
              </div>
            </a>
          </Link>
          <div
            className={cn(
              stls.leftRightContainer,
              stls.leftRightContainerAbsolute
            )}>
            <div className={stls.left}></div>
            <div className={stls.right}>
              <div className={stls.categoriesButtons}>
                {filterCategoriesButtons
                  .filter(
                    category =>
                      category?.title === latestArticle?.journalCategory?.title
                  )
                  .map(category => (
                    <button
                      key={`SectionJournalHeroArticle__categoryBtn--${category.slug}`}
                      className={stls.btn}
                      onClick={() => handleFilterActiclesButtons(category)}>
                      {category.title}
                    </button>
                  ))}
                <GeneralJournalArticleCreatedAt time={time} />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionJournalHeroArticle
