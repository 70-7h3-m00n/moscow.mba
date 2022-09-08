import Link from 'next/link'
import cn from 'classnames'

import {
  TypeClassNames,
  TypeLibJournalArticleRecommendedProgram
} from '@/types/index'

import {
  getClassNames,
  getImageHeight,
} from '@/helpers/index'

import {
  Wrapper,
  ContentJournalArticle
} from '@/components/layout'
import { 
  ImgJournalArticle,
  ImgJournalArticleRecommendedProgram
 } from '@/components/images'

import routesFront from '@/config/routesFront'
import paperPlaneImg from '@/public/assets/images/journal/paperPlane.png'

import stls from '@/styles/components/sections/journal/SectionJournalRecommendedProgram.module.sass'

type TypeSectionJournalRecommendedProgramProps = TypeClassNames & {
  recommendedProgram: TypeLibJournalArticleRecommendedProgram | null
}

const widthpaperPlaneImg = 90
const heightpaperPlaneImg = 66

const SectionJournalRecommendedProgram = ({
  classNames,
  recommendedProgram
}: TypeSectionJournalRecommendedProgramProps) => {
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper column>
        <ContentJournalArticle classNames={[stls.SectionJournalRecommendedProgram]}>
          <div className={stls.columnImage}>
          <ImgJournalArticleRecommendedProgram/>
            <ImgJournalArticle
              src={paperPlaneImg}
              width={widthpaperPlaneImg}
              height={heightpaperPlaneImg &&
                getImageHeight({
                  width: widthpaperPlaneImg,
                  widthInitial: widthpaperPlaneImg,
                  heightInitial: heightpaperPlaneImg
                })
              }
              alt={'paperPlane'} />
          </div>
          <div className={stls.columnTitle}>
            <p className={stls.title}>{recommendedProgram?.title}</p>
          </div>
          <div className={stls.columnContent}>
            <p className={stls.content}>{recommendedProgram?.program?.title}</p>
          </div>
          <div className={stls.columnLink}>
            <Link href={`${routesFront.root}${routesFront.programs}/${recommendedProgram.program.categorySlug}/${recommendedProgram.program.studyFormatSlug}/${recommendedProgram.program.slug}`}>
              <a className={stls.link}>{recommendedProgram?.btnValue}</a>
            </Link></div>
        </ContentJournalArticle>
      </Wrapper>
    </section>
  )
}

export default SectionJournalRecommendedProgram
