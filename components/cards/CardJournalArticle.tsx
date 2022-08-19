import stls from '@/styles/components/cards/CardJournalArticle.module.sass'
import { TypeClassNames, TypeLibJournalArticle } from '@/types/index'
import Link from 'next/link'
import cn from 'classnames'
import { routesFront } from '@/config/index'
import { getClassNames, getImageHeight } from '@/helpers/index'
import { GeneralJournalArticleCreatedAt } from '@/components/general'
import { ImgJournalArticle } from '@/components/images'

type TypeCardJournalArticleProps = TypeClassNames & {
  article: TypeLibJournalArticle | null
  tag?: boolean
}

const CardJournalArticle = ({
  classNames,
  article,
  tag
}: TypeCardJournalArticleProps) => {
  if (
    !article?.slug ||
    !article?.journal_tag?.title ||
    !article?.journal_tag?.slug ||
    !article?.picture ||
    !article?.title ||
    !article?.journal_category?.title ||
    !article?.journal_category?.slug ||
    !article?.createdAt
  )
    return <></>

  const { slug, journal_tag, picture, title, journal_category, createdAt } =
    article

  return (
    <Link href={`${routesFront.journal}/${slug}`}>
      <a
        className={
          cn(
            stls.container,
            { [stls.tag]: tag, [stls.default]: !tag },
            getClassNames({ classNames })
          ) || undefined
        }>
        <article className={stls.article}>
          <div className={stls.top}>
            <div className={stls.tagLabel}>{journal_tag.title}</div>
            <ImgJournalArticle
              src={picture.url || undefined}
              width={picture.url && 443}
              height={
                picture.url &&
                getImageHeight({
                  width: 443,
                  widthInitial: picture.width,
                  heightInitial: picture.height
                })
              }
              alt={title}
              title={title}
              darken
            />
          </div>
          <div className={stls.bottom}>
            <h3 className={stls.title}>{title}</h3>
            <div className={stls.bottomBottom}>
              <div className={stls.category}>{journal_category.title}</div>
              <GeneralJournalArticleCreatedAt
                classNames={[stls.date]}
                createdAt={createdAt}
              />
            </div>
          </div>
        </article>
      </a>
    </Link>
  )
}

export default CardJournalArticle
