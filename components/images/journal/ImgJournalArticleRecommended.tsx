import {
    getClassNames,
    getImageHeight,
} from '@/helpers/index'

import paperPlane from '@/public/assets/images/journal/recomended/paperPlane.png'
import book from '@/public/assets/images/journal/recomended/book.png'
import graph from '@/public/assets/images/journal/recomended/graph.png'
import idea from '@/public/assets/images/journal/recomended/idea.png'
import management from '@/public/assets/images/journal/recomended/management.png'
import review from '@/public/assets/images/journal/recomended/review.png'
import rocket from '@/public/assets/images/journal/recomended/rocket.png'
import tablet from '@/public/assets/images/journal/recomended/tablet.png'

import stls from '@/styles/components/images/journal/ImgJournalArticleRecommended.module.sass'


import { ImgTemplate } from '@/components/images'

type TypeImgJournalArticleRecommendedProps = {
    icon: string | null
    backgroundColor?: 'dark' | 'light' | null
}

const widthIcon = 50
const heightIcon = 50

const ImgJournalArticleRecommended = ({ icon, backgroundColor }: TypeImgJournalArticleRecommendedProps) => {
    const iconArray = {
        ['paperPlane']: paperPlane,
        ['book']: book,
        ['graph']: graph,
        ['idea']: idea,
        ['management']: management,
        ['review']: review,
        ['rocket']: rocket,
        ['tablet']: tablet,

    }
    return (
        <ImgTemplate src={iconArray[icon] || paperPlane}
            width={widthIcon}
            height={heightIcon}
            alt={icon}
            classNames={
                [
                    backgroundColor === 'dark'
                        ? stls.dark
                        : backgroundColor === 'light'
                            ? stls.light
                            : stls.light,
                    stls.container
                ]} />
    )
}

export default ImgJournalArticleRecommended