import cn from 'classnames'

import {
  TypeClassNames,
  TypeLibJournalArticlePicture,
  TypeLibJournalArticleTitle
} from '@/types/index'

import { getClassNames, getImageHeight } from '@/helpers/index'

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
    <div
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <figure>
        <ImgTemplate
          src={picture.url}
          width={picture.width > 850 ? 850 : picture.width}
          height={getImageHeight({
            width: picture.width > 850 ? 850 : picture.width,
            widthInitial: picture.width,
            heightInitial: picture.height
          })}
          alt={title}
          title={title}
        />
        <figcaption className={stls.figcaption}>{title}</figcaption>
      </figure>
    </div>
  )
}

export default SectionJournalPicture
