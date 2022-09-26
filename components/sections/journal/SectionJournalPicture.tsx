import cn from 'classnames'

import {
  TypeClassNames,
  TypeLibJournalArticlePicture,
  TypeLibJournalArticleTitle
} from '@/types/index'

import {
  getClassNames,
  getImageHeight
} from '@/helpers/index'

import { ContentJournalArticle } from '@/components/layout'
import { ImgTemplate } from '@/components/images'

import stls from '@/styles/components/sections/journal/SectionJournalPicture.module.sass'

type TypeSectionJournalPictureProps = TypeClassNames & {
  picture: TypeLibJournalArticlePicture | null
  title: TypeLibJournalArticleTitle | null
}

const SectionJournalPicture = ({
  classNames,
  picture,
  title
}: TypeSectionJournalPictureProps) => {
  if (!picture) return null

  return (
    <div className={cn(stls.container, getClassNames({ classNames })) || undefined}>
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
    </div>
  )
}

export default SectionJournalPicture
