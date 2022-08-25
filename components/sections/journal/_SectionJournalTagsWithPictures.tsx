import stls from '@/styles/components/sections/journal/SectionJournalTagsWithPictures.module.sass'
import { TypeClassNames } from '@/types/index'
import Link from 'next/link'
import { useContext } from 'react'
import cn from 'classnames'
import { routesFront } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { ContextJournalContext } from '@/context/index'
import { GeneralJournalSectionTitle } from '@/components/general'
import { Wrapper } from '@/components/layout'
import {
  IconGeometricRectangle,
  IconGeometricRightAngle,
  IconGeometricThreeHorizontalLines,
  IconGeometricThreeVerticalLines,
  IconGeometricTwoRectangles,
  IconGeometricTwoRotatedRectangles
} from '@/components/icons'

type TypeSectionJournalTagsWithPicturesProps = TypeClassNames

const SectionJournalTagsWithPictures = ({
  classNames
}: TypeSectionJournalTagsWithPicturesProps) => {
  const { journalTags, gspContextParamsJournalCategory } = useContext(
    ContextJournalContext
  )

  // TODO: find a better way to do this

  const geometrics = [
    {
      component: <IconGeometricRightAngle classNames={[stls.icon]} />
    },
    {
      component: <IconGeometricTwoRectangles classNames={[stls.icon]} />
    },
    {
      component: <IconGeometricThreeHorizontalLines classNames={[stls.icon]} />
    },
    {
      component: <IconGeometricTwoRotatedRectangles classNames={[stls.icon]} />
    },
    {
      component: <IconGeometricThreeVerticalLines classNames={[stls.icon]} />
    },
    {
      component: <IconGeometricRectangle classNames={[stls.icon]} />
    }
  ]

  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper column>
        <ul className={stls.tags}>
          {journalTags
            ?.filter(tag => tag.title && tag.slug)
            .map((tag, idx) => (
              <li key={tag.slug} className={stls.tagItem}>
                <Link
                  href={`${routesFront.journal}/${gspContextParamsJournalCategory}/${tag.slug}`}>
                  <a className={stls.tag}>
                    {geometrics[idx]?.component ||
                      geometrics[Math.floor(Math.random() * geometrics.length)]
                        .component}
                    <div className={stls.label}>#{tag.title}</div>
                  </a>
                </Link>
              </li>
            ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default SectionJournalTagsWithPictures
