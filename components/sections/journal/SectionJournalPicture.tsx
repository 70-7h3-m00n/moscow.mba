import stls from '@/styles/components/sections/journal/SectionJournalPicture.module.sass'
import {
  TypeClassNames,
  TypeLibJournalArticlePicture,
  TypeLibJournalArticleTitle
} from '@/types/index'
import cn from 'classnames'
import { getClassNames, getImageHeight } from '@/helpers/index'
import { Wrapper, ContentJournalArticle } from '@/components/layout'
import { ImgTemplate } from '@/components/images'

type TypeSectionJournalPictureProps = TypeClassNames & {
  picture: TypeLibJournalArticlePicture | null
  title: TypeLibJournalArticleTitle | null
  idx: number
}

const SectionJournalPicture = ({
  classNames,
  picture,
  title,
  idx
}: TypeSectionJournalPictureProps) => {
  if (!picture) return null
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper column>
        <ContentJournalArticle>
          <figure>
            <ImgTemplate
              src={picture.url}
              width={850}
              height={getImageHeight({
                width: 850,
                widthInitial: picture.width,
                heightInitial: picture.height
              })}
              alt={title}
              title={title}
            />
            <figcaption className={stls.figcaption}>{title}</figcaption>
          </figure>
        </ContentJournalArticle>
      </Wrapper>
    </section>
  )
}

export default SectionJournalPicture
