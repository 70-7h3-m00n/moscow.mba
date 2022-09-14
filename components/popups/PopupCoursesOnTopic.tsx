import Link from 'next/link'
import { useState } from 'react'
import cn from 'classnames'

import { TypeClassNames, TypeLibJournalArticleRecommendedProgramsSection } from '@/types/index'

import routesFront from '@/config/routesFront'

import { ImgJournalArticleRecommended } from '@/components/images'

import stls from '@/styles/components/popups/PopupCoursesOnTopic.module.sass'
import { getClassNames } from '@/helpers/index'


type TypeSectionPopupCoursesOnTopicProps = {
    recommendedProgramsSection: TypeLibJournalArticleRecommendedProgramsSection | null
} & TypeClassNames

const PopupCoursesOnTopic = ({
    recommendedProgramsSection,
    classNames
}: TypeSectionPopupCoursesOnTopicProps) => {
    const [isShow, setIsShow] = useState(true)

    const handleShowPopupCoursesOnTopic = () => {
        setIsShow(isShow => !isShow)
    }

    if (!isShow) return null

    return (
        <div className={cn([stls.popupCoursesOnTopic], getClassNames({ classNames })) || undefined}>
            <div className={stls.buttonClosed}>
                <button className={stls.closed} onClick={handleShowPopupCoursesOnTopic}></button>
            </div>
            <div className={stls.category}>
                <span className={stls.categoryItem}>{'Курсы по теме'}</span>
            </div>
            <div className={stls.programs}>
                {
                    recommendedProgramsSection?.programs.map((program, idx) =>
                        <div key={`${program.title}_${idx}`} className={stls.program}>
                            <div className={stls.iconProgram}>
                                <ImgJournalArticleRecommended
                                    icon={program.icon}
                                    backgroundColor='medium'
                                    widthIcon={30}
                                    heightIcon={30}
                                    usage='popup'
                                />
                            </div>
                            <div className={stls.contentProgram}>
                                <p className={stls.nameProgram}>{program.title}</p>
                            </div>
                            <div className={stls.linkProgram}>
                                <Link href={`${routesFront.root}${routesFront.programs}/${program.categorySlug}/${program.studyFormatSlug}/${program.slug}`}>
                                    <a className={stls.link}>{recommendedProgramsSection?.btnVal}</a>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className={stls.bottom}>
                {
                    recommendedProgramsSection?.shortTextAtTheBottom.map((text, idx) =>
                        <span key={`${text.textPart}_${idx}`} className={cn(
                            text.isHighlighted
                                ? stls.isHighlightedTextBottom
                                : '',
                            stls.textBottom)}>{`${text.textPart} `}</span>
                    )
                }
            </div>
        </div>
    )
}

export default PopupCoursesOnTopic