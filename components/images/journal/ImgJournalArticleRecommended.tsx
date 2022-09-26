import { TypeLibJournalArticleRecommendedImg } from '@/types/index'

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

type TypeImgJournalArticleRecommendedProps = TypeLibJournalArticleRecommendedImg

const ImgJournalArticleRecommended = ({
    icon,
    backgroundColor,
    widthIcon,
    heightIcon,
    usage
}: TypeImgJournalArticleRecommendedProps) => {
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
                            : backgroundColor === 'medium'
                                ? stls.medium
                                : stls.light,
                    usage === 'popup' ?
                        stls.popupContainer
                        : usage === 'program'
                            ? stls.programContainer
                            : stls.container
                ]} />
    )
}

export default ImgJournalArticleRecommended