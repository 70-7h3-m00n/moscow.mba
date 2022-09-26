import Link from 'next/link'
import cn from 'classnames'

import {
  TypeClassNames,
  TypeLibJournalArticleRecommendedProgram
} from '@/types/index'

import { getClassNames } from '@/helpers/index'

import { ContentJournalArticle } from '@/components/layout'
import { ImgJournalArticleRecommended } from '@/components/images'

import routesFront from '@/config/routesFront'

import stls from '@/styles/components/sections/journal/SectionJournalRecommendedProgram.module.sass'

type TypeSectionJournalRecommendedProgramProps = {
  recommendedProgram: TypeLibJournalArticleRecommendedProgram | null
} & TypeClassNames

const SectionJournalRecommendedProgram = ({
  classNames,
  recommendedProgram
}: TypeSectionJournalRecommendedProgramProps) => {
  if (!recommendedProgram) return null

  return (
    <div className={cn(stls.container, getClassNames({ classNames })) || undefined}>
      <ContentJournalArticle classNames={[stls.SectionJournalRecommendedProgram]}>
        <div className={stls.columnImage}>
          <ImgJournalArticleRecommended
            icon={recommendedProgram?.program?.icon}
            backgroundColor='dark'
            usage='program'
            widthIcon={50}
            heightIcon={50}
          />
        </div>
        <div className={stls.columnTitle}>
          <p className={stls.title}>{recommendedProgram?.title}</p>
        </div>
        <div className={stls.columnContent}>
          <p className={stls.content}>{recommendedProgram?.program?.title}</p>
        </div>
        <div className={stls.columnLink}>
          <Link href={`${routesFront.root}${routesFront.programs}/${recommendedProgram?.program.categorySlug}/${recommendedProgram?.program.studyFormatSlug}/${recommendedProgram?.program.slug}`}>
            <a className={stls.link}>{recommendedProgram?.btnValue}</a>
          </Link></div>
      </ContentJournalArticle>
    </div>
  )
}

export default SectionJournalRecommendedProgram
