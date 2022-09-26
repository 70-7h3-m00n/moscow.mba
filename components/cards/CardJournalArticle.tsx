import Link from 'next/link'
import cn from 'classnames'

import {
  TypeClassNames,
  TypeLibJournalArticle,
  TypeLessThan,
  TypeLessThanLiniar
} from '@/types/index'

import {
  TypeContextJournalCategory,
  TypeContextJournalFilterButtons
} from '@/types/context/journal/TypeContextJournal'

import bp from '@/config/breakpoints'
import { routesFront } from '@/config/index'

import {
  getClassNames,
  getImageHeight,
  getRenderTime
} from '@/helpers/index'

import { GeneralJournalArticleCreatedAt } from '@/components/general'
import { ImgJournalArticle } from '@/components/images'

import stls from '@/styles/components/cards/CardJournalArticle.module.sass'

type TypeCardJournalArticleProps = {
  article: TypeLibJournalArticle | null
  tag?: boolean
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
  },
]

const cardOptions = lessThan.filter(item => item.type === 'nonLiniar') as Array<TypeLessThanLiniar>

const CardJournalArticle = ({
  classNames,
  article,
  filterCategoriesButtons,
  handleFilterActiclesButtons
}: TypeCardJournalArticleProps) => {

  const { slug, picture, title, journalCategory, createdAt } = article

  if (
    !slug
    && !picture
    && !title
    && !journalCategory.title
    && !journalCategory.slug
    && !createdAt
  ) return null

  const getTime = () => (
    article
      ? getRenderTime({ timestamp: article?.createdAt, options: cardOptions })
      : null
  )

  const time = getTime()

  return (
    <div className={stls.article}>
      <div className={stls.top}>
        <ImgJournalArticle
          src={picture.url || undefined}
          width={picture.width && bp.phone}
          height={picture.height &&
            getImageHeight({
              width: bp.phone,
              widthInitial: picture.width,
              heightInitial: picture.height
            })
          }
          alt={picture.alt}
          title={title} />
      </div>
      <div className={stls.bottom}>
        {
          filterCategoriesButtons
            .filter(category => category.title === journalCategory.title)
            .map((category, idx) =>
              <button
                className={stls.category}
                onClick={() => handleFilterActiclesButtons(category)}
                key={`${category.title}_${idx}`}>
                {category.title}
              </button>
            )
        }
        <Link href={`${routesFront.journal}/${slug}`}>
          <a className={cn(stls.container, getClassNames({ classNames })) || undefined}>
            <h3 className={stls.title}>{title}</h3>
          </a>
        </Link>
        <GeneralJournalArticleCreatedAt time={time} />
      </div>
    </div>
  )
}

export default CardJournalArticle
