import Link from 'next/link'
import { Fragment } from 'react'
import cn from 'classnames'

import {
    TypeClassNames,
    TypeLibJournalArticleRecommendedProgramsSection
} from '@/types/index'

import { getClassNames } from '@/helpers/index'

import routesFront from '@/config/routesFront'

import { ContentJournalArticle } from '@/components/layout'

import stls from '@/styles/components/sections/journal/SectionJournalRecommendedPrograms.module.sass'
import { ImgJournalArticleRecommended } from '@/components/images'

type TypeLibJournalArticleRecommendedProgramsSectionProps = {
    recommendedProgramsSection: TypeLibJournalArticleRecommendedProgramsSection | null
} & TypeClassNames

const SectionJournalRecommendedPrograms = ({
    recommendedProgramsSection,
    classNames
}: TypeLibJournalArticleRecommendedProgramsSectionProps) => (
    <div className={cn(stls.container, getClassNames({ classNames })) || undefined}>
        <ContentJournalArticle classNames={[stls.SectionJournalRecommendedPrograms]}>
            <div className={stls.title}>
                {
                    recommendedProgramsSection?.title.map((title, idx) =>
                        <span key={`${title.titlePart}_${idx}`} className={cn(
                            title.isHighlighted
                                ? stls.isHighlighted
                                : '',
                            stls.title)}>{`${title.titlePart} `}</span>
                    )
                }
            </div>
            <div className={stls.programs}>
                {
                    recommendedProgramsSection?.programs.map((program, idx) =>
                        <div key={`${program.title}_${idx}`} className={stls.program}>
                            <div className={stls.iconProgram}>
                                <ImgJournalArticleRecommended
                                    icon={program.icon}
                                    backgroundColor='light'
                                    usage='program'
                                    widthIcon={50}
                                    heightIcon={50}
                                />
                            </div>
                            <div className={stls.content}>
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
        </ContentJournalArticle>
    </div>
)

export default SectionJournalRecommendedPrograms