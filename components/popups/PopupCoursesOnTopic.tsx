import Link from 'next/link'

import { TypeLibJournalArticleRecommendedProgramsSection } from '@/types/index'

import routesFront from '@/config/routesFront'

import { ImgJournalArticleRecommended } from '@/components/images'

import stls from '@/styles/components/popups/PopupCoursesOnTopic.module.sass'


type TypeSectionPopupCoursesOnTopicProps = {
    recommendedProgramsSection: TypeLibJournalArticleRecommendedProgramsSection | null
}

const PopupCoursesOnTopic = ({ recommendedProgramsSection }: TypeSectionPopupCoursesOnTopicProps) => {
    return (
        <div className={stls.popupCoursesOnTopic}>
            <div className={stls.buttonClosed}>
                <button className={stls.closed}></button>
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
                                />
                            </div>
                            <div className={stls.contentProgram}>
                                <div className={stls.content}>
                                    <p className={stls.nameProgram}>{program.title}</p>
                                </div>
                                <div className={stls.linkProgram}>
                                    <Link href={`${routesFront.root}${routesFront.programs}/${program.categorySlug}/${program.studyFormatSlug}/${program.slug}`}>
                                        <a className={stls.link}>{recommendedProgramsSection?.btnVal}</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default PopupCoursesOnTopic