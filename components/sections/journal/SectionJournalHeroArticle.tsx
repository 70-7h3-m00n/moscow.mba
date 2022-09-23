import Link from 'next/link'
import cn from 'classnames'

import { routesFront } from '@/config/index'

import {
    getClassNames,
    getImageHeight,
    getRenderTime
} from '@/helpers/index'

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
    handleFilterActiclesButtons: (category: TypeContextJournalCategory) => void
    filterCategoriesButtons: TypeContextJournalFilterButtons
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

const pageOptions = lessThan.filter(item => item.type === 'nonLiniar') as Array<TypeLessThanNonLiniar>
const sizeImage = 748

const SectionJournalHeroArticle = ({
    classNames,
    filteredArticles,
    filterCategoriesButtons,
    handleFilterActiclesButtons
}: TypeSectionJournalArticleProps) => {
    const articleNew = filteredArticles[0]

    if (
        !articleNew?.slug
        || !articleNew?.picture
        || !articleNew?.title
        || !articleNew?.journalCategory?.title
        || !articleNew?.journalCategory?.slug
        || !articleNew?.createdAt
    ) return null

    const getTime = () => (
        articleNew
            ? getRenderTime({ timestamp: filteredArticles[0]?.createdAt, options: pageOptions })
            : null
    )

    const time = getTime()
    
    return (
        <section className={cn(stls.container, getClassNames({ classNames })) || undefined}>
            <Wrapper classNames={[stls.wrapper]}>
                <div className={stls.column}>
                    <ImgJournalArticle
                        src={articleNew.picture.url || undefined}
                        width={articleNew.picture.width && sizeImage}
                        height={articleNew.picture.height &&
                            getImageHeight({
                                width: sizeImage,
                                widthInitial: articleNew.picture.width,
                                heightInitial: articleNew.picture.height
                            })
                        }
                        alt={articleNew.picture.alt}
                        title={articleNew.title} />
                </div>
                <div className={stls.column}>
                    <Link href={`${routesFront.journal}/${articleNew.slug}`}>
                        <a className={cn(stls.container, getClassNames({ classNames })) || undefined}>
                            <h3 className={stls.title}>{articleNew.title}</h3>
                        </a>
                    </Link>
                    <p className={stls.decription}>{articleNew.shortDescription}</p>
                    <div className={stls.items}>
                        {
                            filterCategoriesButtons
                                .filter(category => category.title === articleNew.journalCategory.title)
                                .map(category =>
                                    <button
                                        key={category.slug}
                                        className={stls.category}
                                        onClick={() => handleFilterActiclesButtons(category)}
                                    >{category.title}</button>)
                        }
                        <GeneralJournalArticleCreatedAt time={time} />
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default SectionJournalHeroArticle